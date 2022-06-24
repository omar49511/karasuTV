import Featured from "../components/featured/Featured"
import Navbar from "../components/navbar/Navbar"
import "./home.scss"
import List from "../components/list/List"
// import React from 'react'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Featured type ="movie"/>
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}

export default Home
