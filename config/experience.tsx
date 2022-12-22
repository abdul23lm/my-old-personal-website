import { Link } from '@chakra-ui/react'

export type Company = 'Capio' | 'Invesnow' | 'Inarray' | 'Lppm' | 'Decodev' | 'Osin'

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
    Capio: {
    name: 'Freelance',
    longName: 'PT Capio Teknologi Indonesia',
    subDetail: 'PT Capio Teknologi Indonesia',
    url: 'https://capioteknologi.co.id/',
    position: 'Frontend Developer',
    duration: 'Jun 2020 - Present',
    logo: {
      light: '/worked_at_logos/capio/capio-logo.png',
      dark: '/worked_at_logos/capio/capio-logo.png',
    },
    roles: [
      <>
        Building and maintaining supplier chain financing (SCF) web application
      </>,
      <>
        Building a dashboard to process principal and borrower registration, apply for loans, payments and reporting
      </>,
    ],
  },
  Invesnow: {
    name: 'Full Time',
    longName: 'PT Invesnow Principal Optima',
    subDetail: 'PT Invesnow Principal Optima',
    url: 'https://www.invesnow.id',
    position: 'Frontend Developer',
    duration: 'Nov 2020 - Nov 2022',
    logo: {
      light: '/worked_at_logos/invesnow/invesnow_logo_black.png',
      dark: '/worked_at_logos/invesnow/invesnow_logo.png',
    },
    roles: [
      <>
        Building and maintaining mutual fund web and mobile application
      </>,
      <>
        Building a dashboard to process mutual fund registration and transactions
      </>,
      <>
        Optimize Search Engine Optimization (SEO) 
      </>,
      <>
        Working with product design team, to have seamless experience on website
      </>,
      <>
        Collaborating with other division to deliver features on time
      </>,
    ],
  },
  Inarray: {
    name: 'Freelance',
    longName: 'PT Inarray Solusi Bersama',
    subDetail: 'PT Inarray Solusi Bersama',
    url: 'https://inarray.id',
    position: 'Frontend Developer',
    duration: 'Nov 2020 - Nov 2022',
    logo: {
      light: '/worked_at_logos/inarray/inarray-logo.png',
      dark: '/worked_at_logos/inarray/inarray-logo.png',
    },
    roles: [
      <>
        Building learning management system (LMS) web application
      </>,
      <>
        Building NFT gaming hub dashboard, integrated with web3 and coin wallet
      </>,
      <>
        Building several company profile web applications
      </>,
    ],
  },
    Lppm: {
    name: 'Full Time',
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
      <>
      Building several micro sites web applications  
      </>,
    ],
  },
  Decodev: {
    name: 'Freelance',
    longName: 'Decodev Indonesia',
    subDetail: 'Decodev Indonesia',
    url: 'https://decodev.id',
    position: 'Founder, Software Developer',
    duration: 'Apr 2019 - Jun 2020',
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
    Osin: {
    name: 'Part Time',
    longName: 'PT Otscon Safety Indonesia',
    subDetail: 'PT Otscon Safety Indonesia',
    url: 'https://osin.co.id/',
    position: 'Full Stack Developer',
    duration: 'Oct 2018 - Oct 2019',
    logo: {
      light: '/worked_at_logos/osin/osin-logo-black.png',
      dark: '/worked_at_logos/osin/osin-logo.png',
    },
    roles: [
      <>
      Starting from an internship, and finally can be contracted for 1 year as a Web Developer at PT. Otscon Safety Indonesia.
      </>,
    ],
  },

}

export const ExperiencesList = [
  Experiences.Capio,
  Experiences.Invesnow,
  Experiences.Inarray,
  Experiences.Lppm,
  Experiences.Decodev,
  Experiences.Osin,
]
