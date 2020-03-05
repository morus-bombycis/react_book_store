import React, { Component } from 'react'

export default class Book extends Component {
    render() {
        return (
            <>
                <div className="flip-card row justify-content-md-center col-sm-3">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="img" src={this.props.img} />
                        </div>
                        <div className="flip-card-back">
                            <p className="description">{this.props.description}</p>
                            <button className="more-info" onClick={this.props.onClickInfo}>More Info</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
