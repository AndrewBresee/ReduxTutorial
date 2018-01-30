// Create a new component
import React from 'react'
import ReactDom from 'react-dom'

const App = function() {
  return <div>Hi</div>;
}

// Take the generate HTML and add it to the DOM
ReactDom.render(<App />, document.querySelector('.container'))
