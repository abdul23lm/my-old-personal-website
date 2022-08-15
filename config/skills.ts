import { IconType } from 'react-icons'
import {
  SiDotNet,
  SiJavascript,
  SiKotlin,
  SiJava,
  SiTypescript,
  SiNodeDotJs,
  SiGraphql,
  SiApollographql,
  SiPhp,
  SiReact,
  SiNextDotJs,
  SiRedux,
  SiStyledComponents,
  SiGhost,
  SiVueDotJs,
  SiDocker,
  SiGooglecloud,
  SiCpanel,
  SiRancher,
  SiGitlab,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSocketDotIo,
  SiMaterialUi,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiFigma,
  SiMicrosoft,
  SiElectron,
  SiLaravel,
  SiTailwindcss,
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiTrello,
  SiNotion
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaSourcetree } from 'react-icons/fa'
import { IoLogoPwa } from 'react-icons/io5'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'uiTools'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    {
      name: 'PHP (Laravel, CI)',
      icon: SiPhp,
    },
    {
      name: 'Node (ExpressJS)',
      icon: SiNodeDotJs,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
  ],
  frontend: [
    {
      name: 'Vue (Vuex, NuxtJs)',
      icon: SiVueDotJs,
    },
    {
      name: 'React (Redux, NextJs)',
      icon: SiReact,
    },
    {
      name: 'Laravel (Blade)',
      icon: SiLaravel,
    },
    {
      name: 'Javascript (ES6 +)',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
  ],
  database: [
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'Redis',
      icon: SiRedis,
    },
    {
      name: 'SocketIO',
      icon: SiSocketDotIo,
    },
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'GCP',
      icon: SiGooglecloud,
    },
    {
      name: 'CPanel',
      icon: SiCpanel,
    },
    {
      name: 'GitlabCICD',
      icon: SiGitlab,
    },
  ],
  'ui frameworks': [
    {
      name: 'Styled Components',
      icon: SiStyledComponents,
    },
    {
      name: 'AntDesign',
      icon: AiOutlineAntDesign,
    },
    {
      name: 'MaterialUI',
      icon: SiMaterialUi,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
    {
      name: 'ChakraUI',
      icon: SiTailwindcss,
    },
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },
    {
      name: 'Trello',
      icon: SiTrello,
    },
    {
      name: 'Noiton',
      icon: SiNotion,
    },
  ],
  mobile: [
    {
      name: 'React Native',
      icon: SiReact,
    },
    {
      name: 'Web PWA',
      icon: IoLogoPwa,
    },
    {
      name: 'Java',
      icon: SiJava,
    },
    {
      name: 'Kotlin',
      icon: SiKotlin,
    },
  ],
  uiTools: [
    {
      name: 'Figma',
      icon: SiFigma,
    },
    {
      name: 'Adobe XD',
      icon: SiAdobexd,
    },
    {
      name: 'Adobe Illustrator',
      icon: SiAdobeillustrator,
    },
    {
      name: 'Adobe Photoshop',
      icon: SiAdobephotoshop,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
