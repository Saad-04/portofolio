import React, { useState, useEffect } from 'react'
import { getDocs, deleteDoc, doc } from 'firebase/firestore'
import './message.css'
import '../ShortsCuts/oas'
import MessageHeader from './MessageHeader';
import { collectionRef, db } from './Firebase/firebase';
import { OurChat } from './OurChat'
import { MessageToThisChat } from './MessageToThisChat'
import Chat from './Chat';
import Footer from './Footer';
const style = {
  container: "message flex flex-col lg:px-52 md:px-16 xs:px-3 mt-5 mb-20 ",
  msgBox: "message_box border border-gray-400 rounded-lg",
  chatCon: "chat w-full flex  flex-col justify-start items-start "
}

function Message() {


  // ///////////////////////////////////////////////////

  const [chat, setChat] = useState([])
  
  useEffect(() => {
    getChat()
  }, [chat])
  function getChat() {

    getDocs(collectionRef).then((res) => {
      const movs = res.docs.map((e) =>
      ({
        data: e.data(),
        id: e.id
      })
      )
      setChat(movs)
    })
  }
  // deleter chat here 
  function deleteMsg(id) {

    const getmsg = doc(db, 'chat', id);
    deleteDoc(getmsg)
  }

  return (
    <div className={style.container} data-aos='fade-left'>

      <OurChat />

      <div className={style.msgBox}>

        <MessageHeader />
        <MessageToThisChat />

        <div className={style.chatCon}>
          {chat.map((e) => {
            return <Chat deleteMessage={() => deleteMsg(e.id)} key={e.id} chatfromdatabase={e.data.name} />
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Message