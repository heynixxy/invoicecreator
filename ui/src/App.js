import axios from "axios";
import Container from "./components/Container";
import Form from "./components/Form";
import { saveAs } from "file-saver";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const createAndDownloadInvoice = (invoiceData) => {
    const formData = new FormData();

    const {
      details: { companyLogo },
    } = invoiceData;

    formData.append("companyLogo", companyLogo);

    invoiceData.details.companyLogo = "";

    formData.append("invoiceData", JSON.stringify(invoiceData));

    axios
      .post("/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => axios.get("/download", { responseType: "blob" }))
      .then((res) => {
        const invoicePdfBlob = new Blob([res.data], {
          type: "application/pdf",
        });

        const invoicePreviewUrl = URL.createObjectURL(invoicePdfBlob);

        window.open(invoicePreviewUrl, "_blank");

        saveAs(invoicePdfBlob, `invoice_${new Date().getTime()}.pdf`);
      });
  };

  return (
    <div>
      <Header />
      <Container>
        <Form onCreateAndDownloadInvoice={createAndDownloadInvoice} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
