export default () => {
  return {
    type: "input",
    name: "port",
    default: () => {
      return 8888;
    },
    message: "please set port",
  };
};
