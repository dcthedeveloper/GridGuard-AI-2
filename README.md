# GridGuard AI

> **AI-Powered Grid Management System for Texas ERCOT**  
> *Texas Leadership Summit 2025*

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.8+-blue.svg)
![Status](https://img.shields.io/badge/status-production-green.svg)

## 🎯 Overview

GridGuard AI is a state-of-the-art multi-agent system designed to predict, monitor, and optimize the Texas electrical grid. Built for the Texas Leadership Summit 2025, this system demonstrates how AI can prevent catastrophic grid failures like the 2021 Winter Storm Uri blackout.

### Key Features

- **🤖 12 Specialized AI Agents** - Distributed intelligence for grid management
- **📊 Predictive Analytics** - 48-hour load forecasting with 97.7% accuracy
- **⚡ Real-time Monitoring** - Live grid status across 5 Texas regions
- **🔄 Agent-to-Agent Communication** - MCP protocol for distributed coordination
- **📈 Historical Analysis** - Winter Storm Uri playback and pattern recognition
- **🎮 Scenario Simulator** - Test grid resilience under extreme conditions
- **📄 Automated Reporting** - Comprehensive data export and compliance reports

---

## 🚀 Quick Start

### Prerequisites

- Python 3.8 or higher
- Modern web browser (Chrome, Firefox, Safari, Edge)
- 2GB disk space for ML models

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dcthedeveloper/GridGuard-AI-2.git
   cd GridGuard-AI-2
   ```

2. **Run the setup script:**
   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```

3. **Start the backend:**
   ```bash
   cd backend
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   python app.py
   ```

4. **Open the interface:**
   - **Tactical Interface:** Open `tactical/index.html` in your browser
   - **Summit Presentation:** Open `summit/index.html` in your browser

For detailed setup instructions, see [QUICKSTART.md](QUICKSTART.md).

---

## 📁 Project Structure

```
GridGuard-AI-2/
├── tactical/                  # Tactical Command Center Interface
│   ├── index.html            # Main grid view dashboard
│   ├── agents.html           # AI agent status monitor
│   ├── analytics.html        # Predictive analytics
│   ├── historical.html       # Winter Storm Uri playback
│   ├── scenario.html         # Scenario simulator
│   └── reports.html          # Data export & reports
│
├── summit/                    # Texas Leadership Summit Presentation
│   ├── index.html            # Interactive presentation interface
│   └── app.js                # Summit application logic
│
├── backend/                   # Python Flask Backend
│   ├── app.py                # Flask API server
│   ├── requirements.txt      # Python dependencies
│   └── models/               # Machine Learning Models
│       ├── gridguard_model.pkl          # Trained ML model
│       ├── gridguard_model_info.json    # Model metadata
│       └── gridguard_model_evaluation.png
│
├── docs/                      # Documentation
│   ├── MCP_PROTOCOL.md       # Agent communication protocol
│   ├── DEMO_GUIDE.md         # Demonstration guide
│   ├── CHANGELOG.md          # Version history
│   ├── DESIGN_RULES.md       # UI/UX design specifications
│   └── CONTRIBUTING.md       # Contribution guidelines
│
├── README.md                  # This file
├── QUICKSTART.md             # Quick setup guide
├── LICENSE                    # MIT License
└── setup.sh                   # Automated setup script
```

---

## 🤖 The 12 AI Agents

GridGuard AI uses a multi-agent architecture with specialized agents:

| Agent | Code | Function |
|-------|------|----------|
| **Load Forecaster** | `LF` | Predicts electricity demand using ML models |
| **Weather Analyst** | `WA` | Monitors weather impact on grid & renewables |
| **Grid Stabilizer** | `GS` | Balances supply/demand in real-time |
| **Asset Manager** | `AM` | Tracks power plant & equipment status |
| **Renewable Energy** | `RE` | Optimizes solar & wind generation |
| **Demand Response** | `DR` | Coordinates load shedding programs |
| **Historical Data** | `HD` | Provides historical patterns & insights |
| **Optimizer** | `OP` | Finds optimal resource allocation |
| **Risk Surveillance** | `RS` | Detects threats & anomalies |
| **Resource Controller** | `RC` | Manages energy storage & reserves |
| **Emergency Response** | `ER` | Handles grid emergencies & outages |
| **Comm Manager** | `CM` | Coordinates all agent communications |

---

## 🔌 Model Context Protocol (MCP)

GridGuard AI implements the **Model Context Protocol** for distributed agent coordination:

### Architecture
- **12 Central Agents** - Located at grid control center
- **5 Regional Agents** - Distributed across Texas zones:
  - Dallas-Fort Worth (North Texas)
  - Houston Metro
  - Austin-San Antonio
  - West Texas
  - East Texas

### Message Types
- `MCP-REQUEST` - Data requests between agents
- `MCP-RESPONSE` - Status responses
- `MCP-ALERT` - Critical alerts
- `MCP-COORDINATE` - Coordination for demand response
- `MCP-QUERY` - Feature analysis queries
- `MCP-SYNC` - Historical data synchronization

For detailed protocol documentation, see [docs/MCP_PROTOCOL.md](docs/MCP_PROTOCOL.md).

---

## 📊 Machine Learning Model

### Performance Metrics
- **Accuracy (R² Score):** 97.7%
- **Mean Absolute Error:** 847 MW
- **Training Data:** 50,000+ historical grid measurements
- **Features:** 18 input variables including temperature, wind speed, hour of day

### Top Features by Importance
1. `temp_x_hour` (26.8%) - Temperature-hour interaction
2. `hour` (18.4%) - Hour of day
3. `temp` (14.6%) - Temperature
4. `day_of_week` (11.2%) - Day of week
5. `wind_speed` (8.9%) - Wind speed

### Training Details
- **Algorithm:** Random Forest Regressor
- **Trees:** 100 estimators
- **Max Depth:** 20
- **Training Time:** ~45 seconds
- **Model Size:** 875 KB

---

## 🎨 User Interfaces

### Tactical Interface
Military-style command center with:
- IBM Plex Mono font
- Sharp corners (no border-radius)
- Orange (#FF9500) accent colors
- Real-time grid metrics
- Interactive Texas map
- 12-agent network visualization
- AI chatbot assistant

### Summit Presentation
Leadership-focused interface featuring:
- Smooth rounded design
- Interactive MCP-RAG assistant
- Agent-to-agent communication feed
- 24-hour load forecast chart
- Regional grid status map
- Quick action buttons for demos

---

## 🛠️ API Endpoints

### Backend Flask API

```
GET  /health              - Health check
GET  /forecast            - Get 24-hour load forecast
POST /predict             - Predict load for specific conditions
GET  /agents              - Get all agent statuses
GET  /historical          - Get historical grid data
GET  /model/info          - Get ML model information
```

Example:
```bash
curl http://localhost:5000/forecast
```

---

## 📖 Use Cases

### 1. Prevent Winter Storm Uri 2.0
- Detect cold front patterns 48 hours in advance
- Coordinate natural gas supply with heating demand
- Activate emergency reserves before crisis hits

### 2. Summer Peak Management
- Predict extreme heat demand spikes
- Optimize solar generation during peak hours
- Coordinate demand response programs

### 3. Renewable Integration
- Balance intermittent wind/solar with grid stability
- Predict generation drops from weather changes
- Optimize battery storage dispatch

### 4. Emergency Response
- Real-time anomaly detection
- Automated load shedding coordination
- Multi-agent crisis management

---

## 🎓 Educational Value

This project demonstrates:

✅ **Multi-agent AI systems** - Distributed intelligence & coordination  
✅ **Protocol-based communication** - MCP standard implementation  
✅ **Machine learning** - Random Forest for time-series forecasting  
✅ **Real-world application** - Critical infrastructure management  
✅ **Full-stack development** - Python backend + JavaScript frontend  
✅ **Data visualization** - Chart.js, Canvas, interactive dashboards  
✅ **System architecture** - Scalable, resilient design patterns

---

## 🚧 Future Enhancements

- [ ] WebSocket integration for real-time agent communication
- [ ] Database logging (PostgreSQL) for all MCP messages
- [ ] Authentication & role-based access control
- [ ] Mobile-responsive design
- [ ] Integration with actual ERCOT data feeds
- [ ] Advanced ML models (LSTM, Transformers)
- [ ] Kubernetes deployment for production scale
- [ ] Real distributed agent deployment across Texas

---

## 🤝 Contributing

We welcome contributions! Please see [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

**Developer:** DeMarcus Crump  
**Project:** Texas Leadership Summit 2025  
**Organization:** GridGuard AI Initiative  

---

## 🙏 Acknowledgments

- **ERCOT** - Texas grid data and infrastructure insights
- **Winter Storm Uri Analysis** - Historical crisis case study
- **Texas Leadership Summit 2025** - Platform for demonstration
- **Open Source Community** - Chart.js, Flask, scikit-learn

---

## 📞 Contact

- **GitHub:** [@dcthedeveloper](https://github.com/dcthedeveloper)
- **Repository:** [GridGuard-AI-2](https://github.com/dcthedeveloper/GridGuard-AI-2)
- **Issues:** [GitHub Issues](https://github.com/dcthedeveloper/GridGuard-AI-2/issues)

---

## 🌟 Demo

### Live Features
- 🔴 **Real-time grid monitoring** across 5 Texas regions
- 📈 **48-hour load forecasting** with Chart.js visualization
- 🤖 **12 AI agents** coordinating via MCP protocol
- 💬 **Chatbot assistant** answering grid status queries
- 📊 **Winter Storm Uri playback** with timeline controls
- ⚙️ **Scenario simulator** for extreme weather testing
- 📄 **Automated reports** with PDF/CSV export

### Screenshots

*Tactical Command Center*
![Tactical Interface](docs/screenshots/tactical-interface.png)

*Summit Presentation*
![Summit Interface](docs/screenshots/summit-interface.png)

*Agent Network*
![Agent Network](docs/screenshots/agent-network.png)

---

**Built with ❤️ for the Texas Leadership Summit 2025**

*Preventing grid failures with artificial intelligence*
