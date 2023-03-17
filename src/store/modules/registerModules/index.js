import axios from "axios";

const registerModule = {
  namespaced: true,
  getters: {
    getToken() {
      return localStorage.getItem("token");
    },
    getUser() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  actions: {
    SAVE_TOKEN({}, token) {
      localStorage.setItem("token", token);
    },
    SAVE_USER({}, user) {
      localStorage.setItem("user", JSON.stringify(user));
    },
    LOGIN({ dispatch }, { user, token }) {
      dispatch("SAVE_TOKEN", token);
      dispatch("SAVE_USER", user);
    },
    async authUser({ dispatch }, { name, email, password }) {
      await axios
        .post(
          `auth/${name ? "register" : "login"}`,
          name ? { name, email, password } : { email, password }
        )
        .then((res) => {
          if (res.data.status) {
            const { user, token } = res.data;
            dispatch("LOGIN", { user, token });
          }
        });
    },
  },
};

export default registerModule;
