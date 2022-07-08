import {
  ComputerIcon,
  HappyFaceIcon,
  ResumeIcon,
  HomeIcon,
} from '../commons/Icons';
const urls = [
  {
    name: 'Home',
    url: '/',
    icon: <HomeIcon />,
    title: 'Go to home',
  },
  {
    name: 'Projects',
    url: '/projects',
    icon: <ComputerIcon />,
    title: 'Go to proyects',
  },
  {
    name: 'Resume',
    url: '/resume',
    icon: <ResumeIcon />,
    title: 'Go to resume',
  },
  {
    name: 'About me',
    url: '/about-me',
    icon: <HappyFaceIcon />,
    title: 'Go to about me',
  },
];

export default urls;
