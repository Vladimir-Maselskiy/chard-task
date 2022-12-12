import styled from 'styled-components';
import img from '../../images/tileable-doodle.png';

export const StyledMainContainer = styled.div`
  display: flex;
  align-items: stretch;
  /* width: 1440px; */
  width: 100vw;
  @media screen and (max-width: 1024px) {
    height: 100vh;
    margin: 0 auto;
  }
`;
