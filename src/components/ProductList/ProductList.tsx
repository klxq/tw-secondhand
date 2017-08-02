import * as React from 'react'
import { Component } from 'react'

import { Product } from '../../definitions'

import './ProductList.css'

export interface ProductListProps {
  items: Product[]
}

export class ProductList extends Component<ProductListProps> {
  props: ProductListProps

  constructor(props: ProductListProps) {
    super()

    this.props = props
  }

  render() {
    return (
      <div className="App-product-list">
        <ul>
        {
          this.props.items.map((item, i) => (
            <li key={i} className="App-product-list-item">
              <div className="left">
                <img src={item.img} />
              </div>
              <div className="right">
                <h4 className="name">{item.name}</h4>
                <p className="price">¥ {item.price}</p>
                <p className="description">{item.owner.username}</p>
                <p className="status"/>
              </div>
            </li>
          ))
        }
        </ul>
      </div>
    )
  }
}
