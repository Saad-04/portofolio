import React from 'react'

const style = {
  container:"servicename text-white xs:text-3xl lg:text-5xl w-full text-center md:text-4xl pb-4",

}

export function OurChat() {
    return (<>
      <div className={style.container}>
        <h1 data-aos='fade-down' className='py-5'>Our <span className='text-por'>Messages</span> </h1>
      </div>
    </>)
  }