@echo off
echo 🚀 Starting AI Business Specialist Tracker Development Server...
echo.

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Python not found! Please install Python first.
    echo 💡 Download from: https://python.org
    pause
    exit /b 1
)

echo ✅ Python found
echo 🌐 Starting server on localhost:8089...
echo.

REM Start the server
python server.py

echo.
echo 🛑 Server stopped
pause
