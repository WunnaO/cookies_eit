const Checkbox = ({ item, ChkHandleChange, name }) => {
  return (
    <div className="flex gap-[7px]">
      <input
        type="checkbox"
        id={item.id}
        value={item.label}
        name={name}
        onChange={ChkHandleChange}
        className="cursor-pointer"
      />
      <label className="cursor-pointer" htmlFor={item.id}>
        {item.label}{" "}
      </label>
    </div>
  );
};

export default Checkbox;
