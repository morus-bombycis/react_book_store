import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div className="modal">
                <button className="close" onClick={this.props.onClose}>X</button>
                <img className="modal-content" src={this.props.image} />
            </div>
        )
    }
}
