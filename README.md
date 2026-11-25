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

### 1. Authenticate with Firebase
Sign in to your Google account that owns the Firebase project (run `--reauth` if your session has expired):

```sh
firebase login --reauth
```

### 2. Confirm or Set Target Project
Check which Firebase project is currently selected:

```sh
firebase use
```

The default project is configured as `mru-nps-dashboard` in `.firebaserc`. To select or switch projects:

```sh
# Use the configured default project
firebase use mru-nps-dashboard

# Or add/select a different Firebase project
firebase use --add
```

### 3. Deploy Hosting
Deploy the static assets from the `public` directory:

```sh
firebase deploy --only hosting
```

Once deployment completes, the CLI will output your live URL (e.g. `https://mru-nps-dashboard.web.app`).

## Dependencies

Chart.js and the Rajdhani and DM Sans fonts load from external CDNs, so charts and web fonts require an internet connection.
