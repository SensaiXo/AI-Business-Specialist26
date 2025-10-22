#!/usr/bin/env python3
"""
Simple HTTP Server for AI Business Specialist Tracker
Alternative server without emoji characters
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

# Configuration
PORT = 8089
HOST = 'localhost'

def start_simple_server():
    """Start a simple HTTP server"""
    
    # Change to the project directory
    project_dir = Path(__file__).parent
    os.chdir(project_dir)
    
    print("Starting AI Business Specialist Tracker Server...")
    print(f"Serving from: {project_dir}")
    print(f"URL: http://{HOST}:{PORT}")
    print(f"Main App: http://{HOST}:{PORT}/index.html")
    print(f"Modal Test: http://{HOST}:{PORT}/test-modal.html")
    print("")
    print("Tips:")
    print("   - Edit files and refresh browser for instant changes")
    print("   - Press Ctrl+C to stop server")
    print("")
    
    try:
        with socketserver.TCPServer((HOST, PORT), http.server.SimpleHTTPRequestHandler) as httpd:
            print(f"Server running on http://{HOST}:{PORT}")
            print("Ready for instant development!")
            print("")
            
            # Auto-open browser
            try:
                webbrowser.open(f'http://{HOST}:{PORT}/index.html')
                print("Opened browser automatically")
            except:
                print(f"Please open: http://{HOST}:{PORT}/index.html")
            
            print("")
            print("Press Ctrl+C to stop...")
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\nServer stopped by user")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"Port {PORT} is already in use!")
            print("Try a different port or stop the other server")
        else:
            print(f"Error starting server: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")

if __name__ == "__main__":
    start_simple_server()
