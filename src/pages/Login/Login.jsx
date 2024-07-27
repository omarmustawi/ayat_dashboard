import { Col, Row } from "../../Tools/Grid-system";
import { Input, MainButton, PasswordInput } from "../../components";
import Logo from "../../images/Logo.png";

const Login = () => {
  return (
    <div className="fixed w-full h-full bg-Third top-0 left-0 z-50 flex items-center justify-center">
      <div className="w-2/3 max-lg:w-[90%]">
        <img src={Logo} alt="" className="mx-auto h-[150px] object-cover" />
        <p className="text-xl font-semibold text-center my-2">
          سجل دخول حتى تتمكن من الوصول الى اللوحة
        </p>
        <Row>
          <Col md={8} className="mx-auto">
            <Input
              name="username_or_email"
              placeholder="اسم المستخدم"
              className="bg-white w-full border-[3px] my-1 !py-3 rounded-xl"
            />
          </Col>
          <Col md={8} className="mx-auto">
            <PasswordInput
              name="password"
              className="bg-white w-full border-[3px] my-1 !py-3 rounded-xl"
              top="top-4"
            />
          </Col>
        </Row>
        <MainButton
          link="/"
          name="إرسال"
          className="!px-10 py-3 !w-fit !mx-auto !bg-white !text-Main"
        />
      </div>
    </div>
  );
};

export default Login;
