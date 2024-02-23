import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../slice/counterSlice';

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button> {count} <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter
