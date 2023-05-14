import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import AllButton from '../ShortsCuts/AllButton'

// import { Typewriter } from './typwriter'
import '../ShortsCuts/oas'
import './home'
import IconContainer from './IconContainer';
import Typewriters from '../ShortsCuts/Typewriter';
const style = {
  container: 'home flex text-white xl:p-36 font-extrabold md:p-20 xs:p-10',
  hello: 'xl:text-6xl  pb-2 md:text-4xl xs:text-2xl ',
  saad: 'xl:text-6xl  pb-2 md:text-4xl xs:text-2xl ',
  typewriter: 'xl:text-4xl pb-5 md:text-3xl xs:text-xl',
  para: 'xl:text-4xl pb-5 md:text-3xl xs:text-xl',

}

function Homecomponent() {
  return (
    <div className={style.container} style={{ fontFamily: "'Roboto', sans-serif" }} >
      <div className="">

        <h1 className={style.hello} data-aos="fade-right">Hello, Its Me</h1>
        <h1 className={style.saad} data-aos="fade-left">Saad </h1>
        <h1 className={style.typewriter}>And I'm a <span style={{ color: '#0ef' }}>
          <Typewriters words={['Frontend-Developer', 'Designer', 'React Developer', 'Fire DataBase']} />
        </span></h1>
        <p className={style.para} data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, harum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, harum!</p>
        <div className="icons gap-2 flex flex-row my-6">

          <IconContainer aos='fade-right' path='https://www.facebook.com/profile.php?id=100051367081978' icon={<FacebookRoundedIcon />} />

          <IconContainer aos='fade-up' path='https://twitter.com/saad4674Ali' icon={<TwitterIcon />} />

          <IconContainer aos='fade-down' path='https://www.linkedin.com/in/saad-ali-0b1a8b24b/' icon={<LinkedInIcon />} />

          <IconContainer aos='fade-left' path='https://www.instagram.com/saad_ali04/' icon={<InstagramIcon />} />

        </div>
        <AllButton link='/contact' />
      </div>
    </div>
  )
}

export default Homecomponent