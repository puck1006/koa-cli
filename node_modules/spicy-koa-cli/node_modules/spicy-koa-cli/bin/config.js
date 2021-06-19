export const createConfig = (answer) => {
  function havaMiddleware(name) {
    return answer.middleware.includes(name);
  }

  return {
    projectName: answer.projectName,
    port: answer.port,
    middleware: {
      static: havaMiddleware("koa-static"),
      router: havaMiddleware("koa-router"),
    },
  };
};
