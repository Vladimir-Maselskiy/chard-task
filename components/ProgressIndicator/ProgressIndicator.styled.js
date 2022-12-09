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
