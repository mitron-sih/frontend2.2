import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Radio, RadioGroup
} from '@chakra-ui/react';


import {Link as ReachLink, useNavigate} from 'react-router-dom'
import source from "../assets/disable1.jpg"
import Navbar1 from '../components/Navbar1'
import {useState} from "react"

export default function Login() {
  const navigate = useNavigate()
  const [user, setuser] = useState('user')
  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")
  return (
    <>
      <Navbar1 />
      <Flex minH={"100vh"} align={"center"} justify={"center"} bgImage={source}>
        <Stack w={450} spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack
            align={"center"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"lg"}
            boxShadow={"lg"}
            p={8}
          >
            <Heading fontSize={"4xl"}>Sign in</Heading>
            <Stack spacing={4}>
              <FormControl id="email" onChange={(e)=>{setemail(e.target.value)}}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" w={300} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={(e)=>{setpass(e.target.value)}}/>
              </FormControl>
              <RadioGroup onChange={setuser} value={user}>
                <Stack direction="row">
                  <Radio value="volunteer">Volunteer</Radio>
                  <Radio value="user">User</Radio>
                </Stack>
              </RadioGroup>
              <Stack spacing={10}>
                <Text>
                  Do not have an account? Please{" "}
                  <Link color={"blue.400"} as={ReachLink} to="/signup">
                    Sign Up
                  </Link>
                </Text>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={() => {
                    
                    if(user == "volunteer"){
                      fetch(`http://c1d8-121-200-53-172.ngrok.io/volunteerLogin/?email=${email}&password=${pass}`,{
                        method: "GET",
                        headers:{
                          "Content-Type":"application/json"
                        }
                      }).then(res=>res.json()).then(result=>{
                        if(result.length!=0){
                          localStorage.setItem("user", user);
                          localStorage.setItem("userdata",JSON.stringify(result[0]))
                          navigate("/");
                        }
                      })
                    }
                    else if(user == "user"){
                      fetch(`http://c1d8-121-200-53-172.ngrok.io/userLogin/?email=${email}&password=${pass}`,{
                        method: "GET",
                        headers:{
                          "Content-Type":"application/json"
                        }
                      }).then(res=>res.json()).then(result=>{
                        if(result.length!=0){
                          localStorage.setItem("user", user);
                          localStorage.setItem("userdata",JSON.stringify(result[0]))
                          navigate("/");
                        }
                      })
                    }
                    else{
                      navigate("/")
                    }
                    
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}