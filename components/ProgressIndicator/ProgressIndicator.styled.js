import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  display: inline-flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  /* width: 300px; */
  height: 100%;
`;

export const StyledItem = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  &:not(:first-child) {
    margin-top: 48px;
  }
`;
export const ItemTitle = styled.p`
  margin-left: 16px;
  color: ${p => (p.inex < p.step ? '#FFFFFF' : '#5D7FA3')};
`;
export const Styled5X = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
`;
export const Styled5XDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;
