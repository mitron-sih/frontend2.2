import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  createIcon,
  HStack,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import {useNavigate} from 'react-router-dom'
import Donation from "./Donation";
import { useRef } from 'react';
import WithSubnavigation from "../components/Navbar1";
import AboutUs from "../components/AboutUs";
import { useTranslation } from 'react-i18next'

export const Volunteer = (props) => {
  return (
    <HStack spacing='14px' mb={6}>
      <Box mr={40}>
        <img src={require("../assets/vol.png")} width={"55%"}/>
      </Box>
      <Box width={"45%"}>
      <Text fontWeight={600} fontSize={'lg'} align={'center'} justifyContent={'center'}>{props.title}</Text>
      <Text color={'gray.700'} fontSize={'md'}>{props.text}</Text>
      </Box>
    </HStack>
  );
};

export const Schemes = (props) => {
  return (
    <HStack spacing='14px' mb={6}>
      <Box width={"45%"} mr={40}>
      <Text fontWeight={600} fontSize={'lg'} align={'center'} justifyContent={'center'}>{props.title}</Text>
      <Text color={'gray.700'} fontSize={'md'} width={"75%"}>{props.text}</Text>
      </Box>
      <Box>
        <img src={require("../assets/GovSchemes.png")} width={"75%"}/>
      </Box>

    </HStack>
  );
};

export const AssistiveAids = (props) => {
  return (
    <HStack spacing='14px' mb={6}>
      <Box mr={40}>
        <img src={require("../assets/assistive-aids.png")} width={"70%"}/>
      </Box>
      <Box width={"45%"}>
      <Text fontWeight={600} fontSize={'lg'} align={'center'} justifyContent={'center'}>{props.title}</Text>
      <Text color={'gray.700'} fontSize={'md'}>{props.text}</Text>
      </Box>

    </HStack>
  );
};

export default function Main() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const scollToRef = useRef();
  return (
    <>
    <Container maxW={"100%"} px={0}>
    <WithSubnavigation/>
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        pb={'120px'}
        pt={'130px'}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Disability
            </Text>
            <br />
            <Text as={"span"} color={"red.400"}>
              Scheme Portal
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            {t('Empowering Disabled people! Helping them to access all the schemes relevant to them with various other features at one place. Helping Specially Abled people to live a normal life with respect and honour.')}
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
            z-index={0}
          >
            {!localStorage.getItem("user")?<Button
            z-index={0}
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"red.400"}
              _hover={{ bg: "red.500" }}
              onClick={()=>{navigate("/login")}}
              
            >
              Login
            </Button>:null}
            <Button
              z-index={0}
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              leftIcon={<RupeeIcon h={4} w={4} color={"gray.700"} />}
              onClick={() => scollToRef.current.scrollIntoView({
                behavior: "smooth"
              })}
            >
              Donate
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          w={"full"}
        >
          <Box
            height={"315px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"560px"}
            overflow={"hidden"}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/0wAq9Kq-ojY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        </Flex>
      </Stack>
    <Box p={4} align={'center'} >
    <Stack direction={['column']} spacing='24px'>
      <Volunteer
        icon={<Icon as={FcAssistant} w={10} h={10} />}
        title={'Volunteer'}
        text={
          'A Volunteer for your help whenever you need. Register -> Login -> Fill the Volunteer Form -> Wait for confirmation -> Volunteer at doorstep to help'
        }
      />
      <Schemes
        icon={<Icon as={FcDonate} w={10} h={10} />}
        title={'Relevant Government Schemes & Summarization'}
        text={
          'Government Schemes related to disability specific and personalized to you based on your location and disability type. Never miss anything important'
        }
      />
      <AssistiveAids
        icon={<Icon as={FcInTransit} w={10} h={10} />}
        title={'Assistive Aids'}
        text={
          'Summary of each Scheme so that you get only the important points. Support for Assistive Aids for your disability'
        }
      />
    </Stack>
  </Box>
  <Donation scrollRef={scollToRef}/>
  </Container>
  <AboutUs />
  </Container>
  </>
  );
}
 
const RupeeIcon = createIcon({
  displayName: "RupeeIcon",
  viewBox: "0 0 320 512",
  d: "M.0022 64C.0022 46.33 14.33 32 32 32H288C305.7 32 320 46.33 320 64C320 81.67 305.7 96 288 96H231.8C241.4 110.4 248.5 126.6 252.4 144H288C305.7 144 320 158.3 320 176C320 193.7 305.7 208 288 208H252.4C239.2 266.3 190.5 311.2 130.3 318.9L274.6 421.1C288.1 432.2 292.3 452.2 282 466.6C271.8 480.1 251.8 484.3 237.4 474L13.4 314C2.083 305.1-2.716 291.5 1.529 278.2C5.774 264.1 18.09 256 32 256H112C144.8 256 173 236.3 185.3 208H32C14.33 208 .0022 193.7 .0022 176C.0022 158.3 14.33 144 32 144H185.3C173 115.7 144.8 96 112 96H32C14.33 96 .0022 81.67 .0022 64V64z",
});

export const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};