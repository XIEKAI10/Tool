import React, { useState } from 'react';
import { useEffect } from 'react';

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  const change = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    // document.title = (count as unknown) as string;

    (document as any).title = count;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={change}>Click me</button>
    </div>
  );
}

export default Example;
