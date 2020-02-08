const { app, server } = require("./server");

const path = "/graphiql";

server.applyMiddleware({ app, path });

const port = process.env.PORT || 5000;

const { log } = console;

app.listen({ port }, () =>
  log(`server is listening at http://localhost:${port}${server.graphqlPath}`)
);
