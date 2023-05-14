import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';
const style={
  container:"flex flex-row justify-between bg-neutral-700 px-2 lg:py-1 md:py-1 xs:py-0 rounded-lg w-full",
  avatar_container:"flex flex-row justify-center items-center",
chat:"flex flex-row justify-center items-center",
moreIcon:"flex flex-row justify-center items-center"
}

function MessageHeader() {

  return (
    <div className={style.container}>
          <div data-aos='fade-down' className={style.avatar_container}>
          <Avatar className='h-4 w-4'style={{ backgroundColor: '#0ef', color: "#1f242d",height:"30px",width:"30px" }} />
          <span className={style.chat}>Chat</span>
          </div>
          <div data-aos='fade-down' className={style.moreIcon}>
          <MoreVertIcon />
          </div>
        </div>
  )
}

export default MessageHeader