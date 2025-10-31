# GitPolish Protocol™ Repository Synchronization System

## Overview

The GitPolish Protocol™ Synchronization System automatically keeps the Course Materials repository and Course Website repository in sync, ensuring that content updates in one repository are reflected in the other while maintaining comprehensive documentation of all changes.

This system embodies the GitPolish Protocol™ pillars of Repository Architecture, Documentation Excellence, Code Quality, Security, and Automation.

## System Architecture

### Repository Roles

The synchronization system operates between two complementary repositories, each serving as the source of truth for different aspects of the GitPolish Protocol™ Certification Course.

**Course Materials Repository** serves as the authoritative source for all educational content. This repository houses the complete curriculum including forty comprehensive scenarios covering every aspect of professional repository management, detailed student workbooks with exercises and progress tracking tools, certification exams with rubrics and capstone project guidelines, slide templates for Modules 2-6 ready for content population, repository templates for various project types, professional checklists for setup and deployment workflows, and utility scripts for repository management tasks. Any updates to course content, educational materials, or student resources should be made in this repository, from which they will automatically sync to the website.

**Course Website Repository** serves as the authoritative source for the interactive Learning Management System platform. This repository contains the full-stack web application built with React 19, TypeScript, and tRPC, complete database schema with eight tables for user management and progress tracking, authentication system with student and admin role support, public-facing pages displaying course information and curriculum, and technical architecture documentation for the LMS platform. Updates to website functionality, user interface, database schema, or technical implementation should be made in this repository, with documentation automatically syncing back to the materials repository.

### Synchronization Flow

The system implements intelligent bidirectional synchronization with clearly defined data flows to prevent conflicts and ensure data integrity.

**Materials to Website Flow** handles course content distribution. When changes are pushed to the course materials repository affecting course content, educational PDFs, slide presentations, or student resources, the sync system automatically copies these materials to the website's public directories, updates the content sync log with detailed change information, rebuilds the website if necessary to reflect new content, and commits changes with comprehensive sync metadata. This ensures that students always see the most current course materials when accessing the website.

**Website to Materials Flow** handles technical documentation synchronization. When the website repository is updated with changes to the LMS implementation plan, technical architecture documentation, or deployment status information, the sync system triggers a repository dispatch event to the materials repository, copies relevant documentation files to the appropriate locations, updates the sync log in the materials repository, and commits with detailed provenance information. This keeps the course materials repository informed about the technical status and capabilities of the delivery platform.

### Sync Triggers

The synchronization system activates through multiple trigger mechanisms to ensure timely updates while preventing unnecessary operations.

**Automatic Triggers** occur when commits are pushed to the master or main branch that affect designated sync paths. The system monitors specific directories and files, triggering synchronization only when relevant content changes. For the materials repository, monitored paths include the course-materials directory, resources directory, and README.md file. For the website repository, monitored paths include LMS_IMPLEMENTATION_PLAN.md, the docs/ARCHITECTURE.md file, and README.md.

**Manual Triggers** allow repository maintainers to initiate synchronization on demand through the GitHub Actions interface. This is useful for testing the sync system, forcing a sync after bulk changes, recovering from sync failures, or validating sync configuration changes.

**Scheduled Triggers** provide a safety net by running a full synchronization daily at midnight UTC. This ensures that even if automatic triggers fail or are missed, repositories will be synchronized within twenty-four hours. The scheduled sync also serves as a validation checkpoint, detecting and reporting any discrepancies between repositories.

## File Mapping

### Content Synchronization (Materials → Website)

The system maps course materials to appropriate locations in the website repository to make them accessible to students and the web application.

Course materials from the `course-materials/` directory sync to `public/course-content/` in the website repository, preserving the complete directory structure. This includes all module content, lab exercises, quiz materials, and supplementary resources. Downloadable documents with .docx and .pdf extensions are extracted from throughout the course materials and consolidated into `public/downloads/` for easy student access. Resource files from the `resources/` directory, including reference PDFs and supplementary materials, sync to `public/resources/`. Module-specific slide presentations from `course-materials/module-*/slides/` sync to corresponding `public/slides/module-*/` directories, maintaining the module organization structure.

### Documentation Synchronization (Website → Materials)

Technical documentation from the website repository syncs back to the materials repository to keep all stakeholders informed about platform capabilities and status.

The LMS Implementation Plan from `LMS_IMPLEMENTATION_PLAN.md` syncs to `docs/LMS_STATUS.md` in the materials repository, providing visibility into development progress and feature availability. Website architecture documentation from `docs/ARCHITECTURE.md` syncs to `docs/WEBSITE_ARCHITECTURE.md`, giving course administrators and contributors insight into the technical platform. Deployment information extracted from the website README syncs to `docs/WEBSITE_DEPLOYMENT.md`, documenting how to access and use the live platform.

### Bidirectional Synchronization

Certain files require careful merging to incorporate changes from both repositories without conflicts.

The CHANGELOG.md file receives append-only updates from both repositories, with each sync adding new entries documenting the synchronization event and changes made. README.md files use section-based merging, where designated sections can be updated from either repository without affecting other sections. This allows the materials repository to maintain course content descriptions while the website repository maintains deployment and technical information, with both sets of updates reflected in each repository's README.

## Security and Validation

### Authentication

Repository synchronization requires secure authentication to prevent unauthorized access and ensure audit trails.

The system uses GitHub Personal Access Tokens (PAT) with repository scope, providing the minimum necessary permissions for synchronization operations. These tokens are stored as GitHub Secrets named `SYNC_TOKEN` in each repository, never exposed in logs or commit messages. Access tokens are configured with read access to source repositories and write access to target repositories, but no access to repository settings, secrets, or administrative functions. Tokens are rotated every ninety days following security best practices, with automated reminders seven days before expiration.

### File Validation

Before synchronizing any files, the system performs comprehensive validation to ensure data integrity and security.

File size validation prevents synchronization of files larger than 100 MB, protecting against accidental inclusion of large binary files or data dumps. Extension validation checks that files match expected types for course materials (md, pdf, docx, html, css, js, json, txt, png, jpg, jpeg, svg), warning about unexpected file types. Secret detection scans text files for patterns indicating API keys, passwords, tokens, or private keys, blocking synchronization if potential secrets are detected. Path validation ensures all file paths are within expected directories, preventing directory traversal attacks.

The validation script at `scripts/validate-sync.sh` can be run manually before committing changes or automatically as part of the sync workflow, providing detailed output about validation results and any issues detected.

### Conflict Resolution

The synchronization system implements intelligent conflict resolution to handle scenarios where both repositories have been modified.

For timestamp-based conflicts where the same file has been modified in both repositories, the most recent change wins, with the older change preserved in git history. Section-based merging applies to files like README.md where different sections can be updated independently, allowing both sets of changes to coexist. When automatic resolution is not possible, the system creates a pull request for manual review, clearly marking conflict locations with standard git conflict markers and providing context about the conflicting changes.

## Monitoring and Maintenance

### Sync Logs

Comprehensive logging provides full visibility into synchronization activities and enables troubleshooting.

The materials repository maintains `docs/SYNC_LOG.md` documenting all sync events affecting that repository, including timestamp, source repository and commit hash, sync direction, trigger type, and files changed. The website repository maintains `docs/CONTENT_SYNC_LOG.md` specifically tracking course content updates, with similar detail about each synchronization event.

Each sync event automatically appends to these logs, creating a permanent audit trail. Log entries include enough information to reproduce or rollback any sync operation.

### CHANGELOG Updates

In addition to dedicated sync logs, each synchronization automatically updates the CHANGELOG.md file in the target repository with a dated entry describing the sync operation and its effects. This ensures that the standard changelog reflects synchronization activities alongside manual changes, providing a complete picture of repository evolution.

### Alerts and Notifications

The sync system generates alerts for exceptional conditions requiring human attention.

Sync failures trigger GitHub Issues in the affected repository with detailed error information, stack traces, and suggested remediation steps. Conflict detection creates pull requests for manual review when automatic resolution is not possible, with clear descriptions of the conflicting changes. Large change detection requires manual approval when a sync would modify more than a configured threshold of files, preventing accidental bulk operations. Token expiration warnings alert repository administrators seven days before authentication tokens expire, providing time to rotate credentials.

## Usage Guide

### Setting Up Synchronization

Initial setup requires configuring authentication and enabling workflows in both repositories.

**Step 1: Create GitHub Personal Access Token**

Navigate to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic). Generate a new token with a descriptive name like "GitPolish Sync Token". Set expiration to ninety days. Select the "repo" scope for full repository access. Generate the token and copy it immediately, as it will not be shown again.

**Step 2: Configure Repository Secrets**

In the Course Materials repository, navigate to Settings → Secrets and variables → Actions. Create a new repository secret named `SYNC_TOKEN` and paste the personal access token. Repeat this process in the Course Website repository, creating an identical secret with the same token value.

**Step 3: Enable Workflows**

In each repository, navigate to the Actions tab. If workflows are disabled, click the button to enable them. Review the sync workflows to understand their operation. Workflows will now trigger automatically based on configured events.

### Manual Synchronization

To manually trigger synchronization, navigate to the repository where changes originated. Go to Actions → Select the appropriate sync workflow (sync-to-website or sync-to-materials). Click "Run workflow" and select the branch (usually master or main). Click the green "Run workflow" button to start. Monitor the workflow run to ensure successful completion.

### Monitoring Sync Status

Regular monitoring ensures the sync system operates correctly and alerts are addressed promptly.

Check sync logs weekly by reviewing `docs/SYNC_LOG.md` in the materials repository and `docs/CONTENT_SYNC_LOG.md` in the website repository. Verify recent sync events completed successfully and file counts match expectations. Review the Actions tab in both repositories for failed workflow runs, investigating any failures and addressing root causes. Monitor Issues for sync-related problems, responding promptly to automatically created issues. Verify content accuracy by spot-checking that changes in one repository appear correctly in the other.

### Troubleshooting

Common issues and their resolutions help maintain smooth synchronization operations.

**Sync Workflow Fails**

Check the workflow run logs in the Actions tab for detailed error messages. Verify that the `SYNC_TOKEN` secret is correctly configured in both repositories and has not expired. Ensure the token has appropriate permissions (repo scope). Check that target repository paths exist and are writable. Review recent changes for validation failures (large files, potential secrets).

**Content Not Appearing on Website**

Verify that the sync workflow completed successfully in the materials repository. Check that files were copied to the correct paths in the website repository. Ensure the website build process completed without errors. Clear browser cache or check in incognito mode to rule out caching issues. Review `docs/CONTENT_SYNC_LOG.md` for the sync event details.

**Conflicts Detected**

Review the pull request created by the sync system for manual conflict resolution. Examine the conflict markers to understand what changed in each repository. Decide which changes to keep or how to merge them. Edit the files to resolve conflicts, removing conflict markers. Commit the resolution and merge the pull request.

**Token Expiration**

When you receive an expiration warning, generate a new personal access token following the same process as initial setup. Update the `SYNC_TOKEN` secret in both repositories with the new token value. Test synchronization to verify the new token works correctly. Document the token rotation in your security log.

## Best Practices

### Making Changes

Follow these practices to ensure smooth synchronization and maintain repository integrity.

**Always commit to the correct repository** based on what you're changing. Course content changes go in the materials repository, while website functionality changes go in the website repository. **Write clear commit messages** describing what changed and why, as these appear in sync logs and help with troubleshooting. **Test changes locally** before committing when possible, especially for large updates or structural changes. **Monitor the sync** after committing significant changes to verify they propagate correctly.

### Maintaining Documentation

Keep documentation current to maximize the value of the sync system.

**Update sync logs** if you manually intervene in the sync process, documenting what you did and why. **Maintain the CHANGELOG** with significant changes, even though sync events are automatically logged. **Document new sync paths** if you add directories or files that should be synchronized. **Review and update** this guide periodically as the system evolves.

### Security Practices

Protect the integrity and security of both repositories.

**Rotate tokens regularly** every ninety days or immediately if compromised. **Never commit secrets** to either repository, as they may be synced and exposed. **Review sync logs** for unexpected file changes that might indicate security issues. **Limit token scope** to only what's necessary for synchronization operations. **Monitor access** to repository secrets and restrict to authorized personnel only.

## Technical Reference

### Workflow Files

**Materials Repository:**
- `.github/workflows/sync-to-website.yml` - Syncs content to website
- `.github/workflows/receive-from-website.yml` - Receives documentation from website

**Website Repository:**
- `.github/workflows/sync-to-materials.yml` - Syncs documentation to materials
- `.github/workflows/receive-from-materials.yml` - Receives content from materials

### Scripts

**Materials Repository:**
- `scripts/validate-sync.sh` - Validates files before synchronization

### Documentation Files

**Materials Repository:**
- `docs/SYNC_LOG.md` - Complete sync event log
- `docs/SYNC_SYSTEM_GUIDE.md` - This guide
- `docs/LMS_STATUS.md` - Synced from website
- `docs/WEBSITE_ARCHITECTURE.md` - Synced from website

**Website Repository:**
- `docs/CONTENT_SYNC_LOG.md` - Course content sync log
- `docs/COURSE_MATERIALS_STATUS.md` - Materials availability status

## Future Enhancements

The sync system is designed for extensibility and continuous improvement.

**Intelligent Conflict Resolution** using machine learning to automatically resolve common conflict patterns based on historical decisions. **Selective Synchronization** to sync only changed files rather than entire directories, improving performance and reducing bandwidth. **Webhook Integration** for real-time synchronization triggers instead of polling-based detection. **Multi-Repository Support** to extend the sync system to additional repositories as the course ecosystem grows. **Sync Dashboard** providing a web interface for monitoring sync status, viewing logs, and managing configuration.

## Support

For issues with the synchronization system:

1. Check this guide for troubleshooting steps
2. Review sync logs for error details
3. Search existing Issues in both repositories
4. Create a new Issue with the "sync-system" label
5. Include relevant log excerpts and error messages

---

**The GitPolish Protocol™ Synchronization System ensures both repositories stay current while maintaining comprehensive documentation of all changes, exemplifying the automation and documentation excellence principles of the GitPolish Protocol™ methodology.**
