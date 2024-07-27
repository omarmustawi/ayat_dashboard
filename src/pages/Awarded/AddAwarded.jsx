import { useEffect, useState } from "react";
import { Col, Container, Row } from "../../Tools/Grid-system";
import * as component from "../../components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../Tools/API";

function AddAwarded() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    grantType: "",
    openDate: "",
    closeDate: "",
    grantStatus: false,
  });

  const [error, setError] = useState("");



  const dataInputs = [
    { type: "date", name: "dd", placeholder: "تاريخ فتح المنحة" },
    { type: "date", name: "dd", placeholder: "تاريخ إغلاق المنحة" },
  ];

  useEffect(() => {
    if (id !== "add") {
      const fetchAwarded = async () => {
        try {
          const response = await axios.get(`${API}/ischolarships/`);
          // setFormData(response.data);
          // setFilteredData(response.data);
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
      name: "dd",
      text: "نوع المنحة",
      options: [
        { name: "خاص", id: "1" },
        { name: " عام", id: "2" },
        { name: "موازي", id: "3" },
      ],
    },
  ];
  const dataAll = [
    { id: 1, type: "علمي", title: "سوري", name: "خاص" },
    { id: 2, type: "أدبي", title: "مصري", name: "عام" },
    { id: 3, type: "مهني", title: "فلسطيني", name: "موازي" },
  ];

  return (
    <>
      <Container>
        <component.Title
          className="text-2xl md:text-3xl"
          title={`${id === "add" ? "أضف منح" : "عدل المنحة"}`}
        />
        <Col md={10} className="mx-auto">
          <Row className="bg-Third flex items-center shadow-sm rounded-2xl p-5">
            {dataUsersLists.map((e, i) => {
              return (
                <Col md={6} key={i}>
                  <component.MultipleSelect
                    name={e.name}
                    value={e.value}
                    options={e.options}
                    text={e.text}
                  />
                </Col>
              );
            })}
            {dataInputs.map((e, i) => {
              return (
                <Col md={6} key={i}>
                  <component.Input
                    type={e.type}
                    name={e.name}
                    placeholder={e.placeholder}
                  />
                </Col>
              );
            })}
            <Col className="flex gap-4 items-center">
              <label>حالة المنحة</label>
              <component.Toggle />
            </Col>
            <component.Back name="حفظ" />
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
      </Container>
    </>
  );
}
export default AddAwarded;
