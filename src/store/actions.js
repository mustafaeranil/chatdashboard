import axios from "axios";
export default {
  async getUsers(context) {
    const users = await axios.get("users.json");
    context.commit("pushUsers", users.data);
  },
  async getMessages(context) {
    let messages = await axios.get("messages.json");
    messages = messages.data.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    context.commit("pushMessages", messages);
  },
};
