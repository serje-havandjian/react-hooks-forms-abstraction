import React, { useState } from "react";

function Form() {

  const [formData, setFormData] = useState({
    firstName: "John",
    lastName:"Henry",
    middleName:"Panos",
    admin:false,
  })

  function handleChange(event){
    const name = event.target.name
    const value = event.target.value

    if(event.target.type === "checkbox"){
      value = event.target.checked
    }

    setFormData({
      ...formData,
      [name]: value
    })
  }

  console.log(formData)


  return (
    <div>
    <form>
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <input type="text" name="middleName" onChange={handleChange} value ={formData.middleName} />
      <input type="checkbox" name="admin" onChange={handleChange} checked={formData.admin} />
      <button type="submit">Submit</button>
    </form>

    <h3>
      {formData.firstName}
    </h3>
    <h4>{formData.lastName}</h4>
    </div>

  );
}

export default Form;
