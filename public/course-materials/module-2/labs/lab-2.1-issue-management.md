# Lab 2.1: Issue Management System Setup

## Overview

In this lab, you will create a comprehensive issue management system for a GitHub repository using templates, labels, and automation. This lab demonstrates **Scenario 11: Creating and Managing GitHub Issues** from the GitPolish Protocol™.

**Duration:** 60-90 minutes

**Difficulty:** Intermediate

## Learning Objectives

By completing this lab, you will be able to:

- Create professional issue templates for different types of submissions
- Design and implement a label taxonomy for effective issue categorization
- Configure issue automation using GitHub Actions
- Practice triaging and prioritizing issues
- Implement best practices for issue management

## Prerequisites

- Completed Module 1
- GitHub account with repository creation permissions
- Basic understanding of YAML syntax
- Familiarity with GitHub Issues

## GitPolish Protocol™ Pillars

This lab demonstrates:
- **Documentation Excellence:** Creating clear, standardized issue templates
- **Automation and Quality Assurance:** Automating issue workflows
- **Repository Architecture:** Organizing issue management structure

## Lab Scenario

You have been hired as a repository manager for "TechStart Solutions," a growing software company. The development team has been struggling with inconsistent bug reports, unclear feature requests, and difficulty prioritizing work. Your task is to implement a professional issue management system that brings order and clarity to their workflow.

## Part 1: Repository Setup (10 minutes)

### Step 1: Create a Practice Repository

Create a new GitHub repository for this lab:

```bash
# Using GitHub CLI
gh repo create gitpolish-lab-2.1 --public --description "Lab 2.1: Issue Management System"

# Clone the repository
gh repo clone gitpolish-lab-2.1
cd gitpolish-lab-2.1

# Initialize with README
echo "# Issue Management Lab" > README.md
git add README.md
git commit -m "Initial commit"
git push origin main
```

Alternatively, create the repository through the GitHub web interface.

### Step 2: Create Directory Structure

```bash
# Create the .github directory structure
mkdir -p .github/ISSUE_TEMPLATE
```

## Part 2: Create Issue Templates (20 minutes)

### Step 3: Bug Report Template

Create `.github/ISSUE_TEMPLATE/bug_report.yml`:

```yaml
name: 🐛 Bug Report
description: Report a bug or unexpected behavior
title: "[BUG] "
labels: ["bug", "needs-triage"]
body:
  - type: markdown
    attributes:
      value: |
        Thank you for taking the time to report a bug! Please fill out the information below to help us resolve the issue quickly.

  - type: textarea
    id: description
    attributes:
      label: Bug Description
      description: A clear and concise description of what the bug is.
      placeholder: Describe the bug...
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: Steps to Reproduce
      description: Steps to reproduce the behavior
      placeholder: |
        1. Go to '...'
        2. Click on '...'
        3. Scroll down to '...'
        4. See error
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: Expected Behavior
      description: What you expected to happen
      placeholder: Describe what should have happened...
    validations:
      required: true

  - type: textarea
    id: actual
    attributes:
      label: Actual Behavior
      description: What actually happened
      placeholder: Describe what actually happened...
    validations:
      required: true

  - type: textarea
    id: environment
    attributes:
      label: Environment
      description: Please provide information about your environment
      placeholder: |
        - OS: [e.g., Windows 10, macOS 12.0, Ubuntu 20.04]
        - Browser: [e.g., Chrome 96, Firefox 95]
        - Version: [e.g., 1.2.3]
    validations:
      required: true

  - type: textarea
    id: screenshots
    attributes:
      label: Screenshots
      description: If applicable, add screenshots to help explain the problem
      placeholder: Drag and drop screenshots here...

  - type: textarea
    id: additional
    attributes:
      label: Additional Context
      description: Add any other context about the problem here
```

### Step 4: Feature Request Template

Create `.github/ISSUE_TEMPLATE/feature_request.yml`:

```yaml
name: ✨ Feature Request
description: Suggest a new feature or enhancement
title: "[FEATURE] "
labels: ["enhancement", "needs-triage"]
body:
  - type: markdown
    attributes:
      value: |
        Thank you for suggesting a feature! Please provide as much detail as possible.

  - type: textarea
    id: problem
    attributes:
      label: Problem Statement
      description: Describe the problem this feature would solve
      placeholder: I'm frustrated when...
    validations:
      required: true

  - type: textarea
    id: solution
    attributes:
      label: Proposed Solution
      description: Describe the solution you'd like to see
      placeholder: I would like to...
    validations:
      required: true

  - type: textarea
    id: alternatives
    attributes:
      label: Alternatives Considered
      description: Describe any alternative solutions you've considered
      placeholder: I also considered...

  - type: dropdown
    id: priority
    attributes:
      label: Priority
      description: How important is this feature to you?
      options:
        - Critical - Blocking my work
        - High - Significantly impacts my workflow
        - Medium - Would be nice to have
        - Low - Minor improvement
    validations:
      required: true

  - type: textarea
    id: additional
    attributes:
      label: Additional Context
      description: Add any other context, mockups, or examples
```

### Step 5: Question Template

Create `.github/ISSUE_TEMPLATE/question.yml`:

```yaml
name: ❓ Question
description: Ask a question about the project
title: "[QUESTION] "
labels: ["question"]
body:
  - type: markdown
    attributes:
      value: |
        Have a question? We're here to help!

  - type: dropdown
    id: category
    attributes:
      label: Question Category
      description: What is your question about?
      options:
        - Installation & Setup
        - Usage & Features
        - Configuration
        - Troubleshooting
        - Best Practices
        - Other
    validations:
      required: true

  - type: textarea
    id: question
    attributes:
      label: Your Question
      description: What would you like to know?
      placeholder: Ask your question here...
    validations:
      required: true

  - type: textarea
    id: context
    attributes:
      label: Additional Context
      description: Provide any relevant context or what you've already tried
      placeholder: I've already tried...
```

### Step 6: Commit Templates

```bash
git add .github/
git commit -m "feat: add issue templates for bug reports, features, and questions"
git push origin main
```

## Part 3: Create Label Taxonomy (15 minutes)

### Step 7: Design Label System

Create a comprehensive label system. Create `.github/labels.yml`:

```yaml
# Type Labels
- name: "bug"
  color: "d73a4a"
  description: "Something isn't working"

- name: "enhancement"
  color: "a2eeef"
  description: "New feature or request"

- name: "documentation"
  color: "0075ca"
  description: "Improvements or additions to documentation"

- name: "question"
  color: "d876e3"
  description: "Further information is requested"

# Priority Labels
- name: "priority: critical"
  color: "b60205"
  description: "Critical priority - immediate attention required"

- name: "priority: high"
  color: "d93f0b"
  description: "High priority - should be addressed soon"

- name: "priority: medium"
  color: "fbca04"
  description: "Medium priority - normal queue"

- name: "priority: low"
  color: "0e8a16"
  description: "Low priority - nice to have"

# Status Labels
- name: "needs-triage"
  color: "ededed"
  description: "Needs initial review and categorization"

- name: "in-progress"
  color: "c5def5"
  description: "Currently being worked on"

- name: "blocked"
  color: "b60205"
  description: "Blocked by another issue or external dependency"

- name: "ready-for-review"
  color: "0e8a16"
  description: "Ready for code review"

- name: "wontfix"
  color: "ffffff"
  description: "This will not be worked on"

- name: "duplicate"
  color: "cfd3d7"
  description: "This issue or pull request already exists"

# Area Labels
- name: "area: frontend"
  color: "5319e7"
  description: "Frontend-related issues"

- name: "area: backend"
  color: "5319e7"
  description: "Backend-related issues"

- name: "area: database"
  color: "5319e7"
  description: "Database-related issues"

- name: "area: api"
  color: "5319e7"
  description: "API-related issues"

# Effort Labels
- name: "effort: small"
  color: "c2e0c6"
  description: "Small effort - less than 1 day"

- name: "effort: medium"
  color: "fef2c0"
  description: "Medium effort - 1-3 days"

- name: "effort: large"
  color: "f9d0c4"
  description: "Large effort - more than 3 days"

# Special Labels
- name: "good first issue"
  color: "7057ff"
  description: "Good for newcomers"

- name: "help wanted"
  color: "008672"
  description: "Extra attention is needed"

- name: "security"
  color: "b60205"
  description: "Security-related issue"
```

### Step 8: Apply Labels Using Script

Create `scripts/apply-labels.sh`:

```bash
#!/bin/bash

# Apply labels to repository
# Usage: ./scripts/apply-labels.sh

REPO="your-username/gitpolish-lab-2.1"

# Read labels from YAML and create them
# Note: This requires 'yq' tool or manual creation via GitHub UI

echo "Labels should be created via GitHub UI or using gh CLI"
echo "Visit: https://github.com/$REPO/labels"
```

Alternatively, create labels manually through the GitHub web interface at:
`https://github.com/YOUR-USERNAME/gitpolish-lab-2.1/labels`

## Part 4: Practice Issue Triage (20 minutes)

### Step 9: Create Sample Issues

Create 5 sample issues to practice triaging:

1. **Bug: Login button not responding**
   - Type: Bug
   - Priority: High
   - Area: Frontend

2. **Feature: Add dark mode support**
   - Type: Enhancement
   - Priority: Medium
   - Area: Frontend

3. **Question: How to configure database connection?**
   - Type: Question
   - Area: Database

4. **Bug: API returns 500 error on user creation**
   - Type: Bug
   - Priority: Critical
   - Area: API, Backend

5. **Enhancement: Improve documentation for deployment**
   - Type: Documentation
   - Priority: Low

### Step 10: Triage Process

For each issue, practice the following triage process:

1. **Read and understand** the issue
2. **Verify completeness** - Does it have all necessary information?
3. **Categorize** - Apply appropriate type, priority, and area labels
4. **Estimate effort** - Apply effort label
5. **Assign or comment** - Assign to a team member or request more information
6. **Link related issues** - Cross-reference related issues if applicable

Document your triage decisions in a file called `triage-notes.md`.

## Part 5: Issue Management Best Practices (15 minutes)

### Step 11: Create Issue Management Guidelines

Create `.github/ISSUE_MANAGEMENT.md`:

```markdown
# Issue Management Guidelines

## For Issue Reporters

### Before Creating an Issue

1. **Search existing issues** to avoid duplicates
2. **Use the appropriate template** (bug, feature, question)
3. **Provide complete information** - incomplete issues will be labeled "needs-info"
4. **Be specific and clear** - vague issues are hard to address

### Writing Good Issue Titles

- ✅ Good: "[BUG] Login button unresponsive on mobile Safari"
- ❌ Bad: "Button doesn't work"

- ✅ Good: "[FEATURE] Add export to CSV functionality for reports"
- ❌ Bad: "Export feature"

## For Issue Triagers

### Triage Process

1. **Review new issues** daily
2. **Remove "needs-triage" label** after initial review
3. **Add appropriate labels** (type, priority, area, effort)
4. **Assign to team member** or milestone if applicable
5. **Request clarification** if information is missing
6. **Close duplicates** with reference to original issue

### Priority Guidelines

- **Critical:** System down, data loss, security vulnerability
- **High:** Major feature broken, significant user impact
- **Medium:** Minor feature broken, workaround available
- **Low:** Nice-to-have, minor improvement

### Response Time Targets

- Critical: Within 1 hour
- High: Within 1 day
- Medium: Within 3 days
- Low: Within 1 week

## For Developers

### Working on Issues

1. **Comment on the issue** before starting work
2. **Update status labels** (in-progress, blocked, ready-for-review)
3. **Reference the issue** in commit messages and PRs
4. **Update the issue** with progress notes
5. **Close the issue** when work is merged (use "Closes #123" in PR)

### Linking Issues to PRs

Use keywords in PR descriptions:
- `Closes #123` - Closes the issue when PR is merged
- `Fixes #123` - Same as Closes
- `Resolves #123` - Same as Closes
- `Relates to #123` - Links without closing

## Automation

### Auto-labeling

Issues created from templates are automatically labeled:
- Bug reports → "bug", "needs-triage"
- Feature requests → "enhancement", "needs-triage"
- Questions → "question"

### Stale Issue Management

Issues with no activity for 60 days will be:
1. Labeled "stale"
2. Commented with warning
3. Closed after 7 more days if no response

## Metrics

Track these metrics monthly:
- Time to first response
- Time to resolution
- Number of issues opened/closed
- Issue backlog size
```

## Part 6: Reflection and Documentation (10 minutes)

### Step 12: Document Your System

Create `LAB-2.1-REPORT.md` documenting:

1. **System Overview**
   - What templates did you create?
   - What labels did you implement?
   - What guidelines did you establish?

2. **Triage Practice**
   - How did you triage each of the 5 sample issues?
   - What labels did you apply and why?
   - What challenges did you encounter?

3. **Best Practices Learned**
   - What are the key elements of effective issue management?
   - How does this system improve collaboration?
   - What would you do differently in a real project?

4. **GitPolish Protocol™ Application**
   - How does this lab demonstrate Documentation Excellence?
   - How does automation improve quality assurance?
   - How does this system support knowledge transfer?

## Deliverables

Submit the following:

1. ✅ GitHub repository with issue templates
2. ✅ Label taxonomy (documented or implemented)
3. ✅ 5 sample issues created and triaged
4. ✅ `triage-notes.md` with triage decisions
5. ✅ `.github/ISSUE_MANAGEMENT.md` guidelines
6. ✅ `LAB-2.1-REPORT.md` reflection document

## Evaluation Criteria

Your lab will be evaluated on:

- **Completeness** (30%): All templates, labels, and documentation created
- **Quality** (30%): Templates are clear, labels are logical, guidelines are comprehensive
- **Triage Practice** (20%): Appropriate labels applied, good decision-making
- **Documentation** (20%): Clear reflection and learning demonstrated

## Bonus Challenges

If you finish early, try these additional challenges:

1. **Create a GitHub Action** to automatically label issues based on content
2. **Implement issue forms** with conditional fields
3. **Create a project board** and link issues to it
4. **Set up saved replies** for common responses
5. **Create issue templates** for additional types (security report, performance issue)

## Resources

- [GitHub Issue Templates Documentation](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)
- [About Labels](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels)
- [Best Practices for Issue Management](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)

## Next Steps

After completing this lab:

1. Review your work with a peer or instructor
2. Apply this system to a real project
3. Continue to Lab 2.2: Code Review Workshop
4. Explore GitHub Projects for advanced issue management

---

**Congratulations!** You've created a professional issue management system that demonstrates the GitPolish Protocol™ principles of Documentation Excellence and Automation.
