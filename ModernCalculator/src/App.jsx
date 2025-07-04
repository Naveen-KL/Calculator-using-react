import { useState } from 'react'
  import './App.css'
  function App() {
    const[show,setShow]=useState(0);
    const[input,setInput]=useState(' ');
    // const onclick =()=>{
    //   if(btn === "="){
    //     handleequal();
    //   }
    //   else{
    //     handleclick();
    //   }
    //};
    const handlepercent=()=>{
      try{
        const result=(parseFloat(input)/100).toString();
        setInput(result);
        setShow(result);
      }catch(error){
        setShow('Error');
      }
    };
    const handleequal=()=>{
      try {
      const result = eval(input).toString();
      setShow(result);
      setInput(result);
      } catch (error) {
        setShow('Error');
        setInput('');
      }
    };
    const handleclear=()=>{
      setShow(0);
      setInput(' ');
    };
    const handleclick=(value)=>{
      setInput((prev) => prev + value);
      setShow((prev)=> (prev===0?value:prev+value));
    }
    return (
      <>
        <div className='container'>
          <div className='textfield'>
            <input type="text" className="InputField" value={show} readOnly />
          </div>
          <div className='buttons'>
            <button onClick={()=>handlepercent('%')}>%</button>
            <button onClick={handleclear}>CE</button>
            <button onClick={handleclear}>C</button>
            <button onClick={()=>handleclick('/')}>/</button>
            <button onClick={()=>handleclick('7')}>7</button>
            <button onClick={()=>handleclick('8')}>8</button>
            <button onClick={()=>handleclick('9')}>9</button>
            <button className='X' onClick={()=>handleclick('*')}>*</button>
            <button onClick={()=>handleclick('4')}>4</button>
            <button onClick={()=>handleclick('5')}>5</button>
            <button onClick={()=>handleclick('6')}>6</button>
            <button onClick={()=>handleclick('-')}>-</button>
            <button onClick={()=>handleclick('1')}>1</button>
            <button onClick={()=>handleclick('2')}>2</button>
            <button onClick={()=>handleclick('3')}>3</button>
            <button onClick={()=>handleclick('+')}>+</button>
            <button onClick={handleequal}>CAL</button>
            <button onClick={()=>handleclick('0')}>0</button>
            <button onClick={()=>handleclick('.')}>.</button>
            <button onClick={handleequal}>=</button>
          </div>
        </div>
      </>
    )
  }

  export default App

