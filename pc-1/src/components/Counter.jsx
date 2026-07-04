import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/counterSlice';

const Counter = () => {
  const num = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-card">
      <div className="counter-title">Redux Toolkit Counter</div>
      <h1 className="counter-value">{num}</h1>

      <div className="button-group-primary">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(increment())}
          title="Increment by 1"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Increment
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(decrement())}
          title="Decrement by 1"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Decrement
        </button>
      </div>

      <div className="button-group-secondary">
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(incrementByAmount(2))}
          title="Add 2"
        >
          +2 More
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(incrementByAmount(5))}
          title="Add 5"
        >
          +5 More
        </button>
      </div>
    </div>
  );
};

export default Counter;
