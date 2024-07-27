import { Route, Routes } from "react-router-dom";
import * as error from "./Tools/Error";
import { Container } from "./Tools/Grid-system";
import * as layout from "./layout";
import * as page from "./pages";

const App = () => {
  return (
    <>
      <div className="relative flex text-white">
        <layout.SideBar />
        <div className="container mx-auto relative">
          <layout.Navbar />
          <Container>
            <Routes>
              <Route path="login" element={<page.Login />} />
              <Route path="*" element={<error.P404 />} />
              <Route path="403" element={<error.P403 />} />
              <Route path="500" element={<error.P500 />} />
              <Route path="/" element={<page.Home />} />
              <Route path="calculations">
                <Route index element={<page.Calculations />} />
                <Route path=":isEmployee/:id" element={<page.AddCalculations />} />
              </Route>
              <Route path="awarded">
                <Route index element={<page.Awarded />} />
                <Route path=":id" element={<page.AddAwarded />} />
                <Route
                  path=":id/specialties/:specialtiesId"
                  element={<page.EditSpecialties />}
                />
              </Route>
              <Route path="specialties">
                <Route index element={<page.Specialties />} />
                <Route path=":id" element={<page.AddSpecialties />} />
              </Route>
              <Route path="certificates"  >
                <Route index element={<page.CertificateSource />} />  
                <Route path=":id" element={<page.AddSource />} />
              </Route>
            </Routes>
          </Container>
        </div>
      </div>
    </>
  );
};

export default App;
