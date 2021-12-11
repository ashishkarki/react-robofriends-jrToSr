import React, { useCallback, useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

import { requestRobotsAction, setSearchTermAction } from '../actions'
import MyHeader from '../components/MyHeader'

// const mapStateToProps = (state) => {
//   return {
//     searchTerm: state.searchTermReducer.searchTerm,
//     robots: state.requestRobotsReducer.robots,
//     isPending: state.requestRobotsReducer.isPending,
//     error: state.requestRobotsReducer.error,
//   }
// }

// const mapDisptachToProps = (dispatch) => {
//   return {
//     onSearchTermChange: (event) =>
//       dispatch(setSearchTermAction(event.target.value)),
//
//   }
// }

export const App = () => {
  const { searchTerm } = useSelector((state) => state.searchTermReducer)
  const requestRobotsReducer = useSelector(
    (state) => state.requestRobotsReducer,
  )
  const dispatch = useDispatch()

  const onRequestRobots = useCallback(() => dispatch(requestRobotsAction(), []))

  const onSearchTermChange = (event) => {
    dispatch(setSearchTermAction(event.target.value))
  }

  useEffect(() => {
    console.log('App.js useEffect, disptaching action')
    onRequestRobots()
  }, [])

  const filteredRobots = requestRobotsReducer.robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return requestRobotsReducer.isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <MyHeader />
      <SearchBox searchChange={onSearchTermChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  )
}

// export default connect(mapStateToProps, mapDisptachToProps)(App)
export default App
