export default {
  pushUsers(state, users) {
    state.users = Object.values(users);
  },
  pushMessages(state, messages) {
    state.messages = Object.values(messages);
  },
};
