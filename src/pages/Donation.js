import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  createIcon,
  useColorModeValue,
  Button,
  Box,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';



const RupeeIcon = createIcon({
  displayName: "RupeeIcon",
  viewBox: "0 0 320 512",
  d: "M.0022 64C.0022 46.33 14.33 32 32 32H288C305.7 32 320 46.33 320 64C320 81.67 305.7 96 288 96H231.8C241.4 110.4 248.5 126.6 252.4 144H288C305.7 144 320 158.3 320 176C320 193.7 305.7 208 288 208H252.4C239.2 266.3 190.5 311.2 130.3 318.9L274.6 421.1C288.1 432.2 292.3 452.2 282 466.6C271.8 480.1 251.8 484.3 237.4 474L13.4 314C2.083 305.1-2.716 291.5 1.529 278.2C5.774 264.1 18.09 256 32 256H112C144.8 256 173 236.3 185.3 208H32C14.33 208 .0022 193.7 .0022 176C.0022 158.3 14.33 144 32 144H185.3C173 115.7 144.8 96 112 96H32C14.33 96 .0022 81.67 .0022 64V64z",
});

export default function Donation(props) {

  const navigate = useNavigate()

  return (
    <Container maxW={"5xl"} py={14} px={0} ref={props.scrollRef}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={6} ml={0}>
          <Text
            textTransform={"uppercase"}
            color={"red.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("red.50", "red.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
          Donation
          </Text>
          <Heading>Donate for a Good Cause</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Please help the specially abled people by donating for them. We will
            ensure that your help reach the right people at the right time.
          </Text>
          <Stack
            direction={"row"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
          <Box h={'full'}> 
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              leftIcon={<RupeeIcon h={4} w={4} color={"gray.700"} />}
              onClick={()=>{navigate("/donation")}}
            >
              Donate
            </Button>
            </Box>
          </Stack>
        </Stack>
        <Flex ml={20}>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={require("../assets/DisabledKids.jpeg")}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}