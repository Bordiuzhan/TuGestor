import styled from 'styled-components';
import bgImg1440 from '../assets/desk-593327_1920.jpg';
import { NavLink } from 'react-router-dom';

export const WelcomWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url(${bgImg1440});
  background-size: cover;
  color: #fafafa;
`;

export const Title = styled.p`
  margin-bottom: 14px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  display: inline-block;
  width: 304px;
  margin-bottom: 44px;
  text-align: center;
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    width: 492px; //500
    margin-bottom: 40px;
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    width: 532px; //540
  }
`;



