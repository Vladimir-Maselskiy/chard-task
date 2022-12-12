import styled from 'styled-components';

export const StyledMobieProgressLine = styled.div`
  width: 100%;
  height: 8px;
  border: 1px solid #c9d3e0;
  border-radius: 4px;
`;
export const StyledMobieFilledProgressLine = styled.div`
  position: absolute;
  width: ${p => `${p.step * 25}%`};
  height: 8px;
  top: 0;
  left: 0;
  border: 1px solid #c9d3e0;
  background-color: #c9d3e0;
  border-radius: 4px;
`;
export const ProgressInfo = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #4f637d;
`;
