import React from 'react'
import { useContext } from 'react';
import { Context } from './../../Context/Index';

const Child = () => {
  const { text } = useContext(Context)
  return (
    <div>{text}</div>
  )
}

export default Child
