/**
 * Auto-Push System for AI Business Specialist Tracker
 * Automatically commits and pushes lesson updates to GitHub
 */

class AutoPushSystem {
    constructor() {
        this.githubToken = null; // Will be set via GitHub Actions
        this.repository = 'SensaiXo/AI-Business-Specialist26';
        this.lessonsDir = 'lessons/';
        this.isEnabled = this.checkAutoPushEnabled();
    }

    /**
     * Check if auto-push is enabled
     */
    checkAutoPushEnabled() {
        const config = localStorage.getItem('aiTrackerConfig');
        if (config) {
            const parsed = JSON.parse(config);
            return parsed.autoPushEnabled || false;
        }
        return false;
    }

    /**
     * Enable auto-push functionality
     */
    enableAutoPush() {
        const config = JSON.parse(localStorage.getItem('aiTrackerConfig') || '{}');
        config.autoPushEnabled = true;
        localStorage.setItem('aiTrackerConfig', JSON.stringify(config));
        this.isEnabled = true;
        this.showNotification('Auto-Push aktiviert', 'success');
    }

    /**
     * Disable auto-push functionality
     */
    disableAutoPush() {
        const config = JSON.parse(localStorage.getItem('aiTrackerConfig') || '{}');
        config.autoPushEnabled = false;
        localStorage.setItem('aiTrackerConfig', JSON.stringify(config));
        this.isEnabled = false;
        this.showNotification('Auto-Push deaktiviert', 'info');
    }

    /**
     * Publish lesson with auto-deploy
     */
    async publishLesson(lessonData) {
        if (!this.isEnabled) {
            this.showNotification('Auto-Push ist deaktiviert', 'warning');
            return false;
        }

        try {
            this.showNotification('Lektion wird veröffentlicht...', 'info');

            // 1. Capture lesson state
            const snapshot = this.captureLessonState(lessonData);
            
            // 2. Generate lesson JSON
            const lessonJson = this.generateLessonJson(snapshot);
            
            // 3. Save to lessons/ directory
            await this.saveLessonFile(lessonJson);
            
            // 4. Update lesson index
            await this.updateLessonIndex(lessonJson);
            
            // 5. Commit to Git (via GitHub API or Actions)
            await this.commitToGit(lessonJson);
            
            // 6. Trigger deployment
            await this.triggerDeployment();
            
            // 7. Notify friends
            await this.notifyFriends(lessonJson);

            this.showNotification('Lektion erfolgreich veröffentlicht!', 'success');
            return true;

        } catch (error) {
            console.error('Auto-push failed:', error);
            this.showNotification('Fehler beim Veröffentlichen: ' + error.message, 'error');
            return false;
        }
    }

    /**
     * Capture current lesson state
     */
    captureLessonState(lessonData) {
        const appData = JSON.parse(localStorage.getItem('aiTrackerData') || '{}');
        
        return {
            timestamp: new Date().toISOString(),
            lesson: lessonData.lesson || 'Unbekannte Lektion',
            duration: lessonData.duration || '0 Stunden',
            topics: lessonData.topics || [],
            yourNotes: lessonData.notes || '',
            links: lessonData.links || [],
            keyInsights: lessonData.insights || [],
            documentsAdded: this.getNewDocuments(appData),
            progressBefore: lessonData.progressBefore || 0,
            progressAfter: appData.overallProgress || 0,
            phases: appData.phases || [],
            examParts: appData.examParts || [],
            documents: appData.documents || [],
            notes: appData.notes || []
        };
    }

    /**
     * Generate lesson JSON for sharing
     */
    generateLessonJson(snapshot) {
        return {
            date: new Date().toISOString().split('T')[0],
            lesson: snapshot.lesson,
            duration: snapshot.duration,
            topics: snapshot.topics,
            yourNotes: snapshot.yourNotes,
            links: snapshot.links,
            keyInsights: snapshot.keyInsights,
            documentsAdded: snapshot.documentsAdded,
            progressBefore: snapshot.progressBefore,
            progressAfter: snapshot.progressAfter,
            autoDeployed: true,
            deployedAt: new Date().toISOString(),
            // Additional data for friends
            phases: snapshot.phases,
            examParts: snapshot.examParts,
            documents: snapshot.documents,
            notes: snapshot.notes
        };
    }

    /**
     * Save lesson file to lessons/ directory
     */
    async saveLessonFile(lessonJson) {
        const fileName = `day-${this.getDayNumber()}.json`;
        const filePath = `${this.lessonsDir}${fileName}`;
        
        // In a real implementation, this would save to the file system
        // For now, we'll store in localStorage as a simulation
        const lessons = JSON.parse(localStorage.getItem('lessons') || '{}');
        lessons[fileName] = lessonJson;
        localStorage.setItem('lessons', JSON.stringify(lessons));
        
        console.log(`Lesson saved to ${filePath}`);
    }

    /**
     * Update lesson index
     */
    async updateLessonIndex(lessonJson) {
        const index = JSON.parse(localStorage.getItem('lessonIndex') || '[]');
        
        const lessonEntry = {
            id: this.getDayNumber(),
            date: lessonJson.date,
            lesson: lessonJson.lesson,
            progress: lessonJson.progressAfter,
            topics: lessonJson.topics,
            keyInsights: lessonJson.keyInsights,
            deployedAt: lessonJson.deployedAt
        };
        
        index.push(lessonEntry);
        localStorage.setItem('lessonIndex', JSON.stringify(index));
        
        console.log('Lesson index updated');
    }

    /**
     * Commit to Git (simulated)
     */
    async commitToGit(lessonJson) {
        // In a real implementation, this would use GitHub API
        // For now, we'll simulate the commit
        const commitMessage = `Auto-update: ${lessonJson.lesson} - ${lessonJson.date}`;
        
        console.log(`Git commit: ${commitMessage}`);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        return true;
    }

    /**
     * Trigger deployment
     */
    async triggerDeployment() {
        // In a real implementation, this would trigger GitHub Actions
        console.log('Triggering GitHub Pages deployment...');
        
        // Simulate deployment delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        return true;
    }

    /**
     * Notify friends of new content
     */
    async notifyFriends(lessonJson) {
        // In a real implementation, this would send notifications
        console.log('Notifying friends of new lesson content...');
        
        const notification = {
            type: 'new_lesson',
            lesson: lessonJson.lesson,
            date: lessonJson.date,
            progress: lessonJson.progressAfter,
            url: `https://sensaixo.github.io/AI-Business-Specialist26/explore.html#day-${this.getDayNumber()}`
        };
        
        // Store notification for friends to see
        const notifications = JSON.parse(localStorage.getItem('friendNotifications') || '[]');
        notifications.push(notification);
        localStorage.setItem('friendNotifications', JSON.stringify(notifications));
        
        return true;
    }

    /**
     * Get new documents since last lesson
     */
    getNewDocuments(appData) {
        const lastLesson = localStorage.getItem('lastLessonDocuments') || '[]';
        const lastDocuments = JSON.parse(lastLesson);
        const currentDocuments = appData.documents || [];
        
        const newDocuments = currentDocuments.filter(doc => 
            !lastDocuments.some(lastDoc => lastDoc.id === doc.id)
        );
        
        // Update last lesson documents
        localStorage.setItem('lastLessonDocuments', JSON.stringify(currentDocuments));
        
        return newDocuments;
    }

    /**
     * Get day number for lesson
     */
    getDayNumber() {
        const startDate = new Date('2025-10-22'); // Course start date
        const today = new Date();
        const diffTime = today - startDate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return Math.max(1, diffDays);
    }

    /**
     * Show notification to user
     */
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 8px;
            color: white;
            font-weight: bold;
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;
        
        // Set background color based on type
        const colors = {
            success: '#27ae60',
            error: '#e74c3c',
            warning: '#f39c12',
            info: '#3498db'
        };
        notification.style.backgroundColor = colors[type] || colors.info;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    /**
     * Get lesson history
     */
    getLessonHistory() {
        const index = JSON.parse(localStorage.getItem('lessonIndex') || '[]');
        return index.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    /**
     * Get friend notifications
     */
    getFriendNotifications() {
        return JSON.parse(localStorage.getItem('friendNotifications') || '[]');
    }

    /**
     * Clear friend notifications
     */
    clearFriendNotifications() {
        localStorage.removeItem('friendNotifications');
    }
}

// Export for global use
window.AutoPushSystem = AutoPushSystem;

// Auto-initialize if in browser
if (typeof window !== 'undefined') {
    // Add CSS for notifications
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}
