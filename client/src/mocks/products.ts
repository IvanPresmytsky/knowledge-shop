import { v4 as uuidv4 } from 'uuid';

export const productsMock = [
  {
    _id: uuidv4(),
    name: 'Redux course',
    description:
      'A good course to get aquatinted with the best state management library',
    overallRating: 0,
    thumbnailImage:
      'https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2021/06/unnamed-file-1.png',
    reviews: [
      {
        reviewerName: 'Dan Abramov',
        reviewText: 'Give me my money back!!! The worst course ever!',
        overallRating: 0,
      },
    ],
  },
  {
    _id: uuidv4(),
    name: 'React course',
    description: 'Awesome course for beginners. Try for free.',
    thumbnailImage:
      'https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.png',
    overallRating: 4.6,
    reviews: [],
  },
  {
    _id: uuidv4(),
    name: 'NodeJS course',
    description: 'NodeJS deep dive',
    thumbnailImage: 'https://logowik.com/content/uploads/images/nodejs.jpg',
    overallRating: 3,
    reviews: [
      {
        reviewerName: 'Leonardo D',
        reviewText: 'We need to go deeper',
        overallRating: 3,
      },
    ],
  },
  {
    _id: uuidv4(),
    name: 'MaxProfit algorithm',
    description: '1001 ways to solve MaxProfit task',
    overallRating: 5,
    thumbnailImage:
      'https://www.pngitem.com/pimgs/m/211-2110657_confused-person-my-hero-academia-ship-memes-hd.png',
    reviews: [
      {
        reviewerName: 'Ivan',
        reviewText:
          'I definitely like it. After passing it, finally I solve it!',
        overallRating: 5,
      },
    ],
  },
];
