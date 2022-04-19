import GraphQLServer from "./server";
import schema from "./schema/index";

const graphQLServer = new GraphQLServer(schema);

graphQLServer.listen((port: number) =>
  console.log(`http://localhost:${port}/graphql`)
);
