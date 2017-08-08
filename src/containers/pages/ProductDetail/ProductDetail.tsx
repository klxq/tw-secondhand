import * as React from 'react'
import { Component } from 'react'
import { connect, DispatchProp } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import { RootState, Product, UserState } from '../../../definitions'
import { Modal, Header, Button } from '../../../components'
import { purchaseStart } from '../../../modules/product/actions'

import * as pencil from '../../../fixtures/Pencil-Yellow-user.ico'
import './ProductDetail.css'

export interface RouterParams {
    id: string
}

export interface ProductDetailProps extends DispatchProp<void>, RouteComponentProps<RouterParams> {
    products: Product[]
    user: UserState
}

export class ProductDetail extends Component<ProductDetailProps> {
    constructor(props: ProductDetailProps) {
        super(props)
    }

    purchase(): void {
        if (!this.props.user.sessionToken) {
            location.search = '?action=login'
            return
        }

        this.props.dispatch(purchaseStart(this.props.match.params.id))
    }

    render() {
        const id = this.props.match.params.id
        const product = this.props.products.find(x => x.objectId === id)

        const body = product ? (
            <div className="App-product-detail">
                <img src={product.img}/>
                <div className="brief">
                    <div className="left">
                        <h3>{product.name}</h3>
                    </div>
                    <div className="right">
                        <p className="price">¥ {product.price}</p>
                        <div className="owner">
                            <img src={pencil}/>
                            <p>{product.owner.username}</p>
                        </div>
                    </div>
                </div>
                <div className="description">
                    {product.description}
                </div>
                <Button content="立即购买" onClick={() => this.purchase()}/>
            </div>
        ) : (
            <p>Loading</p>
        )

        return (
            <Modal>
                <Header title="商品详情" back={true}/>
                {body}
            </Modal>
        )
    }
}

function mapStateToProps(state: RootState): Partial<ProductDetailProps> {
  return {
      products: state.product.available,
      user: state.user,
  }
}

export const connectedProductDetail = connect(mapStateToProps)(ProductDetail)
