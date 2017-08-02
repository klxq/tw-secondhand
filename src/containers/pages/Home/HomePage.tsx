import * as React from 'react'
import { Component } from 'react'
import { connect, DispatchProp } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import { RootState, UserState, Product } from '../../../definitions'
import { Header, Footer, ProductList } from '../../../components'
import { available } from '../../../apis/product'

import './HomePage.css'

interface HomePageProps extends DispatchProp<void>, RouteComponentProps<void> {
    user: UserState
}

interface HomePageState {
    products: Product[]
}

class HomePage extends Component<HomePageProps, HomePageState> {
    constructor(props: HomePageProps) {
        super(props)

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

    async fetchAllProducts(): Promise<void> {
        this.setState({
            products: await available()
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
