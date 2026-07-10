
# SEIZE DA FLAQ — Official Landing Page

## Overview

**SEIZE DA FLAQ** is the official landing page for a National-Level Capture The Flag (CTF) competition organized by the **Cyberonites Club**.

The website delivers an immersive, GTA-inspired cyberpunk experience that introduces participants to the competition, showcases its structure, and provides all essential event information in a modern, responsive interface.

---

## Features

* Modern GTA-inspired cyberpunk design
* Fully responsive across desktop, tablet, and mobile devices
* Smooth scrolling experience using Lenis
* GSAP-powered scroll reveal animations
* Framer Motion micro-interactions
* Interactive CTF Categories section
* Competition Overview with event statistics
* Event Timeline
* Sponsors showcase
* Registration section
* Frequently Asked Questions
* Responsive Footer with quick navigation and social links
* Centralized configuration using `eventConfig.js`

---

## Tech Stack

### Frontend

* React
* Vite
* JavaScript (ES6+)

### Styling

* Tailwind CSS
* Custom CSS
* Glassmorphism UI
* Responsive Design

### Animations

* GSAP
* ScrollTrigger
* Framer Motion
* Lenis Smooth Scroll

### Icons

* React Icons

---

## Project Structure

```text
src/
│
├── assets/
│   ├── backgrounds/
│   ├── images/
│   └── icons/
│
├── components/
│   └── ui/
│
├── constants/
│   └── eventConfig.js
│
├── hooks/
│
├── layout/
│
├── sections/
│   ├── Hero
│   ├── MissionBriefing
│   ├── MainCTF
│   ├── CTFCategories
│   ├── CompetitionOverview
│   ├── Timeline
│   ├── Sponsors
│   ├── RegistrationDetails
│   ├── FAQ
│   └── Footer
│
├── App.jsx
└── main.jsx
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd seize-da-flaq
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Configuration

Most event-related content is managed through:

```text
src/constants/eventConfig.js
```

This file contains:

* Event Information
* Registration Details
* Mission Briefing
* Competition Overview
* Timeline
* Sponsors
* Contact Information
* Footer Content

Updating the event details only requires modifying this configuration file.

---

## Design Philosophy

The landing page follows a cinematic visual direction inspired by:

* GTA VI
* Cyberpunk aesthetics
* Neon lighting
* Mission-based storytelling
* Modern gaming interfaces

The design emphasizes accessibility, responsiveness, and performance while maintaining an immersive user experience.

---

## Performance

The project is optimized using:

* Lazy-loaded sections
* Responsive images
* Component-based architecture
* Reusable UI components
* Smooth yet lightweight animations
* Optimized Vite build process

---

## Contributors

Developed as the official landing page for **SEIZE DA FLAQ** by the **Cyberonites Club**.

---

## License

This project is intended for the official SEIZE DA FLAQ event. All branding, logos, graphics, and related assets belong to their respective owners.
