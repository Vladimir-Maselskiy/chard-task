import { StyledProgressImage } from './ProgressCheckImage.styled';

export const ProgressCheckImage = ({ check }) => {
  return (
    <StyledProgressImage
      check={check}
    ></StyledProgressImage>
  );
};
export const ProgressCheckConnectLine = ({ check }) => {
  return (
    <StyledProgressCheckConnectLine
      check={check}
    ></StyledProgressCheckConnectLine>
  );
};
