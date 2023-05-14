import FacebookRounded from '@mui/icons-material/FacebookRounded'
import Instagram from '@mui/icons-material/Instagram'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Twitter from '@mui/icons-material/Twitter'
import React from 'react'
import { NavLink } from 'react-router-dom'

const style = {
     conatainer: "md:flex hidden bg-gray-900 p-3 flex-col text-center pt-5 space-y-8 md:flex-row md:justify-between items-center md:space-y-0",
     footerText: "flex mx-3 justify-between space-x-20 md:flex-row text-gray-200 md:space-x-28 md:ml-20 lg:ml-24 lg:space-x-[13rem] xl:space-x-72 xl:ml-24",
     iconContainer: "text-white pb-4 text-center text-xl space-x-2 md:w-2/4 md:pb-0 md:pl-2 flex flex-row  md:space-x-1 lg:pl-[171px] lg:space-x-2 xl:pl-44",
}

function Footer(color) {
     const icon = `w-9 hover:text-${color}-500 h-9 hover:border-por   hover:border-2 hover:border flex items-center justify-center flex-row  inline-block rounded-full pt-[3px] `
     return (
          <>
               <div
                    className={style.container}>

                    <div
                         className={style.footerText}>
                         <p>@ Copyright <strong>Company.</strong>All Rights Reserved</p>
                         <p>Designed by <span className="text-blue-600">TailwindCSS</span></p>
                    </div>

                    <div
                         className={style.iconContainer}>
                         <NavLink to="#"
                              className={icon} color='blue' ><FacebookRounded /></NavLink>
                         <NavLink to="#"
                              className={icon} color='pink'><Instagram /></NavLink>
                         <NavLink to="#"
                              className={icon} color='purple'><LinkedIn /></NavLink>
                         <NavLink to="#"
                              className={icon} color='cyan'><Twitter /></NavLink>
                    </div>
               </div>




          </>
     )
}

export default Footer