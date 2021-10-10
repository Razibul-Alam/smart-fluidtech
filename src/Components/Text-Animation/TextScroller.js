import React, { useState, useEffect } from "react";
import Typist from "react-typist";
function TextScroller () {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  return (
    <div className='text-light text-center'>
      {count ? (
        <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
          <span className='fs-5'>EXPERT IN WATER TREATMENT SYSTEM</span>
          <Typist.Backspace count={20} delay={1000} />
          
        </Typist>
      ) : (
        ''
      )}
    </div>
  );
}

export default TextScroller;