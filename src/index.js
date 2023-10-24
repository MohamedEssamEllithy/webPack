import './style/main.scss'
import profileImg from "./assets/avatar.png"
import generateQuotes from './generateQuotes'

const profile =document.getElementById("profile")
profile.src = profileImg

const quotebtn =document.getElementById("quotebtn")
quotebtn.addEventListener("click",generateQuotes)

generateQuotes()