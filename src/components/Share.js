import React from "react";

const showApiResult = (props) => {
  if(props.cardURL){
    return (
      <div>
      <p className="share__result">
      <a className="share__result-link" href={props.cardURL} target="_blank" rel="noopener">{props.cardURL}</a>
      </p>
      <a href={`https://twitter.com/intent/tweet/?text=generate+with+AWESOME+PROFILE+CARDS&url=${props.cardURL}`} class="twitterLink js-twitterLink" target="_blank" rel="noopener">
      <div class="share__button--blue">
        <i class="fab fa-twitter share__button__icon"></i>
        <h2 class="share__button--text">Compartir en Twitter</h2>
      </div>
      </a>
    </div>
    )
  } else{
   return ( 
   <div>
   <p className="share__result"> {props.cardError}</p>
   </div>)
  }
}

const Share = props => {
  return (
    <div className="folded__form js-form">
      <div className="share__button">
        <button type="submit" className="share__button--orange js-shareBtn" onClick={props.getDataFromApi}>
          <i className="far fa-address-card share__button--orange--icon"></i>
          <h2 className="share__button--orange--text">CREAR TARJETA</h2>
        </button>
        {showApiResult(props)}
      </div>
    </div>
  );
}
export default Share;
