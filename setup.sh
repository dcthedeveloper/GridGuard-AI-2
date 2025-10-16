#!/bin/bash

# GridGuard AI - Quick Setup Script
# This script sets up the backend environment

echo "🚀 Setting up GridGuard AI Backend..."
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3.10 or higher."
    exit 1
fi

echo "✅ Python found: $(python3 --version)"
echo ""

# Create virtual environment
echo "📦 Creating virtual environment..."
cd backend
python3 -m venv venv

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install dependencies
echo "📥 Installing dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start the backend server:"
echo "  1. cd backend"
echo "  2. source venv/bin/activate"
echo "  3. python app.py"
echo ""
echo "To view the dashboard:"
echo "  Open index.html in your browser"
echo ""
