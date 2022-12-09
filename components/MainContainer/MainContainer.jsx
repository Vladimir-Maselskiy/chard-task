import { ProgressIndicator } from '../ProgressIndicator/ProgressIndicator';
import { Box } from '../Box/Box';
import { StyledMainContainer } from './MainContainer.styled';
import img from '../../images/tileable-doodle.png';

export const MainContainer = ({ children }) => {
  console.log('img', img);
  return (
    <StyledMainContainer>
      <ProgressIndicator />

      <Box
        display="flex"
        alignItems="center"
        minHeight="100%"
        flexGrow={2}
        backgroundImage={`url("${img.src}")`}
      >
        {children}
      </Box>
    </StyledMainContainer>
  );
};
