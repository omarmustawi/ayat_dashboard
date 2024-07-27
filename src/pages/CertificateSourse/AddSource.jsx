import { useEffect, useState } from "react";
import { Col, Container, Row } from "../../Tools/Grid-system";
import * as component from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../Tools/API";
function AddSource() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Certificate_Source: "",
    Active: true,
    ID_Certificate_Sources: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleToggleChange = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      Active: !prevFormData.Active,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id !== "add") {
        await axios.put(`${API}/certificates/${id}/`, formData);
      } else {
        await axios.post(`${API}/certificates/`, formData);
      }
      navigate("/certificates");
    } catch (errors) {
      console.error("Error adding certificates: ", errors);
      setError("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    if (id !== "add") {
      const fetchCertificates = async () => {
        try {
          const response = await axios.get(`${API}/certificates/${id}/`);
          setFormData(response.data);
        } catch (err) {
          console.error("Error fetching Certificates data:", err);
        }
      };
      fetchCertificates();
    }
  }, [id]);

  const dataInputs = [
    { type: "text", name: "Certificate_Source", placeholder: "اسم الشهادة" },
    // { type: "text", name: "Active", placeholder: "الحالة" },
  ];

  return (
    <>
      <Container>
        <component.Title
          className="text-2xl md:text-3xl"
          title={`${id === "add" ? "أضف مصدر" : "عدل مصدر"}`}
        />
        <Col md={6} className="mx-auto">
          <Row justify="center" className="bg-Third shadow-sm rounded-2xl p-5">
            {dataInputs.map((e, i) => {
              return (
                <Col md={6} key={i}>
                  <component.Input
                    type={e.type}
                    name={e.name}
                    placeholder={e.placeholder}
                    value={formData[e.name]}
                    onChange={handleInputChange}
                    minValue={e.minValue}
                  />
                </Col>
              );
            })}
            <Col className="flex justify-center">
              <component.Data name="حالة الشهادة" />
              <component.Toggle 
                value={formData.Active}
                onChange={handleToggleChange}
              />{" "}
            </Col>
            {error && (
              <Col md={12}>
                <p className="text-red-500">{error}</p>
              </Col>
            )}
            <component.Back name="حفظ" onClick={handleSubmit} />
          </Row>
        </Col>
      </Container>
    </>
  );
}
export default AddSource;
