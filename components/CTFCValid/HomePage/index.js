import MainPage from "./MainPage";
import CertificateForm from "./CertificateForm";
const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen m-2">
      <div
        className="flex flex-col w-full max-w-[500px] rounded-lg  mx-1 px-3 py-[3rem] md:p-[3rem] "
        style={{
          boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
          border: "1px solid #e9f1f7",
        }}
      >
        <MainPage />
        <CertificateForm />
      </div>
    </div>
  );
};

export default HomePage;
