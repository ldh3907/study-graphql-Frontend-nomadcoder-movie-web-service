import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 5px;
  box-shadow: 0 2px 5px -1px rgba(50, 50, 93, 0.25),
    0 1px 3px -1px rgba(0, 0, 0, 0.3);
`;

const MovieImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Movie = ({ id, bg, isLiked }) => {
  return (
    <Link to={`/${id}`}>
      <Container>
        <MovieImg src={bg} />
      </Container>
    </Link>
  );
};

export default Movie;
