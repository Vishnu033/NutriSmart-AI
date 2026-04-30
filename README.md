# NutriSmart 🍏

> A premium, AI-powered Food & Health Web Application designed to help you track nutrition, build healthy habits, and receive personalized, actionable health insights.

![NutriSmart Banner](https://via.placeholder.com/1000x300/10b981/ffffff?text=NutriSmart+-+Your+AI+Health+Companion)

## 📖 Description

NutriSmart is a modern, responsive health dashboard designed with a "glassmorphism" aesthetic to provide a stunning, startup-grade user experience. It goes beyond simple calorie counting by employing Artificial Intelligence to analyze your eating patterns, predict health trends, and offer personalized, chat-like suggestions to improve your diet. 

Whether your goal is weight loss, muscle gain, or maintenance, NutriSmart acts as your personal, intelligent health coach.

## ✨ Key Features

*   **🧠 AI Health Insights:** A chat-like assistant panel that analyzes your logs and offers proactive nudges (e.g., "You usually skip breakfast, try adding a protein shake!").
*   **📊 Smart Data Visualizations:** Beautiful, curved area charts and animated progress rings that track your Calories, Protein, and Hydration against your daily goals.
*   **🏆 Gamification & Motivation:** Daily streak counters, achievement comparison stats (e.g., "You're doing better than 85% of users"), and profile completion trackers keep you motivated.
*   **🥗 Intelligent Food Logging:** A vertical timeline view of your daily intake with a search interface prepared for voice and barcode scanning inputs.
*   **⚙️ Deep Customization:** A comprehensive settings dashboard to tailor your dietary preferences (Vegan, Keto, etc.), set notification reminders, and manage your profile.
*   **💎 Premium UI/UX:** Built with sleek Tailwind CSS glassmorphism, soft gradients, and buttery smooth Framer Motion page transitions and micro-animations.

## 🛠️ Tech Stack

**Frontend Framework & Libraries:**
*   **[React.js](https://reactjs.org/)** (via **[Vite](https://vitejs.dev/)**) - Blazing fast UI development.
*   **[Tailwind CSS v3](https://tailwindcss.com/)** - Utility-first styling for the premium glassmorphism design system.
*   **[Framer Motion](https://www.framer.com/motion/)** - For smooth layout transitions, card lifts, and staggered list animations.
*   **[Recharts](https://recharts.org/)** - For dynamic, responsive, and beautiful SVG area charts.
*   **[Lucide React](https://lucide.dev/)** - Clean, modern SVG iconography.

**Architecture (Designed For):**
*   **Backend:** Node.js / Express (Planned)
*   **Database:** MongoDB / Firebase (Planned)
*   **AI Integration:** OpenAI API (Planned)

## 📸 Screenshots

*(Replace these placeholder links with actual screenshots of your application)*

| Dashboard Overview | Food Timeline Log | Premium Settings |
| :---: | :---: | :---: |
| ![Dashboard](https://via.placeholder.com/400x250/f0fdf4/10b981?text=Dashboard+View) | ![Food Log](https://via.placeholder.com/400x250/f0fdf4/10b981?text=Timeline+View) | ![Settings](https://via.placeholder.com/400x250/f0fdf4/10b981?text=Settings+View) |

## 🚀 Future Scope

NutriSmart's foundational UI is complete. The roadmap for backend integration and advanced features includes:

1.  **OpenAI Integration:** Connect the AI Insight panel to the real OpenAI API to generate dynamic, personalized health nudges based on real-time user data.
2.  **Firebase Authentication:** Implement robust user login and secure data syncing across devices.
3.  **Food API Hooks:** Integrate with Nutritionix or Edamam APIs to automatically fetch macro and micro-nutrients when users search for food.
4.  **Computer Vision:** Implement the barcode scanner and food image recognition feature for instant, frictionless meal logging.
5.  **Wearable Sync:** Allow users to pull step count and sleep data directly from Apple Health, Google Fit, or Fitbit APIs.

## 💻 Running Locally

To run the NutriSmart frontend prototype locally on your machine:

1.  Clone the repository.
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the Vite development server:
    ```bash
    npm run dev
    ```
4.  Open `http://localhost:5173` in your browser.
