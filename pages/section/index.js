import { StudentProvider } from "@/context/StudentProvider";
import Table from "@/components/Table";
import Form from "@/components/Form";
import Head from "next/head";

function Section() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <StudentProvider>
        <Form />

        <Table />
      </StudentProvider>
    </>
  );
}
export default Section;
