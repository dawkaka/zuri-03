import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

export const NavBar = ({ target }) => {
    const modalRef = useRef(null)
    const handleMenu = (e) => {
        document.getElementById("menu-items").classList.add("menu-show")
    }
    const closeMenu = (e) => {
        document.getElementById("menu-items").classList.remove("menu-show")
    }
    const connectWallet = () => {
        modalRef.current.style.display = "block"
    }

    return (
        <>
            <div ref={modalRef} style={{ display: "none", position: "fixed", width: "100%", height: "100%", zIndex: 5, background: "rgba(64, 64, 64, 0.3)" }}>

                <div style={{
                    width: "min(95%, 600px)", borderRadius: "16px",
                    backgroundColor: "#FFFFFF", padding: "0",
                    marginTop: "15vh",
                    marginInline: "auto"
                }}>
                    <div style={{
                        padding: "24px 32px", borderBottom: "1px solid #CFD8DC",
                        display: "flex", justifyContent: "space-between", alignItems: "center"
                    }}>
                        <h2 style={{
                            fontWeight: 700,
                            fontSize: "24px",
                            lineHeight: "30px",
                            color: "#333333"
                        }}>Connect Wallet</h2>
                        <div onClick={() => modalRef.current.style.display = "none"}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div style={{ padding: "24px 32px", paddingBottom: "34px" }}>
                        <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "20px" }}>Choose your prefered wallet</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "10px" }}>
                            <button className="connect-item">
                                <div>
                                    <img src="/image 66.png" />
                                    <h3>Metamask</h3>
                                </div>
                                <div>
                                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.38381 8.00009C9.38381 8.26892 9.28117 8.53771 9.07631 8.74267L2.62657 15.1923C2.21628 15.6026 1.55108 15.6026 1.14096 15.1923C0.730845 14.7822 0.730845 14.1172 1.14096 13.7068L6.84805 8.00009L1.14116 2.2933C0.731043 1.88301 0.731043 1.21801 1.14116 0.807924C1.55128 0.397442 2.21648 0.397442 2.62677 0.807924L9.07651 7.2575C9.2814 7.46256 9.38381 7.73135 9.38381 8.00009Z" fill="#959DA6" />
                                    </svg>
                                </div>
                            </button>
                            <button className="connect-item">
                                <div>
                                    <img src="/image 69.png" />
                                    <h3>WalletConnect</h3>
                                </div>
                                <div>
                                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.38381 8.00009C9.38381 8.26892 9.28117 8.53771 9.07631 8.74267L2.62657 15.1923C2.21628 15.6026 1.55108 15.6026 1.14096 15.1923C0.730845 14.7822 0.730845 14.1172 1.14096 13.7068L6.84805 8.00009L1.14116 2.2933C0.731043 1.88301 0.731043 1.21801 1.14116 0.807924C1.55128 0.397442 2.21648 0.397442 2.62677 0.807924L9.07651 7.2575C9.2814 7.46256 9.38381 7.73135 9.38381 8.00009Z" fill="#959DA6" />
                                    </svg>
                                </div>

                            </button>
                        </div>
                    </div>

                </div>

            </div>
            <header id="header">
                <div className="widthControlWrapper">
                    <div className="widthControl">
                        <nav>
                            <div className="logo-container">
                                <img src='./Group.svg' style={{ width: "100%" }} />
                            </div>
                            <ul>
                                <li style={{ color: target === "Home" ? "var(--pr-color)" : "" }}><Link to="/">Home</Link></li>
                                <li style={{ color: target === "Stay" ? "var(--pr-color)" : "" }}><Link to="/place-to-stay">Place to stay</Link></li>
                                <li><a href="" className="nav-link">NFTs</a></li>
                                <li><a href="" className="nav-link">Community</a></li>
                            </ul>
                            <button onClick={() => connectWallet()}>
                                Connect wallet
                            </button>
                            <div className="menu-container" onClick={handleMenu}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                            <div className="sm-nav" id="menu-items">
                                <div className="close-menu" onClick={closeMenu}>
                                    <div className="bar1"></div>
                                    <div className="bar3"></div>
                                </div>
                                <button onClick={() => connectWallet()}>
                                    Connect wallet
                                </button>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/place-to-stay">Place to stay</Link></li>
                                    <li><a href="" className="nav-link">NFTs</a></li>
                                    <li><a href="" className="nav-link">Community</a></li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>

    )
}