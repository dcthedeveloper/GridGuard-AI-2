# Contributing to GridGuard AI

Thank you for your interest in GridGuard AI! This project was built for the **Texas AI Leadership Summit 2025** (November 5, 2025).

## 🎯 Project Status

**Pre-Summit (Oct 16 - Nov 4, 2025)**  
Focus: Summit preparation, bug fixes, performance optimization.

**Post-Summit (After Nov 5, 2025)**  
Open to community contributions.

---

## 🤝 How to Contribute

### Reporting Issues

Found a bug? Please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, Python version, browser)

### Feature Requests

Have an idea? Open an issue with:
- Problem statement
- Proposed solution
- Potential impact
- Alternative approaches considered

---

## 💻 Development Setup

```bash
# Fork the repository
git clone https://github.com/YOUR_USERNAME/GridGuard-AI.git
cd GridGuard-AI

# Create feature branch
git checkout -b feature/your-feature-name

# Set up backend
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Make your changes

# Test thoroughly
python app.py  # Backend
python3 -m http.server 8080  # Frontend

# Commit with descriptive message
git commit -m "Add: Clear description of changes"

# Push and create PR
git push origin feature/your-feature-name
```

---

## 📋 Code Standards

### Python (Backend)
- PEP 8 style guide
- Type hints where applicable
- Docstrings for functions
- Error handling with try/except

### JavaScript (Frontend)
- ES6+ syntax
- Clear variable names
- Comments for complex logic
- No console.logs in production

### Design
- Follow [DESIGN_RULES.md](DESIGN_RULES.md)
- NO EMOJIS in production UI
- 8px spacing grid
- Military-grade professional aesthetic

---

## 🎨 Design Philosophy

**Military-Grade Professional**
- High contrast dark theme
- Clean typography
- Strategic color usage
- Accessible (WCAG AA minimum)

See **[DESIGN_RULES.md](DESIGN_RULES.md)** for complete guidelines.

---

## ✅ Pull Request Checklist

- [ ] Code follows project standards
- [ ] Tested on Chrome, Firefox, Safari
- [ ] No breaking changes (or documented)
- [ ] Updated README if needed
- [ ] Added comments for complex logic
- [ ] No console.logs or debug code
- [ ] Follows design system (DESIGN_RULES.md)

---

## 📞 Questions?

Open an issue or contact:  
**DeMarcus Crump**  
GitHub: [@dcthedeveloper](https://github.com/dcthedeveloper)

---

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.
