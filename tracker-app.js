// AI Business Specialist Tracker App
// German Language Course Management System

class AITrackerApp {
    constructor() {
        this.data = this.loadData();
        this.initializeApp();
    }

    // Load data from localStorage
    loadData() {
        const defaultData = {
            courseInfo: {
                startDate: '2025-10-22',
                duration: 16,
                vorabklarung: 'Pz-23949-340304',
                goal: 'Eidgenössischer Fachausweis'
            },
            phases: [
                {
                    id: 1,
                    title: 'Phase 1: Grundlagen',
                    duration: 'Woche 1-4 (22.10 - 19.11.2025)',
                    progress: 100,
                    status: 'completed',
                    competencyAreas: ['A', 'B'],
                    description: 'Strategisch mit KI arbeiten, Chancen identifizieren'
                },
                {
                    id: 2,
                    title: 'Phase 2: Lösungsentwicklung',
                    duration: 'Woche 5-8 (19.11 - 17.12.2025)',
                    progress: 25,
                    status: 'current',
                    competencyAreas: ['C', 'D'],
                    description: 'Lösungen entwickeln, Einführung steuern'
                },
                {
                    id: 3,
                    title: 'Phase 3: Management',
                    duration: 'Woche 9-12 (17.12.2025 - 14.01.2026)',
                    progress: 0,
                    status: 'pending',
                    competencyAreas: ['E', 'F'],
                    description: 'Einsatz leiten, Stakeholder beraten'
                },
                {
                    id: 4,
                    title: 'Phase 4: Prüfungsvorbereitung',
                    duration: 'Woche 13-16 (14.01 - 11.02.2026)',
                    progress: 0,
                    status: 'pending',
                    competencyAreas: ['A', 'B', 'C', 'D', 'E', 'F'],
                    description: 'Alle Bereiche A-F, Prüfungsvorbereitung'
                }
            ],
            examParts: [
                {
                    id: 1,
                    title: 'Teil 1: Identifikation & Prüfung einer KI-Einsatzmöglichkeit',
                    weight: 50,
                    time: 45,
                    format: 'Präsentation + Fachgespräch',
                    areas: ['B', 'C'],
                    status: 'in-progress',
                    description: 'Reales Projekt aus beruflichem Kontext',
                    details: {
                        presentation: '15 Minuten vor Entscheidungsgremium',
                        discussion: '30 Minuten mit Experten',
                        content: 'KI-Einsatzmöglichkeiten identifizieren, Lösungsansätze entwickeln, Machbarkeit prüfen',
                        focus: 'Praktische Bezüge und Transferleistungen'
                    }
                },
                {
                    id: 2,
                    title: 'Teil 2: Integration von KI-basierten Lösungen',
                    weight: 25,
                    time: 120,
                    format: 'Fallstudien, schriftlich',
                    areas: ['A', 'B', 'C', 'D', 'E', 'F'],
                    status: 'pending',
                    description: 'Praxisnahe Situationen und Szenarien',
                    details: {
                        content: 'Strategische Grundlagen, KI-Einsatzmöglichkeiten identifizieren, Lösungen entwickeln',
                        competence: 'Komplexe Problemstellungen in Organisationen bewältigen',
                        areas: 'Alle Handlungskompetenzbereiche A-F'
                    }
                },
                {
                    id: 3,
                    title: 'Teil 3: Herausforderungen beim Einsatz von KI',
                    weight: 25,
                    time: 60,
                    format: 'Critical Incidents, mündlich',
                    areas: ['E', 'F'],
                    status: 'pending',
                    description: 'Schwierige/problematiche Arbeitssituationen',
                    details: {
                        analysis: '30 Minuten für Ausgangssituation',
                        discussion: '30 Minuten mit Experten',
                        content: 'KI-Einführung, Steuerung, Optimierung, Beratung von Anspruchsgruppen',
                        competence: 'Handlungsoptionen erläutern, priorisierte Option begründen'
                    }
                }
            ],
            documents: [
                // Day 1 Learning Content
                {
                    id: 1,
                    title: 'Finanz- & Treuhandwesen',
                    description: 'Automatisierte Belegverarbeitung (SwissFinanceAI) - 50-70% weniger manuelle Arbeit',
                    category: 'day1',
                    status: 'completed',
                    dateAdded: '2025-10-22'
                },
                {
                    id: 2,
                    title: 'Medizin & Gesundheitswesen',
                    description: 'Früherkennung von Krebs, medizinische Bildanalyse, Krankenhaus-Datenbanken',
                    category: 'day1',
                    status: 'completed',
                    dateAdded: '2025-10-22'
                },
                {
                    id: 3,
                    title: 'KI-Avatar & Chatbots',
                    description: 'Bestattungsunternehmen, Legacy-Avatare, ethische Herausforderungen',
                    category: 'day1',
                    status: 'completed',
                    dateAdded: '2025-10-22'
                },
                {
                    id: 4,
                    title: 'KI-Schauspieler',
                    description: 'Entertainment-Industrie, ethische Grenzen',
                    category: 'day1',
                    status: 'completed',
                    dateAdded: '2025-10-22'
                },
                {
                    id: 5,
                    title: 'Risiken & Grenzen',
                    description: 'Datenschutz (DSG/Cloud Act), Erklärbarkeit, Falschanalysen, Ethik',
                    category: 'day1',
                    status: 'completed',
                    dateAdded: '2025-10-22'
                },
                {
                    id: 6,
                    title: 'Swiss-hosted Systeme',
                    description: 'Vertrauenswürdige KI braucht kontrollierte, lokale Systeme',
                    category: 'day1',
                    status: 'completed',
                    dateAdded: '2025-10-22'
                },
                {
                    id: 7,
                    title: 'Projektmanagement - Antrag Prozess',
                    description: 'Template-basierter Antrag-Workflow: Idee → Template → Antrag → Prüfung → Sponsor/Auftraggeber → Bewilligung',
                    category: 'day1',
                    status: 'completed',
                    dateAdded: '2025-10-22',
                    details: {
                        process: [
                            '1. Template beschaffen für Antrag',
                            '2. Liefert Template (Project Office)',
                            '3. Reicht Antrag ein',
                            '4. Formelle Prüfung des Antrags',
                            '5. Suchen Sponsor & Auftraggeber',
                            '6. Bewilligungsgremium',
                            '7. Vorstand (bei grossen Projekten)',
                            '8. Entscheiden'
                        ],
                        keyElements: [
                            'Antragsteller (Applicant)',
                            'Project Office (Template Provider)',
                            'Sponsor (Funding)',
                            'Auftraggeber (Client/Customer)',
                            'Bewilligungsgremium (Approval Committee)',
                            'Vorstand (Board for large projects)'
                        ],
                        templateStructure: [
                            'Projektbeschreibung',
                            'Ziele & Nutzen',
                            'Ressourcenbedarf',
                            'Zeitplan',
                            'Kosten',
                            'Sponsor/Auftraggeber',
                            'Risikobewertung'
                        ]
                    }
                },
                {
                    id: 8,
                    title: 'MASTER PM FRAMEWORK - Institutionelles & Funktionelles PM',
                    description: 'COMPLETE PROJECT MANAGEMENT SYSTEM - Once you learn this, you can do ALL of PM!',
                    category: 'day1',
                    status: 'completed',
                    dateAdded: '2025-10-22',
                    priority: 'Hochpriorität',
                    details: {
                        institutionalPM: {
                            title: 'Institutionelles PM (Organizational Structure)',
                            roles: [
                                'Antragsteller (Applicant)',
                                'Rahmenprojektorganisation (Framework Project Organization)',
                                'Leitung Betriebstechnik (Operations Technology Management)',
                                'Leitung Forschung & Entwicklung (R&D Management)',
                                'Leitung IT/Organisation (IT/Organization Management)',
                                'Auftraggeber (Client/Customer)',
                                'Vorstand (Geschäftsleitung) - Board of Directors',
                                'Projektservicestelle (Project Office)',
                                'Sponsor',
                                'Bewilligungsgremium (Decision Committee)',
                                'Funktionale Beteiligte (Functional Stakeholders)',
                                'Fachbereiche (Departments)',
                                'Einzelprojektorganisation (Individual Project Organization)',
                                'Projekt-Controlling (Project Controlling)',
                                'Informations-Management (Information Management)',
                                'Lenkungsausschuss (Steering Committee)',
                                'Review-Team',
                                'Projektleiter (Project Manager)',
                                'Beratungs-Gremium (Advisory Board)',
                                'Kernteam (Core Team)',
                                'Änderungs-/Konfigmanagement (Change/Configuration Management)'
                            ],
                            functionalStakeholders: [
                                'Fachbeauftragte (Umwelt/Qualität/Sicherheit/Datenschutz)',
                                'Mitarbeitervorbereitung (Employee Preparation)',
                                'Revision (Audit)',
                                'Beschaffung (Procurement)',
                                'Controlling',
                                'Personal (HR)'
                            ],
                            departments: [
                                'Fachbereichsleitung (Department Head)',
                                'Benutzervertretung (User Representation)',
                                'Fachbereichskoordination (Department Coordination)',
                                'Betroffene Mitarbeiter (Affected Employees)'
                            ]
                        },
                        functionalPM: {
                            title: 'Funktionelles PM (Process Lifecycle)',
                            phases: [
                                {
                                    name: 'Projektstart (Project Start)',
                                    activities: [
                                        'Kick-off Meeting',
                                        '1st Projektmeeting (1st Project Meeting)'
                                    ]
                                },
                                {
                                    name: 'Planungsphase (Planning Phase)',
                                    activities: [
                                        'Methode festlegen (z.B. Phasenmodell)',
                                        'Planungstiefe festlegen (Define Planning Depth)',
                                        'Projektstrukturplan (Project Structure Plan)',
                                        'Ablauf / Terminplan (Process / Schedule Plan)',
                                        'Einsatzmittelplanung (Resource Planning)',
                                        'Kosten / Finanzmittelplanung (Cost / Financial Planning)',
                                        'Vergabe der Arbeitspakete (Assignment of Work Packages)'
                                    ],
                                    pspStructure: [
                                        '1. Projekt (Project)',
                                        '2. Teilprojekte (Sub-projects)',
                                        '3. Teilaufgaben (Sub-tasks)',
                                        '4. Arbeitspakete (Work Packages)',
                                        '5. PSP Codes vergeben (Assign PSP Codes)'
                                    ],
                                    planningMethods: [
                                        '1. Top Down',
                                        '2. Bottom Up',
                                        '3. Abschl. prüfen (Check completion)',
                                        '4. Arbeitspakete (Work Packages)'
                                    ],
                                    scheduleProcess: [
                                        '1. Arbeitspakete detaillieren (Detail work packages)',
                                        '2. Abläufe festlegen (Define processes)',
                                        '3. Ablaufplan in Terminplan überführen (Transfer process plan to schedule)',
                                        '4. Ablauf- und Terminplan abstimmen (Coordinate process and schedule plan)',
                                        '5. Ausführungsplan verabschieden (Approve execution plan)'
                                    ]
                                },
                                {
                                    name: 'Projektsteuerung (Project Control)',
                                    activities: [
                                        'Welche Kostenarten kennen wir? (What types of costs do we know?)',
                                        'Planungs-Kontrollprozess (Planning-Control Process)',
                                        'Balkenplan für die Vorstudie (Gantt Chart for Preliminary Study)'
                                    ],
                                    controlProcess: [
                                        '1. Richtig erfasst? (Correctly recorded?)',
                                        '2. Richtig weitergeleitet? (Correctly forwarded?)',
                                        '3. Soll-/Ist-Vergleich (Target/Actual Comparison)',
                                        '4. Abweichungsanalyse (Variance Analysis)'
                                    ],
                                    note: 'Vorzugsweise eine Verknüpfung herstellen für die IST-Erfassung mit der Zeiterfassung (Preferably establish a link for actual recording with time tracking)'
                                },
                                {
                                    name: 'Projektabschluss / Phasenabschluss (Project Closure / Phase Closure)',
                                    activities: [
                                        'Abschlussbesprechung (intern Projektteam) - Final Meeting (internal Project Team)',
                                        'Abschlussbericht (Final Report)',
                                        'Erhaltungsplan (Maintenance Plan)',
                                        'Antrag auf Abnahme (Request for Acceptance)',
                                        'Abschlussbesprechung (extern Auftraggeber) - Final Meeting (external Client)',
                                        'Formale Übergabe (Formal Handover)'
                                    ]
                                }
                            ]
                        },
                        keyInsights: [
                            'This is the MASTER PM framework - learn this and you can do ALL of PM!',
                            'Combines organizational structure (WHO) with process lifecycle (HOW)',
                            'Complete institutional embedding with functional process flow',
                            'Covers all stakeholders from Board to individual employees',
                            'Full lifecycle from initiation to formal handover',
                            'Includes planning, control, and closure methodologies'
                        ]
                    }
                },
                {
                    id: 9,
                    title: 'PDF Creation Tools - Fast Business Solutions',
                    description: 'MAJOR: Fast PDF creation for business presentations - gamma.app & manus.im solutions',
                    category: 'day1',
                    status: 'completed',
                    dateAdded: '2025-10-22',
                    priority: 'Hochpriorität',
                    details: {
                        tools: [
                            {
                                name: 'gamma.app',
                                type: 'AI-Powered Presentation',
                                features: [
                                    'Fast AI-generated presentations',
                                    'Professional business templates',
                                    'One-click PDF export',
                                    'Real-time collaboration',
                                    'Custom branding'
                                ],
                                useCase: 'Quick professional presentations for stakeholders',
                                speed: 'Very Fast (minutes)',
                                quality: 'High (AI-optimized)'
                            },
                            {
                                name: 'manus.im',
                                type: 'Business Document Generator',
                                features: [
                                    'Fast PDF generation',
                                    'Business document templates',
                                    'Professional formatting',
                                    'Bulk document creation',
                                    'API integration'
                                ],
                                useCase: 'Rapid business document creation',
                                speed: 'Extremely Fast (seconds)',
                                quality: 'Professional'
                            }
                        ],
                        businessValue: [
                            'MAJOR advantage: Fast PDF creation for business',
                            'Show solutions quickly to stakeholders',
                            'Professional presentation in minutes',
                            'Competitive edge in proposal speed',
                            'Time-saving for project deliverables'
                        ],
                        implementation: [
                            'Integrate gamma.app for presentations',
                            'Use manus.im for document generation',
                            'Create PDF templates for PM framework',
                            'Automate business document creation',
                            'Show solutions fast to decision makers'
                        ]
                    }
                },
                {
                    id: 10,
                    title: 'Multi-Monitor Setup - MAXIMUM Productivity',
                    description: 'CRAZY setup for web access, modeling tools, mouse control - Multi-monitor productivity system',
                    category: 'day1',
                    status: 'completed',
                    dateAdded: '2025-10-22',
                    priority: 'Hochpriorität',
                    details: {
                        setup: {
                            primary: 'Main monitor for AI Business Specialist Tracker',
                            secondary: 'Reference materials, documentation, research',
                            tertiary: 'Communication, email, collaboration tools',
                            mobile: 'Portable monitor for flexible workspace'
                        },
                        tools: [
                            {
                                name: 'Modelierungenswerkzeug',
                                purpose: 'AI/ML modeling and visualization',
                                setup: 'Dedicated monitor for complex modeling interfaces',
                                benefit: 'Full screen real estate for complex diagrams'
                            },
                            {
                                name: 'Mouse Control System',
                                purpose: 'Precision control across multiple screens',
                                setup: 'High-DPI mouse with multi-screen support',
                                benefit: 'Seamless workflow across all monitors'
                            },
                            {
                                name: 'Web Access Optimization',
                                purpose: 'Multiple browser windows, tabs, applications',
                                setup: 'Each monitor dedicated to specific tasks',
                                benefit: 'No switching between applications'
                            }
                        ],
                        productivity: [
                            'MAJOR productivity multiplier - 3x efficiency',
                            'No context switching between applications',
                            'Full visibility of all tools simultaneously',
                            'Modeling tools get dedicated screen space',
                            'Reference materials always visible',
                            'Communication tools never hidden'
                        ],
                        workspace: [
                            'Monitor 1: AI Business Specialist Tracker (main focus)',
                            'Monitor 2: PM Framework diagrams, reference docs',
                            'Monitor 3: Communication, email, collaboration',
                            'Mobile Monitor: Flexible positioning for different tasks',
                            'Modeling Tool: Dedicated screen for complex visualizations'
                        ],
                        benefits: [
                            'CRAZY setup = MAXIMUM productivity',
                            'Web access questions become trivial',
                            'Modeling tools have full screen real estate',
                            'Mouse control across all screens seamlessly',
                            'No application switching overhead',
                            'Complete visibility of all work streams'
                        ]
                    }
                },
                {
                    id: 11,
                    title: 'Samstag - Vor Ort Unterricht',
                    description: 'WICHTIG: Samstag ist kein Online-Unterricht, sondern VOR ORT Präsenzunterricht',
                    category: 'day1',
                    status: 'completed',
                    dateAdded: '2025-10-22',
                    priority: 'Hochpriorität',
                    details: {
                        schedule: {
                            day: 'Samstag',
                            type: 'Vor Ort (Präsenzunterricht)',
                            location: 'TBD - Check course details',
                            format: 'Face-to-face learning',
                            preparation: 'Bring all materials, laptop, notes'
                        },
                        preparation: [
                            'Check exact location and time',
                            'Prepare all Day 1 materials',
                            'Bring laptop for digital work',
                            'Print important documents if needed',
                            'Prepare questions for instructor',
                            'Review PM Framework before class'
                        ],
                        benefits: [
                            'Direct interaction with instructor',
                            'Hands-on learning experience',
                            'Network with other students',
                            'Immediate feedback and clarification',
                            'Group work and collaboration',
                            'Real-time problem solving'
                        ],
                        considerations: [
                            'Plan travel time to location',
                            'Ensure all materials are ready',
                            'Prepare for interactive learning',
                            'Bring backup power for laptop',
                            'Have questions ready for discussion',
                            'Network with fellow students'
                        ]
                    }
                },
                // Open Tasks from Day 1
                {
                    id: 7,
                    title: 'ICT-Berufsbildung Registrierung',
                    description: 'Qualifikationsprofil review, Registrierung abschließen',
                    category: 'tasks',
                    status: 'pending',
                    priority: 'high',
                    dateAdded: '2025-10-22'
                },
                {
                    id: 8,
                    title: 'Campus Login einrichten',
                    description: 'ipso.ch → Campus → "Login für Campus" mit lukas.huber@student.ipso.ch',
                    category: 'tasks',
                    status: 'pending',
                    priority: 'high',
                    dateAdded: '2025-10-22'
                },
                {
                    id: 9,
                    title: 'Teams Zugang überprüfen',
                    description: 'Alle Kurs-Kanäle gefunden, Teams-Einladungen erhalten',
                    category: 'tasks',
                    status: 'pending',
                    priority: 'high',
                    dateAdded: '2025-10-22'
                },
                {
                    id: 10,
                    title: 'Dossier für ICT hochladen',
                    description: 'Auf Campus: Bereich für Dossier-Upload finden, Dokumente vorbereiten',
                    category: 'tasks',
                    status: 'pending',
                    priority: 'medium',
                    dateAdded: '2025-10-22'
                },
                {
                    id: 11,
                    title: 'Leitfaden für schriftliche Arbeiten',
                    description: '"Leitfaden für schriftliche Arbeiten 2.0.pdf" - Wichtig für 25% Gewichtung!',
                    category: 'tasks',
                    status: 'pending',
                    priority: 'medium',
                    dateAdded: '2025-10-22'
                },
                // Course Materials
                {
                    id: 12,
                    title: 'Unit 1: Grundlagenwissen',
                    description: 'Umfeldanalyse und KI',
                    category: 'course',
                    status: 'completed',
                    dateAdded: '2025-10-22'
                },
                {
                    id: 13,
                    title: 'Unit 2: Recherche & Analyse',
                    description: 'Externe Einflüsse und Faktoren',
                    category: 'course',
                    status: 'completed',
                    dateAdded: '2025-10-22'
                },
                {
                    id: 14,
                    title: 'Projekt Framework',
                    description: 'Grundstruktur für Teil 1 Prüfung',
                    category: 'project',
                    status: 'in-progress',
                    dateAdded: '2025-10-22'
                }
            ],
            admissionRequirements: [
                {
                    id: 1,
                    title: 'Option A: ICT-Berufserfahrung',
                    description: 'Eidgenössisches Fähigkeitszeugnis ICT + mindestens 2 Jahre einschlägige Berufspraxis',
                    status: 'pending',
                    category: 'admission'
                },
                {
                    id: 2,
                    title: 'Option B: Allgemeine Berufserfahrung',
                    description: 'Fähigkeitszeugnis/Maturität + mindestens 4 Jahre Berufspraxis (davon 2 Jahre in Projekt-/Produkt-/Prozessmanagement)',
                    status: 'pending',
                    category: 'admission'
                },
                {
                    id: 3,
                    title: 'Prüfungsgebühr',
                    description: 'Nach bestätigter Zulassung zu entrichten',
                    status: 'pending',
                    category: 'admission'
                }
            ],
            examConditions: [
                {
                    id: 1,
                    title: 'Bestehen der Prüfung',
                    description: 'Keine Prüfungsteilnote unter 4.0, Gesamtnote gewichtet',
                    status: 'pending',
                    category: 'exam'
                },
                {
                    id: 2,
                    title: 'Notenskala',
                    description: '6.0 (beste) bis 1.0 (schlechteste), Note 4.0 = genügend',
                    status: 'completed',
                    category: 'exam'
                },
                {
                    id: 3,
                    title: 'Wiederholung',
                    description: 'Maximal 2 Wiederholungen, nur ungenügende Teile wiederholen',
                    status: 'pending',
                    category: 'exam'
                },
                {
                    id: 4,
                    title: 'Titel nach Bestehen',
                    description: '"AI Business Specialist mit eidgenössischem Fachausweis"',
                    status: 'pending',
                    category: 'exam'
                }
            ],
            notes: [
                {
                    id: 1,
                    title: 'Tag 1 - MASTER PM FRAMEWORK + Samstag Vor Ort',
                    content: 'GELERNT: Das MASTER Projektmanagement Framework! Institutionelles PM (WHO - alle Rollen von Vorstand bis Mitarbeiter) + Funktionelles PM (HOW - komplette Prozess-Lebenszyklus). Dies ist das UMFASSENDE System - wer das lernt, kann ALLES in PM! WICHTIG: Samstag ist VOR ORT Präsenzunterricht (nicht online) - direkte Interaktion mit Instructor, Hands-on Learning, Networking mit anderen Studenten. Vollständige Organisationsstruktur mit allen Stakeholdern + komplette Prozessphasen von Projektstart bis formale Übergabe. Das ist der GOLDSCHATZ des PM!',
                    category: 'learning',
                    date: '2025-10-22',
                    tags: ['MASTER-PM', 'Institutionelles-PM', 'Funktionelles-PM', 'Samstag-Vor-Ort', 'Präsenzunterricht', 'GOLDSCHATZ']
                }
            ],
            overallProgress: 25
        };

        const savedData = localStorage.getItem('aiTrackerData');
        return savedData ? JSON.parse(savedData) : defaultData;
    }

    // Save data to localStorage
    saveData() {
        localStorage.setItem('aiTrackerData', JSON.stringify(this.data));
    }

    // Initialize the app
    initializeApp() {
        this.renderPhases();
        this.renderExamParts();
        this.renderDocuments();
        this.updateOverallProgress();
        this.setupEventListeners();
        this.ensureModalsHidden();
    }

    // Ensure all modals are hidden on page load
    ensureModalsHidden() {
        const modals = ['progressModal', 'documentModal', 'noteModal'];
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('hidden');
                // Force hide with inline style as backup
                modal.style.display = 'none';
            }
        });
        
        // Additional check after a short delay
        setTimeout(() => {
            modals.forEach(modalId => {
                const modal = document.getElementById(modalId);
                if (modal && !modal.classList.contains('hidden')) {
                    modal.classList.add('hidden');
                    modal.style.display = 'none';
                }
            });
        }, 100);
    }

    // Render phases
    renderPhases() {
        const phasesContainer = document.querySelector('.progress-section');
        const phasesHTML = this.data.phases.map(phase => `
            <div class="phase-card ${phase.status}">
                <div class="phase-title">${phase.title}</div>
                <div class="phase-duration">${phase.duration}</div>
                <div class="phase-progress">
                    <div class="phase-progress-bar ${phase.status}" style="width: ${phase.progress}%"></div>
                </div>
                <div class="competency-areas">
                    ${phase.competencyAreas.map(area => `
                        <div class="competency-area ${this.getCompetencyStatus(area, phase.status)}">${area}: ${this.getCompetencyName(area)}</div>
                    `).join('')}
                </div>
            </div>
        `).join('');

        phasesContainer.innerHTML = `
            <h2 class="section-title">📚 Kurs Phasen</h2>
            ${phasesHTML}
        `;
    }

    // Render exam parts
    renderExamParts() {
        const examContainer = document.querySelector('.exam-section');
        const examHTML = this.data.examParts.map(exam => `
            <div class="exam-part">
                <div class="exam-part-title">${exam.title}</div>
                <div class="exam-part-info">
                    <div class="exam-info-item">
                        <div class="exam-info-label">Gewichtung</div>
                        <div class="exam-info-value">${exam.weight}%</div>
                    </div>
                    <div class="exam-info-item">
                        <div class="exam-info-label">Zeit</div>
                        <div class="exam-info-value">${exam.time} min</div>
                    </div>
                    <div class="exam-info-item">
                        <div class="exam-info-label">Format</div>
                        <div class="exam-info-value">${exam.format}</div>
                    </div>
                    <div class="exam-info-item">
                        <div class="exam-info-label">Bereiche</div>
                        <div class="exam-info-value">${exam.areas.join('-')}</div>
                    </div>
                </div>
                <div class="exam-status">
                    <div class="status-indicator status-${exam.status}"></div>
                    <span>${this.getStatusText(exam.status)}</span>
                </div>
            </div>
        `).join('');

        examContainer.innerHTML = `
            <h2 class="section-title">🎯 Prüfungsteile</h2>
            ${examHTML}
        `;
    }

    // Render documents
    renderDocuments() {
        const documentsContainer = document.querySelector('.documents-section');
        const categories = ['day1', 'tasks', 'course', 'project', 'exam'];
        const categoryNames = {
            'day1': 'Tag 1 Lerninhalte',
            'tasks': 'Tag 1 Aufgaben (Open Tasks)',
            'course': 'Kursunterlagen',
            'project': 'Projekt Dokumente',
            'exam': 'Prüfungsvorbereitung'
        };

        const documentsHTML = categories.map(category => {
            const categoryDocs = this.data.documents.filter(doc => doc.category === category);
            if (categoryDocs.length === 0) return '';

            return `
                <div class="document-category">
                    <h3 class="category-title">${categoryNames[category]}</h3>
                    <div class="document-list">
                        ${categoryDocs.map(doc => `
                            <div class="document-item ${doc.status}">
                                <div class="document-title">${doc.title}</div>
                                <div class="document-description">${doc.description}</div>
                                <div class="document-status">
                                    <div class="status-icon status-${doc.status}"></div>
                                    <span>${doc.priority ? this.getPriorityText(doc.priority) : this.getStatusText(doc.status)}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');

        documentsContainer.innerHTML = `
            <h2 class="section-title">📁 Dokumente & Materialien</h2>
            ${documentsHTML}
        `;
    }

    // Update overall progress
    updateOverallProgress() {
        const totalProgress = this.data.phases.reduce((sum, phase) => sum + phase.progress, 0);
        const averageProgress = Math.round(totalProgress / this.data.phases.length);
        
        this.data.overallProgress = averageProgress;
        this.saveData();

        const progressCircle = document.querySelector('.progress-circle');
        const progressPercentage = document.querySelector('.progress-percentage');
        
        if (progressCircle && progressPercentage) {
            progressCircle.style.background = `conic-gradient(#3498db 0deg, #3498db ${averageProgress * 3.6}deg, #ecf0f1 ${averageProgress * 3.6}deg)`;
            progressPercentage.textContent = averageProgress + '%';
        }
    }

    // Get competency status
    getCompetencyStatus(area, phaseStatus) {
        if (phaseStatus === 'completed') return 'mastered';
        if (phaseStatus === 'current') return 'current';
        return '';
    }

    // Get competency name
    getCompetencyName(area) {
        const names = {
            'A': 'Strategisch',
            'B': 'Chancen',
            'C': 'Lösungen',
            'D': 'Einführung',
            'E': 'Einsatz',
            'F': 'Beratung'
        };
        return names[area] || area;
    }

    // Get status text
    getStatusText(status) {
        const statusTexts = {
            'pending': 'Ausstehend',
            'in-progress': 'In Bearbeitung',
            'completed': 'Abgeschlossen'
        };
        return statusTexts[status] || status;
    }

    // Get priority text
    getPriorityText(priority) {
        const priorityTexts = {
            'high': 'Hochpriorität',
            'medium': 'Wichtig',
            'low': 'Normal'
        };
        return priorityTexts[priority] || priority;
    }

    // Setup event listeners
    setupEventListeners() {
        // Progress form
        document.getElementById('progressForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.updateProgress();
        });

        // Document form
        document.getElementById('documentForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addDocument();
        });

        // Note form
        document.getElementById('noteForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addNote();
        });

        // Add modal close listeners
        this.setupModalCloseListeners();
    }

    // Setup modal close listeners
    setupModalCloseListeners() {
        const modals = ['progressModal', 'documentModal', 'noteModal'];
        
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (modal) {
                // Close on outside click
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        this.closeModal(modalId);
                    }
                });

                // Close on Escape key
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                        this.closeModal(modalId);
                    }
                });
            }
        });
    }

    // Update progress
    updateProgress() {
        const phaseId = parseInt(document.getElementById('phaseSelect').value);
        const progress = parseInt(document.getElementById('progressInput').value);
        const checkboxes = document.querySelectorAll('#progressForm input[type="checkbox"]:checked');
        const competencyAreas = Array.from(checkboxes).map(cb => cb.value);

        // Update phase
        const phase = this.data.phases.find(p => p.id === phaseId);
        if (phase) {
            phase.progress = progress;
            if (progress === 100) {
                phase.status = 'completed';
            } else if (progress > 0) {
                phase.status = 'current';
            }
        }

        this.saveData();
        this.renderPhases();
        this.updateOverallProgress();
        
        alert('Fortschritt wurde aktualisiert!');
        this.closeModal('progressModal');
    }

    // Add document
    addDocument() {
        const title = document.getElementById('documentTitle').value;
        const description = document.getElementById('documentDescription').value;
        const category = document.getElementById('documentCategory').value;
        const status = document.getElementById('documentStatus').value;

        const newDocument = {
            id: Date.now(),
            title: title,
            description: description,
            category: category,
            status: status,
            dateAdded: new Date().toISOString().split('T')[0]
        };

        this.data.documents.push(newDocument);
        this.saveData();
        this.renderDocuments();
        
        alert('Dokument wurde hinzugefügt!');
        this.closeModal('documentModal');
    }

    // Add note
    addNote() {
        const title = document.getElementById('noteTitle').value;
        const content = document.getElementById('noteContent').value;
        const category = document.getElementById('noteCategory').value;

        const newNote = {
            id: Date.now(),
            title: title,
            content: content,
            category: category,
            dateCreated: new Date().toISOString().split('T')[0]
        };

        this.data.notes.push(newNote);
        this.saveData();
        
        alert('Notiz wurde erstellt!');
        this.closeModal('noteModal');
    }

    // Cancel note creation
    cancelNote() {
        // Clear form
        document.getElementById('noteForm').reset();
        this.closeModal('noteModal');
    }

    // Modal functions
    openModal(modalType) {
        const modalId = modalType + 'Modal';
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    // Close modal when clicking outside
    closeModalOnOutsideClick(event, modalId) {
        if (event.target.classList.contains('modal')) {
            this.closeModal(modalId);
        }
    }

    // Export data
    exportData() {
        const dataStr = JSON.stringify(this.data, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'ai-tracker-data.json';
        link.click();
        URL.revokeObjectURL(url);
    }

    // Import data
    importData(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                this.data = importedData;
                this.saveData();
                this.initializeApp();
                alert('Daten wurden erfolgreich importiert!');
            } catch (error) {
                alert('Fehler beim Importieren der Daten!');
            }
        };
        reader.readAsText(file);
    }

    // Reset data
    resetData() {
        if (confirm('Möchten Sie wirklich alle Daten zurücksetzen?')) {
            localStorage.removeItem('aiTrackerData');
            location.reload();
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.aiTracker = new AITrackerApp();
    
    // Global functions for HTML
    window.openModal = (modalType) => window.aiTracker.openModal(modalType);
    window.closeModal = (modalId) => window.aiTracker.closeModal(modalId);
    window.cancelNote = () => window.aiTracker.cancelNote();
    
    // Add export/import buttons
    const actionButtons = document.querySelector('.action-buttons');
    if (actionButtons) {
        actionButtons.innerHTML += `
            <button class="btn btn-primary" onclick="window.aiTracker.exportData()">Daten exportieren</button>
            <button class="btn btn-warning" onclick="document.getElementById('importFile').click()">Daten importieren</button>
            <button class="btn btn-warning" onclick="window.aiTracker.resetData()">Zurücksetzen</button>
        `;
        
        // Add hidden file input
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.id = 'importFile';
        fileInput.accept = '.json';
        fileInput.style.display = 'none';
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                window.aiTracker.importData(e.target.files[0]);
            }
        });
        document.body.appendChild(fileInput);
    }
});
