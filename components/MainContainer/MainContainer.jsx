import { ProgressIndicator } from '../ProgressIndicator/ProgressIndicator';
import { Box } from '../Box/Box';

export const MainContainer = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={568}
      height="100%"
      bg="#0E3452"
      pt={200}
    >
      <ProgressIndicator />

      <div> {children}</div>
    </Box>
  );
};
