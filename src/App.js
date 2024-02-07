import './App.css'
// import Student from './Student.js'
import  Company from './Company.jsx'



function App() {
  const name ="Anu"
  const valid = false
  const place="enter your name"
  return (
    <>
    <div className="App">
      <header className="App-header">
        
        <h1 style={{backgroundColor:"orange",color:"white", border:"5px solid brown"}} >Hello welcome to react!!!</h1>
     
        
      </header>
    </div>
    <div>
      <label htmlFor="inp">Name <input type="text" id='inp' placeholder={place} className='main' /></label>
      <h1>{name}</h1>
      <h2>{valid?"valid":"invalid"}</h2>
      {/* <Student/> */}
      <Company/>
      
    </div>
    </>
    
  );
}

export default App;
