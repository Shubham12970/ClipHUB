import { Box, Button, HStack, Heading, Input, Stack, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from "react-icons/ai";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai"

const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minH={'40'} p='16' color={'white'} w={'100%'}>
            <Stack direction={['column', 'row']}>
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading size='md' textTransform={'uppercase'} textAlign={['center', 'center', 'left']}>
                        Subscribe to get updates !
                    </Heading>
                    <HStack
                        borderBottom={'2px solid white'} py={'2'}
                    >
                        <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
                        <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'} >
                            <AiOutlineSend size={'20'} />
                        </Button>
                    </HStack>
                </VStack>
                <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
                    <Heading  textAlign={'center'}>
                    Clip<span style={{color: '#ca8dfd'}}>HUB</span>
                    </Heading>
                    <Text textAlign={'center'}>©2023 | All Rights Reserved</Text>
                </VStack>
                <VStack w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'} margin={'2'} textAlign={'center'}>
                        Connect With Us
                    </Heading>
                    <HStack >
                        <VStack display={'flex'} flexDirection={'column'}>
                            <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer" ><AiFillLinkedin size={'35'} /></a>
                        </VStack>
                        <VStack display={'flex'} flexDirection={'column'}>
                            <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer" ><AiFillGithub size={'35'} /></a>
                        </VStack>
                        <VStack display={'flex'} flexDirection={'column'}>
                            <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer" ><AiFillInstagram size={'35'} /></a>
                        </VStack>
                    </HStack>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer;
