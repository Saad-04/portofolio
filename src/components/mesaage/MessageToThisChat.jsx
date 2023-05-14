import React from 'react'

const style = {
  container:" w-full text-por text-center py-3",
msg:'title text-xs px-3 inline-block rounded-sm'
}

export function MessageToThisChat() {
    return (<>
      <div className={style.container}>
        <p className={style.msg}>Message to this chat!</p>
      </div>
    </>)
  }