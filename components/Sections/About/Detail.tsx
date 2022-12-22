import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiVuetify,
  SiTypescript,
  SiLaravel,
  SiReact,
  SiWordpress,
  SiNodeDotJs,
  SiFlutter,
} from 'react-icons/si'
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const currentYear = new Date().getFullYear()

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What i do.
      </Heading>
      <Text variant="description">
        Hello there 👋
                I&apos;m Abdul Latif Munjiat. Currently 25 years old 
                and has more than 2 years of experience in software 
                development. My day-to-day job is working as 
                Frontend Developer using Javascript, specifically 
                VueJS as my main tech stack and also ReactJS for 
                other stack. Able to optimize SEO also use NuxtJS or 
                NextJS on the website.
        Here are few technologies that are cup of my{' '}
        <Tooltip
          label="I only drink tea if I needed too!"
          aria-label="I hate Tea!"
          hasArrow
        >
          <Text as="span" variant="emphasis" textDecorationLine="line-through">
            tea
          </Text>
        </Tooltip>{' '}
        coffee <Icon as={GiCoffeePot} color={emphasis} />.
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiVuetify} color={emphasis} fontSize="2em" />
            VueJS (Vuex, NuxtJS, Ionic Vue)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            ReactJS (Redux, NextJS)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            Typescript
          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodeDotJs} color={emphasis} fontSize="2em" />
            Node (ExpressJS)
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React Native
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiFlutter} color={emphasis} fontSize="2em" />
            Dart (Flutter)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiLaravel} color={emphasis} fontSize="2em" />
            PHP (Laravel)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiWordpress} color={emphasis} fontSize="2em" />
            Wordpress
          </ListItem>
        </List>
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See more tech stack <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
