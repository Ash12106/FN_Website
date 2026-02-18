# ForgeNexus Institutional Portal

The **ForgeNexus Institutional Portal** is a high-fidelity, interactive web application developed for **Vidhyavardhaka College of Engineering (VVCE)**. It serves as a central hub for student innovation, faculty oversight, and technical collaboration, using a professional "Nexus" aesthetic.

## 🚀 Key Features

- **Interactive 3D Innovation Gallery**: An immersive, panoramic 3D dome experience using `@use-gesture/react` and `ogl` to showcase technical achievements and projects.
- **Dynamic Portal Gateways**: Role-based access for Students ("The Innovator") and Faculty ("The Architect") that appear only when requested.
- **Institutional Branding**: Bold, high-contrast typography reflecting the identity of **Vidhyavardhaka College of Engineering**.
- **Modern UI Stack**: Built with **React 19**, **Tailwind CSS v4**, and **Framer Motion** for fluid animations and a premium glassmorphic feel.
- **Responsive Design**: Fully optimized for both high-end desktop environments and mobile views.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Interaction**: [@use-gesture/react](https://use-gesture.netlify.app/) & [OGL](https://github.com/oogljs/ogl)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🏁 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18.x or later recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ash12106/FN_Website.git
   cd FN_Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

## 📁 Customizing Assets

### Adding Your Images
To replace the placeholder images in the Innovation Gallery or Student Core sections:

- **Innovation Gallery**: Place your `.jpg` or `.png` images in `/public/gallery/` and name them `gallery_1.jpg`, `gallery_2.jpg`, etc.
- **Team Section**: Place faculty and student core images in `/public/team/`.

---
Created by [Ash12106](https://github.com/Ash12106)
