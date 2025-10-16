# 🚀 Quick Start Guide

## For Summit Presentation (Nov 5, 2025)

### 1. Setup (5 minutes)

```bash
# Clone repo
git clone https://github.com/dcthedeveloper/GridGuard-AI.git
cd GridGuard-AI

# Install backend
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Start backend (Terminal 1)
python app.py

# Start frontend (Terminal 2)
cd ..
python3 -m http.server 8080
```

### 2. Open Dashboard

Navigate to: **http://localhost:8080/index-summit.html**

---

## 90-Second Demo Script

### Opening (10 seconds)
"GridGuard AI prevents catastrophic grid failures using 12 distributed AI agents. Let me show you real agent coordination."

**Point to**: A2A Communication Feed (left sidebar)

### Scenario 1 (20 seconds)
"Watch agents respond to a cold front."

**Click**: "Update Grid" button

**Watch**: A2A feed shows:
- LF agent invokes `get_weather_forecast`
- WA responds with temperature data
- DR prepares demand response

**Say**: "This is live MCP protocol communication - agents coordinating autonomously."

### Chatbot Demo (20 seconds)
"Our MCP-RAG chatbot provides intelligent responses."

**Type**: "What caused Winter Storm Uri failure?"

**Watch**: 
- HD agent invokes `retrieve_winter_storm_data` (visible in A2A feed)
- Knowledge retrieval happens live
- Chatbot responds with 246 deaths, $195B damage data

**Say**: "Knowledge retrieval through distributed agent network - not a simple chatbot."

### Quick Actions (15 seconds)
**Click**: "MCP Architecture" quick action

**Watch**: CM agent retrieves coordination data

**Say**: "200+ MCP messages per hour, distributed mesh network, no single point of failure."

### Highlight ML Model (10 seconds)
**Point to**: Forecast chart

**Say**: "97.7% accuracy, trained on Winter Storm Uri. Mean absolute error just 1,112 MW."

### Region Interaction (10 seconds)
**Click**: Houston on Texas map

**Watch**: Chatbot provides region details

**Say**: "5 regions, real-time monitoring, automated load balancing."

### Closing (5 seconds)
**Say**: "Preventing the next Winter Storm Uri - 246 lives, $195 billion. GridGuard AI."

---

## Key Talking Points

### Technical Excellence
- ✅ 97.7% ML accuracy (R²=0.977)
- ✅ 12 specialized AI agents
- ✅ MCP protocol for distributed coordination
- ✅ RAG architecture with live knowledge retrieval
- ✅ 29 engineered features

### Real-World Impact
- ✅ Trained on Winter Storm Uri disaster data
- ✅ Pattern detection prevents cascading failures
- ✅ Distributed architecture = no single point of failure
- ✅ Automated emergency protocols

### What Makes This Special
- ✅ **Visible AI thinking** - Watch agents coordinate in A2A feed
- ✅ **Live RAG retrieval** - See knowledge extraction happen
- ✅ **Distributed intelligence** - Not centralized AI
- ✅ **Real disaster training** - Winter Storm Uri (246 deaths, $195B)

---

## Chatbot Demo Queries

### Quick Wins
1. "What is current grid status?" → Shows real-time data
2. "What caused Winter Storm Uri failure?" → Historical knowledge
3. "Explain agent coordination" → MCP architecture details
4. "What is the ML model accuracy?" → Model performance

### Advanced
1. "Which regions need attention?" → Regional analysis
2. "How do agents coordinate?" → Distributed communication
3. "What are grid vulnerabilities?" → Weakness analysis

---

## Troubleshooting

### Backend not starting
```bash
cd backend
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
python app.py
```

### Frontend not loading
```bash
# Kill existing server
lsof -ti:8080 | xargs kill -9

# Restart
python3 -m http.server 8080
```

### A2A messages not appearing
Refresh browser (Cmd+R / Ctrl+R)

---

## Screenshots for Presentation

1. **Full Dashboard** - index-summit.html main view
2. **A2A Communication** - Live agent coordination feed
3. **Chatbot RAG** - Knowledge retrieval in action
4. **Texas Map** - 5 regions with utilization
5. **Forecast Chart** - 24-hour predictions

---

## Contact During Summit

DeMarcus Crump  
GitHub: @dcthedeveloper

---

**Built for Texas AI Leadership Summit 2025**  
**November 5, 2025 | 3:30-5:00 PM**  
**Student AI Project Showcase**
