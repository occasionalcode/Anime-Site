import "./customStyle.css";

export default function LoadingScreen() {
  return (
    <div className=" h-screen w-screen flex justify-center items-center text-white bg-mainBackground">
      <div className="flex flex-col  gap-10 font-Montserrat">
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
}
