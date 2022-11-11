import React from 'react'
import "./lands.css"

export const Land = ({ pic }) => {
    return (
        <article className="lands-article">
            <div className="land-img-container">
                <img src={pic} />
            </div>
            <div className="land-details">
                <div>
                    <p>Desert king</p>
                    <p style={{ fontWeight: "bold" }}>1MBT per night</p>
                </div>
                <div>
                    <p>2345km away</p>
                    <p style={{ fontWeight: "bold" }}>available for 2weeks stay</p>
                </div>

                <img src="/stars.png" alt="" style={{ textAlign: "left" }} />

            </div>
        </article>
    )
}