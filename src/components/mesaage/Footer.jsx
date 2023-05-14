import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { collectionRef } from './Firebase/firebase';
const style ={
  form:"chat_sender flex flex-row items-center lg:px-10 md:px-4 xs:px-2 bg-neutral-700 px-2 lg:py-1 md:py-1 xs:py-0 rounded-lg w-full py-1 gap-2",
input:'rounded-xl lg:p-2 md:p-2 xs:p-1 bg-porbg text-white outline-none w-full',
icon:'text-por cursor-pointer hover:text-orange-600' 
}


function Footer() {
    const [val,setVal]=useState('')
 
function submitMessage(e){
  e.preventDefault()
if(val===''){
  return
}
addDoc(collectionRef,{name:val}).then((res)=>{console.log(res);}).catch((err)=>{console.log(res.message);})
setVal('')
}
  return (
    <form onSubmit={submitMessage} className={style.form}>

    <div className="input w-full">
      <input type="text" placeholder='write messqge' className={style.input} data-aos='fade-up' value={val} onChange={(e)=>setVal(e.target.value)} />
    </div>

    <button className="send" type='submit'  >
      <SendIcon className={style.icon}data-aos='fade-left' />
    </button>

  </form>
  )
}

export default Footer