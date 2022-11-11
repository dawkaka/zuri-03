import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <header>
        <div className="widthControlWrapper">
          <div className="widthControl">
            <nav>
              <img src='./Group.svg' />
              <ul>
                <li><a href="" className="nav-link">Home</a></li>
                <li><a href="" className="nav-link">Place to stay</a></li>
                <li><a href="" className="nav-link">NFTs</a></li>
                <li><a href="" className="nav-link">Community</a></li>
              </ul>
              <button>
                Connect wallet
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main>


        <header>
          <div className="widthControlWrapper">
            <div className="widthControl">
              <div className="two-cols hero-container">

                <div className="content-container">
                  <h1 className="hero-heading">
                    Rent a <span className="tx-st">Place</span>
                    away from <span className="tx-st">Home</span> in the
                    <span className="tx-st">Meterverse</span>
                  </h1>
                  <p className="tx-nm">
                    we provide you access to luxury and affordable houses in the metaverse,
                    get a chance to turn your imagination to reality at your comfort zone
                  </p>
                  <div className="hero-search-container">
                    <input type={"text"} placeholder="search for location" />
                    <button>Search</button>
                  </div>
                </div>

                <div className="hero-images-container">
                  <div className="div1"></div>
                  <div className="div2">
                    <img src='/image 3.png' />
                  </div>
                  <div className="div3">
                    <img src='/image 4.png' />
                  </div>
                  <div className="div4">
                    <img src='/image 5.png' />
                  </div>
                  <div className="div5">
                    <img src='/image 6.png' />
                  </div>
                  <div className="div6"></div>

                </div>

              </div>
            </div>
          </div>
        </header>
      </main>

    </div>
  )
}

export default App
