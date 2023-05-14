import React from 'react'
import Service_Card from './Service_Card'
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import './service.css'
import Typewriters from '../ShortsCuts/Typewriter';
import JavascriptIcon from '@mui/icons-material/Javascript';
import WhatshotIcon from '@mui/icons-material/Whatshot';
function service() {
  const paragraph = 'dfklajdfadfasffffffffffffffffffffffffffffffffffffffffffflkjalfjlkdajflkjdflkjdalfkjalfjl;adfjl;ajf;ljfdl;afdlafj;alf'
  return (
    <div className="service flex flex-col  border-none">

      <div className="servicename text-white xs:text-3xl lg:text-5xl w-full text-center md:text-4xl ">
        <h1 className='py-5'>Our <span className='text-por'>Services</span> </h1>
      </div>

      <div className="service_cards flex lg:p-16 md:p-7 xs:px-10 xs:py-5 bg-porbg items-center justify-center gap-10  md:flex-wrap md:flex-row xs:flex-col lg:flex-row lg:flex-nowrap text-center">
        <Service_Card
          aos='fade-right'
          title={<Typewriters words={['Web development']} />}
          para={paragraph}
          card_icon={<CodeOffOutlinedIcon
          style={{ fontSize: "45px", fontWeight: "900" }} />} />

        <Service_Card 
        aos='fade-up' 
        title={<Typewriters words={['React js']} />} 
        color='green' para={paragraph} 
        card_icon={<JavascriptIcon 
        style={{ fontSize: "65px", fontWeight: "900" }} />} />
       
        
        <Service_Card 
        aos='fade-left' 
        title={<Typewriters words={['Fire DataBsse']}/>}
        para={paragraph} 
        color='#F6820D' 
        card_icon={<WhatshotIcon 
        style={{ fontSize: "45px", fontWeight: "900" }} />} />
        

      </div>

    </div>
  )
}

export default service