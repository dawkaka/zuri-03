import React from 'react'
import "./footer.css"



export const Footer = () => {
    return (
        <footer>
            <div className="widthControlWrapper">
                <div className="widthControl">
                    <div className="footer-content">
                        <div className="footer-logos-container">
                            <div className="logo-container">
                                <img src="/footerlogo.svg" style={{ width: "max(100%,150px)", maxWidth: "200px" }} />
                            </div>

                            <div>
                                <div className="socials">
                                    <img src="/fb.png" alt="" /><img src="insta.png" alt="" /><img src="twitter.png" alt="" />
                                </div>

                                <p className="footer-text"><span style={{ fontSize: "18px", marginRight: "5px" }}>©</span>2022 Metabnb</p>
                            </div>
                        </div>

                        <div className="footer-content-inner">
                            <div>
                                <ul>
                                    <h5 className="footer-heading">Community</h5>
                                    <li className="footer-text">NFTs</li>
                                    <li className="footer-text">Tokens</li>
                                    <li className="footer-text">Landlords</li>
                                    <li className="footer-text">Discord</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <h5 className="footer-heading">Places</h5>
                                    <li className="footer-text">Castles</li>
                                    <li className="footer-text">Farms</li>
                                    <li className="footer-text">Beach</li>
                                    <li className="footer-text">Learn more</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <h5 className="footer-heading">About us</h5>
                                    <li className="footer-text">Road map</li>
                                    <li className="footer-text">Creators</li>
                                    <li className="footer-text">Careers</li>
                                    <li className="footer-text">Contact us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}