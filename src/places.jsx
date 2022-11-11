import React from 'react'
import "./App.css"
import "./places.css"
import { Footer } from './components/footer'
import { Land } from './components/lands'
import { NavBar } from './components/navbar'

export const Places = () => {
    return (
        <div className="App">
            <NavBar />
            <main style={{ paddingBottom: "92px" }}>
                <div className="widthControlWrapper">
                    <div className="widthControl">
                        <div className="tab-container">
                            <div className="table-categories">
                                <p>Restaurant</p>
                                <p>Cottage</p>
                                <p>fantast City</p>
                                <p>beach</p>
                                <p>Cabbin</p>
                                <p>Off-grid</p>
                                <p>Farm</p>
                            </div>
                            <div>
                                <div className="location-filter">
                                    <input type={"text"} placeholder="location" />
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.9999 5L10.9999 5" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.99985 5H1.99985" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21.9999 12H16.9999" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.9999 12H1.99985" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21.9999 19H10.9999" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.99985 19H1.99985" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10.9999 21V17" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10.9999 7V3" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13.0001 14V10" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="widthControlWrapper">
                    <div className="widthControl">
                        <div className="lands">
                            <Land pic={"/land1.png"} />
                            <Land pic={"/land1.png"} />
                            <Land pic={"/land1.png"} />
                            <Land pic={"/land1.png"} />
                            <Land pic={"/land1.png"} />
                            <Land pic={"/land1.png"} />
                            <Land pic={"/land1.png"} />
                            <Land pic={"/land1.png"} />
                            <Land pic={"/land1.png"} />
                            <Land pic={"/land1.png"} />
                            <Land pic={"/land1.png"} />
                            <Land pic={"/land1.png"} />
                            <Land pic={"/land1.png"} />
                            <Land pic={"/land1.png"} />
                            <Land pic={"/land1.png"} />
                            <Land pic={"/land1.png"} />
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}