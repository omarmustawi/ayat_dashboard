import { useEffect, useState } from "react";
import { Col, Container } from "../../Tools/Grid-system";
import * as component from "../../components";
import axios from "axios";
import { API } from "../../Tools/API";
function Specialties() {
  const [dataAll, setDataAll] = useState([]);
  const [error, setError] = useState('');

  

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const response = await axios.get(`${API}/specializations/`);
        setDataAll(response.data);
      } catch (errors) {
        console.error("error", errors);
        setError("Reload the page.");
      }
    };
    fetchSpecialties();
  }, []);



  // const dataAll = [
  //   { id: 1, name: "خاص" },
  //   { id: 2, name: "عام" },
  //   { id: 3, name: "موازي" },
  // ];
  return (
    <div>
      <Container>
        <component.Title className="text-2xl md:text-3xl" title="الإختصاص" />
          <Col lg={10} className="mx-auto">
            <component.Table
              thead={["Id", "اسم الإختصاص"]}
              tData={dataAll}
              tbody={["ID_Specialization", "Specialization"]}
              edit="specialties"
            />
          </Col>
        <component.Add link="/specialties/add" />
      </Container>
      { error && <p className="text-red-500 text-center"> {error} </p>}
    </div>
  );
}
export default Specialties;
