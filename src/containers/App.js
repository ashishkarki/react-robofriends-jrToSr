import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

import { setSearchTermAction } from '../actions'

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
  }
}

const mapDisptachToProps = (dispatch) => {
  return {
    onSearchTermChange: (event) =>
      dispatch(setSearchTermAction(event.target.value)),
  }
}

export const App = ({ searchTerm, onSearchTermChange }) => {
  const [robots, setRobots] = useState([])
  // const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users))
  }, [])

  // const onSearchChange = (event) => {
  //   setSearchTerm(event.target.value)
  // }

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchTermChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  )
}

export default connect(mapStateToProps, mapDisptachToProps)(App)
