import React from 'react';
import { Flex, Link } from '@chakra-ui/react';

const Nav = props => {
  return (
    <nav>
      <Flex>
        <Link color="primary.500">Home</Link>
        <Link>Blog</Link>
      </Flex>
    </nav>
  );
};

export default Nav;
