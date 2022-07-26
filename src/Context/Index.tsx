import React, { PropsWithChildren, ReactElement } from 'react'
import { FC } from '@tarojs/taro';
import { useState } from 'react';

type context = {
  // chirldren: any
  text: string,
  changeText: (newValue: string) => void
}

interface Iprop {

}

export const Context = React.createContext<context>({} as context)


const IndexContext: FC<PropsWithChildren<Iprop>> = (props): ReactElement => {
  const [text, setText] = useState<string>("hello")

  const changeText = (newValue: string): void => {
    setText(newValue)
    return
  }

  return (
    <Context.Provider value={{
      // data
      text,
      changeText

    }}>
      {props.children}
    </Context.Provider>
  )
}

export default IndexContext
