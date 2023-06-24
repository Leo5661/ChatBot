import { useSelector } from "react-redux";

function Details() {
  const name = useSelector((state) => state.student.studentName);
  const age = useSelector((state) => state.student.studentAge);

  return (
    <div className="home flex h-full flex-col items-center justify-center bg-white">
      <div className="title w-full text-center text-xl tracking-wider text-neutral-900">
        {`Your name ${name} aged ${age} has been added to student system`}{" "}
        <br /> You may exit
      </div>
    </div>
  );
}

export default Details;
