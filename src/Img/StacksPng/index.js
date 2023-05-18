import cssPng from '../StacksPng/frontEndPng/CSS.png';
import htmlPng from '../StacksPng/frontEndPng/html.png';
import tailwindPng from '../StacksPng/frontEndPng/Tailwind.png';
import reactPng from '../StacksPng/frontEndPng/react.png';
import jestPng from '../StacksPng/frontEndPng/jest.png';

import javaScriptPng from '../StacksPng/linguagens/JavaScript.png';
import pythonPng from '../StacksPng/linguagens/Python.png';
import expressPng from '../StacksPng/backEndPng/express.png';
import nodePng from '../StacksPng/backEndPng/nodejs.png';
import sinonPng from '../StacksPng/backEndPng/sinon.png';
import dockerPng from '../StacksPng/backEndPng/Docker.png';
import mySQLPng from '../StacksPng/backEndPng/MySQL.png';
import mongoDBPng from '../StacksPng/backEndPng/mongoDB.png';
import sequelizePng from '../StacksPng/backEndPng/sequelize.png';
import chaiPng from '../StacksPng/backEndPng/chai.png';
import mochaPng from '../StacksPng/backEndPng/mocha .png';

const backEndPngs = [
  {
    name: 'Node',
    img: nodePng,
    url: 'https://nodejs.org/pt-br',
  },
  {
    name: 'Docker',
    img: dockerPng,
    url: 'https://www.docker.com/',
  },
  {
    name: 'MySQL',
    img: mySQLPng,
    url: 'https://www.mysql.com/',
  },
  {
    name: 'MongoDb',
    img: mongoDBPng,
    url: 'https://www.mongodb.com/',
  },
  {
    name: 'Express.js',
    img: expressPng,
    url: 'https://expressjs.com/pt-br/',
  },
  {
    name: 'Sequelize',
    img: sequelizePng,
    url: 'https://sequelize.org/',
  },
  {
    name: 'Mocha.js',
    img: mochaPng,
    url: 'https://mochajs.org/',
  },
  {
    name: 'Chai.js',
    img: chaiPng,
    url: 'https://www.chaijs.com/',
  },
  {
    name: 'Sinon.js',
    img: sinonPng,
    url: 'https://sinonjs.org/',
  },
];

const frontEndPngs = [
  {
    name: 'HTML',
    img: htmlPng,
    url: 'https://devdocs.io/html/',
  },
  {
    name: 'CSS',
    img: cssPng,
    url: 'https://devdocs.io/css/',
  },
  {
    name: 'TailWindCSS',
    img: tailwindPng,
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'React.js',
    img: reactPng,
    url: 'https://react.dev/',
  },
  {
    name: 'Jest.js',
    img: jestPng,
    url: 'https://jestjs.io/pt-BR/',
  },
];

const linguagensPng = [
  {
    name: 'JavaScript',
    img: javaScriptPng,
  },
  {
    name: 'Python',
    img: pythonPng,
  }
];

export {
  linguagensPng,
  frontEndPngs,
  backEndPngs
};