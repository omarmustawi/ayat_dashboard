import { useEffect, useState } from "react";
import { Col, Container, Row } from "../../Tools/Grid-system";
import * as component from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../Tools/API";
function AddSpecialties() {
  const { id } = useParams();
  const navigate = useNavigate()
  

  const [formData, setFormData] = useState({
    Specialization: "",
    // certificateType: "",
    // certificateSource: "",
    // minScore: "",
    // numReviewers: "",
    // numManagers: "",
    // numInterviewStudents: "",
    // evaluationStage1: false,
    // evaluationStage2: false,
    // evaluationStage3: false,
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if( id !== "add" ) {
        const response = await axios.put(`${API}/specializations/${id}/`, formData);
      }
      else {
        const response = await axios.post(`${API}/specializations/`, formData);
      }
      navigate('/specialties'); 
    } catch (errors) {
      console.error("Error adding specialty: ", errors);
      setError("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    if (id !== "add") {
      const fetchSpecialty = async () => {
        try {
          const response = await axios.get(`${API}/specializations/${id}/`);
          setFormData(response.data);
        } catch (err) {
          console.error("Error fetching Specialty data:", err);
        }
      };
      fetchSpecialty();
    }
  }, [id]);

  // const dataInputs = [
  //   { type: "string", placeholder: "نوع الإختصاص" },
  //   { type: "string", placeholder: "نوع الشهادة" },
  //   { type: "string", placeholder: "مصدر الشهادة" },
  //   {
  //     type: "number",
  //     placeholder: "الحد الأدنى للمجموع",
  //   },
  //   {
  //     type: "number",
  //     placeholder: "عدد موظفين التقييم",
  //     minValue: 0,
  //   },
  //   {
  //     type: "number",
  //     placeholder: "عدد المدراء",
  //     minValue: 0,
  //   },
  //   {
  //     type: "number",
  //     placeholder: "عدد الطلاب للمقابلة",
  //     minValue: 0,
  //   },
  // ];

  const dataInputs = [
    { type: "text", name: "Specialization", placeholder: "نوع الإختصاص" },
    // { type: "text", name: "certificateType", placeholder: "نوع الشهادة" },
    // { type: "text", name: "certificateSource", placeholder: "مصدر الشهادة" },
    // { type: "number", name: "minScore", placeholder: "الحد الأدنى للمجموع" },
    // {
    //   type: "number",
    //   name: "numReviewers",
    //   placeholder: "عدد موظفين التقييم",
    //   minValue: 0,
    // },
    // {
    //   type: "number",
    //   name: "numManagers",
    //   placeholder: "عدد المدراء",
    //   minValue: 0,
    // },
    // {
    //   type: "number",
    //   name: "numInterviewStudents",
    //   placeholder: "عدد الطلاب للمقابلة",
    //   minValue: 0,
    // },
  ];

  // const checkInputs = ["انتهاء المرحلة الأولى للتقييم", "انتهاء المرحلة الثانية للتقييم", "انتهاء المرحلة الثالثة للتقييم"];
  // const checkInputs = [
  //   { name: "evaluationStage1", title: "انتهاء المرحلة الأولى للتقييم" },
  //   { name: "evaluationStage2", title: "انتهاء المرحلة الثانية للتقييم" },
  //   { name: "evaluationStage3", title: "انتهاء المرحلة الثالثة للتقييم" },
  // ];


  return (
    <>
      <Container>
        <component.Title
          className="text-2xl md:text-3xl"
          title={`${id === "add" ? "أضف إختصاص" : "عدل الإختصاص"}`}
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
            {/* {checkInputs.map((e, i) => {
              return (
                <Col md={12} key={i}>
                  <component.CheckInput
                    name={e.name}
                    title={e.title}
                    checked={formData[e.name]}
                    onChange={handleInputChange}
                  />
                </Col>
              );
            })} */}
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
export default AddSpecialties;
