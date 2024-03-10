import React, { Component } from 'react'
import CeoPage from './CeoPage'
import ImageSlider from './ImageSlider'
import { SliderData } from './SliderData'






export default class Home extends Component {
  render() {
    return (
    <>

       <ImageSlider slides={SliderData} />
        <CeoPage/>

    </>
    )
  }
}
