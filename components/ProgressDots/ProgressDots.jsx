import { Box } from '../Box/Box';

export const ProgressDots = () => {
  return (
    <Box display="flex" gridGap={12} mt={16}>
      <Box
        width={8}
        height={8}
        bg="#96CAF7"
        borderRadius="50%"
      />
      <Box
        width={8}
        height={8}
        bg="#134267"
        borderRadius="50%"
      />
      <Box
        width={8}
        height={8}
        bg="#134267"
        borderRadius="50%"
      />
      <Box
        width={8}
        height={8}
        bg="#134267"
        borderRadius="50%"
      />
      <Box
        width={8}
        height={8}
        bg="#134267"
        borderRadius="50%"
      />
    </Box>
  );
};
