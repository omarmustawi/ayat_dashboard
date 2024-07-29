import { useEffect, useState } from "react";
import { Col, Container, Row } from "../../Tools/Grid-system";
import * as component from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../Tools/API";
import { format } from 'date-fns';

function AddAwarded() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Close_Registration: "",
    Open_Registration: "",
    Scholarship_Status: false,
    Scholarship_Type: "",
  });

  const [error, setError] = useState("");

  const dataInputs = [
    { type: "date", name: "Open_Registration", placeholder: "تاريخ فتح المنحة" },
    { type: "date", name: "Close_Registration", placeholder: "تاريخ إغلاق المنحة" },
  ];

  useEffect(() => {
    if (id !== "add") {
      const fetchAwarded = async () => {
        try {
          const response = await axios.get(`${API}/ischolarships/${id}/`);
          const data = response.data;

          // Format date values to YYYY-MM-DD
          data.Open_Registration = format(new Date(data.Open_Registration), 'yyyy-MM-dd');
          data.Close_Registration = format(new Date(data.Close_Registration), 'yyyy-MM-dd');

          setFormData(data);
        } catch (errors) {
          console.error("error", errors);
          setError("Reload the page.");
        }
      };
      fetchAwarded();
    }
  }, [id]);


  const dataUsersLists = [
    {
      name: "Scholarship_Type",
      text: "نوع المنحة",
      options: [
        { name: "خاص", id: "منحة التعليم الخاص" },
        { name: "عام", id: "منحة التعليم العام" },
        { name: "موازي", id: "منحة التعليم الموازي" },
        { name: "افتراضي", id: "منحة التعليم الافتراضي" },
      ],
    },
  ];



  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id !== "add") {
        const response  = await axios.put(`${API}/ischolarships/${id}/`, formData);
        console.log("response put ", response  );
      } else {
        const response = await axios.post(`${API}/ischolarships/`, formData);
        console.log( "response post add", response );
      }
      navigate("/awarded");
    } catch (errors) {
      console.error("Error adding award: ", errors);
      setError("An error occurred. Please try again.");
    }
  };


  const dataAll = [
    { id: 1, type: "علمي", title: "سوري", name: "خاص" },
    { id: 2, type: "أدبي", title: "مصري", name: "عام" },
    { id: 3, type: "مهني", title: "فلسطيني", name: "موازي" },
  ];

// fetch data for  table اسم الإختصاص	 - نوع الشهادة -	مصدر الشهادة
  useEffect(() => {
    const fetchSpecializations_info = async () => {
      try {
        const response = await axios.get(`${API}/certificates/`);
       
        console.log("fetchSpecializations_info",  response );
        const data = response.data;

        // Format date values to YYYY-MM-DD
        data.Open_Registration = format(new Date(data.Open_Registration), 'yyyy-MM-dd');
        data.Close_Registration = format(new Date(data.Close_Registration), 'yyyy-MM-dd');

        // setFormData(data);
      } catch (errors) {
        console.error("error", errors);
        setError("Reload the page.");
      }
    };

    fetchSpecializations_info()
  }, []);

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggleChange = () => {
    setFormData({
      ...formData,
      Scholarship_Status: !formData.Scholarship_Status,
    });
  };

  return (
    <Container>
      <component.Title
        className="text-2xl md:text-3xl"
        title={`${id === "add" ? "أضف منح" : "عدل المنحة"}`}
      />
      <Col md={10} className="mx-auto">
        <Row className="bg-Third flex items-center shadow-sm rounded-2xl p-5">
          {dataUsersLists.map((e, i) => (
            <Col md={6} key={i}>
              <component.MultipleSelect
                name={e.name}
                value={formData[e.name]}
                placeholder={formData[e.name]}
                options={e.options}
                text={e.text}
                onChange={(value) => handleSelectChange(e.name, value.value)}
              />
            </Col>
          ))}
          {dataInputs.map((e, i) => (
            <Col md={6} key={i}>
              <component.Input
                type={e.type}
                name={e.name}
                placeholder={e.placeholder}
                value={formData[e.name]}
                onChange={handleInputChange}
              />
            </Col>
          ))}
          <Col className="flex gap-4 items-center">
            <label>حالة المنحة</label>
            <component.Toggle 
              checked={formData.Scholarship_Status}
              onChange={handleToggleChange}
              value={formData.Scholarship_Status}
            />
          </Col>
          <component.Back onClick={handleSubmit} name="حفظ" />
          <Col lg={10} className="mx-auto !mt-5">
            <component.Table
              thead={["Id", "اسم الإختصاص", "نوع الشهادة", "مصدر الشهادة"]}
              tData={dataAll}
              tbody={["id", "name", "type", "title"]}
              edit="awarded/3/specialties"
              funDelete={true}
            />
          </Col>
          <component.Add add={true} link="/awarded/3/specialties/add" />
        </Row>
      </Col>
      {error && <p>{error}</p>}
    </Container>
  );
}
export default AddAwarded;
