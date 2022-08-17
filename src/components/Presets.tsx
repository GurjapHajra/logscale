import React from 'react'
import "./Presets.css"
import {useDispatch } from 'react-redux'
import { change } from "../dataSlice"

const Presets = () => {

  const dispatch = useDispatch();

  const preset1 = [
    {name:"Naruto",
    value:3000000,
    link:"https://c.tenor.com/Zsfov4ddSpoAAAAd/naruto-kurama.gif"},
    {name:"Goku",
    value:12500000000000000000000000,
    link:"https://lh3.googleusercontent.com/icjFapcWFhNKlHxcPAyGs9rGBllQjD-Py-usMZI3z8X5V0oxnU2KPJx--hokcjd1oE1n7xzT5URB79I_Z-HjUJNtCTGKuhaoyo_O=w600"},
    {name:"Saitama",
    value:12000000000000000000,
    link:"https://i0.wp.com/68.media.tumblr.com/906592d8142a163297571e08d9e6fe07/tumblr_nzb3gjhogK1tndn6wo1_500.gif"}
  ]

  const preset2 = [
    {name:"Goku",
    value:12500000000000000000000000,
    link: "https://lh3.googleusercontent.com/icjFapcWFhNKlHxcPAyGs9rGBllQjD-Py-usMZI3z8X5V0oxnU2KPJx--hokcjd1oE1n7xzT5URB79I_Z-HjUJNtCTGKuhaoyo_O=w600"},
    {name:"Jiren",
    value:12100000000000000000000000,
    link: "https://qph.cf2.quoracdn.net/main-qimg-1c3a7320c15aeacaf19b3debc5ff92b9"},
    {name:"Vegito",
    value:10000000000000000000000000,
    link: "https://c.tenor.com/90xMHO5sC6EAAAAC/vegito-power-up.gif"},
    {name:"Android 17",
    value:40000000000000000000,
    link: "https://c.tenor.com/FvbOmdiRE2AAAAAC/android17-dbz.gif"},
    {name:"Goten",
    value:32000000000,
    link: "https://c.tenor.com/Vqv9Ffk3yy8AAAAd/goten-ball.gif"},
    {name:"Krillin",
    value:4000000000,
    link: "https://pa1.narvii.com/6275/1d00892aa0c08410deb8777f6dddc42ac01c3b18_hq.gif"},
    {name:"Frieza",
    value:100000000000000000000,
    link: "https://qph.cf2.quoracdn.net/main-qimg-a22ba817b915992f813911a92f8b6fea"},
    {name:"Trunks",
    value:6000000000000000000000,
    link: "https://64.media.tumblr.com/db28cb37b9f3dda75ad701bad1cb5cab/tumblr_ogyblb1wqS1ujwg5zo1_500.gifv"},
    {name:"Piccolo",
    value:8250000000000000,
    link: "https://i.pinimg.com/originals/04/d5/50/04d550d27693ea4c4be6b2ddd270b6eb.gif"},
    {name:"Gohan",
    value:92000000000000000000,
    link: "https://media4.giphy.com/media/SRZuUDhEPZcReTJhFn/giphy.gif"},
    {name:"Vegeta",
    value:9500000000000000000000,
    link: "https://thumbs.gfycat.com/BoldWeightyFalcon-size_restricted.gif"},
    {name:"Bulma",
    value:12,
    link: "https://c.tenor.com/nti8ApdZtxEAAAAC/bulma-dragon-ball.gif"},
    {name:"Roshi",
    value:139,
    link: "https://thumbs.gfycat.com/DirectValuableIndianrhinoceros-size_restricted.gif"},
    {name:"Beerus",
    value:54000000000000000000000000,
    link: "https://steamuserimages-a.akamaihd.net/ugc/1800856233303871999/A07E625177495D13E32C3352F2AC9460B73AE058/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"},
    {name:"Whis",
    value:90000000000000000000000000,
    link: "https://pm1.narvii.com/6503/8cb8dd0d6af99d7008b7d32acfd91103f777641d_hq.jpg"},
    {name:"Vados",
    value:90000000000000000000000000,
    link: "https://wallpapercave.com/wp/wp6846679.jpg"}
  ]

  return (
    <div className='Presets'>
        <h2>Presets: </h2>
        <button id = "main3"
                onClick={() => dispatch(change(preset1))}>Naruto vs Goku vs Saitama</button>
        <button id = "dbz"
                onClick={() => dispatch(change(preset2))}>Dragon Ball</button>
    </div>
  )
}

export default Presets