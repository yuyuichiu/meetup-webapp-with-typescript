import React from 'react';

import styles from './Button.module.css'

const Button: React.FC<any> = (props) => {
  const { className, ...other } = props;

  return <button className={`${styles.btn} ${className}`} {...other}>
    {props.children}
  </button>
}

export default Button