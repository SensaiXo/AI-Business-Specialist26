# Publish Lesson Workflow
**Step-by-step lesson publishing with auto-deploy to GitHub**

## Command: `/lesson [day]`

### Workflow Steps

#### 1. Lesson Capture
- Scan current LocalStorage for lesson data
- Identify new content since last lesson
- Capture notes, documents, progress changes
- Generate lesson summary with key insights

#### 2. Data Validation
- Verify lesson data integrity
- Check for required fields (date, topics, notes)
- Validate links and document references
- Ensure no sensitive data included

#### 3. JSON Generation
```json
{
  "date": "2025-10-22",
  "lesson": "Day 1 - KI Grundlagen",
  "duration": "4 hours",
  "topics": ["Finanz", "Medizin", "KI-Avatare"],
  "yourNotes": "Learned about SwissFinanceAI...",
  "links": [
    {"title": "ICT-Berufsbildung", "url": "https://..."}
  ],
  "keyInsights": ["AI needs Swiss-hosted systems"],
  "documentsAdded": ["Prüfungsordnung.pdf"],
  "progressBefore": 0,
  "progressAfter": 25,
  "autoDeployed": true,
  "deployedAt": "2025-10-22T20:00:00Z"
}
```

#### 4. File Operations
- Save to `lessons/day-[XX].json`
- Update `lessons/index.json` catalog
- Generate lesson summary for friends
- Create shareable links

#### 5. Auto-Deploy Process
- Commit lesson files to git
- Push to GitHub repository
- Trigger GitHub Pages rebuild
- Verify deployment success
- Notify friends of new content

#### 6. Friend Notification
- Update friend explorer interface
- Send notification (if configured)
- Generate shareable lesson summary
- Create PDF export (optional)

### Success Criteria
- ✅ Lesson data captured completely
- ✅ JSON file created and validated
- ✅ Auto-commit to GitHub successful
- ✅ GitHub Pages deployment triggered
- ✅ Friends can access new content within 2 minutes

### Error Handling
- **Data capture fails**: Retry with manual selection
- **Validation errors**: Show specific issues to fix
- **Git commit fails**: Manual commit with instructions
- **Deployment fails**: Check GitHub Pages status
- **Friend access fails**: Verify URL and permissions

### User Feedback
- Progress indicators during each step
- Success confirmation with friend URL
- Error messages with specific solutions
- Option to retry failed operations

### Integration Points
- Links to `/deploy` for deployment issues
- Links to `/status` for project overview
- Links to friend explorer for verification
- Auto-updates project knowledge base
