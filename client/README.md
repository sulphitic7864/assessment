# React Project Setup Guide

This guide explains how to **set up, run, build, and deploy** the React project locally and in production.

---

# 1. Prerequisites

Before running the project, make sure the following are installed on your system:

* **Node.js** (v16 or later recommended)
  https://nodejs.org/

* **npm** or **yarn**

Check installation:

```bash
node -v
npm -v
```

---

# 2. Clone the Repository

Clone the project from the repository.

```bash
git clone <repository-url>
```

Navigate into the project folder:

```bash
cd project-name
```

---

# 3. Install Dependencies

Install all required packages.

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

---

# 4. Run the Project (Development Mode)

Start the development server.

```bash
npm run dev
```

or

```bash
yarn dev
```

The application will start on:

```
http://localhost:5173
```

The page automatically reloads when changes are made.

---

# 5. Environment Variables (If Required)

If the project uses environment variables, create a `.env` file in the root directory.

Example:

```
VITE_API_URL=https://api.example.com
```

Restart the development server after updating environment variables.

---

# 6. Build the Project (Production)

To create an optimized production build:

```bash
npm run build
```

This generates a **`dist`** folder containing the production files.

---

# 7. Preview Production Build

You can test the production build locally.

```bash
npm run preview
```

---

# 8. Deployment Options

## Deploy to Netlify

1. Run build command:

```
npm run build
```

2. Upload the **dist folder** to Netlify.

OR connect your Git repository and use:

```
Build command: npm run build
Publish directory: dist
```

---

## Deploy to Vercel

Install Vercel CLI:

```bash
npm install -g vercel
```

Deploy:

```bash
vercel
```

Follow the prompts.

---

## Deploy to Shared Hosting (cPanel)

1. Run:

```bash
npm run build
```

2. Upload contents of the **dist folder** to `public_html`.

---

# 9. Project Scripts

Common scripts used in the project:

```
npm run dev       → start development server
npm run build     → create production build
npm run preview   → preview production build
```

---

# 10. Troubleshooting

If dependencies fail to install:

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

Restart the server:  

```bash
npm run dev 
```

---

# 11. Technologies Used

* React
* Vite
* Tailwind CSS
* Framer Motion
* JavaScript (ES6+)

---

# 12. Support

If you face any issues while setting up or deploying the project, please contact the development team.
whatsapp: 923244929494
email: wqasimg@gmail.com
