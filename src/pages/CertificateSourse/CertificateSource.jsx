import { useEffect, useState } from "react";
import { Col, Container } from "../../Tools/Grid-system";
import * as component from "../../components";
import axios from "axios";
import { API } from "../../Tools/API";
function CertificateSource() {
  const [dataAll, setDataAll] = useState([]);
  const [error, setError] = useState('');

  

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const response = await axios.get(`${API}/certificates/`);
        const modifiedData = response.data.map(item => ({
          ...item,
          Active: item.Active ? "مفعل" : "غير مفعل"
        }))
        setDataAll(modifiedData);
      } catch (errors) {
        console.error("error", errors);
        setError("Reload the page.");
      }
    };
    fetchSpecialties();
  }, []);



  // const dataAll = [
  //   { id: 1, source: "دمشق", status: "مفعل" },
  //   { id: 2, source: "حمص", status: "غير مفعل" },
  //   { id: 3, source: "حلب", status: "مفعل" },
  // ];
  return (
    <div>
      <Container>
        <component.Title className="text-2xl md:text-3xl" title="مصادر الشهادات" />
          <Col lg={10} className="mx-auto">
            <component.Table
              thead={["Id", "مصدر الشهادة", "حالة الشهادة"]}
              tData={dataAll}
              // tbody={["id", "source", "status"]}
              tbody={["ID_Certificate_Sources", "Certificate_Source", "Active"]}
              edit="certificates"
            />
          </Col>
        <component.Add link="/certificates/add" />
      </Container>
      { error && <p className="text-red-500 text-center"> {error} </p>}
    </div>
  );
}
export default CertificateSource;
