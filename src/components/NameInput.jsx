import { useDispatch, useSelector } from "react-redux";
import { addName } from "../redux/slices/student";

function NameInput(props) {
  const name = useSelector((state) => state.student.studentName);
  const dispatch = useDispatch();
  const handelOnSubmit = (e) => {
    e.preventDefault();
    props.actions.handelInput(name);
  };

  return (
    <form onSubmit={(e) => handelOnSubmit(e)}>
      <input
        id="name"
        name="name"
        className="ms-10 rounded border border-blue-400 p-1 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-blue-700"
        placeholder="Name"
        value={name}
        onChange={(e) => dispatch(addName(e.target.value))}
      />
    </form>
  );
}
export default NameInput;
