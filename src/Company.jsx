import Employee from "./Employee"
import Work from "./Work"
import Message from './Message.jsx'

import style from './style.module.css'

function Company() {
    const empdept = "Technical"
    // const workstatus ="true"  passing as string
    const workstatus = true
    const workers = true
    return (

        <>
            {/* //fragments */}

            <div className={style.b1}>
                <h1><i><s>COMPANY!!!</s></i></h1>
                <Employee dept={empdept} />
                <Work status={workstatus} workers={workers} />
                <Message />

            </div>

        </>
    )
}
export default Company