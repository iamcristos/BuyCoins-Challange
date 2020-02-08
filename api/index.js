const { app, server } = require("./server");

const path = "/graphiql";

server.applyMiddleware({ app, path });

const port = process.env.PORT || 5000;

app.listen({ port }, () =>
  console.log(
    `server is listening at http://localhost:${port}${server.graphqlPath}`
  )
);
