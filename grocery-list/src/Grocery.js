import React from 'react';
import classnames from 'classnames';
import './Grocery.css';

const Grocery = ({ name, quantity, notes, purchased, starred, onPurchase, onStar, onDelete}) => {
  return(
    <article className={classnames('Grocery', { starred, purchased, quantity })}>
      <h3>{name}</h3>
      { quantity && <p className="Grocery-quantity">Quantity: {quantity}</p> }
      { notes && <p className="Grocery-notes">Notes: {notes}</p> }
    </article>
  );
};

export default Grocery;

// {starred ? 'starred' : ''}
//
// if(starred){return 'starred'}
// else{return ''}

//How does this:
  {/* <article className={`Grocery ${starred && 'starred' }`}> */}
//dynamically add the 'starred' class?!
