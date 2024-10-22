const users = [
    { id: 1, userName: 'Alice', email: 'alice@example.com' },
    { id: 2, userName: 'Bob', email: 'bob@gmail.com' },
    { id: 3, userName: 'Javier', email: 'javier@gmail.com' },
    { id: 4, userName: 'Jorge', email: 'jorge@gmail.com' },
    { id: 5, userName: 'Alberto', email: 'alberto@gmail.com' },
    { id: 6, userName: 'Gustavo', email: 'gustavo@gmail.com' },
    { id: 7, userName: 'Renzo', email: 'renzo@gmail.com' },
    { id: 8, userName: 'Hugo', email: 'hugo@gmail.com' },
    { id: 9, userName: 'Agustin', email: 'agustin@example.com' },
  ];
  
  module.exports = {
    getAllUsers: () => users,
    getUserById: (id) => users.find(user => user.id === id),
  };