# GitHub Token Rotation Reminder System

## Purpose

This document establishes a systematic approach to managing the 90-day rotation schedule for GitHub Personal Access Tokens used in the GitPolish Protocol™ Synchronization System. Regular token rotation is a critical security practice that limits the window of vulnerability if credentials are compromised.

## Current Token Information

**Token Name:** GitPolish Sync Token  
**Purpose:** Bidirectional synchronization between course materials and website repositories  
**Scope:** `repo` (full control of private repositories)  
**Expiration Policy:** 90 days from creation  
**Storage Location:** GitHub Secrets in both repositories (`SYNC_TOKEN`)

### Token Creation Date

**Created:** [TO BE FILLED WHEN TOKEN IS FIRST GENERATED]  
**Expires:** [TO BE CALCULATED: Creation Date + 90 days]  
**Next Rotation Due:** [Expires Date - 7 days for advance notice]

## Rotation Schedule

Token rotation should occur **7 days before expiration** to ensure continuity of service and provide buffer time if issues arise during the rotation process.

### Rotation Timeline

| Days Before Expiration | Action Required |
|------------------------|-----------------|
| 7 days | **Reminder Alert** - Begin rotation process |
| 5 days | **Backup Reminder** - If not yet rotated |
| 3 days | **Urgent Reminder** - Rotation must be completed |
| 1 day | **Critical Alert** - Token expires tomorrow |
| 0 days | **Token Expired** - Synchronization will fail |

## Rotation Process

### Step 1: Generate New Token (Est. Time: 2 minutes)

1. Navigate to https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Configure the token:
   - **Name:** GitPolish Sync Token [YYYY-MM-DD]
   - **Expiration:** 90 days
   - **Scope:** Check `repo` (full control of private repositories)
4. Click "Generate token"
5. **IMMEDIATELY COPY THE TOKEN** - You will not be able to see it again
6. Store the token temporarily in a secure location (password manager recommended)

### Step 2: Update Repository Secrets (Est. Time: 3 minutes)

**For Course Materials Repository:**
1. Go to https://github.com/leonidas-esquire/gitpolish-protocol-course/settings/secrets/actions
2. Click on `SYNC_TOKEN` secret
3. Click "Update secret"
4. Paste the new token value
5. Click "Update secret"

**For Course Website Repository:**
1. Go to https://github.com/leonidas-esquire/gitpolish-course-website/settings/secrets/actions
2. Click on `SYNC_TOKEN` secret
3. Click "Update secret"
4. Paste the new token value
5. Click "Update secret"

### Step 3: Test Synchronization (Est. Time: 2 minutes)

1. Go to https://github.com/leonidas-esquire/gitpolish-protocol-course/actions
2. Select "Sync Content to Website" workflow
3. Click "Run workflow" → "Run workflow"
4. Wait for workflow to complete (should take 1-2 minutes)
5. Verify successful completion (green checkmark)
6. Check https://github.com/leonidas-esquire/gitpolish-course-website for synced content

### Step 4: Delete Old Token (Est. Time: 1 minute)

1. Return to https://github.com/settings/tokens
2. Locate the old token (previous date in name)
3. Click "Delete"
4. Confirm deletion

### Step 5: Update Documentation (Est. Time: 1 minute)

1. Update this document with new token creation date
2. Calculate new expiration date (creation date + 90 days)
3. Calculate next rotation reminder date (expiration date - 7 days)
4. Commit changes to repository

**Total Rotation Time: Approximately 9 minutes**

## Reminder Methods

### Method 1: Calendar Reminders (Recommended)

Create recurring calendar events to ensure timely rotation:

**Primary Reminder (7 days before expiration):**
- **Title:** "🔐 REQUIRED: Rotate GitPolish Sync Token"
- **Date:** [Expiration Date - 7 days]
- **Time:** 9:00 AM (or preferred working time)
- **Description:** "Rotate GitHub Personal Access Token for GitPolish synchronization system. See TOKEN_ROTATION_REMINDER.md for instructions."
- **Alert:** 1 day before, morning of event

**Backup Reminder (3 days before expiration):**
- **Title:** "⚠️ URGENT: GitPolish Token Rotation Due"
- **Date:** [Expiration Date - 3 days]
- **Time:** 9:00 AM
- **Description:** "If token not yet rotated, complete today. Token expires in 3 days."
- **Alert:** Morning of event, 2 hours before event

**Critical Alert (1 day before expiration):**
- **Title:** "🚨 CRITICAL: GitPolish Token Expires Tomorrow"
- **Date:** [Expiration Date - 1 day]
- **Time:** 8:00 AM
- **Description:** "IMMEDIATE ACTION REQUIRED. Token expires tomorrow and synchronization will fail."
- **Alert:** Evening before, morning of event

### Method 2: GitHub Issues (Alternative)

Create a GitHub issue as a reminder:

1. Go to https://github.com/leonidas-esquire/gitpolish-protocol-course/issues
2. Click "New issue"
3. Title: "🔐 Token Rotation Due: [Date]"
4. Description: Link to this document and rotation instructions
5. Assignee: Repository administrator
6. Labels: `security`, `maintenance`, `high-priority`
7. Milestone: Create "Token Rotation" milestone
8. Due date: [Expiration Date - 7 days]

### Method 3: Automated Monitoring (Advanced)

For organizations with automation capabilities, create a monitoring script:

```bash
#!/bin/bash
# token-expiration-monitor.sh
# Run daily via cron to check token expiration

TOKEN_CREATION_DATE="YYYY-MM-DD"  # Update when token is created
EXPIRATION_DAYS=90
REMINDER_DAYS=7

CREATION_TIMESTAMP=$(date -d "$TOKEN_CREATION_DATE" +%s)
EXPIRATION_TIMESTAMP=$((CREATION_TIMESTAMP + (EXPIRATION_DAYS * 86400)))
CURRENT_TIMESTAMP=$(date +%s)
DAYS_UNTIL_EXPIRATION=$(( (EXPIRATION_TIMESTAMP - CURRENT_TIMESTAMP) / 86400 ))

if [ $DAYS_UNTIL_EXPIRATION -le $REMINDER_DAYS ]; then
    echo "⚠️  GitPolish Sync Token expires in $DAYS_UNTIL_EXPIRATION days!"
    echo "Rotation required. See TOKEN_ROTATION_REMINDER.md"
    # Send notification (email, Slack, etc.)
fi
```

## Rotation History

Maintain a log of all token rotations for audit purposes:

| Rotation Date | Old Token Created | Old Token Expired | New Token Expires | Rotated By | Notes |
|---------------|-------------------|-------------------|-------------------|------------|-------|
| [Date] | [Date] | [Date] | [Date] | [Name] | Initial token creation |
| | | | | | |
| | | | | | |

## Troubleshooting

### Synchronization Fails After Rotation

**Symptoms:** Workflows fail with authentication errors after token rotation

**Causes:**
- New token not properly saved in GitHub Secrets
- Token has insufficient permissions
- Token was revoked or expired

**Resolution:**
1. Verify token is correctly stored in both repository secrets
2. Confirm token has `repo` scope
3. Generate new token if necessary
4. Test synchronization manually

### Token Expired Before Rotation

**Symptoms:** Synchronization stops working, workflows fail with 401 errors

**Impact:** Automatic synchronization between repositories is disabled until token is rotated

**Resolution:**
1. Generate new token immediately (follow Step 1 above)
2. Update both repository secrets (follow Step 2 above)
3. Test synchronization (follow Step 3 above)
4. Review reminder system to prevent future expirations

### Lost Access to GitHub Account

**Symptoms:** Cannot access GitHub to rotate token

**Impact:** Token will expire and synchronization will fail

**Prevention:**
- Enable two-factor authentication with backup codes
- Designate backup administrator with repository access
- Document account recovery procedures

**Resolution:**
- Use backup codes or recovery methods to regain access
- If access cannot be restored, backup administrator must rotate token

## Security Considerations

### Why 90 Days?

The 90-day token expiration policy aligns with industry security standards and compliance requirements:

**Industry Standards:** Organizations including NIST, ISO 27001, SOC 2, and PCI-DSS recommend or require credential rotation every 60-90 days.

**Limited Exposure Window:** If a token is compromised, it automatically becomes invalid within 90 days, limiting the attacker's window of opportunity.

**Compliance Requirements:** Many regulatory frameworks require regular credential rotation as part of access control policies.

**Security Culture:** Regular rotation reinforces security awareness and establishes good habits among team members.

**Audit Trail:** Rotation events create natural checkpoints for security audits and reviews.

### Token Security Best Practices

**Never Commit Tokens to Repositories:** Tokens must only be stored in GitHub Secrets, never in code or configuration files.

**Use Minimal Scopes:** Grant only the permissions necessary for the token's purpose. The sync token requires `repo` scope but no additional permissions.

**Monitor Token Usage:** Regularly review audit logs to ensure tokens are only being used for their intended purpose.

**Revoke Immediately if Compromised:** If a token is accidentally exposed, revoke it immediately and generate a new one.

**Use Separate Tokens for Different Purposes:** Don't reuse the same token across multiple systems or applications.

## Compliance Documentation

This token rotation policy supports compliance with:

- **SOC 2 Type II:** Demonstrates access control and credential management practices
- **ISO 27001:** Meets information security management requirements
- **GDPR:** Supports data protection through access control
- **PCI-DSS:** Aligns with credential rotation requirements

Maintain this document and rotation history as evidence of compliance during audits.

## Contact Information

**Repository Administrator:** [Name]  
**Email:** [Email]  
**Backup Administrator:** [Name]  
**Email:** [Email]

**For Security Issues:**
- Create private security advisory: https://github.com/leonidas-esquire/gitpolish-protocol-course/security/advisories
- Email: [security@yourdomain.com]

## Document Maintenance

This document should be reviewed and updated:
- After each token rotation
- Annually as part of security policy review
- When rotation procedures change
- When contact information changes

**Last Updated:** [Date]  
**Next Review Due:** [Date + 1 year]  
**Document Owner:** Repository Administrator

---

## Quick Reference Card

**When to Rotate:** 7 days before expiration (every ~83 days)  
**How Long:** ~9 minutes  
**Where:** GitHub Settings → Tokens & Repository Secrets  
**Test:** Run "Sync Content to Website" workflow  
**Help:** See full instructions above or contact repository administrator

**Current Token Expires:** [TO BE FILLED]  
**Next Rotation Due:** [TO BE FILLED]  
**Set Calendar Reminder:** ✅ / ❌

---

*This token rotation system is part of the Security pillar of the GitPolish Protocol™, demonstrating professional credential management practices.*
