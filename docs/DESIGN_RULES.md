# GridGuard AI - Design Rules & Guidelines

**Last Updated:** October 16, 2025  
**Purpose:** Maintain military/government-grade professional aesthetic for Texas AI Leadership Summit 2025

---

## 🚫 STRICT PROHIBITIONS

### **NO EMOJIS - EVER**
- ❌ No emojis in UI elements (buttons, labels, headers, cards)
- ❌ No emojis in alerts, warnings, or status messages
- ❌ No emojis in agent names, descriptions, or communications
- ❌ No decorative icons or emoji substitutes
- ✅ Use text labels, abbreviations, and professional typography ONLY

### **NO CASUAL LANGUAGE**
- ❌ No informal phrases ("Uh oh!", "Yikes!", "Oops!")
- ❌ No exclamation marks in system messages (use periods)
- ✅ Use technical, precise, military-style communication

---

## ✅ DESIGN PRINCIPLES

### **1. Professional Typography**
```
Primary Font:     -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter'
Monospace Font:   'SF Mono', 'Monaco', 'Courier New', monospace
Headers:          Font-weight 700-800, letter-spacing -0.5px
Body:             Font-weight 400-500
Labels:           UPPERCASE, letter-spacing 0.5-1px, font-weight 600-700
```

### **2. Color Palette - Dark Military Theme**
```css
Background:       #000000 → #0a0e17 (gradient)
Cards:            #111827 (with 0.4-0.6 opacity + backdrop blur)
Text Primary:     #F9FAFB (white)
Text Secondary:   #9CA3AF (gray)
Text Muted:       #6B7280 (dark gray)
Accent:           #3B82F6 (blue)
Safe:             #10B981 (green)
Caution:          #F59E0B (orange)
Critical:         #EF4444 (red)
Border:           #1f2937, #374151
```

### **3. Agent Abbreviations (NOT Full Names in UI)**
Use these 2-letter codes everywhere:
- **LF** - Load Forecasting
- **WA** - Weather Analysis  
- **GS** - Grid Stability
- **AM** - Alert Management
- **RE** - Renewable Energy
- **DR** - Demand Response
- **HD** - Historical Data
- **OP** - Optimization
- **RS** - Research
- **RC** - Research Critic
- **ER** - Emergency Response
- **CM** - Compliance

### **4. Spacing & Layout**
```
Base Unit:        8px
Sidebar Padding:  24px
Card Padding:     16px
Gap (Grid):       12-16px
Gap (List):       10px
Border Radius:    8-12px (cards), 16-24px (badges)
```

### **5. Visual Effects (Minimal & Professional)**
```css
Transitions:      0.2-0.3s cubic-bezier(0.4, 0, 0.2, 1)
Shadows:          Subtle (0 4px 12px rgba(0,0,0,0.3))
Glow:             Only on status indicators (box-shadow with color)
Backdrop Blur:    20px on glass-morphism panels
Hover States:     Translate -2px to -4px, subtle color shifts
```

---

## 📋 COMPONENT STANDARDS

### **Status Messages**
```
✅ CORRECT:  "HIGH STRESS PREDICTED"
❌ WRONG:    "⚠️ High Stress Predicted!"

✅ CORRECT:  "Active Alerts"
❌ WRONG:    "🚨 Active Alerts"

✅ CORRECT:  "Model R²: 0.977"
❌ WRONG:    "Model Accuracy: 97.7% 🎯"
```

### **Alert Formatting**
```
Title:       UPPERCASE, font-weight 700, color based on severity
Body:        Sentence case, color: var(--color-text-secondary)
Border:      1px solid with alpha transparency
Background:  Gradient with alpha (e.g., rgba(245, 158, 11, 0.12))
```

### **Metric Cards**
```
Label:       UPPERCASE, 11px, font-weight 600, muted color
Value:       28px, font-weight 800, monospace font
Detail:      11px, muted color with inline color accents
Icon:        NONE (no emojis, no SVG icons)
```

### **Charts & Visualizations**
```
Background:  Transparent or subtle dark gradient
Grid Lines:  rgba(55, 65, 81, 0.3)
Point Size:  4-5px, 6-7px on hover
Colors:      Match status (green/orange/red based on thresholds)
Tooltips:    Dark background (rgba(17, 24, 39, 0.95))
```

---

## 🎯 ELITE VERSION SPECIFICS

### **Three-Column Layout**
```
Left Sidebar:    320px (agent network + performance list)
Center:          Flexible (Texas map + bottom metrics bar)
Right Sidebar:   400px (24-hour forecast + MCP feed)
```

### **Header Metrics**
```
Display:     5 metrics + status badge + update button
Format:      Label (10px) above Value (20px monospace)
Separator:   None (removed for cleaner look)
```

### **Texas Map**
```
Canvas Size:     100% of container
Background:      Radial gradient (dark center)
Outline:         Dashed (#374151, 8px dash)
Connections:     Glowing cyan lines (rgba(6, 182, 212, 0.4))
Markers:         30px radius, radial gradient, 20px glow
Labels:          Bold 13px, shadow for readability
```

### **MCP Feed**
```
Message Style:   Left border accent (3px solid accent color)
Hover Effect:    Background shift + shadow extension
Agent Name:      Bold, accent color
Timestamp:       10px, muted color, right-aligned
Max Messages:    10 (auto-prune oldest)
```

---

## 🔒 ABSOLUTELY FORBIDDEN

1. ❌ Emojis or emoji-style unicode characters
2. ❌ Comic Sans, cursive, or playful fonts
3. ❌ Bright neon colors (stick to palette)
4. ❌ Rainbow gradients or flashy animations
5. ❌ Casual language or exclamation marks in system text
6. ❌ Stock photos or decorative images
7. ❌ Sound effects or notification beeps
8. ❌ Centered text in data displays (left/right align only)

---

## ✅ ALWAYS REQUIRED

1. ✅ Professional abbreviations (LF, WA, GS, etc.)
2. ✅ Monospace fonts for numeric data
3. ✅ UPPERCASE labels for section headers
4. ✅ Consistent 8px spacing grid
5. ✅ Subtle hover states (no jarring transitions)
6. ✅ Dark theme with high contrast text
7. ✅ Accessible color choices (WCAG AA minimum)
8. ✅ Responsive to viewport changes

---

## 📐 MEASUREMENT STANDARDS

### **Font Sizes**
```
Hero:         28px (metric values)
Title:        18px (section headers)
Subtitle:     13-16px (subsection headers)
Body:         12-13px (normal text)
Label:        10-11px (field labels, timestamps)
Micro:        9-10px (fine print, helper text)
```

### **Font Weights**
```
Extra Bold:   800 (hero numbers, primary headers)
Bold:         700 (section titles, emphasized text)
Semibold:     600 (labels, secondary emphasis)
Medium:       500 (body text, descriptions)
Regular:      400 (default fallback)
```

---

## 🎨 BRAND IDENTITY

**GridGuard AI** is a **military-grade intelligence system** for critical infrastructure monitoring.

**Tone:**
- Authoritative, not playful
- Precise, not casual
- Technical, not consumer-friendly
- Confident, not boastful

**Audience:**
- CTOs, CIOs, Engineering Directors
- Government officials, Military personnel
- Energy executives, Utility operators
- Investors seeking serious AI solutions

**Competitive Edge:**
- Real Winter Storm Uri case study
- 97.7% ML accuracy (R² = 0.977)
- Distributed multi-agent architecture
- A2A (Agent-to-Agent) MCP protocol

---

## 📝 CHECKLIST FOR ANY UI CHANGE

Before committing any design update, verify:

- [ ] No emojis anywhere in the code
- [ ] All text uses approved fonts and weights
- [ ] Colors match the defined palette
- [ ] Spacing follows 8px grid system
- [ ] Agent names use 2-letter abbreviations
- [ ] Status messages are UPPERCASE and professional
- [ ] Hover states are subtle (< 4px translate)
- [ ] Border radius is 8-12px (cards) or 16-24px (badges)
- [ ] Shadows are dark and minimal
- [ ] Typography hierarchy is clear
- [ ] Accessibility contrast ratios meet WCAG AA

---

## 🚀 SUMMIT PRESENTATION NOTES

**Date:** November 5, 2025  
**Event:** Texas AI Leadership Summit 2025  
**Time Slot:** 3:30-5:00 PM (Student AI Project Showcase)  
**Audience:** 300+ business leaders, investors, executives

**Demo Focus:**
1. Show real-time agent coordination (12 agents active)
2. Highlight 97.7% prediction accuracy
3. Demonstrate Texas map with live regional data
4. Explain Winter Storm Uri case study impact
5. Show A2A (Agent-to-Agent) MCP communication

**Key Talking Points:**
- "Military-grade AI for critical infrastructure"
- "Distributed multi-agent architecture with MCP protocol"
- "Prevented $195B in economic damage (Uri scenario)"
- "29 engineered features, R² = 0.977, MAE = 1,112 MW"

---

**END OF DESIGN RULES**

*These guidelines are non-negotiable for maintaining GridGuard AI's professional, military-grade aesthetic. Any deviation must be approved and documented.*
