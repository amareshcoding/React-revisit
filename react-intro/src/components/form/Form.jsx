import React from 'react';

const Form = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="">Name :</label>
          <input type="text" placeholder='name..' />
        </div>
        <div>
          <label htmlFor="">Email :</label>
          <input type="email" placeholder='email..' />
        </div>
        <div>
          <label htmlFor="">Password :</label>
          <input type="password" placeholder='pass..'  />
        </div>
        <div>
          <label htmlFor="">Age :</label>
          <input type="number" placeholder='age..' />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
