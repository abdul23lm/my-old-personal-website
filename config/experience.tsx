import { Link } from '@chakra-ui/react'

export type Company = 'Invesnow' | 'Decodev' | 'Lppm'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Invesnow: {
    name: 'Invesnow',
    longName: 'PT Invesnow Principal Optima',
    subDetail: 'Mutual Fund Investment Platform',
    url: 'https://www.invesnow.id',
    position: 'Frontend Developer',
    duration: 'Nov 2020 - Present',
    logo: {
      light: '/worked_at_logos/invesnow/invesnow_logo_black.png',
      dark: '/worked_at_logos/invesnow/invesnow_logo.png',
    },
    roles: [
      <>
        Building and maintaining Invesnow's Frontend Web Platform.
      </>,
      <>
        Optimize SEO using nuxtjs on Invesnow web
      </>,
      <>
        Working with product design team, to have seamless experience on Invesnow web
      </>,
      <>
        Collaborating with other division to deliver features on time
      </>,
      <>
        Sharing knowledge with peers
      </>,
    ],
  },
  Decodev: {
    name: 'Decodev',
    longName: 'Decodev Indonesia',
    subDetail: 'Decodev Indonesia',
    url: 'https://decodev.id',
    position: 'Founder, Software Developer',
    duration: 'Apr 2020 - Present',
    logo: {
      light: '/worked_at_logos/decodev/decodev-logo-black.png',
      dark: '/worked_at_logos/decodev/decodev-logo.png',
    },
    roles: [
      <>
        Decodev, formerly called LM Creative Project, is your Marketing partner to help you develop the best solution for your communication needs. The significant development of digital technology in this modern era has made things more complex and more detailed. Algorithm system that is always changing, the emergence of many competitors, to the changing market trends. We are here to provide solutions to help businesses achieve their goals, Increase Sales, Increase Traffic & Engagement and transform small scale businesses, up to large scale. With various services such as Digital Service, Branding Identity.
      </>,
    ],
  },
  Lppm: {
    name: 'LPPM UNSIKA',
    longName: 'Lembaga Penelitian dan Pengabdian Kepada Masyarakat Universitas Singaperbangsa Karawang',
    subDetail: 'Lembaga Penelitian dan Pengabdian Kepada Masyarakat Universitas Singaperbangsa Karawang',
    url: 'https://lppm.unsika.ac.id',
    position: 'Full Stack Developer',
    duration: 'Jun 2020 - Oct 2020',
    logo: {
      light: '/worked_at_logos/lppm/lppm-logo.png',
      dark: '/worked_at_logos/lppm/lppm-logo.png',
    },
    roles: [
      <>
      Building and maintain LPPM UNSIKA web platform. Including UI/UX design.   
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Invesnow,
  Experiences.Decodev,
  Experiences.Lppm,
]
