import {
  ComputerIcon,
  HappyFaceIcon,
  ContactIcon,
  ResumeIcon,
  HomeIcon,
} from '../../../commons/Icons';
const headerUrls = [
  {
    name: 'Home',
    url: '/',
    icon: <HomeIcon />,
    title: 'Go to home',
  },
  // {
  //   name: 'Projects',
  //   url: '/projects',
  //   icon: <ComputerIcon />,
  //   title: 'Go to proyects',
  // },

  // {
  //   name: 'About me',
  //   url: '/about-me',
  //   icon: <HappyFaceIcon />,
  //   title: 'Go to about me',
  // },
  {
    name: 'Resume',
    url: '/resume',
    icon: <ResumeIcon />,
    title: 'Resume',
  },
  {
    name: 'Contact me',
    url: '/contact',
    icon: <ContactIcon />,
    title: 'Contact me',
  },
];

export default headerUrls;
