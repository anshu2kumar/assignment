import React, { useState } from 'react';
import '../App.css'
const Main = () => {
  const [name,setName] = useState(""); 
  const[email,setEmail] = useState(""); 
  const[credentials,setCredentials] = useState([]); 
  const[isDark,setStatus] = useState(false);
  const handleSave = (e) => {
    e.preventDefault(); 
    const credential = {name :name,email:email};
    setCredentials([...credentials,credential]);
  }

  // function to track and set status of boolean variable isDark
  const toggle = (mode) => {
    if(mode === 'normal'){
      setStatus(false);
    }
    else if(mode ==='dark'){ 
    setStatus(true);}
  }

  return (<>
  <h1 className='header'> React Assignment(Anshu Kumar)</h1>
  {/* Form implementation and conditional css  */}
  <div className={isDark ? "main dark-main" : "main"}> 
  <div className='sub-main'> 
  <form action="" className='form-container' data-testid="form" onSubmit={handleSave}>
  <div>
  <label htmlFor="name">Name</label>
  <input id='name' type="text" name='name' required autoComplete='off' value={name} onChange = {(e)=> setName(e.target.value)}/>
  </div>
  <div>
  <label htmlFor="email">Email</label>
  <input id='email' type="email" name='email'required autoComplete='off' value={email}  onChange = {(e)=>setEmail(e.target.value)}/>
  </div>
  <button type='submit' placeholder='Save'>Save</button>
  </form>
  </div>
  {/* Listing of credentials in the right side as a list  */}
  <div className='list'  key={Date.now().toString()}>
  <div className='items'>
  {credentials.map((element) => {
    return(
      <div key={element.name}>
      <ul data-testid="list">
      <li>{element.name}</li>
      <li>{element.email}</li>
      </ul>
      </div>)
  })}
</div>
</div>
{/*Implementation of toogle button*/}
  <div className ={isDark ? "toggle-dark" : "toggle-normal"}>
    <h4 className="normal-mode" onClick={() => toggle("normal")}>Normal</h4>
    <h4 className="dark-mode" onClick={() => toggle("dark")}>Dark</h4>
  </div>
</div>
</>);
};

export default Main;
