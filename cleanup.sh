#!/bin/bash

# GridGuard AI - Repository Cleanup Script
# Removes development files and prepares for GitHub deployment

echo "🧹 GridGuard AI - Cleanup Script"
echo "=================================="
echo ""

# Navigate to project root
cd "$(dirname "$0")"

echo "📋 Removing development files..."
echo ""

# Remove duplicate HTML files
rm -f index-tactical.html
rm -f index-summit.html
rm -f index-enhanced.html
rm -f agent-dashboard.html
rm -f historical-playback.html
rm -f predictive-analytics.html
echo "✅ Removed duplicate HTML files"

# Remove original tactical files (now in tactical/)
rm -f agents.html
rm -f analytics.html
rm -f historical.html
rm -f scenario.html
rm -f reports.html
echo "✅ Removed root tactical files (moved to tactical/)"

# Remove duplicate JavaScript
rm -f app-summit.js
rm -f app-enhanced.js
echo "✅ Removed duplicate JavaScript files"

# Remove development scripts
rm -f start-enhanced.sh
rm -f test-backend.py
echo "✅ Removed development scripts"

# Remove development documentation
rm -f AGENT_FIX.md
rm -f ARCHITECTURE.md
rm -f CHECKLIST.md
rm -f DEMO_READY.md
rm -f DEPLOY_CHECKLIST.md
rm -f ENHANCED_README.md
rm -f FINAL_SUMMARY.md
rm -f INTEGRATION_SUMMARY.md
echo "✅ Removed development documentation"

# Remove cleanup plan (this was just for planning)
rm -f CLEANUP_PLAN.md
echo "✅ Removed cleanup plan"

# Replace old README with new professional version
if [ -f README_NEW.md ]; then
    mv README_NEW.md README.md
    echo "✅ Updated README.md to professional version"
fi

# Remove Python cache
rm -rf backend/__pycache__
echo "✅ Removed Python cache"

# Remove virtual environment (will be recreated on setup)
rm -rf backend/venv
echo "✅ Removed virtual environment (will be recreated)"

echo ""
echo "🎉 Cleanup complete!"
echo ""
echo "📁 Final structure:"
echo "   - tactical/       (6 HTML files)"
echo "   - summit/         (index.html + app.js)"
echo "   - backend/        (Flask API + ML models)"
echo "   - docs/           (Documentation)"
echo ""
echo "✅ Repository is ready for GitHub!"
echo ""
echo "Next steps:"
echo "1. Review the changes: ls -la"
echo "2. Test the interfaces: open tactical/index.html"
echo "3. Initialize git: git init"
echo "4. Add files: git add ."
echo "5. Commit: git commit -m 'Initial commit'"
echo "6. Push to GitHub: git remote add origin https://github.com/dcthedeveloper/GridGuard-AI-2.git"
echo "7. Push: git push -u origin main"
echo ""
