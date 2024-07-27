import {  
  Bar,  
  BarChart,  
  CartesianGrid,  
  Legend,  
  Tooltip,  
  XAxis,  
  YAxis,  
} from "recharts";  
import Title from "../Title/Title";  

function Chart({ name, data }) {  
  return (  
    <div className="mx-auto">  
      <Title title={`عدد الإستمارات حسب ${name}`} />  
      <div className="overflow-x-auto mt-10"> {/* Added margin to account for fixed title */}  
        <BarChart  
          width={Math.max(500, data.length * 65)}  
          height={300}  
          data={data}  
          margin={{  
            top: 20,  
            right: 30,  
            left: 20,  
            bottom: 5,  
          }}  
          className="!overscroll-x-auto"  
        >  
          <CartesianGrid strokeDasharray="3 3" />  
          <XAxis dataKey="name" />  
          <YAxis />  
          <Tooltip fontSize={20} />  
          <Legend />  
          <Bar dataKey="مقيمة" stackId="a" fill="#b19c5b" />  
          <Bar dataKey="غير_مقيمة" stackId="a" fill="#ADD8E6" />  
        </BarChart>  
      </div>  
    </div>  
  );  
}  
export default Chart;