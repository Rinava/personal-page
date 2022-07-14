type CardContent = {
  front: string,
  back: {
    info: string,
    emoji?: string,
    image?: string,
  },
};

const cardContent : CardContent[] = [
  {
    front: 'My name',
    back: {
      info: 'Lara Ailen Iris Mateo ',
      emoji: '(っ・ω・)っ',
    },
  },
  {
    front: 'My academic degree soon',
    back: {
      info: 'Information systems engineer at UTN',
      emoji: '◞( ､ᐛ)､＿/',
    },
  },
  {
    front: 'My current Work',
    back: {
      info: 'Front-end developer at Mercado Libre',
      emoji: '─=≡Σ((( つ•̀ω•́)つ',
    },
  },
  {
    front: 'My goal',
    back: {
      info: 'Work every day to be a better person and professional',
      emoji: '(๑˃̵ᴗ˂̵๑)',
    },
  },
  {
    front: 'My hobbies',
    back: {
      info: 'Reading, playing instruments, painting, programming, and playing videogames',
      emoji: '♡(˶╹̆ ▿╹̆˵)و✧♡',
    },
  },
  {
    front: 'My fascination',
    back: {
      info: 'My cats',
      image: 'felipe-darwin-isaac.jpg',
    },
  },
];


export default cardContent;
