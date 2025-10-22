# Project Status Workflow
**Shows current project status with visual progress and suggests next actions**

## Command: `/project`

### Output Template
```
AI BUSINESS SPECIALIST TRACKER - PROJECT STATUS

📊 Current Phase: [Phase Name]
🎯 Progress: [X]% Complete

📈 Recent Changes:
- [Latest 3 commits with descriptions]

🔧 Active Features:
- [Feature 1]: Status (✅ Completed / 🟡 In Progress / ⏳ Pending)
- [Feature 2]: Status
- [Feature 3]: Status

🎯 Next Suggested Actions:
1. [Action 1] - Priority: High (🔥 Critical)
2. [Action 2] - Priority: Medium (⚡ Important)
3. [Action 3] - Priority: Low (💡 Nice to have)

📋 Quick Commands:
- /status - Detailed technical report
- /deploy - Run deployment checklist
- /feature [name] - Add new feature
- /security - Architecture review
- /lesson [day] - Publish lesson snapshot

Type /action [number] to execute, or ask me anything!
```

### Data Sources
- `.cursor/project-knowledge.json` for current state
- Git log for recent changes
- File modification times for activity
- Feature completion matrix

### Visual Elements
- Progress bars for completion percentage
- Status icons (✅🟡⏳)
- Priority indicators (🔥⚡💡)
- Doodle-style project structure diagram

### Auto-Learning Integration
- Tracks which actions user chooses
- Learns from user feedback patterns
- Updates priority suggestions based on usage
- Remembers successful workflows

### Error Handling
- Graceful fallback if knowledge base missing
- Default suggestions if no recent activity
- Clear error messages for failed operations
- Recovery suggestions for common issues
