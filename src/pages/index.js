import React from "react"
import Header from '../components/Header';

export default () => (
<div>

  <Header/>

  <main>
    <header>
      <h1>ARTHUR JEN</h1>
      <hgroup>
        <h4>software developer</h4>
        <h4>+ engineer</h4>
      </hgroup>
    </header>
    <section id="work">
      <div>
        <h2>Booxy</h2>
      </div>
      <div>
        <h2>GitGrub Game</h2>
      </div>
      <div>
        <h2>Bootcamp Companion App</h2>
      </div>
      <div>
        <h2>HALchemy Chatbot Game</h2>
      </div>
      <div>
        <h2>Gorts</h2>
      </div>
      <div>
        <h2>Mystical Tutor</h2>
      </div>
    </section>
    <section id="about">
      <article>
        <header>
          <h2>hey it's me</h2>
        </header>
        <div>
          <img src="/src/assets/Rubick_icon.png" alt="me"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <section>
          
          <header>
            <h3>skills</h3>
          </header>
          <ul>
            <li>Javascript</li>
            <li>Python</li>
            <li>HTML / <abbr title="Cascading Style Sheets">CSS</abbr></li>

            <li>Vue</li>
            <li>React</li>
            <li>Redux</li>

            <li>SQL</li>
            <li>MongoDB</li>
            <li>Firebase</li>
          </ul>
        </section>
      </article>
    </section>

    <section id="contact">
      <header>
        <h2>let's connect</h2>
      </header>
      <ul>
        <li>
          Email
        </li>
        <li>
          Linkedin
        </li>
        <li>
          GitHub
        </li>
        <li>
          Steam
        </li>
      </ul>
    </section>









  </main>


</div>
)