// GridGuard AI - Texas Leadership Summit 2025
// State-of-the-Art Multi-Agent Grid Management System

// ============================================================================
// AGENT DEFINITIONS
// ============================================================================
const AGENTS = [
    { id: 'LF', name: 'Load Forecaster', color: '#3B82F6', active: true },
    { id: 'WA', name: 'Weather Analyst', color: '#06B6D4', active: true },
    { id: 'GS', name: 'Grid Stabilizer', color: '#10B981', active: true },
    { id: 'AM', name: 'Asset Manager', color: '#F59E0B', active: true },
    { id: 'RE', name: 'Renewable Energy', color: '#10B981', active: true },
    { id: 'DR', name: 'Demand Response', color: '#8B5CF6', active: true },
    { id: 'HD', name: 'Historical Data', color: '#6366F1', active: true },
    { id: 'OP', name: 'Optimizer', color: '#EC4899', active: true },
    { id: 'RS', name: 'Risk Surveillance', color: '#EF4444', active: true },
    { id: 'RC', name: 'Resource Controller', color: '#14B8A6', active: true },
    { id: 'ER', name: 'Emergency Response', color: '#F97316', active: true },
    { id: 'CM', name: 'Comm Manager', color: '#A855F7', active: true }
];

// ============================================================================
// TEXAS GRID REGIONS
// ============================================================================
const REGIONS = [
    { id: 'dallas', name: 'Dallas-Fort Worth', x: 0.55, y: 0.35, load: 12500, capacity: 18000, utilization: 69.4 },
    { id: 'houston', name: 'Houston Metro', x: 0.70, y: 0.75, load: 15200, capacity: 22000, utilization: 69.1 },
    { id: 'austin', name: 'Austin-San Antonio', x: 0.50, y: 0.70, load: 9800, capacity: 14500, utilization: 67.6 },
    { id: 'west', name: 'West Texas', x: 0.20, y: 0.50, load: 6200, capacity: 9500, utilization: 65.3 },
    { id: 'east', name: 'East Texas', x: 0.75, y: 0.45, load: 4547, capacity: 8500, utilization: 53.5 }
];

// ============================================================================
// 24-HOUR FORECAST DATA (25 points for complete visualization)
// ============================================================================
const FORECAST_DATA = [
    { hour: '3 PM', load: 48247, utilization: 66.5 },
    { hour: '4 PM', load: 49100, utilization: 67.7 },
    { hour: '5 PM', load: 50200, utilization: 69.2 },
    { hour: '6 PM', load: 51800, utilization: 71.4 },
    { hour: '7 PM', load: 52450, utilization: 72.3 },
    { hour: '8 PM', load: 51900, utilization: 71.6 },
    { hour: '9 PM', load: 50100, utilization: 69.1 },
    { hour: '10 PM', load: 47800, utilization: 65.9 },
    { hour: '11 PM', load: 45200, utilization: 62.3 },
    { hour: '12 AM', load: 42800, utilization: 59.0 },
    { hour: '1 AM', load: 40500, utilization: 55.9 },
    { hour: '2 AM', load: 39100, utilization: 53.9 },
    { hour: '3 AM', load: 38200, utilization: 52.7 },
    { hour: '4 AM', load: 37800, utilization: 52.1 },
    { hour: '5 AM', load: 38500, utilization: 53.1 },
    { hour: '6 AM', load: 40200, utilization: 55.4 },
    { hour: '7 AM', load: 43500, utilization: 60.0 },
    { hour: '8 AM', load: 46800, utilization: 64.6 },
    { hour: '9 AM', load: 48200, utilization: 66.5 },
    { hour: '10 AM', load: 49100, utilization: 67.7 },
    { hour: '11 AM', load: 49800, utilization: 68.7 },
    { hour: '12 PM', load: 50200, utilization: 69.2 },
    { hour: '1 PM', load: 50500, utilization: 69.7 },
    { hour: '2 PM', load: 50100, utilization: 69.1 },
    { hour: '3 PM', load: 49800, utilization: 68.7 }
];

// ============================================================================
// A2A MESSAGE TEMPLATES
// ============================================================================
const A2A_SCENARIOS = [
    {
        messages: [
            { from: 'LF', type: 'tool-call', content: 'Invoking get_weather_forecast for next 6 hours', tool: 'get_weather_forecast' },
            { from: 'WA', type: 'tool-response', content: 'Temperature dropping to 28°F, wind 15mph NW. Cold front arriving 6 PM.', tool: 'weather_data' },
            { from: 'LF', type: 'message', content: 'Cold front detected. Predicting 8% load increase for heating demand.' },
            { from: 'DR', type: 'message', content: 'Preparing demand response protocols for 6-9 PM window.' }
        ]
    },
    {
        messages: [
            { from: 'RE', type: 'tool-call', content: 'Checking solar_farm_output across West Texas region', tool: 'solar_farm_output' },
            { from: 'AM', type: 'tool-response', content: 'Solar production declining: 2,100 MW current, 800 MW projected at sunset.', tool: 'asset_status' },
            { from: 'RE', type: 'alert', content: 'Solar capacity dropping 62% in next 2 hours. Grid stabilization needed.' },
            { from: 'GS', type: 'message', content: 'Activating natural gas reserves. Ramping up 1,500 MW capacity.' }
        ]
    },
    {
        messages: [
            { from: 'RS', type: 'alert', content: 'Houston Metro utilization exceeding 75% threshold - ALERT status.' },
            { from: 'RC', type: 'tool-call', content: 'Invoking load_balancing for Houston region', tool: 'load_balancing' },
            { from: 'OP', type: 'message', content: 'Redistributing 400 MW from East Texas to Houston Metro region.' },
            { from: 'GS', type: 'tool-response', content: 'Load transfer complete. Houston utilization normalized to 71.2%.', tool: 'grid_status' }
        ]
    },
    {
        messages: [
            { from: 'HD', type: 'tool-call', content: 'Analyzing historical_winter_patterns for Winter Storm Uri comparison', tool: 'historical_analysis' },
            { from: 'HD', type: 'tool-response', content: 'Current conditions match Feb 2021 Day-2 pattern. High risk scenario.', tool: 'pattern_match' },
            { from: 'ER', type: 'alert', content: 'Winter Storm Uri pattern detected. Initiating emergency protocols.' },
            { from: 'CM', type: 'message', content: 'Broadcasting alert to all regional coordinators. Standing by for response.' }
        ]
    },
    {
        messages: [
            { from: 'WA', type: 'tool-call', content: 'Requesting wind_turbine_forecast for West Texas farms', tool: 'wind_forecast' },
            { from: 'RE', type: 'tool-response', content: 'Wind speed optimal: 18-22 mph. Turbine efficiency 89%. Output: 3,400 MW.', tool: 'renewable_status' },
            { from: 'OP', type: 'message', content: 'Wind conditions excellent. Reducing natural gas consumption by 12%.' },
            { from: 'AM', type: 'message', content: 'Cost savings: $45K/hour. Carbon reduction: 890 tons CO2/hour.' }
        ]
    }
];

// ============================================================================
// RAG KNOWLEDGE BASE - Winter Storm Uri Historical Data
// ============================================================================
const RAG_KNOWLEDGE_BASE = {
    'winter_storm_uri': {
        event: 'Winter Storm Uri',
        date: 'February 13-17, 2021',
        peak_demand: '76,819 MW',
        available_capacity: '25,000 MW',
        shortage: '51,819 MW',
        casualties: '246 deaths',
        economic_impact: '$195 billion',
        grid_failure_causes: [
            'Natural gas wellhead freeze-offs reduced supply by 48%',
            'Wind turbines iced over, output dropped from 25,000 MW to 600 MW',
            'Coal and nuclear plants experienced equipment failures due to extreme cold',
            'Unpreparized infrastructure for sustained sub-zero temperatures',
            'Rolling blackouts affected 4.5 million customers'
        ],
        lessons_learned: [
            'Weatherization of critical infrastructure mandatory',
            'Diversity in energy sources reduces cascading failures',
            'Real-time load forecasting critical during extreme weather',
            'Agent-based coordination prevents single points of failure',
            'Predictive ML models trained on historical extremes'
        ],
        temperature_timeline: {
            'day_1': '45°F → 28°F (rapid 17° drop)',
            'day_2': '28°F → 12°F (sustained cold)',
            'day_3': '12°F → -2°F (extreme cold peak)',
            'day_4': '-2°F → 8°F (beginning recovery)',
            'day_5': '8°F → 22°F (gradual thaw)'
        }
    },
    'ml_model': {
        algorithm: 'Random Forest Regressor',
        accuracy_r2: 0.9770366171546206,
        mae: '1,112 MW',
        features: 29,
        training_data: 'Historical ERCOT data 2018-2024 + Winter Storm Uri',
        key_features: [
            'temperature_celsius (0.189 importance)',
            'hour_of_day (0.143 importance)',
            'wind_speed_kmh (0.112 importance)',
            'temp_x_hour interaction (0.098 importance)',
            'solar_power_index (0.087 importance)'
        ]
    },
    'texas_grid': {
        total_capacity: '72,500 MW',
        normal_peak: '52,000 MW',
        typical_utilization: '65-75%',
        regions: 5,
        generation_mix: {
            'natural_gas': '52%',
            'wind': '24%',
            'coal': '13%',
            'nuclear': '8%',
            'solar': '3%'
        },
        weaknesses: [
            'Isolated from national grids (limited interconnections)',
            'Deregulated market prioritizes low costs over resilience',
            'Renewable intermittency without sufficient storage',
            'Aging thermal plant infrastructure'
        ]
    },
    'agent_architecture': {
        protocol: 'Model Context Protocol (MCP)',
        agents: 12,
        communication_pattern: 'Distributed mesh network',
        message_rate: '200+ messages/hour during normal operation',
        coordination_types: [
            'Load Forecaster ↔ Weather Analyst (predictive coordination)',
            'Grid Stabilizer ↔ Resource Controller (real-time balancing)',
            'Risk Surveillance ↔ Emergency Response (threat detection)',
            'Historical Data ↔ All agents (pattern matching)',
            'Comm Manager (orchestration hub)'
        ],
        advantages: [
            'No single point of failure',
            'Parallel processing of multiple scenarios',
            'Self-healing through redundancy',
            'Adaptive learning from agent interactions'
        ]
    }
};

// ============================================================================
// MCP TOOLS FOR RAG RETRIEVAL
// ============================================================================
const MCP_RAG_TOOLS = {
    'retrieve_winter_storm_data': {
        description: 'Retrieves historical Winter Storm Uri data and failure analysis',
        handler: (query) => {
            const data = RAG_KNOWLEDGE_BASE.winter_storm_uri;
            if (query.includes('temperature') || query.includes('cold')) {
                return `Winter Storm Uri (Feb 2021): Temperatures plunged from 45°F to -2°F over 3 days. ${data.casualties} casualties. Grid shortage: ${data.shortage}. Key failure: ${data.grid_failure_causes[0]}`;
            }
            if (query.includes('cause') || query.includes('failure')) {
                return `Primary failures: ${data.grid_failure_causes.join('; ')}. Economic impact: ${data.economic_impact}.`;
            }
            return `Winter Storm Uri (Feb 2021): Peak demand ${data.peak_demand}, Available ${data.available_capacity}. Lessons learned: ${data.lessons_learned[3]}`;
        }
    },
    'query_ml_model': {
        description: 'Queries ML model architecture and performance metrics',
        handler: (query) => {
            const data = RAG_KNOWLEDGE_BASE.ml_model;
            if (query.includes('accuracy') || query.includes('performance')) {
                return `Random Forest model: R²=${data.accuracy_r2.toFixed(4)}, MAE=${data.mae}. Top feature: temperature_celsius (18.9% importance). Trained on ${data.training_data}.`;
            }
            if (query.includes('feature')) {
                return `29 engineered features. Top 5: ${data.key_features.slice(0, 3).join('; ')}.`;
            }
            return `${data.algorithm} with ${data.features} features. Accuracy: R²=${data.accuracy_r2.toFixed(3)}`;
        }
    },
    'retrieve_grid_architecture': {
        description: 'Retrieves Texas grid architecture and vulnerability analysis',
        handler: (query) => {
            const data = RAG_KNOWLEDGE_BASE.texas_grid;
            if (query.includes('weakness') || query.includes('vulnerability')) {
                return `Grid vulnerabilities: ${data.weaknesses.join('; ')}`;
            }
            if (query.includes('generation') || query.includes('mix')) {
                return `Generation mix: Natural gas ${data.generation_mix.natural_gas}, Wind ${data.generation_mix.wind}, Coal ${data.generation_mix.coal}. Total capacity: ${data.total_capacity}.`;
            }
            return `Texas grid: ${data.regions} regions, ${data.total_capacity} capacity. Normal peak: ${data.normal_peak}. ${data.weaknesses[0]}`;
        }
    },
    'retrieve_agent_coordination': {
        description: 'Retrieves distributed agent architecture and MCP protocol details',
        handler: (query) => {
            const data = RAG_KNOWLEDGE_BASE.agent_architecture;
            if (query.includes('protocol') || query.includes('mcp')) {
                return `${data.protocol}: ${data.agents} agents in ${data.communication_pattern}. ${data.message_rate}. Coordination: ${data.coordination_types[0]}`;
            }
            if (query.includes('advantage') || query.includes('benefit')) {
                return `Agent advantages: ${data.advantages.join('; ')}`;
            }
            return `${data.agents} distributed agents using ${data.protocol}. Pattern: ${data.communication_pattern}. ${data.advantages[0]}`;
        }
    },
    'retrieve_current_grid_state': {
        description: 'Retrieves real-time grid status from live system data',
        handler: (query) => {
            const totalLoad = REGIONS.reduce((sum, r) => sum + r.load, 0);
            const totalCapacity = REGIONS.reduce((sum, r) => sum + r.capacity, 0);
            const util = (totalLoad / totalCapacity * 100).toFixed(1);
            const criticalRegions = REGIONS.filter(r => r.utilization > 75);
            
            if (query.includes('region')) {
                return `5 regions: ${REGIONS.map(r => `${r.name} ${r.utilization.toFixed(1)}%`).join(', ')}. ${criticalRegions.length > 0 ? `ALERT: ${criticalRegions.map(r => r.name).join(', ')}` : 'All nominal'}`;
            }
            if (query.includes('peak') || query.includes('forecast')) {
                const peak = Math.max(...FORECAST_DATA.map(d => d.load));
                const peakHour = FORECAST_DATA.find(d => d.load === peak)?.hour;
                return `Current: ${totalLoad.toLocaleString()} MW (${util}%). Forecast peak: ${peak.toLocaleString()} MW at ${peakHour}. Capacity margin: ${(totalCapacity - peak).toLocaleString()} MW.`;
            }
            return `Texas grid: ${totalLoad.toLocaleString()} MW / ${totalCapacity.toLocaleString()} MW (${util}%). Status: ${util > 75 ? 'ALERT' : 'NORMAL'}. ${criticalRegions.length} regions require attention.`;
        }
    }
};

// ============================================================================
// STATE MANAGEMENT
// ============================================================================
let chart = null;
let a2aMessageIndex = 0;
let currentScenario = 0;
let chatbotMinimized = false;

// ============================================================================
// INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
    initializeAgents();
    initializeMap();
    initializeForecastChart();
    initializeA2ACommunication();
    initializeChatbot();
    setupEventListeners();
    
    console.log('GridGuard AI Summit Edition - Initialized');
});

// ============================================================================
// AGENT NETWORK INITIALIZATION
// ============================================================================
function initializeAgents() {
    const grid = document.getElementById('agentGrid');
    grid.innerHTML = '';
    
    AGENTS.forEach(agent => {
        const badge = document.createElement('div');
        badge.className = 'agent-badge' + (agent.active ? ' active' : '');
        badge.innerHTML = `
            <div class="agent-abbr" style="color: ${agent.color}">${agent.id}</div>
            <div class="agent-name">${agent.name}</div>
        `;
        badge.onclick = () => highlightAgent(agent.id);
        grid.appendChild(badge);
    });
}

function highlightAgent(agentId) {
    const agent = AGENTS.find(a => a.id === agentId);
    if (agent) {
        addChatMessage('assistant', `${agent.id} (${agent.name}): Specialized agent handling ${getAgentResponsibility(agentId)}. Status: ACTIVE. Processing 45 MCP messages/hour.`, [agentId]);
    }
}

function getAgentResponsibility(agentId) {
    const responsibilities = {
        'LF': 'load forecasting and ML predictions',
        'WA': 'weather analysis and climate data',
        'GS': 'real-time grid stabilization',
        'AM': 'asset management and resource allocation',
        'RE': 'renewable energy optimization',
        'DR': 'demand response coordination',
        'HD': 'historical pattern analysis',
        'OP': 'system-wide optimization',
        'RS': 'risk monitoring and alerts',
        'RC': 'resource control and distribution',
        'ER': 'emergency response protocols',
        'CM': 'inter-agent communication'
    };
    return responsibilities[agentId] || 'grid operations';
}

// ============================================================================
// A2A COMMUNICATION SYSTEM
// ============================================================================
function initializeA2ACommunication() {
    playA2AScenario();
    setInterval(() => {
        currentScenario = (currentScenario + 1) % A2A_SCENARIOS.length;
        playA2AScenario();
    }, 15000); // New scenario every 15 seconds
}

function playA2AScenario() {
    const scenario = A2A_SCENARIOS[currentScenario];
    const feed = document.getElementById('a2aFeed');
    
    // Clear feed for new scenario
    if (a2aMessageIndex === 0) {
        feed.innerHTML = '';
    }
    
    let delay = 0;
    scenario.messages.forEach((msg, index) => {
        setTimeout(() => {
            addA2AMessage(msg);
        }, delay);
        delay += 2000; // 2 seconds between messages
    });
    
    a2aMessageIndex = 0;
}

function addA2AMessage(msg) {
    const feed = document.getElementById('a2aFeed');
    const agent = AGENTS.find(a => a.id === msg.from);
    
    const messageEl = document.createElement('div');
    messageEl.className = `a2a-message ${msg.type}`;
    
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    let content = msg.content;
    if (msg.tool) {
        content = content.replace(msg.tool, `<span class="a2a-tool">${msg.tool}</span>`);
    }
    
    messageEl.innerHTML = `
        <div class="a2a-header">
            <div class="a2a-from" style="color: ${agent.color}">${msg.from} → ALL</div>
            <div class="a2a-time">${time}</div>
        </div>
        <div class="a2a-content">${content}</div>
    `;
    
    feed.appendChild(messageEl);
    feed.scrollTop = feed.scrollHeight;
    
    // Keep only last 12 messages
    while (feed.children.length > 12) {
        feed.removeChild(feed.firstChild);
    }
}

// ============================================================================
// TEXAS MAP VISUALIZATION
// ============================================================================
function initializeMap() {
    const canvas = document.getElementById('texasMap');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        const container = canvas.parentElement;
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        drawTexasMap();
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        REGIONS.forEach(region => {
            const distance = Math.sqrt(Math.pow(x - region.x, 2) + Math.pow(y - region.y, 2));
            if (distance < 0.08) {
                showRegionInfo(region);
            }
        });
    });
}

function drawTexasMap() {
    const canvas = document.getElementById('texasMap');
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    
    ctx.clearRect(0, 0, w, h);
    
    // Draw Texas outline (simplified)
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.15, h * 0.30);
    ctx.lineTo(w * 0.25, h * 0.20);
    ctx.lineTo(w * 0.65, h * 0.15);
    ctx.lineTo(w * 0.85, h * 0.35);
    ctx.lineTo(w * 0.90, h * 0.55);
    ctx.lineTo(w * 0.85, h * 0.80);
    ctx.lineTo(w * 0.60, h * 0.90);
    ctx.lineTo(w * 0.35, h * 0.85);
    ctx.lineTo(w * 0.20, h * 0.70);
    ctx.lineTo(w * 0.10, h * 0.45);
    ctx.closePath();
    ctx.stroke();
    
    // Draw region connections
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
    ctx.lineWidth = 1;
    for (let i = 0; i < REGIONS.length; i++) {
        for (let j = i + 1; j < REGIONS.length; j++) {
            ctx.beginPath();
            ctx.moveTo(REGIONS[i].x * w, REGIONS[i].y * h);
            ctx.lineTo(REGIONS[j].x * w, REGIONS[j].y * h);
            ctx.stroke();
        }
    }
    
    // Draw region markers
    REGIONS.forEach(region => {
        const x = region.x * w;
        const y = region.y * h;
        
        // Determine color based on utilization
        let color = '#10B981'; // Green
        if (region.utilization > 90) color = '#EF4444'; // Red
        else if (region.utilization > 75) color = '#F59E0B'; // Amber
        
        // Glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 40);
        gradient.addColorStop(0, color + '40');
        gradient.addColorStop(1, color + '00');
        ctx.fillStyle = gradient;
        ctx.fillRect(x - 40, y - 40, 80, 80);
        
        // Marker circle
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Label
        ctx.fillStyle = '#E5E7EB';
        ctx.font = 'bold 12px -apple-system';
        ctx.textAlign = 'center';
        ctx.fillText(region.name, x, y + 25);
        ctx.font = '11px -apple-system';
        ctx.fillStyle = color;
        ctx.fillText(`${region.utilization.toFixed(1)}%`, x, y + 40);
    });
}

function showRegionInfo(region) {
    addChatMessage('assistant', `${region.name}: Load ${region.load.toLocaleString()} MW / Capacity ${region.capacity.toLocaleString()} MW. Utilization: ${region.utilization.toFixed(1)}%. Status: ${region.utilization > 75 ? 'ALERT' : 'NORMAL'}.`, ['RC', 'GS']);
}

// ============================================================================
// FORECAST CHART
// ============================================================================
function initializeForecastChart() {
    const ctx = document.getElementById('forecastChart');
    if (!ctx) return;
    
    const labels = FORECAST_DATA.map(d => d.hour);
    const loads = FORECAST_DATA.map(d => d.load);
    const colors = FORECAST_DATA.map(d => {
        if (d.utilization > 90) return '#EF4444';
        if (d.utilization > 75) return '#F59E0B';
        return '#10B981';
    });
    
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Forecasted Load (MW)',
                data: loads,
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 2,
                pointBackgroundColor: colors,
                pointBorderColor: '#FFFFFF',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(17, 24, 39, 0.95)',
                    titleColor: '#E5E7EB',
                    bodyColor: '#E5E7EB',
                    borderColor: '#374151',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            const dataPoint = FORECAST_DATA[context.dataIndex];
                            return [
                                `Load: ${dataPoint.load.toLocaleString()} MW`,
                                `Utilization: ${dataPoint.utilization.toFixed(1)}%`,
                                `Status: ${dataPoint.utilization > 75 ? 'ALERT' : 'NORMAL'}`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(55, 65, 81, 0.3)' },
                    ticks: { 
                        color: '#9CA3AF',
                        font: { size: 10 },
                        maxRotation: 45,
                        minRotation: 45
                    }
                },
                y: {
                    grid: { color: 'rgba(55, 65, 81, 0.3)' },
                    ticks: { 
                        color: '#9CA3AF',
                        font: { size: 11 },
                        callback: value => value.toLocaleString() + ' MW'
                    }
                }
            }
        }
    });
}

// ============================================================================
// CHATBOT SYSTEM WITH MCP-RAG
// ============================================================================
function initializeChatbot() {
    // Welcome message
    setTimeout(() => {
        addChatMessage('assistant', 'GridGuard AI Assistant online. Powered by distributed MCP-RAG with live agent coordination. Ask me anything about grid status, forecasts, Winter Storm Uri, or agent architecture.', ['CM']);
    }, 1000);
}

function addChatMessage(sender, text, agentIds = []) {
    const container = document.getElementById('chatMessages');
    const messageEl = document.createElement('div');
    messageEl.className = `chat-message ${sender}`;
    
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    const avatar = sender === 'user' ? 'YOU' : (agentIds.length > 0 ? agentIds[0] : 'AI');
    const avatarColor = sender === 'user' ? '#8B5CF6' : (agentIds.length > 0 ? AGENTS.find(a => a.id === agentIds[0])?.color || '#3B82F6' : '#3B82F6');
    
    messageEl.innerHTML = `
        <div class="chat-avatar" style="background: ${avatarColor}">${avatar}</div>
        <div>
            <div class="chat-bubble">${text}</div>
            <div class="chat-time">${time}</div>
        </div>
    `;
    
    container.appendChild(messageEl);
    container.scrollTop = container.scrollHeight;
}

function processChatMessage(message) {
    const lowerMsg = message.toLowerCase();
    
    // Add user message
    addChatMessage('user', message);
    
    // Determine which MCP RAG tools to invoke based on query
    const toolsToInvoke = [];
    const involvedAgents = [];
    
    if (lowerMsg.includes('winter storm') || lowerMsg.includes('uri') || lowerMsg.includes('2021') || lowerMsg.includes('failure')) {
        toolsToInvoke.push({ tool: 'retrieve_winter_storm_data', agent: 'HD' });
        involvedAgents.push('HD', 'ER');
    }
    if (lowerMsg.includes('accuracy') || lowerMsg.includes('model') || lowerMsg.includes('ml') || lowerMsg.includes('feature')) {
        toolsToInvoke.push({ tool: 'query_ml_model', agent: 'LF' });
        involvedAgents.push('LF', 'HD');
    }
    if (lowerMsg.includes('grid') && (lowerMsg.includes('architecture') || lowerMsg.includes('weakness') || lowerMsg.includes('vulnerability'))) {
        toolsToInvoke.push({ tool: 'retrieve_grid_architecture', agent: 'RS' });
        involvedAgents.push('RS', 'GS');
    }
    if (lowerMsg.includes('agent') && (lowerMsg.includes('coordination') || lowerMsg.includes('mcp') || lowerMsg.includes('protocol') || lowerMsg.includes('communication'))) {
        toolsToInvoke.push({ tool: 'retrieve_agent_coordination', agent: 'CM' });
        involvedAgents.push('CM', 'OP');
    }
    if (lowerMsg.includes('status') || lowerMsg.includes('current') || lowerMsg.includes('region') || lowerMsg.includes('peak') || lowerMsg.includes('forecast')) {
        toolsToInvoke.push({ tool: 'retrieve_current_grid_state', agent: 'RC' });
        involvedAgents.push('RC', 'LF', 'GS');
    }
    
    // Default to current grid state if no specific query matched
    if (toolsToInvoke.length === 0) {
        toolsToInvoke.push({ tool: 'retrieve_current_grid_state', agent: 'CM' });
        involvedAgents.push('CM');
    }
    
    // Show MCP tool invocations in A2A feed
    let delay = 500;
    const retrievedData = [];
    
    toolsToInvoke.forEach((invocation, index) => {
        setTimeout(() => {
            // Show tool call in A2A feed
            addA2AMessage({
                from: invocation.agent,
                type: 'tool-call',
                content: `User query detected. Invoking ${invocation.tool} to retrieve relevant data.`,
                tool: invocation.tool
            });
            
            // Execute RAG retrieval
            const result = MCP_RAG_TOOLS[invocation.tool].handler(lowerMsg);
            retrievedData.push(result);
            
            setTimeout(() => {
                // Show tool response in A2A feed
                addA2AMessage({
                    from: invocation.agent,
                    type: 'tool-response',
                    content: `Retrieved: ${result.substring(0, 80)}...`,
                    tool: invocation.tool + '_response'
                });
                
                // If this is the last tool, synthesize final response
                if (index === toolsToInvoke.length - 1) {
                    setTimeout(() => {
                        // CM synthesizes all retrieved data
                        addA2AMessage({
                            from: 'CM',
                            type: 'message',
                            content: `Synthesizing ${retrievedData.length} knowledge retrieval(s) for user response.`
                        });
                        
                        setTimeout(() => {
                            // Send final response to chatbot
                            const finalResponse = synthesizeRAGResponse(retrievedData, involvedAgents);
                            addChatMessage('assistant', finalResponse, involvedAgents);
                        }, 800);
                    }, 600);
                }
            }, 1000);
        }, delay);
        delay += 2500; // Stagger tool calls
    });
}

function synthesizeRAGResponse(retrievedData, agents) {
    // Combine all retrieved data into coherent response
    if (retrievedData.length === 1) {
        return retrievedData[0];
    }
    
    // Multiple retrievals - synthesize
    let response = retrievedData.join(' ');
    
    // Add agent attribution
    const uniqueAgents = [...new Set(agents)];
    response += `\n\n[Data sourced from ${uniqueAgents.length} agent(s): ${uniqueAgents.join(', ')}]`;
    
    return response;
}

// ============================================================================
// EVENT LISTENERS
// ============================================================================
function setupEventListeners() {
    // Update button
    document.getElementById('updateBtn').addEventListener('click', () => {
        simulateUpdate();
        addChatMessage('assistant', 'Grid update triggered. All agents synchronized. Latest forecast: Peak 52,450 MW at 7 PM. System status: NORMAL.', ['CM', 'LF', 'GS']);
    });
    
    // Refresh button
    document.getElementById('refreshBtn').addEventListener('click', () => {
        location.reload();
    });
    
    // Chatbot minimize
    document.getElementById('minimizeBtn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleChatbot();
    });
    
    document.getElementById('chatbotHeader').addEventListener('click', () => {
        if (chatbotMinimized) toggleChatbot();
    });
    
    // Chat input
    const input = document.getElementById('chatInput');
    const sendBtn = document.getElementById('chatSend');
    
    sendBtn.addEventListener('click', () => {
        const message = input.value.trim();
        if (message) {
            processChatMessage(message);
            input.value = '';
        }
    });
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });
    
    // Quick actions
    document.querySelectorAll('.quick-action').forEach(btn => {
        btn.addEventListener('click', () => {
            const query = btn.getAttribute('data-query');
            processChatMessage(query);
        });
    });
}

function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbotMinimized = !chatbotMinimized;
    chatbot.classList.toggle('minimized', chatbotMinimized);
    document.getElementById('minimizeBtn').textContent = chatbotMinimized ? '+' : '−';
}

// ============================================================================
// SIMULATION UPDATE
// ============================================================================
function simulateUpdate() {
    // Update region utilizations
    REGIONS.forEach(region => {
        region.utilization = Math.max(50, Math.min(95, region.utilization + (Math.random() - 0.5) * 5));
        region.load = Math.round(region.capacity * region.utilization / 100);
    });
    
    // Update header metrics
    const totalLoad = REGIONS.reduce((sum, r) => sum + r.load, 0);
    const totalCapacity = REGIONS.reduce((sum, r) => sum + r.capacity, 0);
    const avgUtil = (totalLoad / totalCapacity * 100).toFixed(1);
    
    document.getElementById('headerLoad').textContent = totalLoad.toLocaleString() + ' MW';
    document.getElementById('headerCapacity').textContent = totalCapacity.toLocaleString() + ' MW';
    document.getElementById('headerUtil').textContent = avgUtil + '%';
    
    // Redraw map
    drawTexasMap();
    
    // Trigger new A2A scenario
    currentScenario = (currentScenario + 1) % A2A_SCENARIOS.length;
    playA2AScenario();
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================
function adjustBrightness(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255))
        .toString(16).slice(1);
}
