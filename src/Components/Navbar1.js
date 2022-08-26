import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    requiredChakraThemeKeys
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

  import { useState, useEffect } from "react";

  import { useNavigate } from 'react-router-dom';
  
  export default function WithSubnavigation() {
    const navigate = useNavigate();
    const { isOpen, onToggle } = useDisclosure();

    const navItems =
    localStorage.getItem("user") == "user"
        ? [
          {
            label: "Home",
            href: "/",
          },
            {
              label: "Volunteer",
              href: "/volunteer",
            },
            {
              label: "Government Schemes",
              href: "/scheme",
            },
            {
              label: "Assistive Aids",
              href: "/aid",
            },
          ]
        : localStorage.getItem("user")=="volunteer"?[
          {
            label: "Home",
            href: "/",
          },
            {
              label: "Profile",
              href: "/profile",
            },
            {
              label: "Contact us",
              href: "/contact",
            },
          ]:[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Volunteer",
              href: "/volunteer",
            },
            {
              label: "Government Schemes",
              href: "/scheme",
            },
            {
              label: "Assistive Aids",
              href: "/aid",
            },
          ];
  
    return (
      <Box left={0}> 
        <Flex
          bg={useColorModeValue('gray.100', 'white')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'65px'}
          width={'100%'}
          z-index={9999}
          py={{ base: 2 }}
          px={{ base: 4 }}
          position={'fixed'}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} ml={10}>
            <img src={require("./logo1.png")} width={34} height={34} onClick={()=>{navigate("/")}}/>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10} mt={4}>
              <DesktopNav props={navItems}/>
            </Flex>
          </Flex>
          {/* {localStorage.getItem("user")?<Button onClick={()=>{
            localStorage.clear()
            navigate("/")
          }}>
          Logout
          </Button>:null} */}
        </Flex>
        
        <Collapse in={isOpen} animateOpacity>
          <MobileNav props={navItems}/>
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = ({props}) => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    return (
      <Stack direction={'row'} spacing={4}>
        {props.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'md'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = (props) => {
    return (
      <Link
        href={"google.com"}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {props.label}
            </Text>
            <Text fontSize={'sm'}>{props.subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = ({props}) => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {props.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = (props) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={props.children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={"google.com" ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {props.label}
          </Text>
          {props.children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {props.children &&
              props.children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
 
  
  