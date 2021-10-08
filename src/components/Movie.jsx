import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;
export default ({ id }) => {
  <div>
    <Link to={`/${id}`}>{id}</Link>
  </div>;
};
