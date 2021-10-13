import { useQuery } from "@apollo/client";
import { gql } from "apollo-boost";
import styled from "styled-components";
import Movie from "./Movie";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Contalner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    -95deg,
    rgb(181, 54, 254),
    rgb(84, 97, 215)
  );
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Title = styled.h1`
  font-size: 55px;
  text-align: center;
  color: white;
  font-weight: 700;
`;

const SubTitle = styled.div`
  font-size: 25px;
  text-align: center;
  color: white;
`;

const Loading = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
  font-weight: 300;
`;

const MoviesWrap = styled.div`
  width: 1374px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  margin: 0px auto;
  margin-top: -20px;
  row-gap: 30px;
  column-gap: 30px;
  margin-bottom: 30px;
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);

  return (
    <Contalner>
      <Header>
        <TitleWrap>
          <Title>Apollo Movies</Title>
          <SubTitle>made in DongHyun</SubTitle>
        </TitleWrap>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      <MoviesWrap>
        {!loading &&
          data.movies &&
          data.movies.map((movie, index) => {
            return (
              <Movie key={index} id={movie.id} bg={movie.medium_cover_image} />
            );
          })}
      </MoviesWrap>
    </Contalner>
  );
};

export default Home;
