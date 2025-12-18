<h1>📝 My To-Do List App</h1>

A simple and interactive To-Do List application built with React. This app allows users to add, edit, delete, reorder, and persist tasks using the browser's localStorage.

<h1>🚀 Features</h1>

➕ Add Tasks using the input field or Enter key

✏️ Edit Tasks by double-clicking on a task

❌ Delete Individual Tasks

🔼🔽 Reorder Tasks (move up or down)

🔄 Clear All Tasks with one click

💾 Persistent Storage using localStorage

⌨️ Keyboard Friendly (Enter key support)

<h1>🛠️ Built With</h1>

React (Functional Components)

React Hooks (useState, useEffect)

CSS Modules for scoped styling

Browser localStorage for data persistence

<h1>⚙️ How It Works</h1>

<h3>State Management</h3>

tasks: Stores the list of tasks

inputValue: Stores the current input value

<h3>Persistence</h3>

Tasks are saved to localStorage whenever the task list changes

On initial load, tasks are fetched from localStorage

<h3>Editing Tasks</h3>

Double-click on a task to make it editable

Press Enter to save the edited task

Empty edits are ignored

<h1>🧩 Installation & Setup</h1>

Clone the repository:

git clone https://github.com/your-username/todo-list-react.git

Navigate to the project folder:

cd todo-list-react

Install dependencies:

npm install

Run the development server:

npm run dev

<h1>🧪 Usage</h1>

Type a task in the input field

Press Enter or click the ✏️ button to add it

Double-click a task to edit

Use 🔼 or 🔽 to reorder

Click ❌ to delete a task

Click 🔄 to clear all tasks

<h1>📌 Notes</h1>

Tasks are stored locally in the browser, so clearing browser data will remove them

Uses array index as key (acceptable for this small app, but not recommended for large-scale apps)

<h1>📈 Future Improvements</h1>

Add task completion (checkbox)

Add timestamps

Add drag-and-drop reordering

Add categories or priorities

<h1>👤 Author</h1>

Created by Awais Azeem

<h1>📄 License</h1>

This project is open-source and free to use for learning and personal projects.