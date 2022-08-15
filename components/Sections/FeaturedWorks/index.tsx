import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  Button,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger, simpleOpacity } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)
const MotionButton = motion(Button)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out some of the works I made at freelancing, company projects and
        even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Invesnow.id"
            src="/works/invesnow.webp"
            description="Invesnow is a mutual fund investment platform, where everyone can invest by buying, selling, diverting their mutual fund products. Can see portfolios with statistics and returns within a certain period of time for each product"
            tech="Vue.js, Vuex, Nuxt.Js, JEST, Webpack, SASS, Tailwind"
            height={{ base: '130px', md: '325px', '2xl': '300px' }}
            ctaUrl="https://invesnow.id"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Pidi 4.0 Kementrian Perindustrian Indonesia"
            description="PIDI 4.0 is one of the National Priority Programs for Making Indonesia 4.0. In this website there are many features such as events, expos, training, rental facilities and others."
            tech="Laravel, Bootstrap, JQuery"
            src="/works/pidi.webp"
            height={{ base: '130px', md: '325px', '2xl': '300px' }}
            ctaUrl="https://pidi4.kemenperin.go.id/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Good Games Guild Dashboard"
            description="Good Games Guild Dashboard is a hub for several nft games. On this website coaches and scholars can share the results of their games. There is also web3 technology for converting IDR to GGG or to SLP tokens"
            tech="ReactJS, Redux, Socket.io, Web3, ChartJS, Google Auth, Firebase, Bootstrap"
            src="/works/ggg.webp"
            height={{ base: '130px', md: '325px', '2xl': '300px' }}
            ctaUrl="http://dashboard.goodgamesguild.com"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="Game Edukasi Pemahaman Belajar Anak"
            description="An android-based quiz application for elementary school children with Indonesian, English and math subjects"
            tech="Java, SQLite"
            src="/works/game-edukasi.webp"
            height={{ base: '130px', md: '325px', '2xl': '300px' }}
            ctaUrl="https://play.google.com/store/apps/details?id=com.androidproject.GameEdukasiPemahamanAnak"
            isMobile={isMobile}
          />
        </MotionGridItem>

      </MotionGrid>
          <MotionButton
            size="lg"
            variant="outline"
            borderWidth="1px"
            borderRadius="0"
            fontWeight="normal"
            fontSize="sm"
            width="100%"
            variants={simpleOpacity}
            as={'a'}
            href="https://github.com/abdul23lm"
            target="_blank"
          >
            Find other project
        </MotionButton>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
