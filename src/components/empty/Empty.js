import React from 'react'
import IMAGE from "../../assets/notfound.png"
export default function Empty() {
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={IMAGE} />
        </div>
    )
}
