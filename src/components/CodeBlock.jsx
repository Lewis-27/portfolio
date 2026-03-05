import React from 'react'

const CodeBlock = ({text}) => {
  return (
    <span className='bg-gray-300 p-1 text-sm rounded font-mono whitespace-pre-wrap'>
      {text}
    </span>
  )
}

export default CodeBlock
