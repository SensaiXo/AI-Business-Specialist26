#!/usr/bin/env python3
"""
Simple HTTP Server for AI Business Specialist Tracker
Run on localhost:8089 for instant development
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

# Configuration
PORT = 8089
HOST = 'localhost'

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def start_server():
    """Start the local development server"""
    
    # Change to the project directory
    project_dir = Path(__file__).parent
    os.chdir(project_dir)
    
    print(f"🚀 Starting AI Business Specialist Tracker Server...")
    print(f"📁 Serving from: {project_dir}")
    print(f"🌐 URL: http://{HOST}:{PORT}")
    print(f"📱 Main App: http://{HOST}:{PORT}/index.html")
    print(f"👥 Friend Explorer: http://{HOST}:{PORT}/explore.html")
    print(f"🎨 Visual Schemas: http://{HOST}:{PORT}/schemas.html")
    print(f"")
    print(f"💡 Tips:")
    print(f"   - Edit files and refresh browser for instant changes")
    print(f"   - Press Ctrl+C to stop server")
    print(f"   - Check browser console for any errors")
    print(f"")
    
    try:
        with socketserver.TCPServer((HOST, PORT), CustomHTTPRequestHandler) as httpd:
            print(f"✅ Server running on http://{HOST}:{PORT}")
            print(f"🔄 Ready for instant development!")
            print(f"")
            
            # Auto-open browser (optional)
            try:
                webbrowser.open(f'http://{HOST}:{PORT}/index.html')
                print(f"🌐 Opened browser automatically")
            except:
                print(f"🌐 Please open: http://{HOST}:{PORT}/index.html")
            
            print(f"")
            print(f"Press Ctrl+C to stop...")
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print(f"\n🛑 Server stopped by user")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Port {PORT} is already in use!")
            print(f"💡 Try a different port or stop the other server")
        else:
            print(f"❌ Error starting server: {e}")
    except Exception as e:
        print(f"❌ Unexpected error: {e}")

if __name__ == "__main__":
    start_server()
