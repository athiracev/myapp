import style from './style.module.css'

function Employee(props){
    console.log(props.dept)
    let inpValue=""

    const clicked=()=>{
        alert("button clicked successfully!!! ")
    }
    const handleclick=(arg)=>{
        alert(arg)
    }

    const eventHandled=(arg)=>{
        console.log(arg)
    }
    const getValue=(val)=>{
         inpValue= val;
         console.log(inpValue)
    }
    const display=()=>{
        alert(inpValue)
    }

    return(
        <div className={style.b2}>
            <h2>Employee page!!!</h2>
            <h2>Data from company : {props.dept}</h2>
            <button onClick={clicked}>Click Me</button> <br /> <br />
            <button onClick={()=>{handleclick("button clicked with argument")}}>Clickkkkk </button> <br /> <br />
            <button onClick={(event)=>{eventHandled(event)}}>event</button> <br /> <br />
            <input type="text"  onChange={(e)=>{getValue(e.target.value)}}/> <br />
            <button onClick={display}>Display</button>

        </div>
    )
}
export default Employee

// module.exports={
//     Employee,
//     ..........
// }

