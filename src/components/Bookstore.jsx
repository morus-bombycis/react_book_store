import React, { Component } from 'react'
import Book from './Book'

export default class Bookstore extends Component {
    render() {
        return (
            <div className="books row">
                {this.props.books.map(book => (
                    // book.cover
                    // book.description
                    // onClickInfo??
                    <Book
                        key={book.title}
                        img={book.cover}
                        description={book.description}
                        onClickInfo={() => this.props.onBookInfo(book)}
                    />
                ))}
            </div>
        )
    }
}
