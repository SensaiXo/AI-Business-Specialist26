#!/bin/bash

echo "🚀 Starting AI Business Specialist Tracker Development Server..."
echo ""

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    if ! command -v python &> /dev/null; then
        echo "❌ Python not found! Please install Python first."
        echo "💡 Install with: sudo apt install python3 (Ubuntu) or brew install python3 (Mac)"
        exit 1
    else
        PYTHON_CMD="python"
    fi
else
    PYTHON_CMD="python3"
fi

echo "✅ Python found: $PYTHON_CMD"
echo "🌐 Starting server on localhost:8089..."
echo ""

# Make server.py executable
chmod +x server.py

# Start the server
$PYTHON_CMD server.py

echo ""
echo "🛑 Server stopped"
