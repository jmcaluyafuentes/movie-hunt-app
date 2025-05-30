# Movie Hunt App 🎬

A simple React app that displays a list of movies and allows users to search by title.

## 🚀 Features

- View a list of predefined movies
- Search movies by title
- Conditional rendering of movie cards based on the search input
- Manage global state for favorite movies
- Persist favorite movies in local storage

## 🛠️ Built With

- [React](https://reactjs.org/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Vite](https://vitejs.dev/)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Zustand](https://zustand-demo.pmnd.rs/) – For managing global states (e.g., favorite movies)

## 🧠 State Management

Favorite movies are stored in a global state using Zustand. The list is automatically synced with local storage to ensure persistence across browser sessions.

## 💡 Getting Started

1. Clone the repository:

  ```bash
  git clone https://github.com/jmcaluyafuentes/Movie-Hunt-App.git

  cd movie-hunt-app
  ```

2. Install Dependencies

  ```bash
  npm install
  ```

3. Run the development server:

  ```
  npm run dev
  ```

## 📄 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).