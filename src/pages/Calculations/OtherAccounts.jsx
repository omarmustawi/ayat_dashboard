import React, { useEffect, useState } from "react";
import { Col, Row } from "../../Tools/Grid-system";
import * as component from "../../components";
import axios from "axios";
import { API } from "../../Tools/API";

function OtherAccounts() {
  const [otherAccountsData, setOtherAccountsData] = useState([]);
  const [error, setError] = useState("");

  const [filteredData, setFilteredData] = useState([]);
  const [searchFirstName, setSearchFirstName] = useState("");
  const [searchLastName, setSearchLastName] = useState("");
  const [searchType, setSearchType] = useState("");

  useEffect(() => {
    const fetchOtherAccounts = async () => {
      try {
        const response = await axios.get(`${API}/users/`);
        setOtherAccountsData(response.data);
        setFilteredData(response.data);
      } catch (errors) {
        console.error("error", errors);
        setError("Reload the page.");
      }
    };

    fetchOtherAccounts();
  }, []);

  // Function to handle deletion
  const handleDelete = async (employee) => {
    try {
      await axios.delete(`${API}/users/${employee.id}/`);
      // Remove the deleted employee from state
      setOtherAccountsData(
        otherAccountsData.filter((e) => e.id !== employee.id)
      );
      setFilteredData(filteredData.filter((e) => e.id !== employee.id));
      setError(""); // Clear error if successful
    } catch (errors) {
      console.error("Deletion error", errors);
      setError("Failed to delete the employee.");
    }
  };

  const handleSearch = () => {
    const filtered = otherAccountsData.filter(
      (account) =>
        account.first_name
          .toLowerCase()
          .includes(searchFirstName.toLowerCase()) &&
        account.last_name
          .toLowerCase()
          .includes(searchLastName.toLowerCase()) &&
        account.account_type.toLowerCase().includes(searchType.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSelectChange = (name,value) => {
    setSearchType(value);
  };



  // const dataAll = [
    //     { id: 1, type: "موظف", last_name: "الراعي", first_name: "محمد" },
    //     { id: 2, type: "مدير", last_name: "بزبوز", first_name: "محمد" },
    //     { id: 3, type: "مدير", last_name: "شاهين", first_name: "مراوان" },
    //   ];
  return (
    <>
      <Row className=" items-center">
        <Col sm={3} className="flex items-center">
          <component.Data name="الاسم الأول" />
          <component.Input
            hideTitle={true}
            placeholder="الاسم الأول"
            className="sm:w-[130px]"
            value={searchFirstName}
            onChange={(e) => setSearchFirstName(e.target.value)}
          />
        </Col>
        <Col sm={3} className="flex items-center">
          <component.Data name="الاسم الأخير" />
          <component.Input
            hideTitle={true}
            placeholder="الاسم الأخير"
            className="sm:w-[130px]"
            value={searchLastName}
            onChange={(e) => setSearchLastName(e.target.value)}
          />
        </Col>
        <Col sm={3} className="flex items-center">
          <component.Data name="نوع الحساب" />
          <component.MultipleSelect
            options={[{name: "موظفين", id: "1"}, {name: "مدير", id: "2"}]}
            placeholder="نوع الحساب"
            className="sm:w-[130px]"
          />
        </Col>
        <Col sm={2} className="flex items-center">
          <component.MainButton
            name="بحث"
            className="!py-[0.4rem] !px-6 !rounded-md"
          />
        </Col>
      </Row>
      <Row justify="between">
        <Col lg={10} className="mx-auto">
          <component.Table
            thead={["الرقم", "الاسم الأول", "الاسم الأخير", "نوع الحساب"]}
            tData={filteredData}
            tbody={["id", "first_name", "last_name", "account_type"]}
            funDelete={handleDelete}
            edit="calculations/false"
          />
        </Col>
      </Row>
      {error && <p className="text-red-500 text-center"> {error} </p>}
    </>
  );
}

export default OtherAccounts;
