import { RiLoader4Line } from "react-icons/ri";

const Button = () => {
  return (
    <button
      className={`bg-[#093a8b] transition-all btn duration-[.5s] rounded-md text-white border-[#222557] py-[0.375rem] px-[0.75rem] flex items-center gap-1 text-[16px] leading-[1.5] font-[600] 
        opacity-80 cursor-not-allowed
      `}
      disabled
    >
      <RiLoader4Line className="animate-spin" size={20} />
      Loading
    </button>
  );
};

export default Button;
