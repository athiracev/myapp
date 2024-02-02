import React from 'react'
import style from './style.module.css'


function Work({status,workers}) {
  return (
    <div className={style.b3}>
      <h2>This is work page!!!</h2>
      <h2>work status : {status}</h2>

      <div>
        {
          status && 
          <h1>work is on.............</h1>

        }
        {
          workers ?
          <h1>workers available</h1>
          :
          <h1>workers not available</h1>
        }
        
      </div>

    </div>
  )
}
export default Work

