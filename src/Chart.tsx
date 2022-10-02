import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  LabelList,
} from 'recharts';
import { useStore } from './store';
import { ChartContainer } from './Chart.css';

const Chart = () => {
  const collection = useStore((state) => state.collection);

  const createData = (iteration: number, num: number) => {
    return { iteration, num };
  };

  const formatData = (collection: number[]) => {
    let data = [];
    for (let i = 0; i < collection.length; i++) {
      data.push(createData(i, collection[i]));
    }
    return data;
  };

  const data = collection.length ? formatData(collection) : [createData(0, 0)];

  const CustomizedLabel = (props: any) => {
    const { x, y, value } = props;

    return (
      <text x={x} y={y} dy={-4} fontSize={16} textAnchor="middle">
        {value}
      </text>
    );
  };

  return (
    <ChartContainer>
      <LineChart
        width={1200}
        height={550}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="iteration" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="num"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        >
          <LabelList content={<CustomizedLabel />} />
        </Line>
      </LineChart>
    </ChartContainer>
  );
};

export default Chart;
