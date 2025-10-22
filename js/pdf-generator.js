/**
 * PDF Generator for AI Business Specialist Tracker
 * Fast PDF creation for business presentations and documents
 */

class PDFGenerator {
    constructor() {
        this.templates = {
            pmFramework: this.getPMFrameworkTemplate(),
            lessonSummary: this.getLessonSummaryTemplate(),
            projectProposal: this.getProjectProposalTemplate()
        };
    }

    /**
     * Generate PDF from current app data
     */
    async generatePDF(type = 'lessonSummary', data = null) {
        try {
            const appData = data || JSON.parse(localStorage.getItem('aiTrackerData') || '{}');
            
            switch(type) {
                case 'pmFramework':
                    return await this.generatePMFrameworkPDF(appData);
                case 'lessonSummary':
                    return await this.generateLessonSummaryPDF(appData);
                case 'projectProposal':
                    return await this.generateProjectProposalPDF(appData);
                default:
                    return await this.generateLessonSummaryPDF(appData);
            }
        } catch (error) {
            console.error('PDF Generation Error:', error);
            throw new Error('PDF generation failed: ' + error.message);
        }
    }

    /**
     * Generate PM Framework PDF
     */
    async generatePMFrameworkPDF(data) {
        const content = this.createPMFrameworkContent(data);
        return await this.createPDF('AI Business Specialist - PM Framework', content);
    }

    /**
     * Generate Lesson Summary PDF
     */
    async generateLessonSummaryPDF(data) {
        const content = this.createLessonSummaryContent(data);
        return await this.createPDF('AI Business Specialist - Lesson Summary', content);
    }

    /**
     * Generate Project Proposal PDF
     */
    async generateProjectProposalPDF(data) {
        const content = this.createProjectProposalContent(data);
        return await this.createPDF('AI Business Specialist - Project Proposal', content);
    }

    /**
     * Create PDF using browser's print functionality
     */
    async createPDF(title, content) {
        // Create a new window for PDF generation
        const printWindow = window.open('', '_blank');
        
        const htmlContent = `
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        @page {
            size: A4;
            margin: 2cm;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #2c3e50;
            margin: 0;
            padding: 20px;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 3px solid #3498db;
            padding-bottom: 20px;
        }
        
        .header h1 {
            color: #2c3e50;
            font-size: 24px;
            margin-bottom: 10px;
        }
        
        .header .subtitle {
            color: #7f8c8d;
            font-size: 16px;
        }
        
        .section {
            margin-bottom: 25px;
            page-break-inside: avoid;
        }
        
        .section h2 {
            color: #3498db;
            font-size: 18px;
            margin-bottom: 15px;
            border-bottom: 2px solid #ecf0f1;
            padding-bottom: 5px;
        }
        
        .section h3 {
            color: #2c3e50;
            font-size: 16px;
            margin-bottom: 10px;
        }
        
        .content {
            margin-bottom: 15px;
        }
        
        .list {
            margin-left: 20px;
        }
        
        .list li {
            margin-bottom: 5px;
        }
        
        .highlight {
            background-color: #f39c12;
            color: white;
            padding: 2px 6px;
            border-radius: 3px;
            font-weight: bold;
        }
        
        .important {
            background-color: #e74c3c;
            color: white;
            padding: 2px 6px;
            border-radius: 3px;
            font-weight: bold;
        }
        
        .success {
            background-color: #27ae60;
            color: white;
            padding: 2px 6px;
            border-radius: 3px;
            font-weight: bold;
        }
        
        .footer {
            margin-top: 40px;
            text-align: center;
            font-size: 12px;
            color: #7f8c8d;
            border-top: 1px solid #ecf0f1;
            padding-top: 20px;
        }
        
        @media print {
            body { -webkit-print-color-adjust: exact; }
        }
    </style>
</head>
<body>
    ${content}
    <div class="footer">
        <p>AI Business Specialist Tracker - Generated on ${new Date().toLocaleDateString('de-DE')}</p>
        <p>https://sensaixo.github.io/AI-Business-Specialist26/</p>
    </div>
</body>
</html>`;

        printWindow.document.write(htmlContent);
        printWindow.document.close();
        
        // Wait for content to load, then trigger print
        setTimeout(() => {
            printWindow.print();
        }, 500);
        
        return true;
    }

    /**
     * Create PM Framework content
     */
    createPMFrameworkContent(data) {
        const pmDoc = data.documents.find(doc => doc.title.includes('MASTER PM FRAMEWORK'));
        
        if (!pmDoc) {
            return '<div class="section"><h2>PM Framework not found</h2><p>Please complete Day 1 content first.</p></div>';
        }

        return `
            <div class="header">
                <h1>🎯 MASTER PM FRAMEWORK</h1>
                <div class="subtitle">Complete Project Management System - Institutionelles & Funktionelles PM</div>
            </div>
            
            <div class="section">
                <h2>📋 Institutionelles PM (Organizational Structure)</h2>
                <div class="content">
                    <h3>Key Roles & Responsibilities:</h3>
                    <ul class="list">
                        ${pmDoc.details.institutionalPM.roles.map(role => `<li>${role}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="content">
                    <h3>Functional Stakeholders:</h3>
                    <ul class="list">
                        ${pmDoc.details.institutionalPM.functionalStakeholders.map(stakeholder => `<li>${stakeholder}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="content">
                    <h3>Department Structure:</h3>
                    <ul class="list">
                        ${pmDoc.details.institutionalPM.departments.map(dept => `<li>${dept}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="section">
                <h2>🔄 Funktionelles PM (Process Lifecycle)</h2>
                ${pmDoc.details.functionalPM.phases.map(phase => `
                    <div class="content">
                        <h3>${phase.name}</h3>
                        <ul class="list">
                            ${phase.activities.map(activity => `<li>${activity}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
            
            <div class="section">
                <h2>💡 Key Insights</h2>
                <ul class="list">
                    ${pmDoc.details.keyInsights.map(insight => `<li><span class="highlight">${insight}</span></li>`).join('')}
                </ul>
            </div>
        `;
    }

    /**
     * Create Lesson Summary content
     */
    createLessonSummaryContent(data) {
        const day1Docs = data.documents.filter(doc => doc.category === 'day1');
        const notes = data.notes || [];
        
        return `
            <div class="header">
                <h1>📚 AI Business Specialist - Day 1 Summary</h1>
                <div class="subtitle">Learning Progress: ${data.overallProgress || 0}% Complete</div>
            </div>
            
            <div class="section">
                <h2>🎯 Course Overview</h2>
                <div class="content">
                    <p><strong>Start Date:</strong> ${data.courseInfo.startDate}</p>
                    <p><strong>Duration:</strong> ${data.courseInfo.duration} weeks</p>
                    <p><strong>Goal:</strong> ${data.courseInfo.goal}</p>
                    <p><strong>Vorabklärung:</strong> ${data.courseInfo.vorabklarung}</p>
                </div>
            </div>
            
            <div class="section">
                <h2>📖 Day 1 Learning Content</h2>
                ${day1Docs.map(doc => `
                    <div class="content">
                        <h3>${doc.title}</h3>
                        <p>${doc.description}</p>
                        ${doc.priority ? `<p><span class="important">Priority: ${doc.priority}</span></p>` : ''}
                    </div>
                `).join('')}
            </div>
            
            <div class="section">
                <h2>📝 Key Learning Notes</h2>
                ${notes.map(note => `
                    <div class="content">
                        <h3>${note.title}</h3>
                        <p>${note.content}</p>
                        <p><strong>Tags:</strong> ${note.tags.join(', ')}</p>
                    </div>
                `).join('')}
            </div>
            
            <div class="section">
                <h2>📊 Progress Overview</h2>
                <div class="content">
                    ${data.phases.map(phase => `
                        <div style="margin-bottom: 15px;">
                            <h3>${phase.title}</h3>
                            <p><strong>Status:</strong> <span class="${phase.status === 'completed' ? 'success' : phase.status === 'current' ? 'highlight' : ''}">${phase.status}</span></p>
                            <p><strong>Progress:</strong> ${phase.progress}%</p>
                            <p><strong>Duration:</strong> ${phase.duration}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    /**
     * Create Project Proposal content
     */
    createProjectProposalContent(data) {
        return `
            <div class="header">
                <h1>🚀 AI Business Specialist Project Proposal</h1>
                <div class="subtitle">Professional Development & Certification Project</div>
            </div>
            
            <div class="section">
                <h2>📋 Project Overview</h2>
                <div class="content">
                    <p><strong>Project Name:</strong> AI Business Specialist Certification</p>
                    <p><strong>Duration:</strong> 16 weeks (4 months)</p>
                    <p><strong>Start Date:</strong> ${data.courseInfo.startDate}</p>
                    <p><strong>Expected Completion:</strong> February 2026</p>
                    <p><strong>Goal:</strong> ${data.courseInfo.goal}</p>
                </div>
            </div>
            
            <div class="section">
                <h2>🎯 Project Objectives</h2>
                <div class="content">
                    <ul class="list">
                        <li>Complete AI Business Specialist certification</li>
                        <li>Master comprehensive PM framework</li>
                        <li>Develop AI solution implementation skills</li>
                        <li>Build professional network and collaboration</li>
                        <li>Create portfolio of AI business solutions</li>
                    </ul>
                </div>
            </div>
            
            <div class="section">
                <h2>📚 Learning Framework</h2>
                <div class="content">
                    <h3>Phase 1: Grundlagen (Weeks 1-4)</h3>
                    <p>Strategic AI work, opportunity identification</p>
                    
                    <h3>Phase 2: Lösungsentwicklung (Weeks 5-8)</h3>
                    <p>Solution development, implementation steering</p>
                    
                    <h3>Phase 3: Management (Weeks 9-12)</h3>
                    <p>Implementation leadership, stakeholder advisory</p>
                    
                    <h3>Phase 4: Prüfungsvorbereitung (Weeks 13-16)</h3>
                    <p>All competency areas A-F, exam preparation</p>
                </div>
            </div>
            
            <div class="section">
                <h2>💼 Business Value</h2>
                <div class="content">
                    <ul class="list">
                        <li><span class="highlight">Professional Certification:</span> Eidgenössischer Fachausweis</li>
                        <li><span class="highlight">Skills Development:</span> Complete PM and AI expertise</li>
                        <li><span class="highlight">Career Advancement:</span> Senior AI Business Specialist role</li>
                        <li><span class="highlight">Network Building:</span> Professional collaboration and sharing</li>
                        <li><span class="highlight">Portfolio Creation:</span> Real-world AI solution implementations</li>
                    </ul>
                </div>
            </div>
        `;
    }

    /**
     * Get PM Framework template
     */
    getPMFrameworkTemplate() {
        return {
            title: 'MASTER PM FRAMEWORK',
            sections: ['Institutionelles PM', 'Funktionelles PM', 'Key Insights'],
            format: 'Professional Business Document'
        };
    }

    /**
     * Get Lesson Summary template
     */
    getLessonSummaryTemplate() {
        return {
            title: 'Lesson Summary',
            sections: ['Course Overview', 'Learning Content', 'Progress', 'Notes'],
            format: 'Educational Report'
        };
    }

    /**
     * Get Project Proposal template
     */
    getProjectProposalTemplate() {
        return {
            title: 'Project Proposal',
            sections: ['Overview', 'Objectives', 'Framework', 'Business Value'],
            format: 'Business Proposal'
        };
    }
}

// Export for global use
window.PDFGenerator = PDFGenerator;
