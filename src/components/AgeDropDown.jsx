import { useDispatch, useSelector } from "react-redux";

function AgeDropDown() {
  const age = useSelector((state) => state.student.studentAge);
  const dispatch = useDispatch();
  const handelOnSubmit = (e) => {
    e.preventDefault();
    props.actions.handelAge(age);
  };

  return (
    <form onSubmit={(e) => handelOnSubmit(e)}>
      <select>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </form>
  );
}

export default AgeDropDown;
