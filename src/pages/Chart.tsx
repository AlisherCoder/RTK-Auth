import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

import { CategoryScale, LinearScale, PointElement, LineElement, Title, Filler } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
   datasets: [
      {
         label: "# of Votes",
         data: [12, 19, 3, 5, 2, 3],
         backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
         ],
         borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
         ],
         borderWidth: 1,
      },
   ],
};

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Filler,
   Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const numbers = [100, 200, 300, 400, 500, 600, 700];

export const options = {
   responsive: true,
   plugins: {
      legend: {
         position: "top" as const,
      },
      title: {
         display: true,
         text: "Chart.js Line Chart",
      },
   },
};

export const data1 = {
   labels,
   datasets: [
      {
         fill: true,
         label: "Dataset 2",
         data: numbers,
         borderColor: "rgb(53, 162, 235)",
         backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
   ],
};

const App = () => {
   return (
      <div>
         <div className='container mx-auto flex justify-center items-center flex-col'>
            <div className='w-[300px]'>
               <Pie data={data} />
            </div>

            <div className='w-[600px]'>
               <Line options={options} data={data} />
            </div>
         </div>
      </div>
   );
};

export default App;
