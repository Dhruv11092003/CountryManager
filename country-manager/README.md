# 🌍 Country-State-City Management App

## 📌 Overview

The **Country-State-City Management App** is a React-based project that allows users to **add, edit, and delete** hierarchical data for **countries, states, and cities**. It provides a **clean UI** with **expand/collapse functionality** and ensures **data persistence using local storage**.

Deployed Link: https://country-manager.vercel.app/

## ✅ Features at a Glance

- **Expand/Collapse** for better navigation
- **Auto-scroll** to maintain a clean layout
- **Mobile-first, fully responsive design**
- **Local Storage integration** for data persistence

---

## 🚀 Features

### 🌎 Country Management
- Add, edit, and delete countries
- Expand a country to view and manage states

### 🏛️ State Management
- Add, edit, and delete states within a country
- Expand a state to view and manage cities

### 🏙️ City Management
- Add and delete cities within a state

### 🎨 UI Enhancements
- **Expand/Collapse Buttons** for better usability
- **Auto-scroll lists** to prevent layout overflow
- **Modern, responsive layout** for a seamless experience across devices

### 💾 Local Storage Integration
- **Data persists** on reload
- Uses `localStorage` to save changes automatically

---

## 📂 Project Structure

```
/country-manager
  ├── src
  │   ├── components
  │   │   ├── CountryList.js  # Handles country management
  │   │   ├── StateList.js    # Handles state management
  │   │   ├── CityList.js     # Handles city management
  │   ├── styles
  │   │   ├── CountryList.css # Styles for CountryList
  │   │   ├── StateList.css   # Styles for StateList
  │   │   ├── CityList.css    # Styles for CityList
  │   ├── index.js            # Renders the app
  |   |── App.js          # Main app component   
  │   ├── App.css         # Global styles      
  ├── public
  ├── package.json
  ├── README.md
```

---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository
```sh
git clone https://github.com/Dhruv11092003/CountryManager.git
cd country-manager
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Start the app
```sh
npm start
```
The app will open at `http://localhost:3000` 🚀

---

## 🛠️ Technologies Used

- **React.js** – Component-based UI development
- **JavaScript (ES6+)** – State and event handling
- **CSS3 (Flexbox)** – Modern and responsive UI
- **Local Storage** – Persistent data storage

---

## 💡 Future Enhancements

- ✅ Implement search & filter functionality
- ✅ Add dark mode support
- ✅ Backend API integration

---

## 📜 License

This project is **open-source** and available under the **MIT License**.

---

🎯 **Your README is now polished, structured, and informative!** 🚀
Let me know if you need any tweaks or additions! 🔥

