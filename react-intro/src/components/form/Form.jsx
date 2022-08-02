import React from 'react';
import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    pass: '',
  });
  const handdleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handdleSubmit = (e) => {
    e.preventDefault();
    //
    console.log(formData);
//     setFormData({
//       name: '',
//       age: '',
//       email: '',
//       pass: '',
//     });
  };
  return (
    <div>
      <form onSubmit={handdleSubmit}>
        <div>
          <label htmlFor="">Name :</label>
          <input
            type="text"
            placeholder="name.."
            name="name"
            value={formData.name}
            onChange={handdleChange}
          />
        </div>
        <div>
          <label htmlFor="">Age :</label>
          <input
            type="number"
            placeholder="age.."
            name="age"
            value={formData.age}
            onChange={handdleChange}
          />
        </div>
        <div>
          <label htmlFor="">Email :</label>
          <input
            type="email"
            placeholder="email.."
            name="email"
            value={formData.email}
            onChange={handdleChange}
          />
        </div>
        <div>
          <label htmlFor="">Password :</label>
          <input
            type="password"
            placeholder="pass.."
            name="pass"
            value={formData.pass}
            onChange={handdleChange}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
