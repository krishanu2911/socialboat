import React from 'react'

export const InitalQueryState = () => {
  return (
    <div className=" w-full grid grid-cols-1 place-items-center font-semibold">
        <img className=' max-w-[10rem]' src='/emptyState.svg' />
        <h1>Start searching videos...</h1>
    </div>
  )
}
