import { Link } from "react-router-dom";
import styled from "styled-components";

const SuggestionMovieContainer = styled.div`
  width: 160px;
  height: 194px;
`;

const SuggestionMovieImg = styled.img`
  width: 100%;
  height: 100%;
`;

const SuggestMovie = ({ id, bg }) => {
  return (
    <Link to={`/${id}`}>
      <SuggestionMovieContainer>
        <SuggestionMovieImg src={bg} />
      </SuggestionMovieContainer>
    </Link>
  );
};

export default SuggestMovie;
