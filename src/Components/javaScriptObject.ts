export const users = [
  {
    username: "user1",
    password: "password1",
    name: "John Doe",
    todos: [
      {
        id: 1,
        title: "Buy groceries",
        completed: false,
        subtasks: [
          {
            id: 1,
            title: "Milk",
            completed: false,
          },
          {
            id: 2,
            title: "Bread",
            completed: true,
          },
        ],
      },
      {
        id: 2,
        title: "Finish homework",
        completed: false,
        subtasks: [],
      },
    ],
  },
  {
    username: "user2",
    password: "password2",
    name: "Jane Doe",
    todos: [
      {
        id: 1,
        title: "Do laundry",
        completed: false,
        subtasks: [],
      },
    ],
  },
];
