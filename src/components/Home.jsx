import { useQuery } from "@apollo/client";
import { gql } from "apollo-boost";

const GET_MOVIES = gql`
  {
    movie {
      id
      medium_cover_image
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(loading, error, data);
  return <h1>Home</h1>;
};
