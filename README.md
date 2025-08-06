# 🌟 One Good Thing

One Good Thing is a beautifully simple React Native app built with Expo and Appwrite that helps users reflect on their day by logging one good thing they experienced — every day.


## 📽️ Demo Video

▶️ [Watch the demo](https://youtu.be/a6gS1_x1gG4)

---

## ✨ Features

- ✅ User authentication with Appwrite
- 📅 Calendar view to select any date
- 📝 Log your “one good thing” per day
- 🔍 Automatically fetch and display saved entries
- 🎨 Light & Dark themes with dynamic styling
- ⚡ Smooth user experience with React Native & Expo

---

## 🧠 How It Works

- On sign up/login, users are authenticated via Appwrite.
- The calendar allows users to select any date.
- On each date, the app queries Appwrite for the entry saved for that day.
- If an entry exists, it’s shown; if not, the user can write and save one.
- Everything is stored and fetched using Appwrite’s database service.

---

## 🛠️ Built With

- **React Native (Expo)**
- **Appwrite** – Auth & database
- **react-native-calendars** – Calendar component
- **Custom theming** – Light/Dark mode support

---

## 📂 Project Structure

app/
├── (auth)/ # Login / Signup / Auth layout
├── (tabs)/ # Main app views (Calendar, Entry, etc.)
├── components/ # Reusable UI components
├── constants/ # Theme + global styling

yaml

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/one-good-thing.git
cd one-good-thing
2. Install dependencies

npm install
3. Set up Appwrite
Create an Appwrite project

Add authentication & database collection for entries:

Fields: userId (string), date (string), goodThing (string)

Add your Appwrite config to the project

4. Run the app

npx expo start
Use Expo Go on your phone or an Android emulator to test.