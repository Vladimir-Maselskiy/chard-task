import {
  StyledProgressImage,
  StyledProgressCheckConnectLine,
} from './ProgressCheckImage.styled';

export const ProgressCheckImage = ({
  progressChecked,
  bgImg,
}) => {
  return (
    <StyledProgressImage
      progressChecked={progressChecked}
      bgImg={bgImg}
    ></StyledProgressImage>
  );
};
export const ProgressCheckConnectLine = ({
  progressChecked,
}) => {
  return (
    <StyledProgressCheckConnectLine
      check={progressChecked}
    ></StyledProgressCheckConnectLine>
  );
};
