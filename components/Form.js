import { useContext, useRef, useState } from "react";
import Checkbox from "./Checkbox";
import { StudentContext } from "@/context/StudentProvider";

function Form() {
  const { addList } = useContext(StudentContext);

  const List = [
    { id: 1, label: "Mon", value: false },
    { id: 2, label: "Tue", value: false },
    { id: 3, label: "Wed", value: false },
    { id: 4, label: "Thu", value: false },
    { id: 5, label: "Fri", value: false },
    { id: 6, label: "Sat", value: false },
    { id: 7, label: "Sun", value: false },
  ];

  const Time = [
    "00:00",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
  ];

  const [course_name, setCourse_name] = useState("");
  const [batch, setBatch] = useState("");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");

  const [chk_val, setChk_val] = useState([]);

  // const inputRef = useRefRef();
  const inputStartTime = useRef();
  const inputEndTime = useRef();
  // const inputDate = useRef();
  // const inputBatchNo = useRef();
  const resetForm = () => {
    setStartDate("");
    setEndDate("");
    setBatch("");
  };
  // const sortWeeks = (days) => {
  //   console.log(days);
  //   const weeks = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  //   const sortDays = days.sort((a, b) => {
  //     console.log(a);
  //     return weeks.indexOf(a) - weeks.indexOf(b);
  //   });
  //   return sortDays;
  // };
  const sortDays = (days) => {
    const softdate = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const sortDay = days.sort((day, date) => {
      return softdate.indexOf(day) - softdate.indexOf(date);
    });
    return sortDay;
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // const updays = sortWeeks(chk_val);
    const updays = sortDays(chk_val);

    const allData = {
      batch,
      chk_val: updays,
      // chk_val: updays,
      startTime,
      endTime,
      startdate,
      enddate,
    };
    addList(allData);
    setChk_val([]);
    let get = document.getElementsByName("check");
    for (var i = 0; i < get.length; i++) {
      get[i].checked = false;
    }
    inputStartTime.current.value = "00:00";
    inputEndTime.current.value = "00:00";
    resetForm();
  };

  const ChkHandleChange = (e) => {
    if (e.target.checked) {
      setChk_val([...chk_val, e.target.value]);
    } else {
      const upChkVal = chk_val.filter((item) => item != e.target.value);
      setChk_val(upChkVal);
    }
  };

  return (
    <div>
      <div className="container  flex flex-col gap-[28px]">
        <div className="mt-[60px]">
          <h3 className="font-semibold text-[16px] leading-[24px] text-[#466FB4]">
            Section
          </h3>
        </div>
        <form onSubmit={onSubmitHandler}>
          <div className="flex flex-col gap-[17px]">
            <div className="flex flex-col gap-[7px]">
              <label
                htmlFor=""
                className="font-medium text-[#152536] text-[18px] leading-[27px]"
              >
                Section Name
              </label>

              <input
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                type="text"
                className="rounded-[4px] border border-[#CED4DA] py-[8px] pl-[15px] w-[413px]"
                placeholder="Batch No"
              />
            </div>
            <div className="flex flex-col gap-[7px]">
              <label
                htmlFor=""
                className="font-medium text-[#152536] text-[18px] leading-[27px]"
              >
                Course
              </label>
              <div className="select w-[413px]">
                <select
                  name=""
                  id="select"
                  className=" rounded-[4px] border border-[#CED4DA] py-[8px] pl-[15px] "
                >
                  <option value="">Select Course </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-[7px]">
              <label
                htmlFor="check_text"
                className="font-medium text-[#152536] text-[18px] leading-[27px] cursor-pointer"
              >
                Days
              </label>
              <div className="flex gap-[14px] cursor-pointer ">
                {List.map((item) => {
                  return (
                    <Checkbox
                      key={item.id}
                      item={item}
                      name="check"
                      id="check_text"
                      ChkHandleChange={ChkHandleChange}
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-[7px]">
              <label
                htmlFor=""
                className="font-medium text-[#152536] text-[18px] leading-[27px]"
              >
                Section Start Date
              </label>
              <div className=" w-[172px]">
                <input
                  type="date"
                  name=""
                  id=""
                  value={startdate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="rounded-[4px] border border-[#CED4DA] py-[8px] pl-[15px] "
                />
              </div>
            </div>
            <div className="flex flex-col gap-[7px]">
              <label
                htmlFor=""
                className="font-medium text-[#152536] text-[18px] leading-[27px]"
              >
                Section End Date
              </label>
              <div className=" w-[172px]">
                <input
                  type="date"
                  name=""
                  id=""
                  value={enddate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="rounded-[4px] border border-[#CED4DA] py-[8px] pl-[15px] "
                />
              </div>
            </div>
            <div className="flex gap-[24px] items-center">
              <div className="flex flex-col gap-[7px]">
                <label
                  htmlFor=""
                  className="font-medium text-[#152536] text-[18px] leading-[27px]"
                >
                  Start time
                </label>
                <div className="select w-[172px]">
                  <select
                    onChange={(e) => setStartTime(e.target.value)}
                    ref={inputStartTime}
                    defaultValue={"00:00"}
                    id="select"
                    className=" rounded-[4px] border border-[#CED4DA] py-[8px] pl-[15px] "
                  >
                    {Time.map((val, index) => {
                      return index == 0 ? (
                        <option disabled>{val}</option>
                      ) : (
                        <option value={val}>{val}</option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div>
                <span className="  inline-block w-[20px] h-[2px] bg-[#000000] mt-[24px]"></span>
              </div>

              <div className="flex flex-col gap-[7px]">
                <label
                  htmlFor=""
                  className="font-medium text-[#152536] text-[18px] leading-[27px]"
                >
                  End Time
                </label>
                <div className="select w-[172px]">
                  <select
                    onChange={(e) => setEndTime(e.target.value)}
                    defaultValue={"00:00"}
                    id="select"
                    ref={inputEndTime}
                    className=" rounded-[4px] border border-[#CED4DA] py-[8px] pl-[15px] "
                  >
                    {Time.map((val, index) => {
                      return index == 0 ? (
                        <option disabled>{val}</option>
                      ) : (
                        <option value={val}>{val}</option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[7px]">
              <label
                htmlFor=""
                className="font-medium text-[#152536] text-[18px] leading-[27px]"
              >
                Batch No
              </label>

              <input
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                type="text"
                className="rounded-[4px] border border-[#CED4DA] py-[8px] pl-[15px] w-[413px]"
                placeholder="Batch No"
              />
            </div>
            <div className=" mt-[34px]">
              <button className="py-3 px-5 border-0 bg-[#093A8B] text-[#FFFFFF] text-[20px] font-semibold leading-[30px] rounded-[4px]">
                Create Section
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
