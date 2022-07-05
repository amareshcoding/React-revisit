import style from '../../style/Card.module.css';
const Card = ({ src, head, desc }) => {
  return (
    <>
      <div className={style.card}>
        <div className={style.card_img_div}>
          <img src={src} alt="divimage" className={style.card_img}/>
        </div>
        <div className={style.text_div}>
          <h3 className={style.head}>{head}</h3>
          <p className={style.desc}>{desc}</p>
          <a href="/" className={style.card_link}>Read More...</a>
        </div>
      </div>
    </>
  );
};

export default Card;


