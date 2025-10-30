# GitPolish Protocol™ Certification Course - Learning Management System

> **A comprehensive, interactive Learning Management System (LMS) for delivering the GitPolish Protocol™ Certification Course**

[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![tRPC](https://img.shields.io/badge/tRPC-11-blue.svg)](https://trpc.io/)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Database Schema](#database-schema)
- [API Documentation](#api-documentation)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [LMS Implementation Status](#lms-implementation-status)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## Overview

The **GitPolish Protocol™ Certification Course LMS** is a full-stack web application designed to deliver an interactive, engaging learning experience for students pursuing certification in professional GitHub repository management. Built following the GitPolish Protocol™ methodology itself, this platform demonstrates the principles it teaches.

### Purpose

This LMS provides:
- **Interactive course delivery** for 6 comprehensive modules
- **Progress tracking** across modules, quizzes, and labs
- **Assessment system** with quizzes and certification exams
- **Certificate generation** for successful graduates
- **Admin dashboard** for course management and analytics
- **Student portal** for personalized learning experience

### Course Content

The platform delivers the complete GitPolish Protocol™ Certification Course:
- **Module 1**: GitPolish Foundations & Repository Setup (Complete)
- **Module 2**: Advanced GitHub Features & Collaboration
- **Module 3**: Code Quality & Review Processes
- **Module 4**: Security & Compliance
- **Module 5**: Automation & CI/CD
- **Module 6**: Advanced Workflows & Scaling

---

## Features

### Current Features ✅

**Public Website:**
- Professional landing page with course overview
- Curriculum page displaying all 6 modules
- Module 1 detail page with integrated slides
- Certification information page
- Resources and external links page
- Responsive design with Developer Terminal Interface aesthetic

**Backend Infrastructure:**
- Node.js/Express server with tRPC API
- PostgreSQL database with Drizzle ORM
- User authentication system (OAuth-ready)
- RESTful API endpoints
- Database migrations and schema management

**Database Schema:**
- User accounts with role-based access (student/admin)
- Course enrollment tracking
- Module progress monitoring
- Quiz attempt recording
- Lab completion tracking
- Exam attempt storage
- Certificate issuance
- Student notes and bookmarks

### Planned Features 🚧

**Student Portal:**
- Personal dashboard with progress overview
- Module navigation with completion tracking
- Interactive quiz system
- Lab exercise submissions
- Certificate download and sharing
- Notes and bookmarks functionality

**Admin Panel:**
- Student management interface
- Course analytics and reporting
- Certificate approval system
- Content management tools
- User role administration

**Assessment System:**
- Module quizzes with instant feedback
- Practice exams (half-length and full-length)
- Final certification exam
- Automated grading and scoring
- Performance analytics

**Certificate System:**
- Professional certificate design
- PDF generation and download
- Certificate verification system
- Digital signatures
- Public verification page

---

## Technology Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.0 | UI framework |
| **TypeScript** | 5.6 | Type safety |
| **Vite** | 7.1 | Build tool and dev server |
| **Tailwind CSS** | 4.0 | Styling framework |
| **shadcn/ui** | Latest | Component library |
| **Wouter** | Latest | Client-side routing |
| **React Query** | Latest | Data fetching and caching |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 22.x | Runtime environment |
| **Express** | Latest | Web server framework |
| **tRPC** | 11.x | Type-safe API layer |
| **Drizzle ORM** | Latest | Database ORM |
| **PostgreSQL** | Latest | Relational database |
| **Zod** | Latest | Schema validation |

### Development Tools

| Tool | Purpose |
|------|---------|
| **pnpm** | Package management |
| **ESLint** | Code linting |
| **Prettier** | Code formatting |
| **TypeScript** | Type checking |
| **Vitest** | Unit testing |

---

## Architecture

### System Design

The application follows a modern full-stack architecture:

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  (React 19 + TypeScript + Tailwind CSS + shadcn/ui)        │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Public  │  │ Student  │  │  Admin   │  │   Auth   │   │
│  │  Pages   │  │Dashboard │  │  Panel   │  │  Pages   │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↕ tRPC
┌─────────────────────────────────────────────────────────────┐
│                         API Layer                            │
│              (tRPC + Express + TypeScript)                   │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Auth    │  │ Progress │  │  Quiz    │  │  Admin   │   │
│  │ Routers  │  │ Routers  │  │ Routers  │  │ Routers  │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↕ Drizzle ORM
┌─────────────────────────────────────────────────────────────┐
│                      Database Layer                          │
│                    (PostgreSQL)                              │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  users   │  │enrollments│ │  progress │  │  quizzes │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │   labs   │  │   exams   │  │  certs   │  │   notes  │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Directory Structure

```
gitpolish-course-website/
├── client/                    # Frontend application
│   ├── public/               # Static assets
│   └── src/
│       ├── components/       # Reusable UI components
│       │   └── ui/          # shadcn/ui components
│       ├── contexts/        # React contexts
│       ├── hooks/           # Custom React hooks
│       ├── lib/             # Utility functions
│       ├── pages/           # Page components
│       ├── App.tsx          # Main app component with routing
│       ├── main.tsx         # Application entry point
│       └── index.css        # Global styles
├── server/                   # Backend application
│   ├── db.ts                # Database connection and helpers
│   ├── index.ts             # Server entry point
│   └── routers.ts           # tRPC router definitions
├── drizzle/                  # Database schema and migrations
│   └── schema.ts            # Database schema definitions
├── shared/                   # Shared types and constants
│   └── const.ts             # Application constants
├── dist/                     # Production build output
├── LMS_IMPLEMENTATION_PLAN.md  # Detailed implementation roadmap
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── drizzle.config.ts        # Drizzle ORM configuration
```

---

## Getting Started

### Prerequisites

- **Node.js** 22.x or higher
- **pnpm** 9.x or higher
- **PostgreSQL** 14.x or higher
- **Git** for version control

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/leonidas-esquire/gitpolish-course-website.git
cd gitpolish-course-website
```

2. **Install dependencies:**

```bash
pnpm install
```

3. **Set up environment variables:**

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/gitpolish_course

# Authentication
JWT_SECRET=your-secret-key-here
OAUTH_SERVER_URL=https://api.manus.im

# Application
VITE_APP_TITLE=GitPolish Protocol™ Certification Course
VITE_APP_LOGO=/logo.png
```

4. **Initialize the database:**

```bash
pnpm db:push
```

This command generates and applies database migrations.

5. **Start the development server:**

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

### Development Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm db:push` | Generate and apply database migrations |
| `pnpm lint` | Run ESLint |
| `pnpm type-check` | Run TypeScript type checking |
| `pnpm test` | Run tests with Vitest |

---

## Database Schema

### Entity Relationship Diagram

```
users (1) ──────< (M) enrollments
  │
  ├──────< (M) moduleProgress
  ├──────< (M) quizAttempts
  ├──────< (M) labCompletions
  ├──────< (M) examAttempts
  ├──────< (1) certificates
  └──────< (M) studentNotes
```

### Tables

#### `users`
Core user authentication and profile table.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| openId | VARCHAR(255) | OAuth identifier |
| name | VARCHAR(255) | User's full name |
| email | VARCHAR(255) | Email address |
| avatar | TEXT | Avatar URL |
| role | ENUM | User role (student/admin) |
| createdAt | TIMESTAMP | Account creation date |
| lastSignedIn | TIMESTAMP | Last login timestamp |

#### `enrollments`
Tracks course enrollment status.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| userId | INT | Foreign key to users |
| enrolledAt | TIMESTAMP | Enrollment date |
| status | ENUM | active/completed/suspended |
| completedAt | TIMESTAMP | Course completion date |

#### `moduleProgress`
Monitors student progress through modules.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| userId | INT | Foreign key to users |
| moduleNumber | INT | Module number (1-6) |
| status | ENUM | not_started/in_progress/completed |
| startedAt | TIMESTAMP | Module start date |
| completedAt | TIMESTAMP | Module completion date |
| lastAccessedAt | TIMESTAMP | Last access timestamp |

#### `quizAttempts`
Records quiz attempts and scores.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| userId | INT | Foreign key to users |
| moduleNumber | INT | Module number (1-6) |
| score | INT | Score (0-100) |
| totalQuestions | INT | Total questions |
| correctAnswers | INT | Correct answers |
| attemptedAt | TIMESTAMP | Attempt timestamp |
| timeSpentMinutes | INT | Time spent on quiz |

#### `labCompletions`
Tracks lab exercise completions.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| userId | INT | Foreign key to users |
| moduleNumber | INT | Module number (1-6) |
| labNumber | INT | Lab number within module |
| completedAt | TIMESTAMP | Completion timestamp |
| notes | TEXT | Optional student notes |

#### `examAttempts`
Stores certification exam attempts.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| userId | INT | Foreign key to users |
| examType | ENUM | practice_half/practice_full/final |
| score | INT | Score (0-100) |
| passed | BOOLEAN | Pass/fail status |
| attemptedAt | TIMESTAMP | Attempt timestamp |
| timeSpentMinutes | INT | Time spent on exam |
| answers | TEXT | JSON string of answers |

#### `certificates`
Issued certificates for successful students.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| userId | INT | Foreign key to users (unique) |
| certificateNumber | VARCHAR(64) | Unique certificate ID |
| issuedAt | TIMESTAMP | Issue date |
| finalExamScore | INT | Final exam score |
| capstoneProjectScore | INT | Capstone project score |
| certificateUrl | TEXT | Certificate PDF URL |

#### `studentNotes`
Student notes and bookmarks.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| userId | INT | Foreign key to users |
| moduleNumber | INT | Module number (1-6) |
| content | TEXT | Note content |
| isBookmarked | BOOLEAN | Bookmark flag |
| createdAt | TIMESTAMP | Creation timestamp |
| updatedAt | TIMESTAMP | Last update timestamp |

---

## API Documentation

### Authentication

All protected endpoints require authentication via JWT token.

**Headers:**
```
Authorization: Bearer <token>
```

### tRPC Routers

#### `enrollment`
- `enroll()` - Enroll current user in course
- `getStatus()` - Get enrollment status

#### `progress`
- `getAll()` - Get all module progress
- `getModule(moduleNumber)` - Get specific module progress
- `updateModule(moduleNumber, status)` - Update module status

#### `quiz`
- `submit(moduleNumber, score, ...)` - Submit quiz attempt
- `getAttempts(moduleNumber?)` - Get quiz attempts
- `getBestScore(moduleNumber)` - Get best quiz score

#### `lab`
- `markComplete(moduleNumber, labNumber, notes?)` - Mark lab complete
- `getCompletions(moduleNumber?)` - Get lab completions

#### `exam`
- `submit(examType, score, ...)` - Submit exam attempt
- `getAttempts(examType?)` - Get exam attempts

#### `certificate`
- `issue(finalExamScore)` - Issue certificate
- `get()` - Get user's certificate

#### `notes`
- `create(moduleNumber, content)` - Create note
- `update(noteId, content)` - Update note
- `delete(noteId)` - Delete note
- `getAll(moduleNumber?)` - Get all notes
- `toggleBookmark(noteId)` - Toggle bookmark

#### `admin` (Admin only)
- `getCourseStats()` - Get course statistics
- `getAllCertificates()` - Get all certificates
- `getUserStats(userId)` - Get user statistics

---

## Development Workflow

### Code Style

This project follows the GitPolish Protocol™ methodology:

1. **Repository Architecture** - Clean, scalable structure
2. **Documentation Excellence** - Comprehensive inline and external docs
3. **Code Quality** - TypeScript, ESLint, Prettier
4. **Security** - Environment variables, authentication, validation
5. **Automation** - CI/CD ready, automated testing

### Git Workflow

1. Create feature branch from `main`
2. Make changes following coding standards
3. Write/update tests
4. Update documentation
5. Submit pull request
6. Code review and approval
7. Merge to `main`

### Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

---

## Deployment

### Production Build

```bash
# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

### Environment Variables

Ensure all required environment variables are set in production:

- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `OAUTH_SERVER_URL` - OAuth server URL
- `VITE_APP_TITLE` - Application title
- `VITE_APP_LOGO` - Logo URL

### Database Migrations

```bash
# Generate migration
pnpm db:push

# Apply migrations in production
NODE_ENV=production pnpm db:push
```

---

## LMS Implementation Status

### Completed ✅

- [x] Project scaffolding and structure
- [x] Database schema design (8 tables)
- [x] Frontend pages (Home, Curriculum, Module 1, Certification, Resources)
- [x] Authentication system integration
- [x] Responsive design with Developer Terminal Interface aesthetic
- [x] Module 1 slides integration
- [x] Database migrations

### In Progress 🚧

- [ ] tRPC API procedures
- [ ] Database helper functions
- [ ] Student dashboard
- [ ] Admin panel
- [ ] Quiz system
- [ ] Certificate generation

### Planned 📋

- [ ] Lab submission system
- [ ] Email notifications
- [ ] Analytics dashboard
- [ ] Certificate verification
- [ ] Payment integration (optional)

**For detailed implementation roadmap, see [LMS_IMPLEMENTATION_PLAN.md](LMS_IMPLEMENTATION_PLAN.md)**

---

## Contributing

We welcome contributions! Please follow the GitPolish Protocol™ methodology:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Follow coding standards** (TypeScript, ESLint, Prettier)
4. **Write comprehensive documentation**
5. **Add tests** for new features
6. **Commit with clear messages** (`git commit -m 'feat: Add amazing feature'`)
7. **Push to your branch** (`git push origin feature/amazing-feature`)
8. **Open a Pull Request**

### Code of Conduct

This project follows a professional code of conduct. Please be respectful and constructive in all interactions.

---

## License

**Proprietary License**

Copyright © 2025 GitPolish Protocol™. All rights reserved.

This software and associated documentation files (the "Software") are proprietary and confidential. Unauthorized copying, modification, distribution, or use of this Software, via any medium, is strictly prohibited without express written permission from the copyright holder.

**Permitted Use:**
- Viewing and studying the code for educational purposes
- Running the software for personal, non-commercial use
- Contributing improvements via pull requests (subject to approval)

**Prohibited:**
- Commercial use without license
- Redistribution or resale
- Modification for commercial purposes
- Removal of copyright notices

For licensing inquiries, please contact the repository owner.

---

## Support

### Documentation

- [LMS Implementation Plan](LMS_IMPLEMENTATION_PLAN.md)
- [Course Materials Repository](https://github.com/leonidas-esquire/gitpolish-protocol-course)
- [GitPolish Protocol™ Documentation](https://github.com/leonidas-esquire/gitpolish-protocol-course/blob/master/resources/The_GitPolish_Protocol™.pdf)

### Getting Help

- **Issues**: [GitHub Issues](https://github.com/leonidas-esquire/gitpolish-course-website/issues)
- **Discussions**: [GitHub Discussions](https://github.com/leonidas-esquire/gitpolish-course-website/discussions)
- **Email**: Contact repository owner

### Acknowledgments

Built with:
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [tRPC](https://trpc.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Drizzle ORM](https://orm.drizzle.team/)

---

**Built following the GitPolish Protocol™ - Professional Repository Management**

*Transform from a Git user into a professional repository manager.*
