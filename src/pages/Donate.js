import React,{useEffect,useState} from "react";
import WithSubnavigation from "../components/Navbar1";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  VStack,
  Heading
} from "@chakra-ui/react";



function Donate() {

  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://c1d8-121-200-53-172.ngrok.io/requestedProducts/",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
    }).then(res=>res.json()).then(result=>{
        setdata(
            result.map(value=>{
                return value
            })
        )
    })
  }, [])
  

  return (
    <>
      <WithSubnavigation />
      <VStack w={"100%"} pt={"150px"}>
      <Heading mb={"50px"}>Request for assistive devices</Heading>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Requestors for Products. Please help them by donating!</TableCaption>
          <Thead >
            <Tr>
              <Th fontSize={"2xl"}>Product</Th>
              <Th fontSize={"2xl"}>Requester</Th>
              <Th isNumeric fontSize={"2xl"}>Qty</Th>
              <Th isNumeric fontSize={"2xl"}>Price</Th>
              <Th fontSize={"2xl"}>Donate</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(val=>{
                return (
                <Tr id={val.id}>
                <Td>{val.product_name}</Td>
                <Td>{val.user_name}</Td>
                <Td isNumeric>1</Td>
                <Td isNumeric>{val.price}</Td>
                <Td><Button colorScheme={"yellow"} onClick={()=>{
                    fetch(`http://c1d8-121-200-53-172.ngrok.io/requestedProducts/${val.id}/`,{
                        method: "DELETE"
                    }).then(()=>{window.open("https://pages.razorpay.com/pl_K96ez5F1NfG45C/view")})
                }}>Donate Me</Button></Td>
                </Tr>
              )
            })}
            
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
    </>
  );
}

export default Donate;
