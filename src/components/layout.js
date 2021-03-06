import React from "react";
import Helmet from 'react-helmet';
import Header from './Header';
import './layout.scss';

export default ({ children }) => 
<div>
  <Helmet defaultTitle={`Arthur Jen`}>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
    <html lang="en" />
  </Helmet>
  <Header />
  {children}
</div>