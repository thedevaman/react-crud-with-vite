import {useState} from 'react'
import 'remixicon/fonts/remixicon.css'
const App = ()=>{

  const[sidebar,setSidebar] = useState(-450)
  const[form,setForm] = useState({
    fullname:'',
    class:'',
    roll:'',
    subject:'',

  })

  const formHandler =(e)=>{
    const input = e.target
    const value = input.value
    const key = input.name
    setForm({
      ...form,
      [key]:value
    })
  }

  const handelSidebar = ()=>{
   setSidebar(sidebar===0?-450:0)
  }

  const closeSidebar =()=>{
    setSidebar(-450)
  }


  return(
    <div>
      <div style={{
        background:'#00d0ff',
        margin:'0px 100px',
        color:'black',
        textAlign:'center',
        padding:'10px 10px',
        fontSize:'30px',
        fontWeight:'bold'
      }}>
        Crude Practice
      </div>
      <button type='submit'
      onClick={handelSidebar}
      style={{
        margin:'10px 100px',
        background:'#9100ff',
        border:'none',
        color:"#fff",
        padding:"15px",
        fontSize:'15px',
        borderRadius:'5px'

      }}><i className="ri-user-add-line" style={{marginRight:'5px'}}></i>Add Student</button>
      <div style={{
          background:'#9100ff',
        width:450,
        height:'100%',
        position:'fixed',
        top:'0px',
        right:sidebar,
        transition:'0.3s',
        boxShadow:'0 0 10px rgba(6,8,0,10)',
        padding:32,
        boxSizing:'border-box',

      }}>
        <button
        onClick={closeSidebar}
        style={{
          color:'#fff',
          fontSize:'25px',
          position:'absolute',
          top:20,
          right:20,
          background:'transparent',
          border:'none'
        }}>
        <i className="ri-close-circle-line" ></i>
        </button>
        <h1 style={{color:'#fff'}}>Add Student</h1>
        <form style={{
          display:'flex',
          flexDirection:'column',
          gap:10,
        }}>
         <input
         onChange={formHandler}
         value={form.fullname}
         type="text" 
         placeholder='Fullname'
         name='fullname'
         required
         style={{
          border:'none',
          padding:15,
          borderRadius:4,
         }}
         />
         <input 
         onChange={formHandler}
         value={form.class}
         type="number" 
         placeholder='Class'
         name='class'
         required
         style={{
          border:'none',
          padding:15,
          borderRadius:4,
         }}
         />
          <input 
          onChange={formHandler}type="number" 
          value={form.roll}
         placeholder='Roll No.'
         name='roll'
         required
         style={{
          border:'none',
          padding:15,
          borderRadius:4,
         }}
         />
          <input
          onChange={formHandler}
          value={form.subject}
          type="text" 
         placeholder='Subject'
         name='subject'
         required
         style={{
          border:'none',
          padding:15,
          borderRadius:4,
         }}
         />
         <button type='submit' style={{
          background:'black',
          border:'none',
          borderRadius:'5px',
          padding:10,
          color:'#fff',
          fontSize:18
         
         }}>Submit</button>
         </form>
      </div>
    </div>
  )

}
export default App