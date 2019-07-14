import React from 'react'
import PropTypes from 'prop-types'

import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

class Library extends React.Component {
  
  static defaultProps = {
    books: [
      {"title": "Default Title", "author": "Default Author", "pages": 999}
    ]
  }
  state = { 
    open: true,
    freeBookMark: false,
    hiring: true,
    data: [],
    loading: false
  }

  componentDidMount() {
    console.log('The component is mounted');
    this.setState({loading: true});
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data => data.json())
      .then(data => this.setState({data, loading: false}))
  }

  componentDidUpdate() {
    console.log('The compenent just updated');
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render () {
    console.log(this.state)
    const { books } = this.props
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading 
          ? "loading..."
          : <div>
              {this.state.data.map(product => {
                return (
                  <div key={product.id}>
                    <h3>Library Product of the Week</h3>
                    <h4>{product.name}</h4>
                    <img src={product.image} height={100} alt={product.name} />
                  </div>
                )
                })}
            </div>
        }
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map(
          (book, i) => 
            <Book
              key={i} 
              title={book.title} 
              author={book.author} 
              pages={book.pages} 
              freeBookMark={this.state.freeBookMark} />
        )}
      </div>
  )
}
}

Library.propTypes = {
  books: PropTypes.array
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookMark: PropTypes.bool
}

export default Library