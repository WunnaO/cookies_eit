import { useContext } from "react";
import ListItem from "./TableRow";
import { StudentContext } from "@/context/StudentProvider";

function Table() {
  const { studentList } = useContext(StudentContext);
  return (
    <div className="mt-[47px] mb-[75px]">
      <table className="container w-full  border border-1">
        <thead>
          <tr className="border border-1">
            <th>Course</th>
            <th>Days</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Start time</th>
            <th>End time</th>
            <th>Batch No </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentList &&
            studentList.map((item, index) => (
              <ListItem item={item} key={index} />
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
