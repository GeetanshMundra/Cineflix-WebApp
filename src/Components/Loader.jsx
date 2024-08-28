import loader from "/loader.gif";

function Loader() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <img className="h-[50%] object-cover" src={loader} alt="Loading..." />
    </div>
  );
}

export default Loader;
