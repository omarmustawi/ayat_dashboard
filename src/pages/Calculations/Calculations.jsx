import { useState } from "react";
import { Col, Container, Row } from "../../Tools/Grid-system";
import * as component from "../../components";
import Emplyees from "./Emplyees";
import OtherAccounts from "./OtherAccounts";

const Calculations = () => {
  const [account, setAccount] = useState("");

  return (
    <>
      <Container>
        <component.Title
          className="text-2xl md:text-3xl"
          title={`الحسابات ${account === "employees" ? " / موظفين" : account === "other" ? " / حسابات أخرى" : ""}`}
        />
        <Row justify={"center"}>
          <Col xs={4} className="flex items-center justify-center">
            <component.MainButton
              onClick={() => setAccount("employees")}
              name={"موظفين"}
              className={`${account === "employees" ? "bg-Third" : ""}`}
            />
          </Col>
          <Col xs={4} className="flex items-center justify-center">
            <component.MainButton
              onClick={() => setAccount("other")}
              name={"حسابات أخرى"}
              className={`${account === "other" ? "bg-Third" : ""}`}
            />
          </Col>
        </Row>
        {account === "other" && <OtherAccounts />}
        {account === "employees" && <Emplyees />}
        <component.Add link={`/calculations/${account === "employees"}/add`} />
      </Container>
    </>
  );
};

export default Calculations;
