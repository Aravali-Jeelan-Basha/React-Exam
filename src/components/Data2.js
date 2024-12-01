import React from 'react'
import {Link, Outlet} from "react-router-dom"

function Data2() {
  return (
    <ul>
        <li><Link to="/">Array1</Link></li>
        <li><Link to="/Result">Result</Link></li>
        <li><Link to="/Child">Child</Link></li>


        
    </ul>
  )
}

export default Data2