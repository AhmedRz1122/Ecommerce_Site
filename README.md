# Bruno's Fashion E-Commerce

![Demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDk0dW5jY3V2M2JtYzV5eW5xY3R4Z3k5dGJ6Y2JmN2NqZzZ0eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/your-demo-gif-url.gif)

A modern, animated fashion e-commerce site built with *React.js, **Framer Motion, and **Tailwind CSS*, featuring seamless animations and responsive design.

## ✨ Features

- *Micro-interactions* with Framer Motion
  - Smooth page transitions
  - Hover animations on products
  - Staggered loading effects
- *Responsive Layout*
  - Mobile-first design
  - Adaptive product grids
- *Sections*
  - Hero banner with geometric animations
  - New arrivals showcase
  - Product rating system
  - Vision statement

## 🛠 Tech Stack

| Category       | Technologies                          |
|----------------|---------------------------------------|
| Frontend       | React.js, Framer Motion               |
| Styling        | CSS Modules                           |
| UI Components  | Custom animated cards, buttons        |
| Deployment     | Vercel (with CI/CD)                   |

## 🎥 Demo

[Live Demo](https://your-vercel-app-url.vercel.app) | [Video Walkthrough](#)

## 🚀 Installation

1. Clone the repo:
   bash
   git clone https://github.com/AhmedRz1122/Ecommerce_Site.git
2. Install dependencies:
   bash
   npm install
3. Run locally:
   bash
   npm start

## 🖥 Project Structure

src/
├── Components/
│   ├── Navbar/           # Animated navigation
│   ├── Home/             # Hero section with motion
│   ├── New_Arrival/      # Product showcase
│   ├── Rating/           # Interactive star ratings
│   └── Footer/           # With decorative elements
├── assets/               # Images & design assets
├── App.css               # Global styles
└── App.jsx               # Main app with layout animations


## 🌟 Animation Highlights

bash
// Example: Framer Motion animation in Product Card
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400 }}
>
  <ProductCard />
</motion.div>
