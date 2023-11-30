import './App.css';
import Chart from 'react-google-charts';


export const data = [
  ["Task", "Hours per Day"],
  ["Проснуться, размяться", 1],
  ["Завтрак", 1],
  ["Катание в горах", 6],
  ["Обед", 1],
  ["Работа за компом", 3],
  ["Ужин", 1],
  ["Игра в настолку", 3],
  ["Сон", 8],
];

export const options = {
  title: "Мой день в горах зимой",
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;
