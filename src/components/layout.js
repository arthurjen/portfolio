import React from "react"
import Header from './Header';
import "./layout.css"

export default ({ children }) => 
<div>
  <Header />
{children}
</div>