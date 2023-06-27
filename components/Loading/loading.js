import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div>
      <button
        disabled
        className="py-2 px-5 text-gray-200 flex justify-center items-center mx-auto bg-indigo-800 rounded-md cursor-not-allowed opacity-70"
      >
        <AiOutlineLoading3Quarters className="animate-spin" size={30} />
        LOADING
      </button>
    </div>
  );
};
export default Loading;
