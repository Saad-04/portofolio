import { Avatar } from '@mui/material'
import React from 'react'
import '../ShortsCuts/oas'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const style ={
  container:"box bg-lime-900  text-yellow-100 lg:py-2 lg:px-3 md:py-2 md:px-3 xs:p-1 xs:px-2 rounded-xl m-3 flex flex-row justify-center items-center",
  delicon:'ml-3 text-black cursor-pointer hover:text-por duration-0.5 hover:bg-porbg rounded-xl'
}

function Chat({chatfromdatabase,deleteMessage}) {

  return (
    <div className={style.container} data-aos='fade-up'>
      <Avatar style={{ height: '16px', width: '16px ', marginRight: "4px", color: '#1f242d' }} />
      <p>{chatfromdatabase}</p>
      <DeleteOutlineIcon onClick={deleteMessage} className={style.delicon}/>
    </div>
  )
  }
export default Chat