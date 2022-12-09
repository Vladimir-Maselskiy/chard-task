import { Box } from '../Box/Box';

export const HintMessage = ({ children }) => {
  return (
    <Box display="flex" m="16px auto  0">
      {children}
    </Box>
  );
};
