import { FC } from '@tarojs/taro'
import React, { ReactElement, useRef } from 'react'
import { useState } from 'react';
import IndexContext from '../../Context/Index';
import Child from '../Child/Index';

interface IProp {

}

const Index: FC<IProp> = ({

}): ReactElement => {
  const [inputRef, setInput] = useState<string>("")


  return (
    <IndexContext>
      <input type="text" value={inputRef} onChange={e => setInput(e.target.value)} />
      <div>{inputRef}</div>
      <Child></Child>
      {/* <p>{inputRef.current?.value}</p> */}
    </IndexContext>
  )
}

export default Index