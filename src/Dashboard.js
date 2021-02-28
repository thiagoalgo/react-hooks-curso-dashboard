import './Dashboard.css';
import { useState } from 'react'
import Chart from 'react-google-charts'

function Dashboard() {

  const TITULO = 'Quantidade de cadastros primeiro semestre'
const ANIMACAO = { duration: 1000, easing: 'out', startup: true}

  const [dados, setDados] = useState([
    ['Mês', 'Quantidade'],
    ['Janeiro', 33],
    ['Fevereiro', 17],
    ['Março', 45],
    ['Abril', 85],
    ['Maio', 33],
    ['Junho', 21]
  ])

  return (
    <div>
      <h1>Dashboard</h1>
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={dados}
        options={{
          title: TITULO
        }}
      />
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={dados}
        options={{
          title: TITULO,
          is3D: true
        }}
      />
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={dados}
        options={{
          title: TITULO,
          pieHole: 0.4
        }}
      />
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'BarChart'}
        data={dados}
        options={{
          title: TITULO,
          chartArea: { width: '50%'},
          hAxis: {title: 'Quantidade'},
          xAxis: {title: 'Mês'},
          animation: ANIMACAO
        }}
      />
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'LineChart'}
        data={dados}
        options={{
          title: TITULO,
          chartArea: { width: '50%'},
          hAxis: {title: 'Mês'},
          xAxis: {title: 'Quatidade'},
          animation: ANIMACAO
        }}
      />
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'AreaChart'}
        data={dados}
        options={{
          title: TITULO,
          chartArea: { width: '50%'},
          hAxis: {title: 'Mês'},
          xAxis: {title: 'Quatidade'},
          animation: ANIMACAO
        }}
      />
    </div>
  );
}

export default Dashboard;