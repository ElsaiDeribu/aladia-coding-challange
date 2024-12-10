# **Recipe Book**

A modern recipe browsing web application built with Nuxt.js, Vue 3, and Tailwind CSS, following the Atomic Design methodology.

## **Table of Contents**

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Running Storybook](#running-storybook)

---

## **Features**

- **Recipe Browsing**: Browse recipes by category, continent, and rating
- **Detailed Recipe Views**: View ingredients, instructions, and images for each recipe

- **Atomic Design**: Organized components following the Atomic Design methodology
- **Tailwind CSS**: Utility-first CSS framework for clean and maintainable styling
- **Storybook Integration**: Interactive UI component development and testing environment
- **Recipe Data Management**: JSON-based recipe data with comprehensive recipe details

---

## **Project Structure**
```
root/
├── components/
│ ├── atoms/ # Basic UI elements
│ │ ├── Badge.vue # Category and tag badges
│ │ ├── ...
│ ├── molecules/ # Compound components
│ │ ├── CookingInstructions.vue # Recipe steps
│ │ ├── ...
│ ├── organisms/ # Complex components
│ │ ├── BookDetails.vue # Full recipe view
│ │ ├── ...
│ └── template/ # Page templates
│   └── Recipe.vue # Main recipe page template
├── layouts/
│   └── default.vue # Default page layout
├── pages/
│   └── index.vue # Main entry page
├── assets/
│   └── css/
│     └── tailwind.css # Tailwind base styles
├── mock/
│   └── books.json # Recipe database
├── stories/ # Storybook stories
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── .storybook/ # Storybook configuration
├── package.json
├── nuxt.config.ts
├── tailwind.config.js
└── README.md
```
## **Getting Started**

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git https://github.com/ElsaiDeribu/aladia-coding-challange.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Running the Development Server

Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

### Running Storybook

Launch Storybook for component development:
```bash
npm run storybook
# or
yarn storybook
```

Storybook will be available at `http://localhost:6006`


