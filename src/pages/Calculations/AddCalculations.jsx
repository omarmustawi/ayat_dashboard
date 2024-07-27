import { useEffect, useState } from "react";
import { Col, Container, Row } from "../../Tools/Grid-system";
import * as component from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../Tools/API";

function AddCalculations() {
  const { id, isEmployee } = useParams();
  const [formData, setFormData] = useState("");


  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (id !== "add") {
      const fetchEmployee = async () => {
        try {
          const response = await axios.get(`${API}/evaluators/${id}/`);
          // const response = await axios.get(`${API}/users/${id}/`);
          setFormData(response.data);
        } catch (err) {
          console.error("Error fetching employee data:", err);
        }
      };
      fetchEmployee();
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormData({ ...formData, password: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      if (id === "add") {
        if (formData.account_type) {
          await axios.post(`${API}/users/`, formData);
        } else {
          await axios.post(`${API}/evaluators/`, formData);
        }
      } else {
        await axios.put(`${API}/users/${id}/`, formData);
      }

      navigate("/calculations");
    } catch (err) {
      console.error("Error saving data:", err);
    }
  };

  const dataInputs = [
    { type: "string", name: "first_name", placeholder: "الاسم الأول" },
    { type: "string", name: "last_name", placeholder: "الاسم الأخير" },
    { type: "string", name: "Specialization", placeholder: "الإختصاص" },
    { type: "email", name: "email", placeholder: "البريد الإلكتروني" },
    { type: "string", name: "username", placeholder: "username" },
  ];

  const dataUsersLists = [
    {
      name: "dd",
      text: "نوع الحساب",
      options: [
        { name: "مدير", id: "1" },
        { name: "موظف", id: "0" },
      ],
    },
  ];

  return (
    <>
      <Container>
        <component.Title
          className="text-2xl md:text-3xl"
          title={`${id === "add" ? "أضف حساب" : "عدل الحساب"}`}
        />
        <Col md={10} className="mx-auto">
          <Row justify="center" className="bg-Third shadow-sm rounded-2xl p-5">
            {dataInputs.map((e, i) => {
              return (
                <Col md={6} key={i}>
                  <component.Input
                    type={e.type}
                    name={e.name}
                    placeholder={e.placeholder}
                    value={formData[e.name]}
                    onChange={handleChange}
                  />
                </Col>
              );
            })}

            {dataUsersLists.map((e, i) => {
              return (
                <Col md={6} key={i}>
                  <component.MultipleSelect 
                    name={e.name}
                    value={e.value}
                    placeholder={formData.account_type}
                    defaultInputValue={formData?.account_type }
                    options={e.options}
                    text={e.text}
                    className={`${
                      isEmployee === "false" && e.text === "المركز" && "hidden"
                    }`}
                    onChange={(e) => {
                      handleSelectChange(e.name, e.value);
                      // setFormData(e.value);
                      // handleSelectChange("account_type", e.value);
                    }}
                  />
                </Col>
              );
            })}
            <Col md={6}>
              <component.PasswordInput
                placeholder=" كلمة السر" // value={formData.confirmPassword || ''}
                value={password}
                // onChange={(e) => handleChange({ target: { name: 'confirmPassword', value: e.target.value } })}
                onChange={handlePasswordChange}
              />
            </Col>
            <Col md={6}>
              <component.PasswordInput
                placeholder="تأكيد كلمة السر" // value={formData.confirmPassword || ''}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </Col>
            <component.Back name="حفظ" onClick={handleSubmit} />
          </Row>
        </Col>
      </Container>
    </>
  );
}
export default AddCalculations;
