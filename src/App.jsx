import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Stack, TextField } from '@mui/material'




function App() {

  const [principle,setPrinciple]= useState(0)
  const [interest,setInterest]= useState(0)
  const [year,setYear]= useState(0)
  const [simpleInterest,setSimpleInterest]=useState(0)

  // console.log(principle);

  const [IsInvalidPrinciple,SetInvalidPrinciple]=useState(false)
  const [IsInvalidInterest,SetInvalidInterest]=useState(false)
  const[IsInvalidYear,SetInvalidYear]=useState(false)

  const validateInput=(tag)=>{

    const {name,value}=tag

    // console.log(name,value);

    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if(!!value.match(/^\d*.?[0-9]+$/)){
      
      if(name=='principle'){
        setPrinciple(value)
        SetInvalidPrinciple(false)
      }
      else if(name=='interest'){
        setInterest(value)
        SetInvalidInterest(false)
      }
      else{
        setYear(value)
        SetInvalidYear(false)
      }
    }
    else{
      if(name=='principle'){
        SetInvalidPrinciple(true)
      }
      else if(name=='interest'){
        SetInvalidInterest(true)
      }
      else{
        SetInvalidYear(true)

      }
    }
    

    console.log(tag);
    
  
  }



  const handleCalculator=(e)=>{
    e.preventDefault()
    // console.log("button clicked");

    const numPrinciple = parseFloat(principle);
   const numInterest = parseFloat(interest);
  const numYear = parseFloat(year);
    

    if(principle && interest && year){
      setSimpleInterest(principle*interest*year/100)
    }
    else{
      alert("please fill the field ")
    }
    
  }
  const handleReset=()=>{
    setPrinciple(0)
    setInterest(0)
    setYear(0)
    setSimpleInterest(0)

    SetInvalidPrinciple(false)
    SetInvalidInterest(false)
    SetInvalidYear(false)
  }

  return (
    <>
    
      
           <div style={{minHeight:"100vh",width:"100%"}} className='d-flex align-item-center justify-content-center bg-dark p-4'>
              <div style={{width:"600px"}}  className='text-cente bg-light p-5 rounded'>
                <h3>Simple Interest Calculator</h3>
                <p>Calculate Your Simple Interest Easily</p>
              
              <div className=' d-flex bg-warning rounded text-light align-item-center justify-content-center  p-5 flex-column'>
                  <h2>₹ {simpleInterest}</h2>
                  <h5>Total Simple Interest</h5>
                  </div>

                  <form className='mt-5' action="">
                   <div className='mb-3'>
                     <TextField name='principle' value={principle || ""} onChange={e=>validateInput(e.target)} style={{width:"100%"}} className='mt-3' id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
                      {IsInvalidPrinciple &&
                      <p className='text-danger'>Invalid Principle </p>
                      }
                     <TextField name='interest' value={interest || ""} onChange={e=>validateInput(e.target)} style={{width:"100%"}} className='mt-3' id="outlined-basic" label="Rate" variant="outlined" />
                     {IsInvalidInterest &&
                      <p className='text-danger'>Invalid Interest </p>
                      }
                     <TextField name='year' value={year || ""} onChange={e=>validateInput(e.target)} style={{width:"100%"}} className='mt-3' id="outlined-basic" label="Time Period" variant="outlined" />
                     {IsInvalidYear &&
                      <p className='text-danger'>Invalid Year </p>
                      }

                     <Stack className='mt-3' direction='row' spacing={2}>
                     <Button disabled={IsInvalidPrinciple || IsInvalidInterest|| IsInvalidYear} type='submit' onClick={handleCalculator} style={{height:"50px"}} className="w-100 bg-dark" variant="contained">Calculate</Button>
                     <Button onClick={handleReset} className="w-100" variant="outlined">Reset</Button>
                    </Stack>
                   </div>


                  </form>
              </div>
           </div>
       
    
    </>
  )
}

export default App
