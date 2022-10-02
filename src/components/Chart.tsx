import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  LabelList,
  Label,
} from 'recharts';
import { useStore } from '../store';
import { ChartContainer } from './Chart.css';

const Chart = () => {
  const collection = useStore((state) => state.collection);

  const createData = (iteration: number, integer: number) => {
    return { iteration, integer };
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
          top: 20,
          right: 20,
          left: 20,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="iteration">
          <Label angle={0} position="insideBottom" offset={-10}>
            Operations
          </Label>
        </XAxis>
        <YAxis>
          <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
            Integers
          </Label>
        </YAxis>
        <Tooltip />
        <Line
          type="monotone"
          dataKey="integer"
          // stroke="#8884d8"
          stroke="#e8630a"
          activeDot={{ r: 8 }}
        >
          <LabelList content={<CustomizedLabel />} />
        </Line>
      </LineChart>
    </ChartContainer>
  );
};

export default Chart;
