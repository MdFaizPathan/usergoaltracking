
# User Goal Tracking Project

This is a React-based **User Goal Tracking** application that helps manage users and track their goals efficiently. It provides features to add users, view their goals, and track progress visually.

---

## Features

1. **User List**
   - Displays a list of users with their name, email, and the number of goals they have.
   - Includes a search bar to filter users by name or email.
   - Sorting functionality to sort users alphabetically by name.

2. **Add User**
   - A form to add a new user with fields for name and email.

3. **User Details**
   - Clicking on a user opens a sidebar or modal displaying their goals.
   - Each goal includes a title, deadline, and status ("In Progress" or "Completed").

4. **Goal Tracking Dashboard**
   - Displays a summary of all goals, including:
     - Total goals.
     - Completed goals.
     - Percentage of completion.

5. **Responsive Design**
   - The app is fully responsive and visually appealing on all devices.

---

## Screenshot

![Image](https://github.com/user-attachments/assets/683ec1c6-6369-45de-ba4f-756592991ef2)

---
![Image](https://github.com/user-attachments/assets/1ebb15e4-1896-4f74-bd00-fe467f65fbe5)

---
![Image](https://github.com/user-attachments/assets/12bfb02c-d6a2-4bd8-a044-6dda5b5a956b)

---
![Image](https://github.com/user-attachments/assets/9239a0a9-74d9-4165-8320-1a33bdf3e457)

---

## Technologies Used

- **Frontend**: React.js
- **Styling**: CSS, Bootstrap (optional)
- **Icons**: Font Awesome

---

## Folder Structure

```
user-goal-tracking/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── UserList.js
│   │   ├── UserForm.js
│   │   ├── UserDetails.js
│   │   └── GoalSummary.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── GoalSummary.css
│   │   ├── UserDetails.css
│   │   ├── UserForm.css
│   │   └── UserList.css
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

---

## Installation and Setup

Follow these steps to run the project locally:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd user-goal-tracking
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

4. **Build for production** (optional):
   ```bash
   npm run build
   ```
   This will create an optimized production build in the `build` folder.

---

## Deployment

### Deploying to Vercel

1. **Sign up or log in to [Vercel](https://vercel.com/)**.
2. Push your project to a Git repository (e.g., GitHub).
3. Connect your repository to Vercel.
4. Deploy using default React settings (build command: `npm run build`, output directory: `build`).
5. Access the deployed application at: [User Goal Tracking on Vercel](https://usergoaltracking.vercel.app/).
---

## Dependencies

### Required
- **React**: Core library for building the app.
- **React DOM**: For rendering components to the DOM.
- **React Scripts**: For running and building the app.

### Optional (Styling and Utilities)
- **Bootstrap**: For responsive design.
- **Font Awesome**: For icons.
- **Normalize.css**: For consistent styling across browsers.
- **Lodash**: For utility functions.
- **Moment.js**: For date formatting.

---

## Example Output

### Home Page
- Displays a header, user list, and the goal summary dashboard.

### Add User Form
- Simple form for adding a new user.

### User Details
- Displays the selected user's goals in a sidebar or modal.

### Goal Summary
- Shows total goals, completed goals, and completion percentage.



---

## Contributing

Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch for your feature/fix.
3. Commit your changes.
4. Push to your branch and submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For any questions or feedback, feel free to reach out to:

- **Email**: [mohammadfaizpathan343@gmail.com](mailto:mohammadfaizpathan343@gmail.com)

--- 



