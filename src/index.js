// Create a new component
import React from 'react'
import ReactDom from 'react-dom'
import YTSearch from 'youtube-api-search'

import config from '../config'
import SearchBar from './components/search_bar'
const API_KEY = config.youtubeAPI

YTSearch({key: API_KEY, term: 'surfboards'}, (data) => console.log(data))

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
);
}

// Take the generate HTML and add it to the DOM
ReactDom.render(<App />, document.querySelector('.container'))
