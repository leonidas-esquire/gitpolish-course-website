# Contributing to GitPolish Course Website

Thank you for your interest in contributing! This project follows the GitPolish Protocol™ methodology.

## Quick Start

1. Fork the repository
2. Clone: `git clone https://github.com/YOUR-USERNAME/gitpolish-course-website.git`
3. Install: `pnpm install`
4. Create branch: `git checkout -b feature/your-feature`
5. Make changes following our standards
6. Test: `pnpm test && pnpm type-check && pnpm lint`
7. Commit: Use conventional commits (e.g., `feat: add new feature`)
8. Push and create Pull Request

## GitPolish Protocol™ Standards

All contributions must follow these five pillars:

1. **Repository Architecture** - Clean structure and organization
2. **Documentation Excellence** - Comprehensive docs for all changes
3. **Code Quality** - TypeScript, ESLint, Prettier compliance
4. **Security** - No secrets in code, proper authentication
5. **Automation** - Tests for new features, CI/CD ready

## Code Style

- TypeScript with proper typing
- Functional React components with hooks
- tRPC for type-safe APIs
- Tailwind CSS for styling
- shadcn/ui components when possible

## Commit Format

```
type(scope): subject

Examples:
feat(auth): add OAuth login
fix(quiz): correct scoring bug
docs(readme): update setup instructions
```

## Pull Request Checklist

- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] All tests pass
- [ ] Type checking passes
- [ ] Linting passes
- [ ] CHANGELOG.md updated

Thank you for contributing!
