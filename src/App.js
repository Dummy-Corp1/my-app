import React from "react";
import "./App.css";
import {
  ActionButtonsDiv,
  ActionButtons,
  BestRecommendation,
  Bold,
  CloseIcon,
  Container,
  DetailsContainer,
  Filter,
  FilterDiv,
  Logo,
  Main,
  RatingsDiv,
  RecommendedRestaurant,
  Restaurant,
  RestaurantLogo,
  RestaurantTitle,
  ReviewAndRatingDiv,
  SelectRest,
  StarImg,
  SubLine,
  SublineText,
  Text,
  Title,
  TitleContainer
} from "./StyledComponent";
import {
  filters,
  restaurants,
  subLine1,
  subLine2,
  title,
  userName
} from "./data";
import titleLogo from "./assets/logo.png";
import StarImgLogo from "./assets/star.svg";

const Ratings = ({ value }) => {
  let arr = [];

  for (let i = 0; i < value; i++) {
    arr.push(<StarImg src={StarImgLogo} left={11 * i} />);
  }

  return <RatingsDiv>{arr}</RatingsDiv>;
};

const App = () => {
  return (
    <Main>
      <Container>
        <CloseIcon>&times;</CloseIcon>

        <DetailsContainer>
          <TitleContainer>
            <Logo src={titleLogo} />

            <Title>{title}</Title>
          </TitleContainer>

          <SubLine>
            <SublineText>
              <Text>{subLine1}</Text>
              <Bold>{userName}</Bold>
              <Text>{subLine2}</Text>
            </SublineText>

            <SelectRest>Please select a restaurant:</SelectRest>
          </SubLine>

          <RecommendedRestaurant>
            {restaurants.map(rest => (
              <Restaurant>
                <div>
                  <RestaurantTitle>{rest.title}</RestaurantTitle>

                  <ReviewAndRatingDiv>
                    <Ratings value={rest.rates} />
                    {rest.reviews} reviews
                  </ReviewAndRatingDiv>

                  <BestRecommendation>
                    {rest.bestRecommendation}
                  </BestRecommendation>
                </div>

                <RestaurantLogo src={rest.image} />
              </Restaurant>
            ))}
          </RecommendedRestaurant>

          <FilterDiv>
            {filters.map(fltr => (
              <Filter onClick={fltr.action}>{fltr.name}</Filter>
            ))}
          </FilterDiv>
        </DetailsContainer>

        <ActionButtonsDiv>
          <ActionButtons
            background={"#fff"}
            color={"#000"}
            borderColor={"#c0c0c0"}
          >
            Cancel
          </ActionButtons>
          <ActionButtons
            background={"#337a5a"}
            color={"#fff"}
            borderColor={"#337a5a"}
          >
            Submit
          </ActionButtons>
        </ActionButtonsDiv>
      </Container>
    </Main>
  );
};

export default App;
