import * as React from 'react';
import { Stack, Badge } from '@chakra-ui/react';

// markup
const IndexPage = () => {
  return (
    <Stack direction="row">
      <Badge>Default</Badge>
      <Badge colorScheme="primary">Primary</Badge>
      <Badge colorScheme="secondary">Secondary</Badge>
      <Badge colorScheme="tertiary">Tertiary</Badge>
      <Badge colorScheme="success">Success</Badge>
      <Badge colorScheme="error">Error</Badge>
    </Stack>
  );
};

export default IndexPage;
