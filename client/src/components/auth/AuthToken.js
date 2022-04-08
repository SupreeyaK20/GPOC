const token = localStorage.getItem("token");
export const Auth_Token = {
  context: {
    headers: {
      authorization: "Bearer " + token,
    },
  },
};
