# 🌟 One Good Thing

**One Good Thing** is a thoughtfully crafted React Native app (built with Expo and Appwrite) that helps users reflect, record, and celebrate the positive moments in their lives — one day at a time. The app combines a beautiful themed UI, seamless authentication, a calendar-based tracker, and full CRUD support for daily entries.

---

## 📽️ Demo Video

▶️ [Watch the demo](https://youtu.be/nJus8e-8JhM)

---

## ✨ Features

- **Secure User Authentication** with Appwrite (accounts, sessions, and protected routes)
- **Calendar View** to select any date and view or add entries
- **Daily Journaling** — log one or more “good things” for any date
- **Full CRUD** — Create, Read, and Delete entries (per user, per date)
- **Dynamic Theming** — fully custom Light & Dark mode backgrounds and UI
- **Responsive, Smooth UI** — scrollable lists, expand/collapse cards, and fast feedback
- **Real-time Database Sync** with Appwrite’s cloud backend

---

## 🧠 How It Works

- Upon sign-up or login, users are securely authenticated via Appwrite.
- The app’s calendar interface allows users to browse to any date.
- On each date, users can view all their “good things” logged for that day, expand entries to see notes, or delete entries.
- All data (authentication, entries, user-specific queries) is managed via Appwrite’s API and database, with local state managed through React context/hooks for an optimized experience.
- UI automatically adapts to device theme (light/dark), with custom backgrounds for each.

---

## 🛠️ Built With

- **React Native (Expo)**
- **Appwrite** — Authentication & real-time database
- **react-native-calendars** — Calendar UI component
- **Context + Custom Hooks** — for all app state and database logic
- **Dynamic Theming** — custom color palettes and themed backgrounds
- **Component-based Design** — modular, reusable UI and logic

---

## 📂 Project Structure

app/
├── (auth)/ # Authentication screens and logic (login, signup)
├── (dashboard)/ # Main app screens (calendar, create, profile)
├── components/ # Reusable components (ThemedBtn, EnchantedText, etc.)
├── constants/ # Colors, global styles
├── contexts/ # User/auth context, GoodThings context/provider
├── hooks/ # Custom hooks (useUser, useThings, etc.)
├── assets/ # Background wallpapers and images

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/one-good-thing.git
cd one-good-thing

2. Install dependencies

npm install
3. Configure Appwrite backend
Create a new Appwrite project at appwrite.io.

Add Authentication (Email/password).

Create a Database Collection for daily entries:

Fields:

user_id (string, required)

date_logged (string, required)

title (string, required)

notes (string, optional)

Set collection permissions so only the entry’s owner can read, create, update, or delete.

See the appwrite.js file inside the lib folder in the root directory for the appwrite project id and database id info.

4. Run the app

npx expo start
Scan the QR code with Expo Go or run in an Android/iOS emulator.

🧑‍💻 About the Author
Designed, built, and deployed from scratch by [Your Name].
Features strong React Native architecture, secure backend integration, advanced theming, and clean code — all written to scale and be easily extended.

📬 Feedback & Contributions
Feel free to open issues or reach out for improvements and feature ideas!

---


