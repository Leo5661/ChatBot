import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetStore } from "../redux/slices/student";

function Details() {
  const navigate = useNavigate();
  const name = useSelector((state) => state.student.studentName);
  const age = useSelector((state) => state.student.studentAge);
  const dispatch = useDispatch();

  const goToHome = () => {
    dispatch(resetStore());
    navigate("/");
  };

  return (
    <div className="home flex h-full flex-col items-center justify-center bg-white">
      <div className="title w-full text-center text-xl tracking-wider text-neutral-900">
        {`Your name ${name} aged ${age} has been added to student system`}{" "}
        <br /> You may exit
      </div>
      <button
        className="enroll_button flex items-center justify-center rounded bg-slate-600 px-4 py-2 text-white shadow-xl"
        onClick={goToHome}
      >
        Exit &rarr;
      </button>
    </div>
  );
}

export default Details;
