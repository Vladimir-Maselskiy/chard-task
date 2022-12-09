import { progressIndicatorItems } from '../../data/progressIndicatorItems';
import { Box } from '../Box/Box';
import { ProgressCheckImage } from '../ProgressCheckImage/ProgressCheckImage';
import { StyledProgressCheckConnectLine } from '../ProgressCheckImage/ProgressCheckImage.styled';
import {
  StyledList,
  StyledItem,
  ItemTitle,
} from './ProgressIndicator.styled';

export const ProgressIndicator = ({ step }) => {
  console.log(
    'progressIndicatorItems',
    progressIndicatorItems
  );
  return (
    <Box
      display="flex"
      width={568}
      bg="#0e3452"
      pt={200}
      flexDirection="column"
      alignItems="center"
    >
      <StyledList>
        {progressIndicatorItems.map(
          (progressIndicatorItems, index) => {
            return (
              <StyledItem key={progressIndicatorItems}>
                <ProgressCheckImage
                  progressChecked={index > step}
                ></ProgressCheckImage>
                <ItemTitle>
                  {progressIndicatorItems}
                </ItemTitle>
                {index <
                  progressIndicatorItems.length - 1 && (
                  <StyledProgressCheckConnectLine
                    index={index}
                    step={step}
                  />
                )}
              </StyledItem>
            );
          }
        )}
      </StyledList>
    </Box>
  );
};
