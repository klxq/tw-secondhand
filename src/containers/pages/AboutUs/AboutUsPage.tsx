import * as React from 'react'
import { Component } from 'react'
import { connect, DispatchProp } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { push } from 'react-router-redux'

interface AboutUsPageProps extends DispatchProp<void>, RouteComponentProps<void> {

}

class AboutUsPage extends Component<AboutUsPageProps> {
    render() {
        return (
            <div>
                <h2>About Us</h2>
                <p>
                    <button onClick={() => this.props.dispatch(push('/'))}>Go Back to Home</button>
                </p>
            </div>
        )
    }
}

const connnectedAboutUsPage = connect()(AboutUsPage)

export {
    connnectedAboutUsPage as AboutUsPage
}
