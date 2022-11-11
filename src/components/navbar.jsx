import Reacte from 'react'
import "./navbar.css"

export const NavBar = () => {

    const handleMenu = () => {

    }
    return (
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
                        <div className="menu-container" onClick={handleMenu}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>

    )
}