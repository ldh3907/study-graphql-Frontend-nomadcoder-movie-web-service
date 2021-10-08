import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Movie = ({ id, bg, isLiked }) => {
  return <Link to={`/${id}`}>{id}</Link>;
};

export default Movie;
