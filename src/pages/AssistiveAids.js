import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  SimpleGrid,
  Container,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  PinInput,
  PinInputField
} from '@chakra-ui/react';

import source from '../assets/hearing-aids.jpg'
import source1 from '../assets/wheelChair.jpg'
import source2 from '../assets/CommAids.jpg'
import source3 from '../assets/crutches.jpg'
import source4 from '../assets/walker.jpg'
import source5 from '../assets/cp-chair.jpg'
import source6 from '../assets/Prosthetic.jpg'
import WithSubnavigation from "../components/Navbar1";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AssistiveCards = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isOpenotp, onOpen: onOpenotp, onClose: onCloseotp } = useDisclosure()
  const [udid, setudid] = useState("")
  const [otp, setotp] = useState("")
  const [serverotp, setserverotp] = useState("")
  const navigate = useNavigate()
  return (
    <>
      <Stack ml={10} mt={20}>
        <Stack
          bg={useColorModeValue("white", "gray.900")}
          boxShadow="md"
          rounded={"md"}
          fontWeight="semibold"
          _hover={{ boxShadow: "lg" }}
          p={6}
          overflow={"hidden"}
        >
          <Box>
            <img src={props.img}></img>
          </Box>
          <Stack mt={3}>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
              align={"center"}
            >
              {props.title}
            </Heading>
            <Text align={"center"} color={"green.600"} fontWeight={"700"}>{`Cost: Rs. ${props.cost} /-`}</Text>
            <Text color={"gray.500"}>{props.text}</Text>
          </Stack>
          <Button size={"md"} onClick={onOpen} colorScheme={"blue"}>
            Request
          </Button>
        </Stack>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Verify UDID</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as={"b"}>UDID Number</Text>
            <Input
              type={"text"}
              mt={"25px"}
              onChange={(e) => {
                setudid(e.target.value);
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                fetch("https://61c8-121-200-53-172.ngrok.io/sendOTP", {
                  method: "POST",
                  body: JSON.stringify({
                    aadhar_number: udid
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                  .then((res) => res.json())
                  .then((result) => {
                    if(result){
                      onOpenotp(true)
                      console.log(result.otp)
                      setserverotp(result.otp)
                    }
                  });
              }}
            >
              Verify
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal onClose={onCloseotp} isOpen={isOpenotp} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter OTP</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PinInput otp onComplete={setotp}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme={"blue"}
              onClick={() => {
                if (otp == serverotp) {
                  const obj = {
                    udid: udid,
                    product_name: props.title,
                    user_name: "Abhishek",
                    price: props.cost
                  };
                  fetch("http://c1d8-121-200-53-172.ngrok.io/requestedProducts/", {
                    method: "POST",
                    body: JSON.stringify(obj),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                    .then((res) => res.json())
                    .then((result) => {
                      console.log(result);
                      navigate("/");
                    });
                }
              }}
            >
              Verify
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default function Aids() {
  return (
    <Stack>
    <WithSubnavigation />
    <SimpleGrid  row={2}>
      <SimpleGrid columns={3} spacing={20} >
      <AssistiveCards  img={source} title= {'Hearing Aid'} cost ={25000} text={'A hearing aid is a electronic device that you wear in or behind your ear. It makes sounds louder so that a person with hearing loss can listen & communicate.'} />
       <AssistiveCards  img={source1} title={'Wheel Chair'} cost ={50000} text={'A wheelchair is a chair with wheels, used when walking is difficult or impossible due to illness, injury, problems related to old age, or disability.'} />
       <AssistiveCards img={source2} title={'Speed & Communication Aid'} cost ={5000} text={'Alternative communication systems used to supplement speech or writing for individuals with severe speech impairments, enabling them to verbally communicate.'} />
      </SimpleGrid>
      <SimpleGrid columns={3} spacing={20} >
       <AssistiveCards img={source3} title={'Crutches'} cost ={7000} text={'Hands free crutches specifically designed to provide maximum comfort and eliminate the pressure placed on the armpits, hands $ wrists, by supporting weight through the elbow and forearm.'} />
       <AssistiveCards img={source4} title={'Walkers'} cost ={9000} text={'A walker or walking frame is a device that gives additional support to maintain balance or stability while walking, most commonly due to age-related mobility disability, including frailty.'}/>
       <AssistiveCards img={source5} title={'Cerebral Palsy Chair'} cost ={35000} text={'Cerebral palsy chair provides comfort, safety and good ergonomics so that one can achieve the best possible sitting position. '} />
       </SimpleGrid>
       <SimpleGrid columns={3} spacing={20}>
        <AssistiveCards img={source6} title={'Prosthetic Leg and Arms'} cost ={79000} text={'Prostheses, can help people with leg amputations get around more easily. They mimic the function and, sometimes, even the appearance of a real leg. '}/>
       </SimpleGrid>
    </SimpleGrid>
    <Box left={0}
      bg={useColorModeValue('gray.50', 'gray.900')} 
      color={useColorModeValue('gray.700', 'gray.200')}
      mt={30}>
      <Container
        as={Stack}
        maxW={'6xl'}
        maxH={'-moz-fit-content'}
        my={4}
        py={8}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2022 Mitron Smart India Hackathon</Text>
        <Text>Rahul Gorai, 8306544112</Text>
      </Container>
    </Box>
    </Stack>
  );
}