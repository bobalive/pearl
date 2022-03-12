import menu from "./menu/menu.js"
import Blur from './blur/blur.js'
import slider from './slider/slider.js'

slider('.slider-btn1','.slider-img1')
slider('.slider-btn2','.slider-img2')
slider('.slider-btn3','.slider-images3')
menu()

var  blur = new Blur({
     card: '.main__imgBox-card'
 })





