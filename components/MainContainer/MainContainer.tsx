import { ProgressIndicator } from '../ProgressIndicator/ProgressIndicator';
import { Box } from '../Box/Box';

export const MainContainer = ({ children }: any) => {
  return (
    <Box
      display="flex"
      width={568}
      height="100%"
      bg="#0E3452"
      pt={200}
    >
      <ProgressIndicator />
      <p>In Main Container</p>
      <div> {children}</div>
    </Box>
  );
};
