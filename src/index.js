import React from 'react'
import ReactDOM from 'react-dom'

import Library from './Library'

let bookList = [
  { "title": "Jungle Book", "author": "Kipling"},
  { "title": "Peter Pan", "pages": 230},
  { "title": "Tom Sawyer", "author": "Mark Twain", "pages": 500},
]










ReactDOM.render(
  <Library books={bookList} />,   
  document.getElementById('root')
)


// class FavoriteColorForm extends React.Component {
//   state = { value: ''}
  
//   newColor = e => {
//     this.setState({value: e.target.value})
//   }
  
//   submit = e => {
//     console.log(`New Color: ${this.state.value}`)
//     e.preventDefault()
//   }
  
//   render () {
//     return (
//       <form onSubmit={this.submit}>
//         <label>Favorite Color:</label>
//         <input 
//           type="color" 
//           onChange={this.newColor} />
//         <button>Submit</button>
//       </form>
//     )
//   }
// }

// ReactDOM.render(
//   <FavoriteColorForm />,   
//   document.getElementById('root')
// )

