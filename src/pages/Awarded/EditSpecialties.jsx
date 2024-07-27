import { Col, Container, Row } from "../../Tools/Grid-system";
import * as component from "../../components";
import { useParams } from "react-router-dom";

function EditSpecialties() {
  const { specialtiesId } = useParams();
  const dataInputs = [
    { type: "text", name: "dd", placeholder: "اسم الاختصاص" },
    { type: "number", name: "dd", placeholder: "الحد الأدنى لقبول الطلب" },
    { type: "number", name: "dd", placeholder: "أقل حد للمرحلة الأولى" },
    { type: "number", name: "dd", placeholder: "عدد الطلاب للمقابلة" },
    {
      type: "number",
      name: "dd",
      placeholder: "أقصى عدد للموظفين المقييمين للإستمارة",
    },
    {
      type: "number",
      name: "dd",
      placeholder: "أقصى عدد للمدراء المقييمين للإستمارة",
    },
  ];
  const dataUsersLists = [
    {
      name: "dd",
      text: "نوع الشهادة",
      options: [
        { name: "علمي", id: "1" },
        { name: " أدبي", id: "2" },
        { name: "مهني", id: "3" },
      ],
    },
    {
      name: "dd",
      text: "مصدر الشهادة",
      options: [
        { name: "سوري", id: "1" },
        { name: " مصري", id: "2" },
        { name: "فلسطيني", id: "3" },
      ],
    },
    {
      name: "dd",
      text: "المنحة التابعة للاختصاص",
      options: [
        { name: "خاص", id: "1" },
        { name: " عام", id: "2" },
        { name: "موازي", id: "3" },
      ],
    },
  ];
  return (
    <div>
      <Container>
        <component.Title
          className="text-2xl md:text-3xl"
          title={`${specialtiesId === "add" ? "أضف إختصاص" : "عدل االإختصاص"}`}
        />
        <Col md={10} className="mx-auto">
          <Row className="bg-Third shadow-sm rounded-2xl p-5">
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
            <Row>
              <Col xs={4}>
                <component.Data name={"المرحلة الأولى منتهية"} />
                <component.Toggle />
              </Col>
              <Col xs={4}>
                <component.Data name={"المرحلة الثانية منتهية"} />
                <component.Toggle />
              </Col>
              <Col xs={4}>
                <component.Data name={"المرحلة القابلة منتهية"} />
                <component.Toggle />
              </Col>
            </Row>
            <component.Back name="حفظ" />
          </Row>
        </Col>
      </Container>
    </div>
  );
}
export default EditSpecialties;
