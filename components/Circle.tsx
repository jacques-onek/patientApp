import React from 'react'

type Props = {
  classStyle:string,
  icons:React.ElementType
}
const Circle = ({classStyle, icons:Icons}:Props) => {
  return (
    <p className={classStyle}>
      <Icons/>
    </p>
  )
}

export default Circle
