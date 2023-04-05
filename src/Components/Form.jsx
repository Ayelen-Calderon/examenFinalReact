import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [input, setInput] = useState({
    inputName:"",
    inputEmail:""
  })

  const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const nameValidation = /^[a-zA-Z]+$/

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handleChange = (event) => {
    setInput({
       ...input, 
      [event.target.name] : event.target.value 
    })
  }

  const enviarForm = (event) => {
   
    event.preventDefault()
    if(input.inputName.indexOf(" ") !== 0
      && nameValidation.test(input.inputName)
      && input.inputName.length > 5
      && (emailValidation).test(input.inputEmail)
      )
    {
     
      setShow(`Gracias ${input.inputName}, te contactaremos cuando antes vía mail`)
      setErr(false)
      setInput({ inputName: "", inputEmail: "" }); 

    } else {
      setErr(true)
      setShow(false)
   
    }
    
  }
  

  return (

    <div>
      <form onSubmit={enviarForm}>
        <br />
        <label>Please enter your name: </label>
        <input name='inputName' type="text" placeholder="Name" value={input.inputName} onChange={handleChange}/>
        <br />
        <label>Please enter your email: </label>
        <input name='inputEmail' type="text" placeholder="myemail@email.com" value={input.inputEmail} onChange={handleChange}/>
        <br />
        <button>Send</button>
        <br />
      </form>
      {err ? (<h3>Por favor verifique su información nuevamente</h3>) 
      : show ?  (<h3>{show}</h3>) : null}
    </div>
  );
};

export default Form;
