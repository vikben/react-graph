/**
 * @desc this comp will display graph
 * @author Vikram vikben@gmail.com
 */

import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import moment from 'moment';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { AppContainer } from '../../common/muiComponents/';
import { AppContext } from '../../context';

function Graph() {
  const { state } = useContext(AppContext);

  const { graphData, height, width } = state.graph;

  const tickFormatter = (data: string) => {
    const date = moment(data).format('DD');
    const months = moment(data).format('MMM');
    return `${date} ${months}`;
  };

  if (!graphData.length) {
    return (
      <Typography align='center' mt={2}>
        No Graph data found
      </Typography>
    );
  }

  if (graphData.length) {
    return (
      <AppContainer maxWidth='xl'>
        <ResponsiveContainer width='100%' height={height}>
          <BarChart
            data={graphData}
            margin={{ top: 30, bottom: 30 }}
            height={height}
            width={width}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='x' tickFormatter={tickFormatter} />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign='top' />
            <Bar dataKey='min' stackId='a' fill='#8884d8' />
            <Bar dataKey='max' stackId='a' fill='#82ca9d' />
            <Bar dataKey='avg' fill='#ffc658' />
          </BarChart>
        </ResponsiveContainer>
      </AppContainer>
    );
  }
  return null;
}

export default Graph;
