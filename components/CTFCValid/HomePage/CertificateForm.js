import { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CertificateContext } from "@/context/CertificateProvider";
import Button from "./Button";

const CertificateForm = () => {
  const [cerID, setCerID] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    getAllCertificate,
    error,
    setError,
    invalidID,
    setInvalidID,
    ErrorHandler,
  } = useContext(CertificateContext);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    if (!cerID) {
      setError(true);
      setInvalidID(false);
    } else {
      setLoading(true);
      console.log(cerID);
      await getAllCertificate(cerID);
      setError(false);
    }
    setCerID("");
    setLoading(false);
  };

  return (
    <div>
      <form
        className="flex  flex-col justify-center w-[100%] gap-2"
        onSubmit={(e) => SubmitHandler(e)}
      >
        <div className="w-[100%] flex gap-2">
          <input
            type="text"
            readOnly={loading}
            placeholder="Enter Verification Code"
            className={`w-[75%] border-2 ${
              loading && "focus:outline-none cursor-auto"
            } rounded-md px-3`}
            autoFocus={false}
            value={cerID}
            onKeyPress={ErrorHandler}
            onChange={(e) => setCerID(e.target.value.trim())}
          />
          {loading ? (
            <Button />
          ) : (
            <button className="bg-[#093a8b] hover:bg-[#245dbc] transition-all duration-[.5s] rounded-md text-white border-[#093a8b] py-[0.375rem] px-[0.75rem] flex items-center gap-1 text-[16px] leading-[1.5] font-[600]">
              <AiOutlineSearch /> Find
            </button>
          )}
        </div>
      </form>

      {error && (
        <div className="text-red-600 text-[13px]">
          **Please type unique ID from your certificate!
        </div>
      )}
      {invalidID && (
        <div className="text-red-600 text-[16px] font-[500] text-center mt-3">
          Your Certificate ID is invalid. Please type the valid ID!
        </div>
      )}
    </div>
  );
};

export default CertificateForm;
