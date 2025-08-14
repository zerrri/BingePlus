# 🍿 BingePlus

**BingePlus** is your personal entertainment tracker — helping you discover, organize, and manage movies and TV shows to binge anytime, anywhere. Whether you're hunting for your next obsession or keeping tabs on what you've already watched, BingePlus makes it seamless.

---

## 🌟 Features

- 🔍 **Search Movies & Series** using the TMDb API  
- 🎞️ **View Details** like ratings, release date, overview, poster, etc.  
- ➕ **Add to Watchlist** and keep your to-watch items organized  
- ✅ **Mark as Watched**  
- 🌓 **Dark Mode Support**  
- 📱 **Responsive UI** (Mobile + Desktop friendly)
- 🎯 **Real-time Search** with debounced input
- 📊 **Movie Information** including budget, revenue, genres, and production companies

---

## 🛠️ Built With

| Tech | Use |
|------|-----|
| **React Native** | Cross-platform mobile framework |
| **Expo** | Development platform & tools |
| **TypeScript** | Type-safe JavaScript |
| **TMDb API** | Movie/TV data |
| **NativeWind** | Tailwind CSS for React Native |
| **Expo Router** | File-based navigation |
| **React Native Web** | Web support |

---

## 🚀 Getting Started

Follow these steps to run BingePlus locally:

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/bingeplus.git
cd bingeplus
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```bash
# TMDb API Key (Required - Get from themoviedb.org)
EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key_here

# Appwrite Database (Optional - for trending movies)
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_DATABASE_ID=
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=
```

### 4. Get TMDb API Key (FREE)

1. Go to [themoviedb.org](https://www.themoviedb.org)
2. Create an account (free)
3. Go to **Settings → API**
4. Request an API key
5. Copy the API key to your `.env` file

### 5. Run the development server

```bash
npm start
```

### 6. Choose your platform

- **Mobile Device:** Scan the QR code with Expo Go app
- **Android Emulator:** Press `a` in the terminal
- **iOS Simulator:** Press `i` in the terminal (macOS only)
- **Web Browser:** Press `w` in the terminal

---

## 📱 Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Start on Android emulator
- `npm run ios` - Start on iOS simulator
- `npm run web` - Start in web browser
- `npm run lint` - Run ESLint

---

## 🏗️ Project Structure

```
BingePlus/
├── app/                    # Expo Router pages
│   ├── (tabs)/            # Tab navigation
│   │   ├── index.tsx      # Home page
│   │   ├── search.tsx     # Search page
│   │   ├── saved.tsx      # Saved movies
│   │   └── profile.tsx    # User profile
│   ├── movies/            # Movie details
│   │   └── [id].tsx       # Dynamic movie page
│   └── _layout.tsx        # Root layout
├── components/             # Reusable components
│   ├── MovieCard.tsx      # Movie display card
│   ├── SearchBar.tsx      # Search input
│   └── TrendingCard.tsx   # Trending movie card
├── services/               # API and data services
│   ├── api.ts             # TMDb API integration
│   ├── appwrite.ts        # Appwrite database (optional)
│   └── useFetch.ts        # Custom fetch hook
├── constants/              # App constants
│   ├── icons.ts           # Icon imports
│   └── images.ts          # Image imports
├── interfaces/             # TypeScript interfaces
└── assets/                 # Images, fonts, icons
```

---

## 🔧 Recent Fixes & Improvements

### ✅ **Fixed TMDb API Integration**
- **Issue:** API calls were failing with 401 errors
- **Solution:** Added API key to URL parameters in `services/api.ts`
- **Result:** Movies now load properly from TMDb

### ✅ **Disabled Appwrite Dependencies**
- **Issue:** Appwrite database errors preventing app functionality
- **Solution:** Temporarily disabled trending movies and search analytics
- **Result:** Core movie search and display functionality works perfectly

### ✅ **Improved Error Handling**
- **Issue:** Generic error messages
- **Solution:** Better error states and loading indicators
- **Result:** Better user experience with clear feedback

---

## 🎯 Current Functionality

### ✅ **Working Features**
- **Movie Search** - Search for any movie by title
- **Movie Discovery** - Browse popular movies on home page
- **Movie Details** - View comprehensive movie information
- **Responsive UI** - Works on mobile and web
- **Navigation** - Tab-based navigation between sections

### ⚠️ **Temporarily Disabled**
- **Trending Movies** - Requires Appwrite database setup
- **Search Analytics** - Requires Appwrite database setup

---

## 🚧 Known Issues & Solutions

### **Issue: "Project with the requested ID could not be found"**
- **Cause:** Appwrite database not configured
- **Solution:** Either set up Appwrite or keep it disabled (current state)

### **Issue: Movies not loading**
- **Cause:** Missing or invalid TMDb API key
- **Solution:** Verify API key in `.env` file and restart app

### **Issue: App crashes on startup**
- **Cause:** Missing dependencies or environment variables
- **Solution:** Run `npm install` and ensure `.env` file exists

---

## 🔮 Future Enhancements

- [ ] **Appwrite Integration** - Set up trending movies and search analytics
- [ ] **User Authentication** - Login/signup system
- [ ] **Watchlist Management** - Save and organize movies
- [ ] **Offline Support** - Cache movies for offline viewing
- [ ] **Push Notifications** - New movie releases and recommendations
- [ ] **Social Features** - Share movies with friends

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **TMDb** for providing the movie database API
- **Expo** for the amazing development platform
- **React Native** community for the robust framework
- **NativeWind** for bringing Tailwind CSS to React Native

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include your environment details and error messages

---

**Happy Binging! 🎬✨**
