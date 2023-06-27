function ListItem({ item }) {
  const FormattedDate = (name) => {
    let d = new Date(name);
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let year = d.getFullYear();
    let result = [date, month, year].join("-");
    return result;
  };
  const FormattedEndDate = (name) => {
    let d = new Date(name);
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let year = d.getFullYear();
    let result = [date, month, year].join("-");
    return result;
  };
  return (
    <tr className="">
      <td></td>
      <td>{item.chk_val.join(", ")}</td>
      <td>{FormattedDate(item.startdate)}</td>
      <td>{FormattedEndDate(item.enddate)}</td>
      <td>{item.startTime}</td>
      <td>{item.endTime}</td>
      <td>{item.batch}</td>
      <td className="flex justify-around ">
        <button className="bg-red-600 px-[10px] py-[3px] border-[2px] border-red-600 duration-500 rounded-md text-white hover:bg-red-700 hover:text-red-200">
          Delete
        </button>
        <button className="bg-green-600 px-[15px] py-[3px] border-[2px] border-green-700 rounded-md duration-500 text-white hover:bg-green-700 hover:text-green-200">
          Edit
        </button>
      </td>
    </tr>
  );
}
export default ListItem;
