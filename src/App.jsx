import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux-toolkit/toolkitReduser";

function App() {
  const count = useSelector((state) => state.toolkit.count);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Счетчик {count}</h1>
      <button onClick={() => dispatch(increment())}>Инкремент</button>
      <button onClick={() => dispatch(decrement())}>Декремент</button>
    </div>
  );
}

export default App;
