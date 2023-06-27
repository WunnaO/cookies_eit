import { CertificateContext } from "@/context/CertificateProvider";
import { ModalContext } from "@/context/ModalProvider";
import React, { useContext } from "react";

const Modal = () => {
  const { studentData, modal, setModal } = useContext(CertificateContext);
  const { dateHandler, getYear } = useContext(ModalContext);

  console.log(bgImage);

  const ModalHandler = () => {
    setModal(!modal);
  };

  return (
    modal &&
    studentData && (
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="relative flex justify-center items-center max-w-[640px] w-full rounded-lg shadow-lg mx-3 my-[3rem] md:m-[3rem] h-[50vh] ">
          <button
            className="text-white absolute top-0 right-0 p-[.5rem]  bg-red-500 mb-4 hover:text-red-700  hover:bg-transparent transition-all z-20"
            onClick={ModalHandler}
          >
            <MdOutlineClose />
          </button>
          <Image
            src={bgImage}
            alt="bg"
            width={bgImage.width}
            height={bgImage.height}
            className="absolute top-0 left-0 w-[100%] h-full"
            priority={true}
          ></Image>
          <div className="z-20">
            <div className="text-center text-[1.4rem] md:text-[2rem] font-[550]">
              <span className="studentName">{studentData.trainee.name}</span>
              <span className="text-[1.2rem] studentName md:text-[1.5rem] opacity-[0.75] font-[200] ">
                {" "}
                has completed{" "}
              </span>
            </div>
            <div className="text-center  text-[1.2rem] md:text-[1.7rem] courseName text-[#0ca6d9] font-semibold  flex  items-center mb-0 md:mb-2 justify-center gap-1">
              <span className="capitalize">
                {studentData.section.course.course_name}
              </span>
              <span className="text-[1rem] font-[200] md-[1.3rem] courseName">
                {`(Batch-${studentData.section.batch_no})`}
              </span>
            </div>
            <div className="text-center text-[1.1rem] md:text-[1.2rem] opacity-80 flex flex-col md:flex-row  justify-center mb-3 ">
              <div>
                <span>{`${dateHandler(
                  studentData.section.section_start_date
                )} to `}</span>
                <span>{`${dateHandler(
                  studentData.section.section_end_date
                )}, `}</span>
                <span>{getYear(studentData.section.section_end_date)}</span>
              </div>
              <div className="">
                &nbsp;at <span className="font-[600]">EIT</span> Learning Campus
              </div>
            </div>
          </div>
        </div>

        <PartyCracker />
      </div>
    )
  );
};

export default Modal;
