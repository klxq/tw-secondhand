import * as React from 'react'
import { Component } from 'react'
import { connect, DispatchProp } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import { RootState, Product } from '../../../definitions'
import { Header, Footer, ProductList } from '../../../components'
import { availableStart } from '../../../modules/product/actions'

import './HomePage.css'

export interface HomePageProps extends DispatchProp<void>, RouteComponentProps<void> {
    products: Product[]
}

export class HomePage extends Component<HomePageProps> {
    constructor(props: HomePageProps) {
        super(props)

        this.props.dispatch(availableStart())
    }

    render() {
        return (
            <div className="App">
                <Header title="精选"/>
                <ProductList items={this.props.products}/>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state: RootState): Partial<HomePageProps> {
  return {
      products: state.product.available
  }
}

export const connectedHomePage = connect(mapStateToProps)(HomePage)
