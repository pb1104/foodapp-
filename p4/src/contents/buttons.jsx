import React from "react";
import contacts from "./recipes";
function Buttons({menueitems,filteritems,setitems}){
return(
<div>
{
    menueitems.map(val =>
    <button   onClick={()=> filteritems(val)}>
        {val}
    </button>
    )
}
<button onClick={() => setitems(contacts)}>
    All
</button>
</div>
)
};
export default Buttons;