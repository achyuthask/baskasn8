import React from "react";

const Inputbox = (props) =>{
    return(
<textarea rows={15} cols={70} onChange ={(e)=>{props.setdatafn(e.target.value)}}></textarea>
    )
}

export default Inputbox;