import { PieChart, Pie, Cell, Tooltip } from "recharts";
const COLORS = ["#b19c5b", "#ADD8E6"];

function CircleChart({ data, title }) {
  return (
    <>
      <div>
        <PieChart width={350} height={350}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="max-sm:text-sm">
        <li className="text-Secondary">عدد الإستمارات ال{title} </li>
        <li className="text-[#ADD8E6]">عدد الإستمارات الغير {title}</li>
      </div>
    </>
  );
}
export default CircleChart;
