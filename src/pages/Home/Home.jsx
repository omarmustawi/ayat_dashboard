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


        setSpecialties([
          {
            name: "طب",
            غير_مقيمة: 4000,
            مقيمة: 2400,
            amt: 2400,
          },
          {
            name: "هندسة",
            غير_مقيمة: 3000,
            مقيمة: 1398,
            amt: 2210,
          },
          {
            name: "حقوق",
            غير_مقيمة: 2000,
            مقيمة: 9800,
            amt: 2290,
          },
          {
            name: "فنون",
            غير_مقيمة: 1000,
            مقيمة: 1200,
            amt: 2290,
          },
        ]);


        setDataOne([
          { name: "عدد الإستمارات المؤهلة", value: response.data.scholarships_stats_First_evaluation.length },
          { name: "عدد الإستمارات الغير المؤهلة", value: response.data.scholarships_stats_Second_evaluation.length },
        ]);

        setDataTwo([
          { name: "عدد الإستمارات المقيمة تقييم أولي", value: response.data.specializations_stats_First_evaluation.length },
          { name: "عدد الإستمارات الغير المقيمة تقييم أولي", value: response.data.specializations_stats_Second_evaluation.length },
        ]);

        setDataNumber([
          { name: "عدد الإستمارات المقيمة تقييم ثانوي", value: response.data.specializations_stats_Second_evaluation.length },
          { name: "عدد الإستمارات الغير المقيمة تقييم ثانوي", value: response.data.specializations_stats_First_evaluation.length },
        ]);


      } catch (error) {
        console.error(" try again, ", error);
        setError("An error occurred. Please try again.");
      }
    };

    fetchStatistics();
  }, []);


  // const Static = [
  //   { name: "عدد الإستمارات الكلي", number: statistics.comprehensive_statistics.count_Candidates },
  //   { name: "عدد الإستمارات المنتهية", number: statistics.comprehensive_statistics.count_Candidates_finished },
  // ];
  // const data = [
  //   {
  //     name: "عام",
  //     غير_مقيمة: 4000,
  //     مقيمة: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: "موازي",
  //     غير_مقيمة: 3000,
  //     مقيمة: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: "خاص",
  //     غير_مقيمة: 2000,
  //     مقيمة: 9800,
  //     amt: 2290,
  //   },
  // ];

  // const specialties = [
  //   {
  //     name: "طب",
  //     غير_مقيمة: 4000,
  //     مقيمة: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: "هندسة",
  //     غير_مقيمة: 3000,
  //     مقيمة: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: "حقوق",
  //     غير_مقيمة: 2000,
  //     مقيمة: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: "فنون",
  //     غير_مقيمة: 1000,
  //     مقيمة: 1200,
  //     amt: 2290,
  //   },
  //   {
  //     name: "طب",
  //     غير_مقيمة: 4000,
  //     مقيمة: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: "هندسة",
  //     غير_مقيمة: 3000,
  //     مقيمة: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: "حقوق",
  //     غير_مقيمة: 2000,
  //     مقيمة: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: "فنون",
  //     غير_مقيمة: 1000,
  //     مقيمة: 1200,
  //     amt: 2290,
  //   },
  //   {
  //     name: "طب",
  //     غير_مقيمة: 4000,
  //     مقيمة: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: "هندسة",
  //     غير_مقيمة: 3000,
  //     مقيمة: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: "حقوق",
  //     غير_مقيمة: 2000,
  //     مقيمة: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: "فنون",
  //     غير_مقيمة: 1000,
  //     مقيمة: 1200,
  //     amt: 2290,
  //   },
  //   {
  //     name: "طب",
  //     غير_مقيمة: 4000,
  //     مقيمة: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: "هندسة",
  //     غير_مقيمة: 3000,
  //     مقيمة: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: "حقوق",
  //     غير_مقيمة: 2000,
  //     مقيمة: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: "فنون",
  //     غير_مقيمة: 1000,
  //     مقيمة: 1200,
  //     amt: 2290,
  //   },
  // ];
  
  // const dataOne = [
  //   { name: "عدد الإستمارات المؤهلة", value: 600 },
  //   { name: "عدد الإستمارات الغير المؤهلة", value: 400 },
  // ];
  
  // const dataTwo = [
  //   { name: "عدد الإستمارات  المقيمة تقييم أولي", value: 800 },
  //   { name: "عدد الإستمارات الغير  المقيمة تقييم أولي", value: 200 },
  // ];
  
  // const dataNumber = [
  //   { name: "عدد الإستمارات  المقيمة تقييم ثانوي", value: 300 },
  //   { name: "عدد الإستمارات الغير  المقيمة تقييم ثانوي", value: 700 },
  // ];
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
              <component.Data name={e.name} text={e.number} />
            </Col>
          ))}
          <Row>
            <Col lg={4} xs={6}>
              <component.CircleChart title="مؤهلة" data={dataOne} />
            </Col>
            <Col lg={4} xs={6}>
              <component.CircleChart title="مقيمة تقييم أولي" data={dataTwo} />
            </Col>
            <Col lg={4} xs={6}>
              <component.CircleChart
                title="مقيمة تقييم ثانوي"
                data={dataNumber}
              />
            </Col>
          </Row>
        </Row>
        <Row className="overflow-x-hidden">
          <component.Data name="عنوان التقييم الأولي" />
          <Col lg={6} className="!overflow-x-auto relative md:sidebar ">
            <component.Chart data={data} name="المنح" />
          </Col>
          <Col lg={6} className="!overflow-x-auto relative md:sidebar">
            <component.Chart data={specialties} name="الإختصاصات" />
          </Col>
        </Row>
        <Row className="overflow-x-hidden">
          <component.Data name="عنوان التقييم الثانوي" className="!mt-5" />
          <Col lg={6} className="!overflow-x-auto relative md:sidebar">
            <component.Chart data={data} name="المنح" />
          </Col>
          <Col lg={6} className="!overflow-x-auto relative md:sidebar">
            <component.Chart data={specialties} name="الإختصاصات" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Home;
