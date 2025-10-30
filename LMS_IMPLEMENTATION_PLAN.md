# GitPolish Protocol™ LMS Implementation Plan

## Current Status: Foundation Complete ✅

**Completed:**
- ✅ Upgraded to web-db-user template (backend + database + authentication)
- ✅ Comprehensive database schema with 8 tables
- ✅ All course content and materials (Module 1 complete, Modules 2-6 templates)
- ✅ Static course website with 5 pages

**Database Schema Created:**
1. `users` - User accounts with role-based access (student/admin)
2. `enrollments` - Course enrollment tracking
3. `moduleProgress` - Module completion status
4. `quizAttempts` - Quiz scores and attempts
5. `labCompletions` - Lab exercise completion
6. `examAttempts` - Certification exam attempts
7. `certificates` - Issued certificates
8. `studentNotes` - Student notes and bookmarks

---

## Phase 1: Database Helpers & tRPC Procedures (4-6 hours)

### 1.1 Database Helper Functions (`server/db.ts`)

Create query helpers for all LMS operations:

```typescript
// Enrollment functions
export async function enrollUser(userId: number)
export async function getUserEnrollment(userId: number)
export async function updateEnrollmentStatus(userId: number, status: string)

// Module progress functions
export async function getModuleProgress(userId: number, moduleNumber: number)
export async function updateModuleProgress(userId: number, moduleNumber: number, status: string)
export async function getAllModuleProgress(userId: number)

// Quiz functions
export async function recordQuizAttempt(attempt: InsertQuizAttempt)
export async function getQuizAttempts(userId: number, moduleNumber?: number)
export async function getBestQuizScore(userId: number, moduleNumber: number)

// Lab functions
export async function markLabComplete(userId: number, moduleNumber: number, labNumber: number, notes?: string)
export async function getLabCompletions(userId: number, moduleNumber?: number)
export async function isLabCompleted(userId: number, moduleNumber: number, labNumber: number)

// Exam functions
export async function recordExamAttempt(attempt: InsertExamAttempt)
export async function getExamAttempts(userId: number, examType?: string)
export async function getPassingExamAttempt(userId: number)

// Certificate functions
export async function issueCertificate(userId: number, finalExamScore: number)
export async function getCertificate(userId: number)
export async function getAllCertificates() // Admin only

// Student notes functions
export async function createNote(userId: number, moduleNumber: number, content: string)
export async function updateNote(noteId: number, content: string)
export async function deleteNote(noteId: number)
export async function getNotes(userId: number, moduleNumber?: number)
export async function toggleBookmark(noteId: number)

// Analytics functions (for admin)
export async function getCourseStats()
export async function getUserStats(userId: number)
export async function getModuleStats(moduleNumber: number)
```

### 1.2 tRPC Procedures (`server/routers.ts`)

Add routers for all LMS features:

```typescript
export const appRouter = router({
  system: systemRouter,
  auth: authRouter,
  
  // Student enrollment
  enrollment: router({
    enroll: protectedProcedure.mutation(({ ctx }) => enrollUser(ctx.user.id)),
    getStatus: protectedProcedure.query(({ ctx }) => getUserEnrollment(ctx.user.id)),
  }),
  
  // Module progress
  progress: router({
    getAll: protectedProcedure.query(({ ctx }) => getAllModuleProgress(ctx.user.id)),
    getModule: protectedProcedure
      .input(z.object({ moduleNumber: z.number().min(1).max(6) }))
      .query(({ ctx, input }) => getModuleProgress(ctx.user.id, input.moduleNumber)),
    updateModule: protectedProcedure
      .input(z.object({ moduleNumber: z.number(), status: z.enum(['not_started', 'in_progress', 'completed']) }))
      .mutation(({ ctx, input }) => updateModuleProgress(ctx.user.id, input.moduleNumber, input.status)),
  }),
  
  // Quizzes
  quiz: router({
    submit: protectedProcedure
      .input(z.object({ moduleNumber: z.number(), score: z.number(), totalQuestions: z.number(), correctAnswers: z.number(), timeSpentMinutes: z.number().optional() }))
      .mutation(({ ctx, input }) => recordQuizAttempt({ userId: ctx.user.id, ...input })),
    getAttempts: protectedProcedure
      .input(z.object({ moduleNumber: z.number().optional() }))
      .query(({ ctx, input }) => getQuizAttempts(ctx.user.id, input.moduleNumber)),
    getBestScore: protectedProcedure
      .input(z.object({ moduleNumber: z.number() }))
      .query(({ ctx, input }) => getBestQuizScore(ctx.user.id, input.moduleNumber)),
  }),
  
  // Labs
  lab: router({
    markComplete: protectedProcedure
      .input(z.object({ moduleNumber: z.number(), labNumber: z.number(), notes: z.string().optional() }))
      .mutation(({ ctx, input }) => markLabComplete(ctx.user.id, input.moduleNumber, input.labNumber, input.notes)),
    getCompletions: protectedProcedure
      .input(z.object({ moduleNumber: z.number().optional() }))
      .query(({ ctx, input }) => getLabCompletions(ctx.user.id, input.moduleNumber)),
  }),
  
  // Exams
  exam: router({
    submit: protectedProcedure
      .input(z.object({ examType: z.enum(['practice_half', 'practice_full', 'final']), score: z.number(), passed: z.boolean(), timeSpentMinutes: z.number().optional(), answers: z.string().optional() }))
      .mutation(({ ctx, input }) => recordExamAttempt({ userId: ctx.user.id, ...input })),
    getAttempts: protectedProcedure
      .input(z.object({ examType: z.enum(['practice_half', 'practice_full', 'final']).optional() }))
      .query(({ ctx, input }) => getExamAttempts(ctx.user.id, input.examType)),
  }),
  
  // Certificates
  certificate: router({
    issue: protectedProcedure
      .input(z.object({ finalExamScore: z.number() }))
      .mutation(({ ctx, input }) => issueCertificate(ctx.user.id, input.finalExamScore)),
    get: protectedProcedure.query(({ ctx }) => getCertificate(ctx.user.id)),
  }),
  
  // Student notes
  notes: router({
    create: protectedProcedure
      .input(z.object({ moduleNumber: z.number(), content: z.string() }))
      .mutation(({ ctx, input }) => createNote(ctx.user.id, input.moduleNumber, input.content)),
    update: protectedProcedure
      .input(z.object({ noteId: z.number(), content: z.string() }))
      .mutation(({ input }) => updateNote(input.noteId, input.content)),
    delete: protectedProcedure
      .input(z.object({ noteId: z.number() }))
      .mutation(({ input }) => deleteNote(input.noteId)),
    getAll: protectedProcedure
      .input(z.object({ moduleNumber: z.number().optional() }))
      .query(({ ctx, input }) => getNotes(ctx.user.id, input.moduleNumber)),
    toggleBookmark: protectedProcedure
      .input(z.object({ noteId: z.number() }))
      .mutation(({ input }) => toggleBookmark(input.noteId)),
  }),
  
  // Admin functions
  admin: router({
    getCourseStats: adminProcedure.query(() => getCourseStats()),
    getAllCertificates: adminProcedure.query(() => getAllCertificates()),
    getUserStats: adminProcedure
      .input(z.object({ userId: z.number() }))
      .query(({ input }) => getUserStats(input.userId)),
  }),
});
```

---

## Phase 2: Student Dashboard (3-4 hours)

### 2.1 Dashboard Page (`client/src/pages/Dashboard.tsx`)

Create comprehensive student dashboard with:

**Components:**
- Welcome header with user name
- Overall progress bar (modules completed / 6)
- Module cards showing status (not started, in progress, completed)
- Recent quiz scores
- Lab completion status
- Certificate status (if earned)
- Quick links to continue learning

**Features:**
- Real-time progress tracking
- Visual progress indicators
- Module navigation
- Certificate download (if earned)

### 2.2 Module Detail Pages

Update existing module pages to include:
- Progress tracking integration
- Quiz submission functionality
- Lab completion checkboxes
- Notes and bookmarks
- "Mark as Complete" button

### 2.3 Quiz Pages (`client/src/pages/Quiz.tsx`)

Create interactive quiz pages:
- Multiple choice questions
- Timer functionality
- Score calculation
- Results display with correct answers
- Retry functionality
- Best score tracking

### 2.4 Certificate Page (`client/src/pages/MyCertificate.tsx`)

Display earned certificate:
- Certificate details (number, date, score)
- Download as PDF
- Share functionality
- Print option

---

## Phase 3: Admin Panel (2-3 hours)

### 3.1 Admin Dashboard (`client/src/pages/admin/AdminDashboard.tsx`)

Create admin overview with:
- Total enrolled students
- Completion rates by module
- Average quiz scores
- Certificates issued
- Recent activity

### 3.2 Student Management (`client/src/pages/admin/Students.tsx`)

Admin interface for:
- View all students
- Search and filter
- View individual student progress
- Manage enrollments
- Issue/revoke certificates manually

### 3.3 Analytics (`client/src/pages/admin/Analytics.tsx`)

Detailed analytics:
- Module completion trends
- Quiz performance by module
- Time spent on course
- Drop-off points
- Success rates

---

## Phase 4: Authentication & Routing (1-2 hours)

### 4.1 Update App.tsx

Add protected routes:
```typescript
<Route path="/dashboard" component={Dashboard} />
<Route path="/module-:number/quiz" component={Quiz} />
<Route path="/my-certificate" component={MyCertificate} />
<Route path="/admin" component={AdminDashboard} />
<Route path="/admin/students" component={Students} />
<Route path="/admin/analytics" component={Analytics} />
```

### 4.2 Route Protection

Implement route guards:
- Redirect unauthenticated users to login
- Redirect non-enrolled users to enrollment page
- Protect admin routes (admin role only)

### 4.3 Navigation Updates

Update Navigation component:
- Show different links for students vs admins
- Display user name and avatar
- Add logout functionality
- Highlight current page

---

## Phase 5: Certificate Generation (1-2 hours)

### 5.1 Certificate Template

Create professional certificate design:
- GitPolish Protocol™ branding
- Student name
- Certificate number
- Issue date
- Final exam score
- Digital signature

### 5.2 PDF Generation

Implement certificate PDF generation:
- Use library like `jsPDF` or `pdfmake`
- Generate on server-side
- Upload to S3 storage
- Return URL for download

### 5.3 Certificate Validation

Add certificate verification:
- Public verification page
- Enter certificate number
- Display certificate details
- Prevent forgery

---

## Phase 6: Enrollment System (1 hour)

### 6.1 Enrollment Page (`client/src/pages/Enroll.tsx`)

Create enrollment flow:
- Course overview
- Enrollment button
- Auto-enroll on first login (or manual enrollment)
- Welcome message after enrollment

### 6.2 Enrollment Logic

Implement enrollment:
- Check if user is enrolled
- Create enrollment record
- Redirect to dashboard
- Send welcome email (optional)

---

## Phase 7: Testing & Polish (2-3 hours)

### 7.1 Functional Testing

Test all features:
- User enrollment
- Module progress tracking
- Quiz submission and scoring
- Lab completion
- Certificate issuance
- Admin functions

### 7.2 UI/UX Polish

Refine user experience:
- Loading states
- Error handling
- Success messages
- Responsive design
- Accessibility

### 7.3 Performance Optimization

Optimize:
- Database queries
- API response times
- Frontend rendering
- Image loading

---

## Total Estimated Time: 15-20 hours

**Breakdown:**
- Phase 1: Database & API (4-6 hours)
- Phase 2: Student Dashboard (3-4 hours)
- Phase 3: Admin Panel (2-3 hours)
- Phase 4: Auth & Routing (1-2 hours)
- Phase 5: Certificates (1-2 hours)
- Phase 6: Enrollment (1 hour)
- Phase 7: Testing & Polish (2-3 hours)

---

## Quick Start Guide

When ready to continue implementation:

1. **Start with Phase 1**: Implement database helpers and tRPC procedures
2. **Test API endpoints**: Use the tRPC panel or Postman
3. **Build student dashboard**: Create the main user interface
4. **Add quiz functionality**: Enable assessment features
5. **Implement admin panel**: Add management capabilities
6. **Generate certificates**: Complete the certification flow
7. **Test end-to-end**: Verify all features work together

---

## Key Dependencies

Already installed:
- ✅ tRPC for API
- ✅ Drizzle ORM for database
- ✅ React Query for data fetching
- ✅ Tailwind CSS for styling
- ✅ shadcn/ui for components

May need to add:
- `jsPDF` or `pdfmake` for certificate generation
- `recharts` or `chart.js` for analytics visualizations
- `date-fns` for date formatting (already installed)

---

## Database Schema Reference

All tables are created and ready:
- `users` - Authentication and roles
- `enrollments` - Course enrollment
- `moduleProgress` - Module tracking
- `quizAttempts` - Quiz scores
- `labCompletions` - Lab tracking
- `examAttempts` - Exam results
- `certificates` - Issued certificates
- `studentNotes` - Notes and bookmarks

---

## Next Steps

1. Review this implementation plan
2. Decide on implementation timeline
3. Start with Phase 1 (database helpers and API)
4. Build incrementally, testing each phase
5. Deploy when all phases are complete

The foundation is solid and ready for the full LMS implementation!
