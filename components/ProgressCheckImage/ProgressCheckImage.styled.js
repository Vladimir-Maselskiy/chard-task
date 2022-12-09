import styled from 'styled-components';

export const StyledProgressImage = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid #32abf2;
  border-radius: 50%;
`;
export const StyledProgressCheckConnectLine = styled.div`
  width: 0;
  height: 48px;
  border: ${p =>
    p.step < p.index
      ? '1px solid #5d7fa3'
      : '1px solid #32ABF2'};
  position: absolute;
  left: 15px;
  bottom: -48px;
`;
