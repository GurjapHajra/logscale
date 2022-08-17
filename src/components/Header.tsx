import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <><div className='top-page'>
    <header>Logarithic Scale Visulizer</header>
    <p>This website shows a comparison between numbers
          on a logarithmic scale where each tick value is double the previous
          tick—E.g. Tick 1=1, Tick 2=2, Tick 3=4, Tick 4=8, and so on. Below
          I have provided a few presets as demos, but you can create your own
          comparisons between as many numbers as you wish. You can also save your
          creations and load them any anytime. You can also use
          to link at the bottom of the website to convert exponents to numbers.
      </p>
      </div></>
  )
}

export default Header