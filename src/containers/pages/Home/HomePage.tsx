import * as React from 'react'
import { Component } from 'react'
import { connect, DispatchProp } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import { RootState, UserState, Product } from '../../../definitions'
import { Header, Footer, ProductList } from '../../../components'

import './HomePage.css'

interface HomePageProps<S> extends DispatchProp<S>, RouteComponentProps<S> {
    user: UserState
}

interface HomePageState {
    products: Product[]
}

class HomePage extends Component<HomePageProps<{}>, HomePageState> {
    constructor(props: HomePageProps<{}>) {
        super()

        this.props = props
        this.state = {
            products: []
        }

        this.fetchAllProducts()
    }

    render() {
        return (
            <div className="App">
                <Header title="精选"/>
                <ProductList items={this.state.products}/>
                <Footer/>
            </div>
        )
    }

    fetchAllProducts(): void {
        fetch('https://secondhand.leanapp.cn/products')
            .then(res => res.json())
            .then((products: Product[]) => {
                this.setState({ products })
            })
    }
}

function mapStateToProps(state: RootState<object>) {
  return { }
}

const connectedHomePage = connect(mapStateToProps)(HomePage)

export {
    connectedHomePage as HomePage
}
