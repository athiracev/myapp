import React from 'react'
import style from './style.module.css'


function Message() {
    let values=""

const click=(val)=>{
    values=val
    

}
const display=()=>{
  try{
    alert(eval(values))
  }catch(error){
    alert("An error occured while evaluating expression")
    console.error(error)
  }
}

  return (

    <div className={style.message}>
        <input className={style.box}   type="text"  onChange={(e)=>{click(e.target.value)}}/>
        <button  className={style.display}  onClick={display}>Display </button>
    </div>
  )
}

export default Message
