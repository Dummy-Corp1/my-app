import styled, { css } from "styled-components";

const Filter = styled.button`
  background: #fff;
  border-radius: 2px;
  border: 1px solid #c1c1c1;
  color: #000;
  width: 49%;
  margin-top: 7px;
  font-size: 8px;
  padding: 4px 0;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 11px;
  right: 15px;
  font-size: 24px;
  color: #6d6c6c;
  font-weight: 300;
`;

const FilterDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Container = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  box-shadow: 0px 0px 25px 10px #dadada;
  width: 306px;
  position: relative;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin: 35px;
`;

const DetailsContainer = styled.div`
  padding: 10px;
  padding-bottom: 7px;
  border-bottom: 1px solid #c0c0c0;
`;

const ActionButtonsDiv = styled.div`
  padding: 13px;
  display: flex;
  justify-content: flex-end;
`;

const ActionButtons = styled.button`
  border-radius: 3px;
  padding: 5px 12px;
  margin-left: 10px;
  font-weight: 900;
  ${props => css`
    background: ${props.background};
    color: ${props.color};
    border: 1px solid ${props.borderColor};
  `}
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

const RestaurantLogo = styled.img`
  width: 60px;
  height: 50px;
  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 15px;
  margin: 0 0px 0 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SubLine = styled.div``;

const Bold = styled.span`
  font-size: 9.2px;
  font-weight: 900;
`;

const Text = styled.span`
  font-size: 9.2px;
`;

const SelectRest = styled.h5`
  margin: 6px 0;
  font-size: 10px;
  font-weight: 900;
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 6px;
`;

const RatingsDiv = styled.div`
  position: relative;
  height: 14px;
  width: 45px;
`;

const SublineText = styled.p`
  margin: 12px 0;
  line-height: 0.9;
`;

const RecommendedRestaurant = styled.div`
  border-bottom: 1px solid #e1e1e1;
`;

const Restaurant = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
  display: flex;
`;

const RestaurantTitle = styled.h6`
  font-size: 8px;
  font-weight: 900;
  margin: 0;
`;

const ReviewAndRatingDiv = styled.div`
  display: flex;
  font-size: 8px;
  align-items: center;
`;

const StarImg = styled.img`
  width: 10px;
  padding-right: 2px;
  position: absolute;
  top: 2px;
  ${props => css`
    left: ${props.left}px;
  `}
`;

const BestRecommendation = styled.p`
  margin: 2px 10px 0 0px;
  font-size: 9px;
`;

export {
  ActionButtons,
  ActionButtonsDiv,
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
};
