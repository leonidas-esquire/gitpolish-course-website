# Architecture Documentation

## System Overview

The GitPolish Course Website is a full-stack Learning Management System built with modern web technologies.

## Technology Stack

**Frontend:** React 19 + TypeScript + Tailwind CSS + shadcn/ui  
**Backend:** Node.js + Express + tRPC  
**Database:** PostgreSQL + Drizzle ORM  
**Authentication:** OAuth + JWT

## Architecture Decisions

### 1. Full-Stack TypeScript
**Decision:** Use TypeScript throughout the stack  
**Rationale:** Type safety, better developer experience, fewer runtime errors  
**Trade-offs:** Slightly longer development time, learning curve

### 2. tRPC for API Layer
**Decision:** Use tRPC instead of REST or GraphQL  
**Rationale:** End-to-end type safety, automatic API documentation, excellent DX  
**Trade-offs:** Less familiar than REST, requires TypeScript

### 3. Drizzle ORM
**Decision:** Use Drizzle instead of Prisma or TypeORM  
**Rationale:** Lightweight, SQL-like syntax, excellent TypeScript support  
**Trade-offs:** Smaller ecosystem than Prisma

### 4. PostgreSQL Database
**Decision:** Use PostgreSQL for data storage  
**Rationale:** Robust, reliable, excellent for relational data  
**Trade-offs:** Requires database server, more complex than SQLite

### 5. Developer Terminal Interface Aesthetic
**Decision:** Dark theme with terminal-style UI  
**Rationale:** Appeals to developer audience, unique visual identity  
**Trade-offs:** May not appeal to all users

## Database Design

See README.md for complete schema documentation.

## API Design

tRPC routers organized by domain:
- `auth` - Authentication
- `enrollment` - Course enrollment
- `progress` - Module progress tracking
- `quiz` - Quiz submissions
- `lab` - Lab completions
- `exam` - Exam attempts
- `certificate` - Certificate issuance
- `notes` - Student notes
- `admin` - Admin functions

## Security Considerations

- Environment variables for secrets
- JWT for authentication
- Input validation with Zod
- SQL injection prevention via ORM
- HTTPS in production
- CORS configuration

## Performance Optimizations

- React Query for caching
- Database indexing
- Lazy loading of routes
- Image optimization
- Code splitting

## Deployment Architecture

```
User → CDN → Load Balancer → Web Servers → Database
                                ↓
                           File Storage (S3)
```

## Future Considerations

- Horizontal scaling
- Caching layer (Redis)
- Message queue for async tasks
- Microservices architecture (if needed)
