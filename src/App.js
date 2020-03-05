import React, { Component } from 'react';
import './App.css';
import Bookstore from './components/Bookstore'
import Modal from './components/Modal'

function titleContainsString(title, searchInput) {
  return title.toLowerCase().includes(searchInput.toLowerCase());
}

export default class App extends Component {
  state = {
    books: [],
    search: "",
    currentBook: null
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/zyv02')
      .then(res => { return res.json() })
      .then(result => { this.setState(result) })
      .catch(err => { console.log(err) })
  }

  showModal(book) {
    this.setState({ currentBook: book });
  }

  hideModal() {
    this.setState({ currentBook: null });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.search}
          onChange={ev => this.setState({ search: ev.target.value })}
          placeholder="Search"
        />
        <Bookstore
          books={this.state.books.filter(book =>
            titleContainsString(book.title, this.state.search))}
          onBookInfo={book => this.showModal(book)}
        />
        {
          this.state.currentBook ?
            <Modal image={this.state.currentBook.detail} onClose={() => this.hideModal()} /> :
            null
        }

      </div>
    )
  }
}