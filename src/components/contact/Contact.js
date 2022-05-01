import React from 'react';
import './Contact.css';

import {
  FormControl,
  Input,
  Box,
  Button,
  Textarea,
  Text,
  Flex,
} from '@chakra-ui/react';
import { GrSend } from 'react-icons/gr';

const Contact = () => {
  return (
    <>
      <Box>
        <Text
          fontSize={['1xl', '2xl', '4xl']}
          textAlign="center"
          fontWeight="semibold"
          mt={['2', '4', '8']}
        >
          Contact
        </Text>
        <form m="2">
          <FormControl isRequired mb="2">
            <Input id="name" placeholder="Name" autoComplete="off" />
          </FormControl>
          <FormControl isRequired mb="2">
            <Input
              id="email"
              type="email"
              placeholder="Email"
              autoComplete="off"
            />
          </FormControl>
          <FormControl isRequired mb="2">
            <Textarea
              id="message"
              placeholder="Message"
              autoComplete="off"
              w="40vw"
              h="40vh"
            />
          </FormControl>

          <Flex justifyContent="right">
            <Button leftIcon={<GrSend />} colorScheme="pink" variant="solid">
              Send Message
            </Button>
          </Flex>
        </form>
      </Box>
    </>
  );
};

export default Contact;