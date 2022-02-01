import React from 'react';

import style from '../Lista/style.module.scss';

interface ItemProps {
  title: string;
  time: string;
}

function Item({ title, time }: ItemProps) {
  return (
    <li className={style.item}>
      <h3>{title}</h3>
      <span>{time}</span>
    </li>
  );
}

export default Item;
