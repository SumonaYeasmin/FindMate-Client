
# FindMate

## Purpose
FindMate is a web application designed to help users report and recover lost items. It connects users who have lost items with those who have found them, facilitating the return of valuable possessions. This project aims to make the process of recovering lost items simple and efficient.

## Live URL
[Visit FindMate](#) *(https://find-mate-cc25c.web.app)*

---

## Key Features

1. **Home Page**:
   - An overview of the platform.
   - Showcases recent lost and found items.

2. **Authentication**:
   - User registration and login (Email/Password and Google Sign-In).
   - Private routes to secure user-specific functionalities.

3. **Lost and Found Items**:
   - Browse all reported items.
   - Add new lost/found item posts.

4. **Manage Items**:
   - Users can manage their own posts.
   - Update or delete item entries.

5. **Recovered Items**:
   - Track recovered items.

6. **Item Details**:
   - View detailed information about an item.

7. **Real-time Updates**:
   - Users are kept informed with notifications via `react-toastify`.

---

## Project Structure

- **Routes**: 
  - Implemented using `react-router-dom` with private routes for user-specific features.
  - Data loading using route loaders for enhanced performance.

- **Context API**:
  - Managed authentication state with Firebase Authentication.

- **Backend Integration**:
  - Communicates with a backend server to fetch, add, and update items.
  - Backend hosted on Vercel.



## Technologies Used

### Frontend
- **React**: For building user interfaces.
- **React Router DOM**: For routing.
- **Tailwind CSS & DaisyUI**: For styling and UI components.
- **React Toastify**: For toast notifications.
- **Axios**: For API requests.
- **SweetAlert2**: For alert modals.
- **Swiper**: For carousels.

### Backend
- **Firebase Authentication**: For managing user authentication.
- **Vercel**: For hosting the backend server.
- **MongoDB**: A NoSQL database used to store and manage lost and found item data efficiently.
- **Express.js**: A lightweight and flexible Node.js framework for building server-side APIs.
- **CORS**: Enables cross-origin resource sharing, allowing the client to interact with the server securely from different origins.
- **Cookie-Parser**: Parses HTTP request cookies for better management of sessions and tokens.
- **JSON Web Token (JWT)**: Used for secure user authentication and authorization.
- **Dotenv**: Handles sensitive configuration data like database credentials and API keys using environment variables.


### Dev Tools
- **Vite**: For fast development and build.
- **ESLint**: For code linting.
- **Tailwind CSS**: For utility-first styling.

### Utilities
- **React Icons**: For easily adding icons to the UI.
- **React-Helmet**: For managing document head updates like page titles.

