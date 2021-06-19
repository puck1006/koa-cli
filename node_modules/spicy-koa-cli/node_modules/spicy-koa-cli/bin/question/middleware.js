export default () => {
  return {
    type: "checkbox",
    name: "middleware",
    choices: [
      {
        name: "koa-router",
      },
      {
        name: "koa-static",
      },
    ],
  };
};
