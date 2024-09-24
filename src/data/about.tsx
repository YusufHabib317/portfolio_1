import dynamic from 'next/dynamic';

const JavascriptIcon = dynamic(() => import('@/assets/icons/square-js.svg'));
const HtmlIcon = dynamic(() => import('@/assets/icons/html5.svg'));
const CssIcon = dynamic(() => import('@/assets/icons/css3.svg'));
const ReactIcon = dynamic(() => import('@/assets/icons/react.svg'));
const ChromeIcon = dynamic(() => import('@/assets/icons/chrome.svg'));
const GithubIcon = dynamic(() => import('@/assets/icons/github.svg'));

const codeLang = [
  {
    id: 0,
    name: 'Javascript',
    iconType: JavascriptIcon,
  },
  {
    id: 1,
    name: 'Html 5',
    iconType: HtmlIcon,
  },
  {
    id: 2,
    name: 'Css 3',
    iconType: CssIcon,
  },
  {
    id: 3,
    name: 'React Js',
    iconType: ReactIcon,
  },
  {
    id: 4,
    name: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    id: 5,
    name: 'Github',
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '🤳',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Music',
    emoji: '🪗',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Fitness',
    emoji: '💪',
    left: '70%',
    top: '45%',
  },
];

export { codeLang, hobbies };
