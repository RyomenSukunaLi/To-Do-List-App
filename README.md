<h1>📝 My To-Do List App</h1>

A simple and interactive To-Do List application built with React. This app allows users to add, edit, delete, reorder, and persist tasks using the browser's localStorage.

🚀 Features

➕ Add Tasks using the input field or Enter key

✏️ Edit Tasks by double-clicking on a task

❌ Delete Individual Tasks

🔼🔽 Reorder Tasks (move up or down)

🔄 Clear All Tasks with one click

💾 Persistent Storage using localStorage

⌨️ Keyboard Friendly (Enter key support)

🛠️ Built With

React (Functional Components)

React Hooks (useState, useEffect)

CSS Modules for scoped styling

Browser localStorage for data persistence

📂 Project Structure
src/
│── components/
│   ├── ToDoList.jsx
│   └── todo.module.css
│
└── App.jsx
⚙️ How It Works
State Management

tasks: Stores the list of tasks

inputValue: Stores the current input value

Persistence

Tasks are saved to localStorage whenever the task list changes

On initial load, tasks are fetched from localStorage

Editing Tasks

Double-click on a task to make it editable

Press Enter to save the edited task

Empty edits are ignored

🧩 Installation & Setup

Clone the repository:

git clone https://github.com/your-username/todo-list-react.git

Navigate to the project folder:

cd todo-list-react

Install dependencies:

npm install

Run the development server:

npm run dev
🧪 Usage

Type a task in the input field

Press Enter or click the ✏️ button to add it

Double-click a task to edit

Use 🔼 or 🔽 to reorder

Click ❌ to delete a task

Click 🔄 to clear all tasks

📌 Notes

Tasks are stored locally in the browser, so clearing browser data will remove them

Uses array index as key (acceptable for this small app, but not recommended for large-scale apps)

📈 Future Improvements

Add task completion (checkbox)

Add timestamps

Add drag-and-drop reordering

Add categories or priorities

👤 Author

Created by Awais Jutt

📄 License

This project is open-source and free to use for learning and personal projects.