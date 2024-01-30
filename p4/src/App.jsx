import React, { useState } from 'react'
import './App.css'
import contacts from './contents/recipes'
import Card from './contents/cards';
import Buttons from './contents/buttons';
function App() {
 const [item,setitems] = useState(contacts);
 const menueitems = [...new Set(contacts.map((val)=> val.catagory))]
 const filteritems = (cata) =>{
  const newitems = contacts.filter((newval)=> newval.catagory === cata)
setitems(newitems); 
} 
 return (
    <div>
       <nav>
       <p>MyFood</p>
       <Buttons menueitems={menueitems} 
          filteritems={filteritems}
          setitems={setitems}
        />
       </nav>
    
      <div className="row">
        <Card 
          item={item}
        />
      </div>
    </div>
  )
}

export default App
