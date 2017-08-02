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
    }
}, {
    name: 'Victor Berchet',
    price: '248818',
    img: 'https://avatars3.githubusercontent.com/u/248818?v=4&s=460',
    description: 'The mountains are calling and I must go',
    owner: {
        username: 'vicb',
        objectId: '248818',
    }
}, {
    name: 'Tobias Bosch',
    price: '690815',
    img: 'https://avatars1.githubusercontent.com/u/690815?v=4&s=460',
    description: 'Santa Clara / California / US',
    owner: {
        username: 'tbosch',
        objectId: '690815',
    }
}, {
    name: 'Igor Minar',
    price: '216296',
    img: 'https://avatars2.githubusercontent.com/u/216296?v=4&s=460',
    description: 'SF Bay Area, CA',
    owner: {
        username: 'IgorMinar',
        objectId: '216296',
    }
}, {
    name: 'Pete Bacon Darwin',
    price: '15655',
    img: 'https://avatars3.githubusercontent.com/u/15655?v=4&s=460',
    description: 'London, UK',
    owner: {
        username: 'petebacondarwin',
        objectId: '15655',
    }
}, {
    name: 'Miško Hevery',
    price: '111951',
    img: 'https://avatars1.githubusercontent.com/u/111951?v=4&s=460',
    description: 'Father of Angular',
    owner: {
        username: 'mhevery',
        objectId: '111951',
    }
}, {
    name: 'Alex Eagle',
    price: '47395',
    img: 'https://avatars3.githubusercontent.com/u/47395?v=4&s=460',
    description: 'SF Bay Area',
    owner: {
        username: 'alexeagle',
        objectId: '47395',
    }
}, {
    name: 'George Kalpakas',
    price: '8604205',
    img: 'https://avatars3.githubusercontent.com/u/8604205?v=4&s=460',
    description: 'Athens, Greece',
    owner: {
        username: 'gkalpak',
        objectId: '8604205',
    }
}, {
    name: 'Chuck Jazdzewski',
    price: '372013',
    img: 'https://avatars1.githubusercontent.com/u/372013?v=4&s=460',
    description: 'The mountains are calling and I must go',
    owner: {
        username: 'chuckjaz',
        objectId: '372013',
    }
}, {
    name: 'Timothy Blasi',
    price: '613610',
    img: 'https://avatars3.githubusercontent.com/u/613610?v=4&s=460',
    description: 'Seattle, WA',
    owner: {
        username: 'kegluneq',
        objectId: '613610',
    }
}]

fetchMock.get(`${host}/products`, JSON.stringify(products))
