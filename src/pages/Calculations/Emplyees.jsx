import React, { useEffect, useState } from "react";
import { Col, Row } from "../../Tools/Grid-system";
import * as component from "../../components";
import axios from "axios";
import { API } from "../../Tools/API";

function Emplyees() {

  const [EmplyeesData, setEmplyeesData] = useState([]);
  const [error, setError] = useState('');

  const [filteredData, setFilteredData] = useState([]);
  const [searchFirstName, setSearchFirstName] = useState("");
  const [searchLastName, setSearchLastName] = useState("");



  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(`${API}/evaluators/`);
        setEmplyeesData(response.data);
        setFilteredData(response.data);
      } catch (errors) {
        console.error("error", errors);
        setError("Reload the page.")
      }
    };

    fetchEmployees();

  }, []);





// Function to handle deletion
const handleDelete = async (employee) => {
  try {
    await axios.delete(`${API}/evaluators/${employee.ID_Employee}/`);
    // Remove the deleted employee from state
    setEmplyeesData(EmplyeesData.filter(e => e.ID_Employee !== employee.ID_Employee));
    setFilteredData(filteredData.filter(e => e.ID_Employee !== employee.ID_Employee));
    setError(""); // Clear error if successful
  } catch (errors) {
    console.error("Deletion error", errors);
    setError("Failed to delete the employee.");
  }
};



const handleSearch = () => {
  const filtered = EmplyeesData.filter(employee =>
    employee.first_name.toLowerCase().includes(searchFirstName.toLowerCase()) &&
    employee.last_name.toLowerCase().includes(searchLastName.toLowerCase())
  );
  setFilteredData(filtered);
};



  // const dataAll = [
  //   { id: 1, last_name: "الراعي", first_name: "محمد" },
  //   { id: 2, last_name: "بزبوز", first_name: "محمد" },
  //   { id: 3, last_name: "شاهين", first_name: "مراوان" },
  // ];


  return (
    <>
      <Row justify={"center"}>
        <Col className="flex gap-4 items-center">
          <component.Data name="تشغيل الحسابات" />
          <component.Toggle />
        </Col>
      </Row>
      <Row className="items-center">
        <Col xs={4} className="flex items-center">
          <component.Data name="الاسم الأول" />
          <component.Input
            hideTitle={true}
            placeholder="الاسم الأول"
            className="sm:w-[130px]"
            value={searchFirstName}
            onChange={(e) => setSearchFirstName(e.target.value)}
          />
        </Col>
        <Col xs={4} className="flex items-center">
          <component.Data name="الاسم الأخير" />
          <component.Input
            hideTitle={true}
            placeholder="الاسم الأخير"
            className="sm:w-[130px]"
            value={searchLastName}
            onChange={(e) => setSearchLastName(e.target.value)}
          />
        </Col>
        <Col xs={3} className="flex items-center">
          <component.MainButton
            name="بحث"
            className="!py-[0.4rem] !px-6 !rounded-md"
            onClick={handleSearch}
          />
        </Col>
      </Row>
      <Row justify="between">
        <Col lg={10} className="mx-auto">
          <component.Table
            thead={["الرقم", "الاسم الأول", "الاسم الأخير"]}
            tData={filteredData || []}
            // tbody={["id", "first_name", "last_name"]}
            tbody={["ID_Employee", "first_name", "last_name"]}
            // funDelete={true}
            funDelete={handleDelete}
            edit="calculations/true"
          />
        </Col>
      </Row>
      { error && <p className="text-red-500 text-center"> {error} </p>}
    </>
  );
}

export default Emplyees;
