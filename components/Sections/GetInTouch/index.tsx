import { memo } from 'react'
import { Heading, Text, Stack, Link, Icon, Box } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RiHeartPulseFill, RiCopyleftLine, RiGithubFill } from 'react-icons/ri'
const rimuruVariant: Variants = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      delay: 1.2,
      duration: 0.5,
      repeat: 2,
      ease: 'easeInOut',
    },
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      delay: 1.8,
      duration: 0.5,
      repeat: 3,
      ease: 'easeInOut',
    },
  },
}

const GetInTouch = () => {
  const [ref, inView] = useInView()
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      as="footer"
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Say hi!{' '}
        <Text as="span" fontSize="2xl" variant="emphasis">
          <motion.div
            style={{ display: 'inline-block' }}
            variants={rimuruVariant}
            ref={ref}
            animate={inView ? ['shake', 'jump'] : false}
          >
            (⁀ᗢ⁀)
          </motion.div>
        </Text>
      </Heading>
      <Text variant="description">
        Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at{' '}
        <Link
          href="mailto:abdul23lm@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          abdul23lm@gmail.com
        </Link>
        .
      </Text>

      <Box
        spacing={0.5}
        textAlign="center"
        fontFamily="monospace"
        paddingTop={{ base: 10, lg: 20, xl: 20 }}
        paddingBottom={{ base: 5, lg: 18 }}
      >
        <Link
          variant="description"
          textDecoration="none"
          rel="noreferrer"
          href="https://github.com/abdul23lm"
          target="_blank"
          _focus={{ boxShadow: 'none' }}
        >
          <Text as="span">
            <Icon as={RiGithubFill} h={6} w={6} /> <br />
            Designed and Made with <Icon as={RiHeartPulseFill} /> <br />
            Abdul Latif Munjiat <Icon as={RiCopyleftLine} /> 2022
          </Text>
        </Link>
      </Box>
    </Stack>
  )
}

export default memo(GetInTouch)
