# **MyStore**

A modern e-commerce web application built with Nuxt.js, Vue 3, Tailwind CSS, and following the Atomic Design methodology.

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

- **Nuxt.js Framework**: Built on Nuxt.js for enhanced SEO and server-side rendering capabilities
- **Responsive Design**: Fully responsive layout that adapts to various screen sizes
- **Atomic Design**: Organized components following the Atomic Design methodology
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Storybook Integration**: Interactive UI component development and testing environment
- **Dynamic Data Fetching**: Integration with external APIs for product management

---

## **Project Structure**

```
root/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
├── pages/
│   └── index.vue
├── assets/
├── public/
├── stories/
├── .storybook/
├── package.json
├── nuxt.config.ts
├── tailwind.config.js
└── README.md
```

---

## **Getting Started**

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn

### **Installation**

1. **Clone the repository:**

   ```bash
   git clone [your-repository-url]
   ```

2. **Navigate to the project directory:**

   ```bash
   cd mystore
   ```

3. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

### **Running the Development Server**

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

### **Running Storybook**

Launch Storybook to view and interact with UI components:

```bash
npm run storybook
# or
yarn storybook
```

Storybook will start on `http://localhost:6006`.

---

## **Additional Notes**

- This project uses modern web development practices and follows Vue.js best practices
- The application demonstrates scalable architecture using Atomic Design principles

---

Thank you for checking out **MyStore**!