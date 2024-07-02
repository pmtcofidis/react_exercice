import { useState, useEffect } from "react";

const CounterComponent = ({
  handleClick,
  title,
}: {
  handleClick: () => void;
  title: string;
}) => {
  return (
    <div>
      <button onClick={handleClick}>{title}</button>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 2000);
  }, []);

  const onIncrement = () => {
    setCount(count + 1);
  };

  const onDecrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      {count > 0 && (
        <div>
          <CounterComponent handleClick={onIncrement} title={"Increment"} />
          <CounterComponent handleClick={onDecrement} title={"Decrement"} />
        </div>
      )}
      <br></br>
      {count > 0 && `${count} counts`}
    </div>
  );
};

export default App;
