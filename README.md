<div align="center">
  <h1 align="center">Ansh Verma - Personal Portfolio</h1>
  <p align="center">
    A modern, high-performance portfolio built with Next.js 15, React 18, and immersive 3D graphics.
  </p>
  
  <p align="center">
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" /></a>
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react&logoColor=white" alt="React" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" /></a>
  </p>

  <p align="center">
    <a href="https://ansh-portfolio-v1.vercel.app/"><strong>Explore the Live Portfolio »</strong></a>
  </p>
</div>

<br />

## 🌐 Live Website

Check out the live portfolio here: **[ansh-portfolio-v1.vercel.app](https://ansh-portfolio-v1.vercel.app/)**

---

## 📖 Table of Contents

- [🌐 Live Website](#-live-website)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Folder Structure](#-folder-structure)
- [🚀 Getting Started](#-getting-started)
- [⚙️ Environment Variables](#️-environment-variables)
- [🤝 Contributing & Usage](#-contributing--usage)
- [👨‍💻 Author](#-author)

---

## ✨ Features

- **⚡ Blazing Fast**: Built with Next.js App Router for optimal performance, SSR, and SEO.
- **🎨 Modern Design**: Immersive UI with clean aesthetics, powered by Tailwind CSS.
- **🧊 3D Graphics & Animations**: Stunning visual effects using **Three.js**, **React Three Fiber**, **Framer Motion**, and **GSAP**.
- **📜 Smooth Scrolling**: Momentum-based seamless scrolling experience integrated via **Locomotive Scroll**.
- **🤖 AI Integration**: Intelligent features powered by **Google Generative AI (Gemini)** via the Vercel AI SDK.
- **📱 Fully Responsive**: Fluid layouts that adapt beautifully across all device sizes.
- **📬 Interactive Contact**: Functional contact form powered by **EmailJS** with robust validation using **Zod** & **React Hook Form**.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Core** | Next.js 15, React 18, TypeScript |
| **Styling** | Tailwind CSS, clsx, tailwind-merge |
| **3D & Canvas** | Three.js, @react-three/fiber, @react-three/drei, OGL |
| **Animations** | GSAP, Framer Motion, tsParticles |
| **State & Logic** | Zustand, React Hook Form, Zod |
| **APIs & Services** | EmailJS, Google Generative AI (@ai-sdk/google) |
| **Deployment** | Vercel (Analytics & Speed Insights integrated) |

---

## 📂 Folder Structure

A quick overview of the top-level project structure:

```text
ansh-portfolio/
├── app/               # Next.js App Router pages and layouts
├── components/        # Reusable React components (UI, 3D, Layout)
├── constants/         # Global constants and static data
├── container/         # Higher-level page sections/containers
├── context/           # React Context providers (e.g., TransitionContext)
├── fonts/             # Custom local fonts
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and helpers
├── motion/            # Animation variants and configs
├── public/            # Static assets (images, models, etc.)
├── store/             # Zustand state stores
└── types/             # TypeScript type definitions
```

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Prerequisites
Ensure you have **Node.js** (v18+) and **npm** installed on your machine.

### 2. Clone the Repository
```bash
git clone https://github.com/anshvermadev/ansh-portfolio.git
cd ansh-portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add the following keys. (See `.env.example` for reference).

```env
# EmailJS configuration for the contact form
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_EMAILJS_TO_EMAIL=your_email
```

---

## 🤝 Contributing & Usage

Feel free to explore, fork, and customize this repository for your own portfolio!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

If you find this project helpful or inspiring, feel free to give it a ⭐ on GitHub!

---

## 👨‍💻 Author

**Ansh Verma** 
*Full Stack Developer from Navi Mumbai, India*

- 🌐 **Portfolio**: [ansh-portfolio-v1.vercel.app](https://ansh-portfolio-v1.vercel.app/)
- 🐙 **GitHub**: [@anshvermadev](https://github.com/anshvermadev)
- 💼 **LinkedIn**: [Ansh Verma](https://www.linkedin.com/in/ansh-verma-37504b2b7/)

---

<div align="center">
  <i>Built with ❤️ by Ansh Verma</i>
</div>
