import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
} from "../../redux/features/counter/counterSlice";
import { RootState } from "../../redux/store";

const User = () => {
  const count = useSelector((state: RootState) => state.counterR.value);
  const dispatch = useDispatch();
  return (
    <div className="text-red-700  ">
      <p>Hello </p>

      <p>Count : {count} </p>

      <button
        className="bg-pink-500 py-5 mr-5"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span className="text-xl font-bold mr-5">{count}</span>
      <button
        className="bg-blue-500 py-5"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default User;
