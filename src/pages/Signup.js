import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  SimpleGrid,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  PinInput,
  PinInputField,
  Select,
  HStack,
  Input,
  FormControl,
  FormLabel,
  Button
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import source from "../assets/disable1.jpg";
import Navbar1 from "../components/Navbar1";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setuser] = useState(false);
  const [volunteer, setvolunteer] = useState(false);
  const [vname, setvname] = useState("");
  const [vaddress, setvaddress] = useState("");
  const [vcode, setvcode] = useState("");
  const [vcity, setvcity] = useState("");
  const [vstate, setvstate] = useState("");
  const [vaadhar, setvaadhar] = useState("");
  const [vemail, setvemail] = useState("");
  const [vpass, setvpass] = useState("");
  const [loading, setloading] = useState(false);
  const [otp, setotp] = useState("");
  const [serverotp, setserverotp] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(otp);
  }, [otp]);

  const [fname, setfname] = useState("");
  const [address, setaddress] = useState("");
  const [code, setcode] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [udid, setudid] = useState("");
  const [dt, setdt] = useState("");

  return (
    <>
      <Navbar1 />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
        bgImage={source}
      >
        <Stack w={700} spacing={8} mx={"auto"} maxH={"lg"} px={6}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Heading fontSize={"4xl"} align={"center"} mb={10}>
              {" "}
              Sign up{" "}
            </Heading>
            <Stack spacing={4}>
              {user ? (
                <VStack>
                  <HStack justifyContent={"space-between"} spacing={10}>
                    <Stack w={250}>
                      <FormControl id="fname">
                        <FormLabel>Name</FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => {
                            setfname(e.target.value);
                          }}
                        />
                      </FormControl>
                      <Text>Disability Type</Text>
                      <Select
                        placeholder="Disability Type"
                        onChange={(e) => {
                          setdt(e.target.value);
                        }}
                      >
                        <option value={"1"}>Hearing Impairment</option>
                        <option value={"2"}>Autism</option>
                        <option value={"3"}>Leprosy</option>
                        <option value={"4"}>Intellectual Disability</option>
                        <option value={"5"}>Complete Blindness</option>
                        <option value={"6"}>Person With Low Vision</option>
                        <option value={"7"}>Handicapped</option>
                        <option value={"8"}>Dyslexia</option>
                        <option value={"9"}>Cerebral Palsy</option>
                        <option value={"10"}>Locomotor Disability</option>
                      </Select>
                      <FormControl id="Address">
                        <FormLabel>Address</FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => {
                            setaddress(e.target.value);
                          }}
                        />
                      </FormControl>
                      <FormControl id="pincode">
                        <FormLabel>Pincode</FormLabel>
                        <Input
                          type="number"
                          onChange={(e) => {
                            setcode(e.target.value);
                          }}
                        />
                      </FormControl>
                      <FormControl id="city">
                        <FormLabel>City</FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => {
                            setcity(e.target.value);
                          }}
                        />
                      </FormControl>
                    </Stack>
                    <Stack w={250}>
                      <FormControl id="state">
                        <FormLabel>State</FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => {
                            setstate(e.target.value);
                          }}
                        />
                      </FormControl>
                      <FormControl id="phone">
                        <FormLabel>Phone Number</FormLabel>
                        <Input
                          type="number"
                          onChange={(e) => {
                            setphone(e.target.value);
                          }}
                        />
                      </FormControl>
                      <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input
                          type="email"
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                        />
                      </FormControl>
                      <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input
                          type="password"
                          onChange={(e) => {
                            setpass(e.target.value);
                          }}
                        />
                      </FormControl>
                      <FormControl id="udid">
                        <FormLabel>Unique Disability ID (UDID)</FormLabel>
                        <Input
                          type="number"
                          onChange={(e) => {
                            setudid(e.target.value);
                          }}
                        />
                      </FormControl>
                    </Stack>
                  </HStack>
                  <Button
                    w={150}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={() => {
                      const obj = {
                        name: fname,
                        address: address,
                        city: city,
                        state: state,
                        pin_code: code,
                        udid: udid,
                        email: email,
                        password: pass,
                        phone: phone,
                        distability_type: dt,
                      };

                      fetch("http://c1d8-121-200-53-172.ngrok.io/user/", {
                        method: "POST",
                        body: JSON.stringify(obj),
                        headers: {
                          "Content-Type": "application/json",
                        },
                      })
                        .then((res) => res.json())
                        .then((result) => {
                          console.log(result);
                          navigate("/login");
                        });
                    }}
                  >
                    Sign Up
                  </Button>
                </VStack>
              ) : volunteer ? (
                <VStack>
                  <HStack justifyContent={"space-between"} spacing={10}>
                    <Stack w={250}>
                      <FormControl id="name">
                        <FormLabel>Name</FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => {
                            setvname(e.target.value);
                          }}
                        />
                      </FormControl>
                      <FormControl id="Address">
                        <FormLabel>Address</FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => {
                            setvaddress(e.target.value);
                          }}
                        />
                      </FormControl>
                      <FormControl id="pincode">
                        <FormLabel>Pincode</FormLabel>
                        <Input
                          type="number"
                          onChange={(e) => {
                            setvcode(e.target.value);
                          }}
                        />
                      </FormControl>
                      <FormControl id="city">
                        <FormLabel>City</FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => {
                            setvcity(e.target.value);
                          }}
                        />
                      </FormControl>
                    </Stack>
                    <Stack w={250}>
                      <FormControl id="state">
                        <FormLabel>State</FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => {
                            setvstate(e.target.value);
                          }}
                        />
                      </FormControl>
                      <FormControl id="phone">
                        <FormLabel>Aadhar Number</FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => {
                            setvaadhar(e.target.value);
                          }}
                        />
                      </FormControl>
                      <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input
                          type="email"
                          onChange={(e) => {
                            setvemail(e.target.value);
                          }}
                        />
                      </FormControl>
                      <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input
                          type="password"
                          onChange={(e) => {
                            setvpass(e.target.value);
                          }}
                        />
                      </FormControl>
                    </Stack>
                  </HStack>
                  <Button
                    isLoading={loading}
                    w={150}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={() => {
                      setloading(true);
                      console.log(vaadhar);
                      fetch("https://61c8-121-200-53-172.ngrok.io/sendOTP", {
                        method: "POST",
                        body: JSON.stringify({
                          aadhar_number: vaadhar,
                        }),
                        headers: {
                          "Content-Type": "application/json",
                        },
                      })
                        .then((res) => res.json())
                        .then((result) => {
                          if (result.major_crime == 1) {
                            alert("Not eligible for volunteering");
                            setloading(false);
                            Navigate("/");
                          } else {
                            setserverotp(result.otp);
                            onOpen(true);
                            setloading(false);
                          }
                        });
                    }}
                  >
                    Sign Up
                  </Button>
                </VStack>
              ) : (
                <SimpleGrid columns={2}>
                  <Box
                    style={{ textAlign: "center" }}
                    ml={10}
                    onClick={() => {
                      setuser(true);
                    }}
                  >
                    <img
                      src={require("../assets/user.png")}
                      alt="user"
                      width={"70%"}
                    ></img>
                  </Box>
                  <Box
                    style={{ textAlign: "center" }}
                    ml={10}
                    onClick={() => {
                      setvolunteer(true);
                    }}
                  >
                    <img
                      src={require("../assets/volunteer.png")}
                      alt="user"
                      width={"70%"}
                    ></img>
                  </Box>
                  <Box style={{ textAlign: "center" }}>Are you a User?</Box>
                  <Box style={{ textAlign: "center" }}>
                    Are you a Volunteer?
                  </Box>
                </SimpleGrid>
              )}
              <Modal onClose={onClose} isOpen={isOpen} isCentered>
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
                      onClick={() => {
                        if (otp == serverotp) {
                          const obj = {
                            first_name: vname.split(" ")[0],
                            last_name: vname.split(" ")[1],
                            address_line_1: vaddress,
                            city: vcity,
                            state: vstate,
                            pin_code: vcode,
                            aadhar_number: vaadhar,
                            email: vemail,
                            password: vpass,
                          };

                          fetch(
                            "http://c1d8-121-200-53-172.ngrok.io/volunteer/",
                            {
                              method: "POST",
                              body: JSON.stringify(obj),
                              headers: {
                                "Content-Type": "application/json",
                              },
                            }
                          )
                            .then((res) => res.json())
                            .then((result) => {
                              console.log(result);
                              navigate("/login");
                            });
                        }
                      }}
                    >
                      Verify
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
