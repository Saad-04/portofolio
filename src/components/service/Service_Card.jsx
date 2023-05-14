import React from 'react'
import AllButton from '../ShortsCuts/AllButton'
import './service.css'
import '../ShortsCuts/oas'
function Service_Card(props) {
  return (
    <div className="service_card p-5 text-center lg:w-96 md:w-84 xs:w-72  flex flex-wrap flex-col  overflow-hidden lg:gap-3 md:gap-2 xs:gap-2 rounded-3xl  " data-aos={props.aos}>

      <div className="w-full card_icon text-por "><i style={{color:props.color}}>{props.card_icon}</i></div>

      <div className="w-full heading font-extrabold text-white text-2xl">{props.title}</div>

      <div className="w-20 para text-white text-center text-xs">{props.para}</div>

      <div className="w-full btn"><AllButton /></div>

    </div>
  )
}

export default Service_Card