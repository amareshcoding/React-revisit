import style from '../../style/Button.module.css';
// import Link from 'react-dom';

const Button = ({ text, path }) => {
  return (
    <>
      <button className={style.button_comp}>
        {text} 
      </button>
    </>
  );
};
export default Button;