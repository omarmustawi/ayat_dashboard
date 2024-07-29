import { useEffect, useState } from "react";
import { Col, Container, Row } from "../../Tools/Grid-system";
import * as component from "../../components";
import axios from "axios";
import { API } from "../../Tools/API";

function Home() {
  // const [statistics, setStatistics] = useState(null);
  const [error, setError] = useState("");

  const [Static, setStatic] = useState([
    {
      name: "عدد الإستمارات الكلي",
      number: "Loading...",
    },
    {
      name: "عدد الإستمارات المنتهية",
      number: "Loading...",
    },
  ]);


  const [data, setData] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [dataOne, setDataOne] = useState([]);
  const [dataTwo, setDataTwo] = useState([]);
  const [dataNumber, setDataNumber] = useState([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get(`${API}/statistics`);
        // setStatistics(response.data);
        console.log(response);
        setStatic([
          {
            name: "عدد الإستمارات الكلي",
            number: response.data.comprehensive_statistics.count_Candidates,
          },
          {
            name: "عدد الإستمارات المنتهية",
            number:
              response.data.comprehensive_statistics.count_Candidates_finished,
          },
        ]);

        // returning
        setData([
          {
            name: "عام",
            غير_مقيمة: 4000,
            مقيمة: 2400,
            amt: 2400,
          },
          {
            name: "موازي",
            غير_مقيمة: 3000,
            مقيمة: 1398,
            amt: 2210,
          },
          {
            name: "خاص",
            غير_مقيمة: 2000,
            مقيمة: 9800,
            amt: 2290,
          },
        ]);

        // returning
        setSpecialties(response.data.specializations_stats_First_evaluation);


        setDataOne([
          {
            name: "عدد الإستمارات المؤهلة",
            value: response.data.comprehensive_statistics.count_Candidates_Automated_Classification_True,
          },
          {
            name: "عدد الإستمارات الغير المؤهلة",
            value: response.data.comprehensive_statistics.count_Candidates_Automated_Classification_False,
          },
        ]);

        setDataTwo([
          {
            name: "عدد الإستمارات المقيمة تقييم أولي",
            value: response.data.comprehensive_statistics.count_Candidates_Ev_Total_First_True,
          },
          {
            name: "عدد الإستمارات الغير المقيمة تقييم أولي",
            value: response.data.comprehensive_statistics.count_Candidates_Ev_Total_First_False,
          },
        ]);

        setDataNumber([
          {
            name: "عدد الإستمارات المقيمة تقييم ثانوي",
            value: response.data.comprehensive_statistics.count_Candidates_Ev_Total_Second_True,
          },
          {
            name: "عدد الإستمارات الغير المقيمة تقييم ثانوي",
            value: response.data.comprehensive_statistics.count_Candidates_Ev_Total_Second_False,
          },
        ]);
      } catch (error) {
        console.error(" try again, ", error);
        setError("An error occurred. Please try again.");
      }
    };

    fetchStatistics();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Container>
        <component.Title
          className="text-2xl md:text-3xl"
          title="الصفحة الرئيسية"
        />
        <Row justify="center">
          {Static.map((e) => (
            <Col xl={3} lg={4} sm={6}>
              {e.number !== 0 ? (
                <component.Data name={e.name} text={e.number} />
              ) : (
                <p> لا يوجد داتا</p>
              )}
            </Col>
          ))}
          <Row>
            {dataOne[0] !== undefined ? (
              dataOne[0].value !== 0 ? (
                <Col lg={4} xs={6}>
                  <component.CircleChart title="مؤهلة" data={dataOne} />
                </Col>
              ) : (
                ""
              )
            ) : (
              ""
            )}

            {dataTwo[0] !== undefined ? (
              dataTwo[0].value !== 0 ? (
                <Col lg={4} xs={6}>
                  <component.CircleChart
                    title="مقيمة تقييم أولي"
                    data={dataTwo}
                  />
                </Col>
              ) : (
                ""
              )
            ) : (
              ""
            )}

            {dataNumber[0] !== undefined ? (
              dataNumber[0].value !== 0 ? (
                <Col lg={4} xs={6}>
                  <component.CircleChart
                    title="مقيمة تقييم ثانوي"
                    data={dataNumber}
                  />
                </Col>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </Row>
        </Row>
       
       
        {/* <Row className="overflow-x-hidden">
          <component.Data name="عنوان التقييم الأولي" />
          <Col lg={6} className="!overflow-x-auto relative md:sidebar ">
            <component.Chart data={data} name="المنح" />
          </Col>
          { specialties.length !== 0 ? <Col lg={6} className="!overflow-x-auto relative md:sidebar">
            <component.Chart data={specialties} name="الإختصاصات" />
          </Col> : ""}
        </Row> */}
        
        
        <Row className="overflow-x-hidden">
          <component.Data name="عنوان التقييم الثانوي" className="!mt-5" />
          <Col lg={6} className="!overflow-x-auto relative md:sidebar">
            <component.Chart data={data} name="المنح" />
          </Col>
          
          {specialties.length !== 0 ? <Col lg={6} className="!overflow-x-auto relative md:sidebar">
            <component.Chart data={specialties} name="الإختصاصات" />
          </Col> : ""}
        </Row>
      </Container>
      {error && <p>{error}</p>}
    </div>
  );
}
export default Home;
