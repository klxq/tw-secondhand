import * as fetchMock from 'fetch-mock'

import { Product } from '../../definitions'
import { host } from '../utils'

const products: Product[] = [{
    name: 'Victor Savkin',
    price: '35996',
    img: 'https://avatars3.githubusercontent.com/u/35996?v=4&s=460',
    description: 'Victor toys with eclectic programming technologies and obsesses over fonts and keyboard layouts',
    owner: {
        username: 'vsavkin',
        objectId: '35996',
    },
    objectId: '35996',
    createdAt: '',
    updatedAt: '',
}, {
    name: 'Victor Berchet',
    price: '248818',
    img: 'https://avatars3.githubusercontent.com/u/248818?v=4&s=460',
    description: 'The mountains are calling and I must go',
    owner: {
        username: 'vicb',
        objectId: '248818',
    },
    objectId: '248818',
    createdAt: '',
    updatedAt: '',
}, {
    name: 'Tobias Bosch',
    price: '690815',
    img: 'https://avatars1.githubusercontent.com/u/690815?v=4&s=460',
    description: 'Santa Clara / California / US',
    owner: {
        username: 'tbosch',
        objectId: '690815',
    },
    objectId: '690815',
    createdAt: '',
    updatedAt: '',
}, {
    name: 'Igor Minar',
    price: '216296',
    img: 'https://avatars2.githubusercontent.com/u/216296?v=4&s=460',
    description: 'SF Bay Area, CA',
    owner: {
        username: 'IgorMinar',
        objectId: '216296',
    },
    objectId: '216296',
    createdAt: '',
    updatedAt: '',
}, {
    name: 'Pete Bacon Darwin',
    price: '15655',
    img: 'https://avatars3.githubusercontent.com/u/15655?v=4&s=460',
    description: 'London, UK',
    owner: {
        username: 'petebacondarwin',
        objectId: '15655',
    },
    objectId: '15655',
    createdAt: '',
    updatedAt: '',
}, {
    name: 'Miško Hevery',
    price: '111951',
    img: 'https://avatars1.githubusercontent.com/u/111951?v=4&s=460',
    description: 'Father of Angular',
    owner: {
        username: 'mhevery',
        objectId: '111951',
    },
    objectId: '111951',
    createdAt: '',
    updatedAt: '',
}, {
    name: 'Alex Eagle',
    price: '47395',
    img: 'https://avatars3.githubusercontent.com/u/47395?v=4&s=460',
    description: 'SF Bay Area',
    owner: {
        username: 'alexeagle',
        objectId: '47395',
    },
    objectId: '47395',
    createdAt: '',
    updatedAt: '',
}, {
    name: 'George Kalpakas',
    price: '8604205',
    img: 'https://avatars3.githubusercontent.com/u/8604205?v=4&s=460',
    description: 'Athens, Greece',
    owner: {
        username: 'gkalpak',
        objectId: '8604205',
    },
    objectId: '8604205',
    createdAt: '',
    updatedAt: '',
}, {
    name: 'Chuck Jazdzewski',
    price: '372013',
    img: 'https://avatars1.githubusercontent.com/u/372013?v=4&s=460',
    description: 'The mountains are calling and I must go',
    owner: {
        username: 'chuckjaz',
        objectId: '372013',
    },
    objectId: '372013',
    createdAt: '',
    updatedAt: '',
}, {
    name: 'Timothy Blasi',
    price: '613610',
    img: 'https://avatars3.githubusercontent.com/u/613610?v=4&s=460',
    description: 'Seattle, WA',
    owner: {
        username: 'kegluneq',
        objectId: '613610',
    },
    objectId: '613610',
    createdAt: '',
    updatedAt: '',
}]

fetchMock.get(`${host}/products`, JSON.stringify(products))
