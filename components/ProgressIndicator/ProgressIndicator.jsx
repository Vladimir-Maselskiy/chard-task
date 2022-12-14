import { progressIndicatorItems } from '../../data/progressIndicatorItems';
import { Box } from '../Box/Box';
import { ProgressCheckImage } from '../ProgressCheckImage/ProgressCheckImage';
import { ProgressDots } from '../ProgressDots/ProgressDots';
import { NavButton } from '../NavButton/NavButton';
import { StyledProgressCheckConnectLine } from '../ProgressCheckImage/ProgressCheckImage.styled';
import {
  StyledList,
  StyledItem,
  ItemTitle,
  Styled5X,
  Styled5XDescription,
} from './ProgressIndicator.styled';
import ProgressRoundCheckIcon from '../../images/progress-round-check.svg';

import { StyledBigCheck } from '../StyledBigCheck/StyledBigCheck';
import { useAppContext } from '../../context/state';
import Image from 'next/image';

export const ProgressIndicator = () => {
  const { step, progressCheck, bigCheckIndex } =
    useAppContext();
  return (
    <Box
      display="flex"
      width={568}
      bg="#0e3452"
      pt={70}
      pb={56}
      flexDirection="column"
      alignItems="center"
    >
      <StyledList>
        {progressIndicatorItems.map(
          (progressIndicatorItems, index) => {
            return (
              <StyledItem key={progressIndicatorItems}>
                {bigCheckIndex === index && (
                  <StyledBigCheck />
                )}
                {progressCheck > index && (
                  <Box
                    display="flex"
                    alignItems="center"
                    position="absolute"
                    left={0}
                    top={0}
                    zIndex={20}
                  >
                    <Image
                      src={ProgressRoundCheckIcon.src}
                      alt="Check Mark Logo"
                      width={32}
                      height={32}
                    />
                  </Box>
                )}

                <ProgressCheckImage
                  progressChecked={index >= step}
                  bgImg={step > index + 1}
                ></ProgressCheckImage>
                <ItemTitle>
                  {progressIndicatorItems}
                </ItemTitle>
                {index <
                  progressIndicatorItems.length - 1 && (
                  <StyledProgressCheckConnectLine
                    progressChecked={index + 1 >= step}
                  />
                )}
              </StyledItem>
            );
          }
        )}
      </StyledList>
      <NavButton />
      <Box
        display="flex"
        alignItems="center"
        color="#96caf7"
        width={364}
        mt={102}
        bg="#134267"
        p={16}
        gridGap={16}
        borderRadius={8}
      >
        <Styled5X>5X</Styled5X>
        <Styled5XDescription>
          Acquiring a new customer is 5x more costly than
          making an unhappy customer happy
        </Styled5XDescription>
      </Box>
      <ProgressDots />
    </Box>
  );
};
