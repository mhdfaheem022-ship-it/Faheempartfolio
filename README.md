# Faheem Sha - Professional Portfolio

A premium, high-performance personal portfolio website built for Faheem Sha (Full-Stack Developer & UI/UX Designer). The project features a sleek, responsive design using a modern glassmorphism aesthetic, rich typography, smooth scroll transitions, and subtle interactive elements.

## 🚀 Features

- **Sleek Glassmorphic Styling**: Frosted elements, translucent borders (`backdrop-filter`), neon cyan and indigo accents, and animated backgrounds.
- **Interactive 3D Tilt Card**: A custom JavaScript-powered 3D rotation effect that tracks user cursor movements on the code preview card.
- **Mobile Responsive Drawer Nav**: Seamless transition to a mobile slide-out menu with smooth hamburger animation.
- **Custom Cursor Glow Effect**: Radial gradients track the cursor position across the canvas to create a premium, immersive ambient glow.
- **Scroll Reveals**: Intersection Observer API asynchronously injects visual active classes to animate components as they scroll into view.
- **Interactive Tech Stack toolkit**: Skill ratings with custom gradient indicators.
- **Functional Contact Form Simulation**: Form submissions with active input animations, button loading feedback, and validation messages.

---

## 🛠️ Tech Stack & Architecture

- **Core**: HTML5 (Semantic Structure)
- **Styles**: CSS3 (Custom Grid layouts, Flexbox, Variable Tokens, and CSS Keyframes)
- **Logic**: Vanilla JavaScript (ES6 Modules, Intersection Observer API, Event Streams)
- **Fonts**: *Plus Jakarta Sans* (Heading & body structures) & *Space Grotesk* (Tech monospace layout)

---

## 💻 Local Setup & Development

To view and edit the project locally, you don't need any complex build configurations. Simply open `index.html` directly in your browser or run a lightweight local server.

### Option A: VS Code Live Server
1. Install the "Live Server" extension in VS Code.
2. Click **Go Live** at the bottom-right corner of the window.

### Option B: Local Python HTTP Server
Run the following command in the project directory:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 📁 File Structure

```
Faheem Partfolio/
├── index.html       # Primary semantic markup, head config & SVG visual tags
├── style.css        # Layout structure, design token definitions & keyframe animations
├── script.js        # Event delegation, DOM manipulation, and visual reveals
└── README.md        # Technical project documentation
```
