export default {
  getUsers: (state) => state.users,
  getMessages: (state) => state.messages,
  getUsersMessages: (state, getters) => {
    let users = [...getters.getUsers];
    const messages = getters.getMessages;
    users.map((user) => {
      user.messages = [];
      messages.map((message) =>
        message.userid === user.id ? user.messages.push({ ...message }) : null
      );
    });
    const userMessages = users.filter((user) => user.messages.length);
    userMessages.sort((a, b) => {
      return new Date(b.messages[0].date) - new Date(a.messages[0].date);
    });
    return userMessages;
  },
};
