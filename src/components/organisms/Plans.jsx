import React from 'react'
import { Box, SimpleGrid, Heading, Text, Flex, List, ListIcon, ListItem } from '@chakra-ui/layout'
import CallNowPhoneBt from '../atoms/CallNowPhoneBt'
import { CheckIcon } from '@chakra-ui/icons'

const Plans = () => {
    return (
<>
<Box align="center" bgColor="#F1F1F1" p={{base:"10", md:"0 10 "}}>
    <Heading mb="10">Smithville plans and deals</Heading>

  <SimpleGrid columns={{base:"1", md:"3"}} spacing={10} maxW="1250px">
    <Flex rounded="md" boxShadow="2xl" bgColor="#fff" align="center" direction="column" >
      <Box bgColor="black" color="#fff" w="100%" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">Internet + Voice </Heading>

        <Flex align="start" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" mt="-25px">72</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >00</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    1 Gbps Upload & Download
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Free Nationwide Calling 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    No Contract 
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>

    <Flex rounded="md" bgColor="#fff" boxShadow="2xl" p="5" align="center" direction="column" >
      <Heading pb="10px" as="h3" fontSize="2xl">Advance Internet</Heading>

      <Flex align="start" direction="row" fontWeight="700">
        <Box fontSize="29px" color="#F68D1F" mt="7px" >$</Box>
        <Box fontSize="94px" color="#F68D1F" mt="-25px">64</Box>
        <Box direction="column">
            <Box fontSize="43px" textAlign="start" mb="-18px" color="#F68D1F">99</Box><Box fontSize="21px" textAlign="start" >/mo.</Box>
        </Box>
      </Flex>
      <Text pb="5">
      EarthLink offers a variety of plans to help keep you connected on one of America’s largest and fastest networks.
      </Text>
      <CallNowPhoneBt/>
    </Flex>

    <Flex rounded="md" bgColor="#fff" boxShadow="2xl" p="5" align="center" direction="column" >
      <Heading pb="10px" as="h3" fontSize="2xl">Advance Internet</Heading>

      <Flex align="start" direction="row" fontWeight="700">
        <Box fontSize="29px" color="#F68D1F" mt="7px" >$</Box>
        <Box fontSize="94px" color="#F68D1F" mt="-25px">64</Box>
        <Box direction="column">
            <Box fontSize="43px" textAlign="start" mb="-18px" color="#F68D1F">99</Box><Box fontSize="21px" textAlign="start" >/mo.</Box>
        </Box>
      </Flex>
      <Text pb="5">
      EarthLink offers a variety of plans to help keep you connected on one of America’s largest and fastest networks.
      </Text>
      <CallNowPhoneBt/>
    </Flex>
  </SimpleGrid> 

</Box>
</>
    )}



export default Plans