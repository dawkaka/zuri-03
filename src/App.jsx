import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Land } from './components/lands'
import { Footer } from './components/footer'
import { NavBar } from './components/navbar'

function App() {

  return (
    <div className="App">
      <NavBar />
      <main>
        <header>
          <div className="widthControlWrapper">
            <div className="widthControl" style={{ paddingRight: 0 }}>
              <div className="two-cols hero-container">

                <div className="content-container">
                  <h1 className="hero-heading">
                    Rent a <span className="tx-st">Place</span>
                    away from <span className="tx-st">Home</span> in the
                    <span className="tx-st"> Meterverse</span>
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

        <section className="comps-sec">
          <div className="widthControlWrapper">
            <div className="widthControl">
              <div className="comps-container">
                <img src="comp3.svg" alt="" />
                <img src="/comp2.svg" alt="" />
                <img src="/comp1.svg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <div className="widthControlWrapper">
          <div className="widthControl">
            <section className="lands-sec">
              <div>
                <h2 className="lands-heading">Inspiration for your next adventure</h2>
              </div>
              <div className="lands">
                <Land pic={"/land1.png"} />
                <Land pic={"/land2.png"} />
                <Land pic={"/land3.png"} />
                <Land pic={"/land4.png"} />
                <Land pic={"/land5.png"} />
                <Land pic={"/land6.png"} />
                <Land pic={"/land7.png"} />
                <Land pic={"/land8.png"} />
              </div>
            </section>
          </div>
        </div>

        <section className="nfts-sect">
          <div className="widthControlWrapper">
            <div className="widthControl">
              <div className="two-cols">
                <div className="content-container">
                  <h3 className="nft-heading">Metabnb NFTs</h3>
                  <p className="txt-nm" style={{ color: "white" }}>Discover our NFT gift cards collection. Loyal customers gets
                    amazing gift cards which are traded as NFTs.
                    These NFTs gives our cutomer access to loads of our exclusive services.
                  </p>
                  <button className="nfts-button">learn more</button>
                </div>
                <div className="nft-images-container">
                  <img src="/image 9.png" alt="" />
                  <img src="/image 7.png" alt="" />
                  <img src="/image 8.png" alt="image" />

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
