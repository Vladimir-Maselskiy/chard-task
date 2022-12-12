import { useAppContext } from '../../context/state';
import { Box } from '../Box/Box';
import {
  StyledMobieProgressLine,
  StyledMobieFilledProgressLine,
  ProgressInfo,
} from './MobieProgressLine.styled';

export const MobieProgressLine = () => {
  const { step, progressCheck } = useAppContext();
  return (
    <Box mt={16}>
      <ProgressInfo>Step {step} of 4</ProgressInfo>
      <Box position="relative" mt="8px">
        <StyledMobieProgressLine />
        <StyledMobieFilledProgressLine step={step} />
      </Box>
    </Box>
  );
};
