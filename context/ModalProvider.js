import { createContext } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const dateHandler = (dateData) => {
    const date = new Date(dateData);
    const day = date.getHours();
    console.log(day);
    const options = { month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
  };

  const getYear = (dateData) => {
    const date = new Date(dateData);
    const year = date.getFullYear();
    return year;
  };
  return (
    <ModalContext.Provider
      value={{
        dateHandler,
        getYear,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
