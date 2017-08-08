import * as React from 'react'
import { Component, ReactElement } from 'react'
import ReactModal from 'react-modal'

const modalStyle = {
    overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 },
    content: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, border: 0, borderRadius: 0, padding: 0 },
}

export interface ModalProps {
    children: ReactElement<void>[]
}

export class Modal extends Component {
    constructor(props: ModalProps) {
        super(props)
    }

    render() {
        return (
            <ReactModal isOpen={true} contentLabel="Modal" style={modalStyle}>
                {this.props.children}
            </ReactModal>
        )
    }
}
