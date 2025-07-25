# 🎵 Music Streaming App

A sleek, responsive **music streaming application** built using **Next.js**, **Tailwind CSS**, and **Supabase** for backend services (auth, database, and storage).  
You can log in, browse songs, play music, manage your library, and more!

---

## 🔗 Live Demo

👉 [Visit Live App](https://spotify2-0-opal.vercel.app/)

> ⚠️ **Note:** If the live link doesn't work, please check the [GitHub repo](https://github.com/Abhiishek-Choudhary/spotify2.0).  
> If the app still doesn’t run, the issue may be that the **Supabase project is paused** due to inactivity on the free tier. You can clone and run it locally using your own Supabase credentials.

---

## 🛠️ Tech Stack

- ⚡ **Next.js** – App router & SSR
- 💨 **Tailwind CSS** – For beautiful UI
- 🔐 **Supabase** – Authentication, Database (PostgreSQL), and File Storage
- 🎧 **Howler.js** – For audio playback
- 📦 **React Hook Form / Zod** – For forms & validation

---

## ✨ Features

- 🔐 User Authentication (Email Sign Up & Login)
- 📁 Upload & Stream Music
- 🎵 Interactive Player with Play, Pause, Seek
- ❤️ Like & Manage Favorite Songs
- 🧑‍🎤 Artist & Song Management 
- 📱 Fully Responsive UI
- 🌓 Dark Mode 

---

## 🚀 Getting Started Locally

### 1. Clone the Repository
```bash
git clone https://github.com/Abhiishek-Choudhary/spotify2.0.git
cd music-app

2. Install Dependencies
bash
npm install

3. Add Supabase Environment Variables
Create a .env.local file in the root directory with the following:

env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
You’ll get these from your Supabase project dashboard.

4. Run the Development Server
bash
npm run dev
Visit http://localhost:3000 in your browser.

📁 Folder Structure (Simplified)

music-app/
├── public/
│   └── songs/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # UI components
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Supabase client
│   ├── types/            # TypeScript types
│   └── utils/            # Helper functions
├── .env.local
└── tailwind.config.js


❗ Supabase Hosting Note
⚠️ Supabase Free Tier Limitation:
If the app doesn’t load or fails to fetch data, the Supabase project may be paused (common with free-tier plans).
To test it locally:

Set up your own Supabase project

Add the credentials to .env.local

Run the app locally with npm run dev

📬 Contact
📧 Email: akc64016@gmail.com

🐙 GitHub: @Abhiishek-Choudhary

🔗 LinkedIn: https://www.linkedin.com/in/abhishek-chaudhary-2b276324b/

📄 License
No Copyright Needed!!



