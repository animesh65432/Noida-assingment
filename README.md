# 📱 Instagram Stories Feature Clone

A simplified mobile-only version of the Instagram Stories feature built with **React.js + TypeScript**. This project is part of the Cactro technical assignment.

---

## 🚀 Live Demo

👉 [Deployed Link](https://noida-assingment.vercel.app/)  

---

## 📦 Project Setup

1. Clone the Repository

git clone https://github.com/animesh65432/Noida-assingment.git
cd  Noida-assingment

2. Install Dependencies
   RUN npm install
   
4. Start Development Server
   npm run dev

4. Run End-to-End Tests (using Playwright)
   npm run test

   
🧠 Design Decisions
⛓️ State Management
Used useState, useEffect, and useRef to manage story state and timers.

Simple, component-local state to avoid unnecessary global complexity.

⚡ Performance Optimizations
Stories preloaded once from an external file.

🧪 Testing Strategy
Playwright tests simulate:

Story opening

Manual navigation

Auto-advancement after 5 seconds

