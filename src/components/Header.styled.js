import styled from 'styled-components';

export const Container = styled.header`
  border: 1px solid black;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const Logo = styled.img`
  width: 390px;
`;
export const Tel = styled.a`
  text-decoration: none;
  color: black;
  font-size: 55px;
  line-height: 60px;
  font-weight: 700;
`;
export const Address = styled.p`
  margin: 0px 0 5px 0;
  font-size: 18px;
`;
export const BtnLogOut = styled.button`
  margin-left: auto;
  margin-right: 20px;
  display: block;
  margin-bottom: 30px;
`;
