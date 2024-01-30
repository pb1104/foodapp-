import React from "react";
function Card({item}){
    return(
<div className="Container">
    <div className="row">
   {item.map((val)=>(
    <div key={val.id} className="card">
      <h1>{val.name}</h1>
      <div className="d1">
        <p className="p1">{val.recipe}</p>
        <img className="i1" src={val.imgURL} alt="" />
      </div>
    </div>
   ))}
    </div>
</div>
    );
}
export default Card;