import styled from 'styled-components';

export const StyledModal = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 480px;
  padding: 64px 40px;
  color: #134267;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 5px 20px rgba(108, 117, 139, 0.2);
  @media screen and (max-width: 1023px) {
    width: 540px;
  }
  @media screen and (max-width: 767px) {
    width: 390px;
  }
`;
