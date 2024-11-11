import Navbar from './Components/Navbar';
import './App.css';
import TextForm from './Components/textForm';
import About from './Components/About';
import React,{useState} from 'react';
import Alert from './Components/Alert';
function App() {
  const [mode,setMode]= useState('light');// whether dark mode is enalabled or not
  const[alert,setAlert]=useState(null);

  const showAlert = (message,type)=>
  {
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode=()=>{
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
   <>
       <Navbar title="ShahGuide" mode={mode} toggleMode={toggleMode}/>{/* first day*/}
       <Alert alert={alert}/>
       <div className="container my-3">  
      
          
        
        <TextForm showAlert={showAlert} heading="Analyse the Text"  mode={mode}/>{/* second day*/}
        <About mode={mode}/>
      
    
      {/* <About mode={mode}/>Third day */}
     </div>
    </>
  );
}

export default App;
