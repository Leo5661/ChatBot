import { useDispatch, useSelector } from "react-redux";
import { addAge } from "../redux/slices/student";

const ageList = [
  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37,
  38, 39, 40,
];

function AgeDropDown(props) {
  const age = useSelector((state) => state.student.studentAge);
  const dispatch = useDispatch();
  const handelOnChange = (e) => {
    e.preventDefault();
    dispatch(addAge(e.target.value));
    props.actions.handelAge(e.target.value);
  };

  return (
    <form>
      <select
        className="ms-12 w-48 p-1 outline-none "
        onChange={(e) => {
          dispatch(addAge(e.target.value));
          handelOnChange(e);
        }}
      >
        {ageList.map((value, index) => {
          return <option key={index}>{value}</option>;
        })}
      </select>
    </form>
  );
}

export default AgeDropDown;
