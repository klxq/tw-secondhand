import * as React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

import { Product } from '../../definitions'

import * as pencil from '../../fixtures/Pencil-Yellow-user.ico'
import './ProductList.css'

export interface ProductListProps {
    items: Product[]
}

export class ProductList extends Component<ProductListProps> {
    render() {
        return (
        <div className="App-product-list">
            <ul>
            {
            this.props.items.map((item, i) => (
                <li key={i} className="App-product-list-item">
                    <Link to={`./products/${item.objectId}`}>
                        <div className="left">
                            <img src={item.img} />
                        </div>
                        <div className="right">
                            <h4 className="name">{item.name}</h4>
                            <p className="price">¥ {item.price}</p>
                            <div className="owner">
                                <img src={pencil}/>
                                <p>{item.owner.username}</p>
                            </div>
                            <p className="status"/>
                        </div>
                    </Link>
                </li>
                ))
            }
            </ul>
        </div>
        )
    }
}
