import React from 'react'
import { Flex, Image, Heading, Text, Button } from '@chakra-ui/react'
const Banner = () => {
  return (
    <Flex width="100%" justifyContent="space-around" alignItems="center"  bgGradient='linear(to-l, #fff,#F6DFE5 )'>
        <Flex flexDirection="column" alignItems="center" justifyContent="center" minWidth="300px" maxWidth="500px" gap="1em">
            <Heading as='h2'>Minimal Menz Style</Heading>
            <Text alignContent="center"> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Text>
            <Button backgroundColor="#180C07" color="#fff" borderRadius='0'>SHOP NOW</Button>
        </Flex>
        <Image 
        boxSize='500px'
        objectFit='cover'
        src='https://hobi.com/wp-content/uploads/revslider/dream-theme-the7-fancy-title-business/rev-person-img.png' alt='men style'></Image>
    </Flex>
  )
}

export default Banner