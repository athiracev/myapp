import style from './style.module.css'

function Employee(props){
    console.log(props.dept)
    return(
        <div className={style.b2}>
            <h2>Employee page!!!</h2>
            <h2>Data from company : {props.dept}</h2>
        </div>
    )
}
export default Employee

// module.exports={
//     Employee,
//     ..........
// }

