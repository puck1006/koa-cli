export default () => {
  return {
    type: "input",
    name: "projectName",
    message: "please set projectName",
    validate: (val) => {
      if (val) {
        return true;
      }
      return "please input the projectName";
    },
  };
};
