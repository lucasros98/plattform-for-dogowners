import {
    LineChart,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Line,
    CartesianGrid,
  } from "recharts";


export default function Chart({ chartData }) {
  
    return (
      <ResponsiveContainer
        width={"100%"}
        minHeight={300}
        maxHeight={350}
        debounce={2}
      >
         <LineChart width={500} height={300} data={chartData}>
            <XAxis dataKey="date"/>
            <YAxis/>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
  