import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const CenteredRotatingLines = () => {
  return (
    <CenteredWrapper>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </CenteredWrapper>
  );
};
