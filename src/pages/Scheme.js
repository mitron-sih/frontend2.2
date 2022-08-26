import React, {useEffect, useState} from 'react'
import {Spinner, Flex, Box, Text, Stack, Center, useColorModeValue, Heading, Wrap, WrapItem, VStack, HStack, UnorderedList, ListItem, Select, Button} from '@chakra-ui/react'
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Navbar1 from '../components/Navbar1'
import {BsFillFileEarmarkPdfFill} from 'react-icons/bs'

export const Tweet = (props) => {
  return (
    <Box h={650} overflowY={"scroll"} rounded={"2xl"} ml={"10px"}>
    <TwitterTimelineEmbed
      sourceType="list"
      ownerScreenName="Abhishe88167042"
      slug= "1562680361389137920"
      options={{height: 650, width: 450}}
    />
    </Box>
  );
};

export function SchemeCard(props) {
  return (
    <Center py={3.5}>
      <HStack
        w={920}
        bg={useColorModeValue("white", "gray.900")}
        borderColor={"black"}
        borderWidth={"1px"}
        boxShadow={"md"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        justifyContent={"space-between"}
      >
        <Stack w={460} mr={"25px"}>
          <HStack justifyContent={"space-between"}>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {props.dt}
          </Text>
          <BsFillFileEarmarkPdfFill onClick={()=>{window.open(props.dl,"_blank")}} cursor={"pointer"} size={30}/>
          </HStack>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {props.st}
          </Heading>
          <Text color={"gray.500"}>{props.ss}</Text>
          <HStack justifyContent={"space-between"}>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {props.da}
          </Text>
          <Button size={"sm"} colorScheme={"green"} onClick={()=>{window.open("https://www.swavlambancard.gov.in/cms/card-benefits","_blank")}}>Apply</Button>
          </HStack>
        </Stack>
        <Stack w={460}>
          <UnorderedList>
            {props.highlights.map(val=>{
              return <ListItem key={val}>{val.trim()}</ListItem>
            })}
          </UnorderedList>
        </Stack>
      </HStack>
    </Center>
  );
}

function Scheme() {
  const [scheme, setscheme] = useState([])
  const [lang, setlang] = useState('en')
  const [loading, setloading] = useState(true)
  const [user, setuser] = useState(null)
  useEffect(() => {
    setuser(localStorage.getItem("userdata"))
  },[])
  

  const disability = {
    "1": "Hearing Impairment",
    "2": "Autism",
    "3": "Leprosy",
    "4": "Intellectual Disability",
    "5": "Complete Blindness",
    "6": "Person With Low Vision",
    "7": "Handicapped",
    "8": "Dyslexia",
    "9": "Cerebral Palsy",
    "10": "Locomotor Disability"
}

  useEffect(() => {
      setloading(true)
      
        fetch(`http://c1d8-121-200-53-172.ngrok.io/schemes/?lang=${lang}`,{
          method: "GET"
        }).then(res=>res.json()).then(value=>{
          setscheme(value.map(data=>{
            return {
              id: data.id,
              dl: data.document_link,
              dt: disability[data.disability_type],
              st: data.scheme_name,
              ss: data.summary,
              da: data.benefit_types,
              highlights: data.highlights.substring(1,data.highlights.length-3).split("#")
            }
          }))
        }).finally(()=>{
          setloading(false)
        })
      
      
  }, [lang])
  
  return (
    <>
      <Flex
        as="header"
        position="fixed"
        top={0}
        backgroundColor="white"
        w="100%"
        bg={"gray"}
      >
        <Text>Navbar</Text>
      </Flex>
      <Navbar1 />
      <Stack
        direction={"row"}
        spacing={4}
        justifyContent={"space-between"}
        px={"20px"}
        pt={"100px"}
      >
        <VStack>
          <Heading mb={"10px"}>Relevant Government Schemes</Heading>
          <Select
            placeholder="Select language"
            w={250}
            defaultValue="en"
            onChange={(e) => {
              setlang(e.target.value);
            }}
          >
            <option value="en">English</option>
            <option value="ta">Tamil</option>
            <option value="te">Telugu</option>
            <option value="kn">Kannada</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
            <option value="gu">Gujarati</option>
            <option value="mr">Marathi</option>
            <option value="ml">Malayalam</option>
          </Select>
          {!loading ? (
            <Box w={970} h={600} rounded={"md"} px={5} overflowY={"scroll"}>
              {scheme.length !== 0 ? (
                <Wrap>
                  {scheme.map((val) => {
                    return (
                      <WrapItem key={val.id}>
                        <SchemeCard {...val} key={val.id} />
                      </WrapItem>
                    );
                  })}
                </Wrap>
              ) : null}
            </Box>
          ) : (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          )}
        </VStack>
        <Tweet />
      </Stack>
    </>
  );
}

export default Scheme