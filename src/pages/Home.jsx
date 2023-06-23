import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home flex h-full flex-col items-center justify-around bg-white">
      <div className="title w-full text-center text-xl tracking-wider text-neutral-900">
        Enter into student <br /> info system
      </div>
      <Link
        className="enroll_button flex items-center justify-center rounded bg-slate-600 px-4 py-2 text-white shadow-xl"
        to={`/chatbot`}
      >
        Enroll Now &rarr;
      </Link>
    </div>
  );
}

export default Home;
