# MRU NPS Dashboard

A static dashboard for exploring student Net Promoter Score (NPS) results across academic years, schools, programs, departments, and university services. The interface uses a light neumorphic (Soft UI) design and is hosted with Firebase Hosting.

## Project structure

```text
public/
├── index.html                 # Dashboard page and content
└── assets/
    ├── css/dashboard.css      # Layout, responsive styles, and Soft UI theme
    └── js/
        ├── charts.js          # Shared Chart.js helpers
        ├── chart-data.js      # Dashboard chart definitions and values
        ├── navigation.js      # Year, section, and school filters
        └── main.js            # Dashboard startup
firebase.json                 # Firebase Hosting configuration
.firebaserc                   # Default Firebase project alias
```

## Run locally

No build step or package installation is required. From the project folder, serve the `public` directory with Python:

```sh
python -m http.server 5000 --directory public
```

Then open [http://localhost:5000](http://localhost:5000). Keep the server running while using the dashboard.

If you have the Firebase CLI installed, you can also use the Hosting emulator:

```sh
firebase emulators:start --only hosting
```

## Deploy with Firebase

Sign in with the Firebase CLI if needed, then deploy Hosting:

```sh
firebase login
firebase deploy --only hosting
```

The default Firebase project is set in `.firebaserc`.

## Dependencies

Chart.js and the Rajdhani and DM Sans fonts load from external CDNs, so charts and web fonts require an internet connection.
