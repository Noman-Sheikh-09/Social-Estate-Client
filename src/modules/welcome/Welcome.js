import React from 'react'

import WelcomeIamge from '../../assets/banner.webp'

export default function Welcome() {
  return (
    <div>
  <img src={WelcomeIamge} alt="Welcome here"  style={{wdith:'100%',height:"100vh"}} />
    </div>
  )
}
