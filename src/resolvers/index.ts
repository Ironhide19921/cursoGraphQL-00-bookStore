import queryResolvers from "./query";
import typesResolvers from "./types";
import mutationResolvers from "./mutation";

const resolversIndex = {
  ...queryResolvers,
  ...typesResolvers,
  ...mutationResolvers,
};

export default resolversIndex;
