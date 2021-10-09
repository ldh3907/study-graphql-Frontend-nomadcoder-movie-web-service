import { useParams } from "react-router";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      language
      rating
      medium_cover_image
      description_intro
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    -35deg,
    rgb(181, 54, 254),
    rgb(84, 97, 215)
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MovieWrap = styled.div`
  display: flex;
  column-gap: 140px;
`;

const MovieInfoBox = styled.div`
  width: 430px;
  height: 600px;
  color: white;
  display: flex;
  align-items: center;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 400;
`;

const SubInfoWrap = styled.div`
  display: flex;
  column-gap: 10px;
`;

const Rating = styled.div`
  font-size: 25px;
`;

const Language = styled.div`
  font-size: 25px;
`;

const Description = styled.p`
  word-break: keep-all;
  font-size: 20px;
`;

const MovieBox = styled.img`
  width: 430px;
  height: 600px;
  border: 1px solid var(--main-border-color);
  border-radius: 5px;
  box-shadow: 0 2px 5px -1px rgba(50, 50, 93, 0.25),
    0 1px 3px -1px rgba(0, 0, 0, 0.3);
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });
  console.log(loading, error, data);
  return (
    <Container>
      {loading && <div>Loading...</div>}
      {data && data.movie && (
        <MovieWrap>
          <MovieInfoBox>
            <InfoWrap>
              <Title>{data.movie.title}</Title>
              <SubInfoWrap>
                <Language>{data.movie.language}</Language>
                <Rating>{data.movie.rating}</Rating>
              </SubInfoWrap>
              <Description>{data.movie.description_intro}</Description>
            </InfoWrap>
          </MovieInfoBox>
          <MovieBox src={data.movie.medium_cover_image} />
        </MovieWrap>
      )}
    </Container>
  );
};

export default Detail;
