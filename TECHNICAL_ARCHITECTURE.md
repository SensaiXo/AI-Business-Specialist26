# Technical Architecture - AI Business Specialist Tracker
**Comprehensive technical documentation with visual schemas**

---

## 🏗️ System Overview

**Architecture**: Single Page Application (SPA) with LocalStorage persistence and GitHub-based collaboration

**Deployment**: GitHub Pages with automatic deployment pipeline

**Collaboration**: Real-time sharing through GitHub repository updates

---

## 📁 File Structure Schema

<svg viewBox="0 0 800 600" style="border: 1px solid #ddd; border-radius: 8px; background: #f9f9f9;">
  <!-- Hand-drawn file tree structure -->
  <path d="M50,50 Q60,45 70,50 Q80,55 90,50" stroke="#2c3e50" fill="none" stroke-width="2"/>
  <text x="70" y="40" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#2c3e50">AI-Business-Specialist26/</text>
  
  <!-- Main files -->
  <rect x="100" y="80" width="150" height="40" rx="5" stroke="#3498db" fill="#ecf0f1" stroke-width="2"/>
  <text x="175" y="105" text-anchor="middle" font-family="Arial" font-size="11" fill="#2c3e50">index.html</text>
  
  <rect x="100" y="130" width="150" height="40" rx="5" stroke="#27ae60" fill="#ecf0f1" stroke-width="2"/>
  <text x="175" y="155" text-anchor="middle" font-family="Arial" font-size="11" fill="#2c3e50">tracker-app.js</text>
  
  <rect x="100" y="180" width="150" height="40" rx="5" stroke="#e74c3c" fill="#ecf0f1" stroke-width="2"/>
  <text x="175" y="205" text-anchor="middle" font-family="Arial" font-size="11" fill="#2c3e50">README.md</text>
  
  <!-- .cursor directory -->
  <path d="M300,100 Q310,95 320,100 Q330,105 340,100" stroke="#8e44ad" fill="none" stroke-width="2"/>
  <text x="320" y="90" text-anchor="middle" font-family="Arial" font-size="12" fill="#8e44ad">.cursor/</text>
  
  <rect x="300" y="120" width="120" height="30" rx="3" stroke="#8e44ad" fill="#f8f9fa" stroke-width="1"/>
  <text x="360" y="140" text-anchor="middle" font-family="Arial" font-size="10" fill="#8e44ad">.cursorrules</text>
  
  <rect x="300" y="160" width="120" height="30" rx="3" stroke="#8e44ad" fill="#f8f9fa" stroke-width="1"/>
  <text x="360" y="180" text-anchor="middle" font-family="Arial" font-size="10" fill="#8e44ad">project-knowledge.json</text>
  
  <!-- lessons directory -->
  <path d="M450,100 Q460,95 470,100 Q480,105 490,100" stroke="#f39c12" fill="none" stroke-width="2"/>
  <text x="470" y="90" text-anchor="middle" font-family="Arial" font-size="12" fill="#f39c12">lessons/</text>
  
  <rect x="450" y="120" width="100" height="30" rx="3" stroke="#f39c12" fill="#f8f9fa" stroke-width="1"/>
  <text x="500" y="140" text-anchor="middle" font-family="Arial" font-size="10" fill="#f39c12">day-01.json</text>
  
  <rect x="450" y="160" width="100" height="30" rx="3" stroke="#f39c12" fill="#f8f9fa" stroke-width="1"/>
  <text x="500" y="180" text-anchor="middle" font-family="Arial" font-size="10" fill="#f39c12">index.json</text>
  
  <!-- Connection lines -->
  <path d="M250,100 Q275,100 300,100" stroke="#2c3e50" fill="none" stroke-width="1" stroke-dasharray="2,2"/>
  <path d="M250,100 Q350,100 450,100" stroke="#2c3e50" fill="none" stroke-width="1" stroke-dasharray="2,2"/>
</svg>

---

## 💾 LocalStorage Schema

<svg viewBox="0 0 800 400" style="border: 1px solid #ddd; border-radius: 8px; background: #f9f9f9;">
  <!-- LocalStorage data structure -->
  <rect x="50" y="50" width="200" height="300" rx="10" stroke="#27ae60" fill="#ecf0f1" stroke-width="3"/>
  <text x="150" y="30" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#27ae60">LocalStorage</text>
  
  <!-- Data objects -->
  <rect x="70" y="80" width="160" height="40" rx="5" stroke="#3498db" fill="#ffffff" stroke-width="2"/>
  <text x="150" y="105" text-anchor="middle" font-family="Arial" font-size="11" fill="#2c3e50">phases: Array</text>
  
  <rect x="70" y="130" width="160" height="40" rx="5" stroke="#e74c3c" fill="#ffffff" stroke-width="2"/>
  <text x="150" y="155" text-anchor="middle" font-family="Arial" font-size="11" fill="#2c3e50">documents: Array</text>
  
  <rect x="70" y="180" width="160" height="40" rx="5" stroke="#f39c12" fill="#ffffff" stroke-width="2"/>
  <text x="150" y="205" text-anchor="middle" font-family="Arial" font-size="11" fill="#2c3e50">notes: Array</text>
  
  <rect x="70" y="230" width="160" height="40" rx="5" stroke="#8e44ad" fill="#ffffff" stroke-width="2"/>
  <text x="150" y="255" text-anchor="middle" font-family="Arial" font-size="11" fill="#2c3e50">overallProgress: Number</text>
  
  <rect x="70" y="280" width="160" height="40" rx="5" stroke="#2c3e50" fill="#ffffff" stroke-width="2"/>
  <text x="150" y="305" text-anchor="middle" font-family="Arial" font-size="11" fill="#2c3e50">examParts: Array</text>
  
  <!-- Data flow arrows -->
  <path d="M300,100 Q350,100 400,100" stroke="#2c3e50" fill="none" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="350" y="90" text-anchor="middle" font-family="Arial" font-size="10" fill="#2c3e50">Auto-Save</text>
  
  <!-- GitHub integration -->
  <rect x="450" y="50" width="200" height="300" rx="10" stroke="#8e44ad" fill="#ecf0f1" stroke-width="3"/>
  <text x="550" y="30" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#8e44ad">GitHub</text>
  
  <rect x="470" y="80" width="160" height="40" rx="5" stroke="#8e44ad" fill="#ffffff" stroke-width="2"/>
  <text x="550" y="105" text-anchor="middle" font-family="Arial" font-size="11" fill="#2c3e50">lessons/</text>
  
  <rect x="470" y="130" width="160" height="40" rx="5" stroke="#8e44ad" fill="#ffffff" stroke-width="2"/>
  <text x="550" y="155" text-anchor="middle" font-family="Arial" font-size="11" fill="#2c3e50">index.json</text>
  
  <!-- Arrow marker definition -->
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#2c3e50"/>
    </marker>
  </defs>
</svg>

---

## 🔄 Auto-Deploy Pipeline

<svg viewBox="0 0 800 500" style="border: 1px solid #ddd; border-radius: 8px; background: #f9f9f9;">
  <!-- Deployment flow diagram -->
  <text x="400" y="30" text-anchor="middle" font-family="Arial" font-size="16" font-weight="bold" fill="#2c3e50">Auto-Deploy Pipeline</text>
  
  <!-- Step 1: User Action -->
  <circle cx="100" cy="100" r="40" stroke="#3498db" fill="#ecf0f1" stroke-width="3"/>
  <text x="100" y="95" text-anchor="middle" font-family="Arial" font-size="10" fill="#2c3e50">User</text>
  <text x="100" y="110" text-anchor="middle" font-family="Arial" font-size="10" fill="#2c3e50">Action</text>
  
  <!-- Step 2: Lesson Capture -->
  <circle cx="250" cy="100" r="40" stroke="#27ae60" fill="#ecf0f1" stroke-width="3"/>
  <text x="250" y="95" text-anchor="middle" font-family="Arial" font-size="10" fill="#2c3e50">Lesson</text>
  <text x="250" y="110" text-anchor="middle" font-family="Arial" font-size="10" fill="#2c3e50">Capture</text>
  
  <!-- Step 3: JSON Generation -->
  <circle cx="400" cy="100" r="40" stroke="#e74c3c" fill="#ecf0f1" stroke-width="3"/>
  <text x="400" y="95" text-anchor="middle" font-family="Arial" font-size="10" fill="#2c3e50">JSON</text>
  <text x="400" y="110" text-anchor="middle" font-family="Arial" font-size="10" fill="#2c3e50">Generation</text>
  
  <!-- Step 4: Git Commit -->
  <circle cx="550" cy="100" r="40" stroke="#f39c12" fill="#ecf0f1" stroke-width="3"/>
  <text x="550" y="95" text-anchor="middle" font-family="Arial" font-size="10" fill="#2c3e50">Git</text>
  <text x="550" y="110" text-anchor="middle" font-family="Arial" font-size="10" fill="#2c3e50">Commit</text>
  
  <!-- Step 5: GitHub Pages -->
  <circle cx="700" cy="100" r="40" stroke="#8e44ad" fill="#ecf0f1" stroke-width="3"/>
  <text x="700" y="95" text-anchor="middle" font-family="Arial" font-size="10" fill="#2c3e50">GitHub</text>
  <text x="700" y="110" text-anchor="middle" font-family="Arial" font-size="10" fill="#2c3e50">Pages</text>
  
  <!-- Flow arrows -->
  <path d="M140,100 Q195,100 210,100" stroke="#2c3e50" fill="none" stroke-width="3" marker-end="url(#arrow2)"/>
  <path d="M290,100 Q345,100 360,100" stroke="#2c3e50" fill="none" stroke-width="3" marker-end="url(#arrow2)"/>
  <path d="M440,100 Q495,100 510,100" stroke="#2c3e50" fill="none" stroke-width="3" marker-end="url(#arrow2)"/>
  <path d="M590,100 Q645,100 660,100" stroke="#2c3e50" fill="none" stroke-width="3" marker-end="url(#arrow2)"/>
  
  <!-- Friend access flow -->
  <rect x="50" y="200" width="150" height="80" rx="10" stroke="#f39c12" fill="#ecf0f1" stroke-width="2"/>
  <text x="125" y="230" text-anchor="middle" font-family="Arial" font-size="12" fill="#2c3e50">Friend</text>
  <text x="125" y="245" text-anchor="middle" font-family="Arial" font-size="12" fill="#2c3e50">Access</text>
  <text x="125" y="260" text-anchor="middle" font-family="Arial" font-size="12" fill="#2c3e50">(1-2 min)</text>
  
  <rect x="250" y="200" width="150" height="80" rx="10" stroke="#8e44ad" fill="#ecf0f1" stroke-width="2"/>
  <text x="325" y="230" text-anchor="middle" font-family="Arial" font-size="12" fill="#2c3e50">Export</text>
  <text x="325" y="245" text-anchor="middle" font-family="Arial" font-size="12" fill="#2c3e50">System</text>
  <text x="325" y="260" text-anchor="middle" font-family="Arial" font-size="12" fill="#2c3e50">(PDF/MD)</text>
  
  <rect x="450" y="200" width="150" height="80" rx="10" stroke="#27ae60" fill="#ecf0f1" stroke-width="2"/>
  <text x="525" y="230" text-anchor="middle" font-family="Arial" font-size="12" fill="#2c3e50">Real-time</text>
  <text x="525" y="245" text-anchor="middle" font-family="Arial" font-size="12" fill="#2c3e50">Updates</text>
  <text x="525" y="260" text-anchor="middle" font-family="Arial" font-size="12" fill="#2c3e50">(Auto-refresh)</text>
  
  <!-- Connection to main flow -->
  <path d="M700,140 Q700,170 700,200" stroke="#2c3e50" fill="none" stroke-width="2" stroke-dasharray="3,3"/>
  <path d="M700,200 Q600,200 500,200" stroke="#2c3e50" fill="none" stroke-width="2" stroke-dasharray="3,3"/>
  <path d="M500,200 Q400,200 300,200" stroke="#2c3e50" fill="none" stroke-width="2" stroke-dasharray="3,3"/>
  <path d="M300,200 Q200,200 200,200" stroke="#2c3e50" fill="none" stroke-width="2" stroke-dasharray="3,3"/>
  
  <!-- Arrow marker definition -->
  <defs>
    <marker id="arrow2" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <polygon points="0 0, 12 4, 0 8" fill="#2c3e50"/>
    </marker>
  </defs>
</svg>

---

## 🎨 Doodle Schema Generator

### Visual Style Guidelines

#### Hand-Drawn Aesthetic
- **Wobbly lines**: Slightly imperfect, organic feel
- **Simple shapes**: Circles, rectangles, arrows
- **Minimal colors**: Black + 1-2 accent colors
- **Clear labels**: Readable text annotations
- **Whitespace**: Plenty of breathing room

#### Schema Types
1. **Project Structure**: File/folder relationships
2. **Data Flow**: Information movement patterns
3. **Deployment Pipeline**: Auto-deploy process flow
4. **Friend Access**: Collaboration and sharing
5. **Learning Journey**: Course progression timeline

### Auto-Generation Script
```javascript
// .cursor/generate-schema.js
function generateDoodleSchema(type, data) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 800 600');
    svg.style.border = '1px solid #ddd';
    svg.style.borderRadius = '8px';
    svg.style.background = '#f9f9f9';
    
    // Add hand-drawn style paths
    addWobblyPath(svg, data.connections);
    addSimpleShapes(svg, data.components);
    addLabels(svg, data.labels);
    
    return svg;
}
```

---

## 🔧 Technical Implementation

### Core Technologies
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Storage**: LocalStorage with MemoryStorage fallback
- **Deployment**: GitHub Pages with Actions
- **Collaboration**: Git-based sharing
- **Visualization**: SVG with hand-drawn aesthetic

### Data Architecture
```javascript
// LocalStorage Schema
const appData = {
    phases: [
        {
            id: 1,
            name: "Grundlagen",
            progress: 100,
            status: "completed",
            competencyAreas: ["A", "B"]
        }
    ],
    documents: [
        {
            id: 1,
            title: "Prüfungsordnung",
            category: "exam",
            status: "completed",
            dateAdded: "2025-10-22"
        }
    ],
    notes: [],
    overallProgress: 25,
    examParts: [
        {
            id: 1,
            title: "KI-Einsatzmöglichkeit",
            weight: 50,
            time: 45,
            format: "Mündlich"
        }
    ]
};
```

### Auto-Deploy System
```javascript
// js/auto-push.js
class AutoPushSystem {
    async publishLesson(lessonData) {
        // 1. Capture lesson state
        const snapshot = this.captureLessonState();
        
        // 2. Generate JSON
        const lessonJson = this.generateLessonJson(snapshot);
        
        // 3. Save to lessons/ directory
        await this.saveLessonFile(lessonJson);
        
        // 4. Commit to Git
        await this.commitToGit(lessonJson);
        
        // 5. Trigger GitHub Pages rebuild
        await this.triggerDeployment();
        
        // 6. Notify friends
        await this.notifyFriends();
    }
}
```

---

## 🚀 Deployment Architecture

### GitHub Pages Setup
1. **Repository**: sensaixo.github.io/AI-Business-Specialist26
2. **Source**: Deploy from main branch
3. **Custom Domain**: Optional
4. **HTTPS**: Automatic SSL certificate

### Auto-Deploy Workflow
```yaml
# .github/workflows/auto-deploy-lessons.yml
name: Auto-Deploy Lessons
on:
  push:
    paths:
      - 'lessons/**'
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Update lesson index
        run: node .cursor/update-lesson-index.js
      
      - name: Commit changes
        run: |
          git config user.name "AI Tracker Bot"
          git config user.email "bot@tracker.ai"
          git add lessons/
          git commit -m "Auto-update: New lesson content" || exit 0
          git push
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
```

---

## 🔒 Security & Privacy

### Data Protection
- **Local Storage**: All data stays on user's device
- **No Tracking**: No external analytics or tracking
- **Privacy Controls**: User controls what's shared
- **Secure Sharing**: Only intended content is shared

### Input Validation
- **XSS Prevention**: HTML escaping for dynamic content
- **Data Validation**: Schema validation for imports
- **Error Handling**: Graceful degradation for errors
- **User Feedback**: Clear error messages in German

---

## 📊 Performance Optimization

### Loading Performance
- **Minimal Dependencies**: No external frameworks
- **Optimized Assets**: Compressed images and CSS
- **Lazy Loading**: Load features on demand
- **Caching**: Browser caching for static assets

### Storage Performance
- **Efficient Queries**: Optimized LocalStorage operations
- **Data Compression**: Minimize storage usage
- **Cleanup**: Remove old/unused data
- **Backup**: Regular export functionality

---

## 🎯 Success Metrics

### Technical Metrics
- **Load Time**: < 3 seconds
- **Storage Usage**: < 10MB
- **Error Rate**: < 1%
- **Uptime**: 99.9%

### User Experience Metrics
- **Task Completion**: > 95%
- **User Satisfaction**: > 4.5/5
- **Feature Adoption**: > 80%
- **Friend Engagement**: > 60%

---

## 🔄 Continuous Improvement

### Auto-Learning System
- **Usage Patterns**: Track feature usage
- **Error Analysis**: Learn from common issues
- **Success Metrics**: Identify what works
- **User Feedback**: Incorporate suggestions

### Evolution Strategy
- **Feature Prioritization**: Based on usage data
- **Performance Optimization**: Continuous monitoring
- **Security Updates**: Regular security reviews
- **Documentation**: Keep docs current

---

*Technical Architecture created: Oktober 22, 2025*  
*Version: 1.0*  
*Status: Implementation in progress*  
*Next update: After Phase 1 completion*
