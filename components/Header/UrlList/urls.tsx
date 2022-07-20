import {
  ComputerIcon,
  HappyFaceIcon,
  ResumeIcon,
  HomeIcon,
} from './../../commons/Icons';
const urls = [
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
    name: 'Contact me',
    url: '/contact',
    icon: <ResumeIcon />,
    title: 'Contact me',
  },
];

export default urls;
