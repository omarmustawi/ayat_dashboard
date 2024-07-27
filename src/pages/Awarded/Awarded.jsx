import { useEffect, useState } from "react";
import { Col, Container, Row } from "../../Tools/Grid-system";
import * as component from "../../components";
import { API } from "../../Tools/API";
import axios from "axios";
function Awarded() {
  const [dataAll, setDataAll] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState({
    Scholarship_Type: "",
    Open_Registration: "",
  });
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchAwarded = async () => {
      try {
        const response = await axios.get(`${API}/ischolarships/`);
        setDataAll(response.data);
        setFilteredData(response.data);
      } catch (errors) {
        console.error("error", errors);
        setError("Reload the page.");
      }
    };
    fetchAwarded();
  }, []);

  const handleFilterChange = (name, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    const { Scholarship_Type, Open_Registration } = filter;
    const filtered = dataAll.filter((item) => {
      return (
        (Scholarship_Type ? item.Scholarship_Type === Scholarship_Type : true) &&
        (Open_Registration ? item.Open_Registration === Open_Registration : true)
      );
    });
    setFilteredData(filtered);
  };

  // const dataAll = [
  //   { id: 1, year: "2022", productType: "خاص" },
  //   { id: 2, year: "2023", productType: "عام" },
  //   { id: 3, year: "2024", productType: "موازي" },
  // ];
  return (
    <>
      <Container>
        <Row className="items-center">
          <component.Title className="text-2xl md:text-3xl" title="المنح" />
          <Col xs={4} className="flex items-center">
            <component.Data name="نوع المنحة" />
            <component.MultipleSelect
              options={[
                { name: "خاص", id: "منحة التعليم الخاص"},
                { name: " عام", id: "منحة التعليم العام" },
                { name: "موازي", id: "منحة التعليم الموازي" },
                { name: "الافتراضي", id: "منحة التعليم الافتراضي" },
              ]}
              onChange={(e) => handleFilterChange('Scholarship_Type', e.value)}
            />
          </Col>
          <Col xs={4} className="flex items-center">
            <component.Data name="التاريخ" />
            <component.MultipleSelect
              className="sm:w-[130px]"
              options={Array.from(
                { length: 30 },
                (_, index) => new Date().getFullYear() - index
              ).map((year) => ({
                name: `${year}`,
                id: year.toString(),
              }))}
              onChange={(e) => handleFilterChange("Open_Registration", e.value)}
            />
          </Col>
          <Col xs={3}>
            <component.MainButton
              name="بحث"
              className="!py-[0.4rem] !px-6 !rounded-md"
              onClick={handleSearch}
            />
          </Col>
        </Row>
        <Row justify="between">
          <Col lg={10} className="mx-auto">
            {error && <p>{error}</p>}

            <component.Table
              thead={["Id", "نوع المنحة", "العام"]}
              tData={filteredData}
              tbody={[
                "ID_Scholarships",
                "Scholarship_Type",
                "Open_Registration",
              ]}
              edit="awarded"
            />
          </Col>
        </Row>
        <component.Add link={`/awarded/add`} />
      </Container>
    </>
  );
}
export default Awarded;
