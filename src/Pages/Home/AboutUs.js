import React from 'react'
import Container from '../../Components/Container'
import Slider_Carosel from '../../Components/Ui/Slider'

const AboutUs = () => {
  return (
    <Container bgColor={'bg-bg_natural'}>
      <div className='md:flex justify-between items-center min-h-[500px] mb-12'>
       <div>
        <h1 className='font-sans'>What people say <p className='text-primary'>about us</p></h1>
        <p>Our Clients send us bunch of smilies with our services and we love them.</p>
        
        </div> 

      <div>
      <Slider_Carosel />
      </div>

      </div>
    </Container>
  )
}


export default AboutUs