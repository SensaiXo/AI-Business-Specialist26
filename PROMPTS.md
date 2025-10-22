# AI Business Specialist Tracker - Cursor AI Prompts
**Sammlung von wiederverwendbaren Prompts für Cursor AI**

---

## 📋 Inhaltsverzeichnis

1. [Architektur-Review Prompt](#architektur-review-prompt)
2. [Projekt Setup Prompt](#projekt-setup-prompt)
3. [Feature Development Prompt](#feature-development-prompt)
4. [Security Check Prompt](#security-check-prompt)

---

## 🏗️ Architektur-Review Prompt

### Verwendung
```
Cursor Composer öffnen (CMD/CTRL + I)
→ Agent Mode aktivieren
→ Prompt kopieren und einfügen
→ Pfad zum Projekt angeben
→ /security im Chat eingeben
```

### Prompt

```
🏗️ ARCHITEKTUR-REVIEW: AI BUSINESS SPECIALIST TRACKER - PRODUKTIONSREIFE

=== MISSION ===
Ich benötige einen umfassenden Architektur-Review meines AI Business Specialist 
Tracker Projekts. Das Ziel ist es, eine STABILE, WARTBARE und PRODUKTIONSREIFE 
Web-Anwendung zu erstellen, die langfristig zuverlässig funktioniert.

=== PROJEKT-KONTEXT ===
- Single Page Application (HTML/CSS/JavaScript)
- LocalStorage für Datenpersistenz (keine Backend-Datenbank)
- Deployment: GitHub Pages oder Azure Static Web Apps
- Zielgruppe: Ich selbst (Business User, kein Entwickler-Hintergrund)
- Sprache: Vollständig auf Deutsch

=== REVIEW-BEREICHE (IN PRIORITÄTS-REIHENFOLGE) ===

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. DATEN-STABILITÄT & FEHLERBEHANDLUNG [KRITISCH]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔴 PRÜFPUNKTE:

✓ LocalStorage Verfügbarkeit & Fallback-Strategie
  - Prüfe Browser-Support (Private Mode, alte Browser)
  - Implementiere Memory-Fallback wenn localStorage blockiert ist
  - Zeige User-freundliche Warnmeldung bei Problemen
  
✓ Fehlerbehandlung für Storage-Operationen
  - Try-Catch für ALLE localStorage.setItem() Aufrufe
  - QuotaExceededError Detection (Storage voll)
  - SecurityError Handling (Private Browsing)
  - DOMException für andere Fehler
  
✓ Daten-Validierung & Integrität
  - JSON.parse() mit Error Handling
  - Schema-Validierung für gespeicherte Daten
  - Korrupte Daten erkennen und wiederherstellen
  - Backup vor kritischen Operationen
  
✓ Export/Import Robustheit
  - Validierung importierter JSON-Daten
  - Versions-Check (Migration alter Datenformate)
  - Fehlerhafte Imports abfangen ohne App-Crash

REFERENZ-CODE BEISPIELE:

// 1. Storage Availability Check
function isStorageAvailable() {
    try {
        const test = 'storage_test';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}

// 2. Safe Storage Wrapper
class SafeStorage {
    constructor() {
        this.storage = isStorageAvailable() 
            ? localStorage 
            : new MemoryStorage();
    }
    
    setItem(key, value) {
        try {
            this.storage.setItem(key, JSON.stringify(value));
            return { success: true };
        } catch (e) {
            if (e.name === 'QuotaExceededError') {
                return { success: false, error: 'QUOTA_EXCEEDED' };
            }
            return { success: false, error: 'STORAGE_ERROR' };
        }
    }
    
    getItem(key, defaultValue = null) {
        try {
            const item = this.storage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('Parse error:', e);
            return defaultValue;
        }
    }
}

// 3. Memory Fallback für Private Mode
class MemoryStorage {
    constructor() {
        this.data = {};
    }
    setItem(key, value) { this.data[key] = value; }
    getItem(key) { return this.data[key] || null; }
    removeItem(key) { delete this.data[key]; }
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. CODE-ARCHITEKTUR & STRUKTUR [HOCH]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟠 PRÜFPUNKTE:

✓ Modulare Komponenten-Struktur
  - Separation of Concerns (Model-View-Controller light)
  - Wiederverwendbare UI-Komponenten
  - Service-Layer für Business-Logik
  - Storage-Layer isoliert
  
✓ Namespacing & Globale Variablen
  - Vermeidung von global scope pollution
  - IIFE (Immediately Invoked Function Expressions)
  - Ein globales App-Objekt als Namespace
  
✓ Event-Handling & State Management
  - Zentrale Event-Delegation
  - Predictable State Updates
  - Keine zirkulären Dependencies

GEWÜNSCHTE STRUKTUR:

App/
├── core/
│   ├── app.js (Haupt-Initialisierung)
│   ├── config.js (Konfiguration, Konstanten)
│   └── router.js (View-Navigation)
│
├── services/
│   ├── storage.service.js (Safe localStorage wrapper)
│   ├── data.service.js (CRUD Operationen)
│   ├── export.service.js (Import/Export Logic)
│   └── validation.service.js
│
├── models/
│   ├── phase.model.js (Phasen-Datenstruktur)
│   ├── exam.model.js (Prüfungs-Datenstruktur)
│   ├── document.model.js
│   └── note.model.js
│
├── components/
│   ├── phase-tracker.js
│   ├── progress-chart.js
│   ├── document-manager.js
│   └── note-editor.js
│
├── utils/
│   ├── helpers.js (Utility functions)
│   ├── validators.js
│   └── formatters.js
│
└── ui/
    ├── notifications.js (Toast messages)
    └── modal.js (Bestätigungs-Dialoge)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. USER EXPERIENCE & FEHLER-KOMMUNIKATION [HOCH]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟠 PRÜFPUNKTE:

✓ Benutzerfreundliche Fehlermeldungen (auf Deutsch)
  - Keine technischen Fehlermeldungen für Endnutzer
  - Klare Handlungsanweisungen bei Problemen
  - Visual Feedback für alle Aktionen
  
✓ Loading States & Feedback
  - Spinner/Skeleton für längere Operationen
  - Success/Error Toasts
  - Bestätigungs-Dialoge für kritische Aktionen
  
✓ Offline-Funktionalität
  - App funktioniert ohne Internet (bereits gegeben)
  - Clear Indication wenn Features nicht verfügbar sind
  
✓ Daten-Verlust-Prevention
  - Auto-Save bei wichtigen Änderungen
  - "Sind Sie sicher?"-Dialoge vor Löschen
  - Undo/Redo für kritische Operationen (optional)

BEISPIEL FEHLER-HANDLING:

const ErrorMessages = {
    STORAGE_FULL: {
        title: 'Speicher voll',
        message: 'Ihr Browser-Speicher ist voll. Bitte löschen Sie alte Daten oder exportieren Sie Ihre Daten.',
        action: 'Daten exportieren'
    },
    STORAGE_BLOCKED: {
        title: 'Speicher nicht verfügbar',
        message: 'Im privaten Modus kann die App keine Daten speichern. Bitte öffnen Sie die App im normalen Browser-Fenster.',
        action: 'OK'
    },
    IMPORT_FAILED: {
        title: 'Import fehlgeschlagen',
        message: 'Die ausgewählte Datei ist ungültig oder beschädigt.',
        action: 'Erneut versuchen'
    }
};

function showUserFriendlyError(errorType) {
    const error = ErrorMessages[errorType];
    showModal(error.title, error.message, error.action);
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. PERFORMANCE & OPTIMIERUNG [MITTEL]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟡 PRÜFPUNKTE:

✓ DOM-Manipulation Optimierung
  - Minimale Reflows/Repaints
  - Document Fragments für multiple Inserts
  - Event Delegation statt multiple Listener
  
✓ Daten-Caching
  - In-Memory Cache für häufig gelesene Daten
  - Lazy Loading für große Datensätze
  
✓ Code-Splitting (optional für später)
  - Nur notwendigen Code initial laden
  - Dynamisches Laden von Features

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. SICHERHEIT & DATENSCHUTZ [MITTEL]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟡 PRÜFPUNKTE:

✓ Input Sanitization
  - XSS-Prevention bei User-Eingaben
  - HTML-Escaping für dynamische Inhalte
  
✓ Datenschutz
  - Keine Tracking-Scripts
  - Keine externen API-Calls (außer CDN)
  - Clear Privacy Policy
  
✓ Sensible Daten
  - Keine Passwörter oder sensible Infos in localStorage
  - Export-Dateien nicht versehentlich committen

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. WARTBARKEIT & DOKUMENTATION [MITTEL]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟡 PRÜFPUNKTE:

✓ Code-Qualität
  - ESLint Setup mit sinnvollen Rules
  - Konsistente Naming Conventions
  - Deutsche Kommentare für Business-Logik
  - JSDoc für Public Functions
  
✓ Testing-Strategie (Basic)
  - Manuelle Test-Checkliste
  - Critical Path Testing
  - Browser-Kompatibilität (Chrome, Firefox, Safari, Edge)
  
✓ Dokumentation
  - README.md auf Deutsch mit Setup-Anleitung
  - Inline-Kommentare für komplexe Logik
  - Änderungs-Log (CHANGELOG.md)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. BARRIEREFREIHEIT (WCAG 2.1 AA) [NIEDRIG-MITTEL]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟢 PRÜFPUNKTE:

✓ Semantisches HTML
  - Proper heading hierarchy (h1, h2, h3)
  - Landmarks (nav, main, footer)
  - Button vs. Link korrekt verwendet
  
✓ Keyboard Navigation
  - Alle Funktionen per Tastatur erreichbar
  - Sichtbarer Focus-State
  - Logische Tab-Reihenfolge
  
✓ Screen Reader Support
  - Alt-Text für Bilder/Icons
  - ARIA-Labels wo nötig
  - Semantische Form-Labels
  
✓ Farbkontrast
  - Mindestens 4.5:1 für Text
  - 3:1 für UI-Komponenten

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
8. DEPLOYMENT & CI/CD [NIEDRIG]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟢 PRÜFPUNKTE:

✓ GitHub Actions Workflow
  - Automatisches Deployment bei Push
  - Linting vor Deployment
  - Build-Validierung
  
✓ Versionierung
  - Git Tags für Releases (v1.0.0, v1.1.0)
  - Semantic Versioning
  - Release Notes

✓ Environment Setup
  - .gitignore korrekt konfiguriert
  - Keine Secrets im Repo
  - README mit Deployment-Anleitung

=== DEINE AUFGABEN ALS ARCHITEKTUR-REVIEWER ===

🎯 PHASE 1: ANALYSE
1. Scanne das gesamte Projekt
2. Erstelle eine PRIORISIERTE Liste von Issues
3. Kategorisiere nach: KRITISCH / HOCH / MITTEL / NIEDRIG
4. Schätze Aufwand für jedes Issue (Stunden)

🎯 PHASE 2: EMPFEHLUNGEN
1. Erstelle konkrete Code-Beispiele für Top 5 Issues
2. Erkläre WARUM jede Änderung wichtig ist
3. Zeige VORHER/NACHHER Code-Vergleiche
4. Priorisiere Quick Wins (hoher Impact, niedriger Aufwand)

🎯 PHASE 3: UMSETZUNGS-PLAN
1. Erstelle einen Schritt-für-Schritt Refactoring-Plan
2. Gruppiere verwandte Änderungen
3. Definiere Testing-Checkpoints
4. Schätze Gesamt-Zeitaufwand

=== OUTPUT-FORMAT ===

📊 ARCHITEKTUR-REVIEW REPORT

## EXECUTIVE SUMMARY
- Aktueller Status: [Bewertung 1-10]
- Produktionsreife: [Ja/Nein + Begründung]
- Top 3 Risiken: [Liste]
- Geschätzter Refactoring-Aufwand: [Stunden]

## KRITISCHE ISSUES (MUST FIX)
[Issue 1]: [Beschreibung]
  Risiko: [Hoch/Mittel/Niedrig]
  Impact: [Was passiert wenn nicht gefixt?]
  Aufwand: [Stunden]
  Lösung: [Code-Beispiel]

## EMPFOHLENE VERBESSERUNGEN (SHOULD FIX)
[Analog zu oben]

## NICE-TO-HAVE (OPTIONAL)
[Analog zu oben]

## REFACTORING ROADMAP
Phase 1 (Woche 1): [Quick Wins - Kritische Fixes]
Phase 2 (Woche 2): [Architektur-Verbesserungen]
Phase 3 (Woche 3): [Polish & Optimierung]

## TESTING CHECKLIST
- [ ] Storage funktioniert in Private Mode
- [ ] Export/Import mit korrupten Daten
- [ ] Verhalten bei vollem Storage
- [ ] Cross-Browser Testing
- [ ] Mobile Responsiveness
- [... weitere Tests]

=== WICHTIGE CONSTRAINTS ===

❌ NICHT ändern:
- Kern-Technologie-Stack (Vanilla JS, keine Frameworks)
- LocalStorage als Primary Storage
- Single Page Application Konzept

✅ ÄNDERN & VERBESSERN:
- Code-Struktur & Organisation
- Error Handling & Robustheit
- User Experience & Feedback
- Performance & Best Practices

=== ERFOLGS-KRITERIEN ===

Nach dem Review sollte das Projekt:
✓ 0 kritische Bugs oder Risiken haben
✓ In allen modernen Browsern stabil laufen
✓ Datenverlust-resistent sein
✓ Benutzerfreundliche Fehlerbehandlung haben
✓ Clean & wartbaren Code haben
✓ Produktionsreif sein für täglichen Einsatz

=== START ===

Bitte beginne jetzt mit dem Architektur-Review des Projekts.
Analysiere alle Dateien und erstelle einen detaillierten Report 
nach dem oben definierten Format.

Fokussiere dich auf STABILITÄT und PRODUKTIONSREIFE, nicht auf "fancy features".
```

---

## 🎯 Projekt Setup Prompt

### Verwendung
```
Für neues Projekt oder komplettes Refactoring
```

### Prompt

```
🎯 CURSOR AI PROJEKT-PROMPT: AI BUSINESS SPECIALIST TRACKER - EINFACHES SETUP

=== PROJEKT KONTEXT ===
Ich möchte eine personalisierte Web-App für meinen "AI Business Specialist" Kurs erstellen.
Die App soll vollständig in DEUTSCH sein und NUR mit LocalStorage arbeiten (keine Datenbank).

Zielgruppe: Ich selbst - erfahrener Finanz- und Automatisierungsspezialist
Tech-Skills: GitHub, Azure, VS Code/Cursor - aber KEINE Backend-Entwicklung
Deployment: GitHub Pages (kostenlos, einfach) ODER Azure Static Web Apps

=== WAS ICH BRAUCHE ===

📱 SINGLE PAGE APPLICATION (HTML + CSS + JavaScript)
✅ Keine Frameworks (React/Vue) - nur pures HTML/CSS/JS
✅ Keine Datenbank - alles läuft über Browser LocalStorage
✅ Mobile-first Design - responsiv für alle Geräte
✅ Automatisches Deployment über GitHub Actions

[... Rest des Setup-Prompts ...]
```

---

## 🔒 Security Check Prompt

### Verwendung
```
Schneller Security-Check für kritische Bereiche
Verwendung: /security im Cursor Chat
```

### Prompt

```
🔒 SECURITY CHECK: AI BUSINESS SPECIALIST TRACKER

Führe einen schnellen Sicherheits-Check für folgende Bereiche durch:

1. **LocalStorage Security**
   - Sind sensible Daten verschlüsselt?
   - Wird Input sanitized?
   - XSS-Prevention implementiert?

2. **Data Validation**
   - Werden alle Inputs validiert?
   - JSON.parse() mit Error Handling?
   - Schema-Validierung vorhanden?

3. **Export/Import Security**
   - Datei-Upload Validierung?
   - Content-Type Check?
   - Malicious Code Prevention?

4. **Privacy & DSGVO**
   - Keine externen Tracking-Scripts?
   - Datenschutzerklärung vorhanden?
   - User Consent für Cookies/Storage?

Erstelle einen kurzen Report mit:
- ✅ Sichere Bereiche
- ⚠️ Verbesserungsbedarf
- 🔴 Kritische Sicherheitslücken
- 📋 Action Items (priorisiert)
```

---

## 📚 Weitere Prompts

### Feature Development
```
Für neue Features mit Best Practices
```

### Performance Audit
```
Für Performance-Analyse und Optimierung
```

### Accessibility Check
```
Für WCAG 2.1 AA Compliance
```

---

## 💡 Prompt Best Practices

### 1. Kontext ist King
- Immer Projekt-Pfad angeben
- Tech-Stack erwähnen
- Constraints klar definieren

### 2. Spezifische Anforderungen
- Was soll analysiert werden?
- Welches Output-Format?
- Welche Prioritäten?

### 3. Beispiele einbinden
- Code-Beispiele für gewünschte Lösung
- Vorher/Nachher Vergleiche
- Referenz-Implementierungen

### 4. Agent Mode nutzen
- Für Multi-File Analysen
- Für komplexe Refactorings
- Für automatisierte Tests

---

## 🔄 Prompt Updates

Dieses Dokument wird regelmäßig mit neuen Prompts erweitert:
- Neue Erkenntnisse aus der Praxis
- Community Best Practices
- Cursor AI Updates

---

*Zuletzt aktualisiert: Oktober 22, 2025*  
*Version: 1.0*  
*Projekt: AI Business Specialist Tracker*
