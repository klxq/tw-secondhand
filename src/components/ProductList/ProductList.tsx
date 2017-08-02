import * as React from 'react'
import { Component } from 'react'

import { Product } from '../../definitions'

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
            <li key={i}>
              <img src={item.img} />
              <div>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <p>{item.owner.username}</p>
              </div>
            </li>
          ))
        }
        </ul>
      </div>
    )
  }
}
