import React,{useEffect} from 'react'
import WithSubnavigation from "../components/Navbar1";
import {Flex, Container, Box, Text, Stack, Center, useColorModeValue, Heading, Avatar,  Wrap, WrapItem, VStack, Input, Textarea, Button, HStack, UnorderedList, ListItem, Select} from '@chakra-ui/react'


function Volunteer() {
    
  return (
    <>
        <WithSubnavigation />
        <Box pt={150} pl={100}>
        <VStack w={325} rounded={"md"} boxShadow={"md"} p={5}> 
          <Heading>Need Help ?</Heading>
          <Text alignSelf={"self-start"}>Date</Text>
          <Input type={"date"} />
          <Text alignSelf={"self-start"}>Time</Text>
          <Input type={"time"} />
          <Text alignSelf={"self-start"}>Pin Code</Text>
          <Input type={"number"}/>
          <Text alignSelf={"self-start"}>Need Assistance for?</Text>
          <Textarea />
          <Button rounded={"md"} size={"md"} colorScheme={"red"}>
            Request Volunteer
          </Button>
        </VStack>
        </Box>
    </>
  )
}

export default Volunteer