import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '6b43bde205548a42208bea4fffac1acf3f79d6e5', queries,  });
export default client;
  