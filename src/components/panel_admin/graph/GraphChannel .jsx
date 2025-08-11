import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { useEffect } from "react";

// Registrar los elementos que usa BarChart
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const GraphChannel = ({ channels }) => {

    const {
        facebook,
        instagram,
        pinterest,
        tikTok,
        youTube } = channels;

    const data = {
        labels: ["Facebook",
            "Instagram",
            "Youtube",
            "TikTok",
            "Pinterest"
        ],

        datasets: [
            {
                label: "Métricas",
                data: [facebook, instagram, youTube, tikTok, pinterest],
                backgroundColor: ['#003869ff', "#920088ff", "#ac0000ff", "#ac8e34ff", "#651634ff"],
                borderColor: "#fff",
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        layout: {
            padding: {
                top: 20,
                left: 20,
                bottom: 20,
                right: 20
            }
        },
        plugins: {
            legend: {
                position: "bottom",
                align: "start",
                labels: {
                    color: "white"
                }
            }
        },
        scales: {
            x: {
                ticks: { color: 'white' },
                grid: { display: false }
            },
            y: {
                ticks: { color: 'white' },
                grid: { color: 'gray' },
                beginAtZero: true
            }
        }
    };

    return (
        <div style={{
            width: "400px",
            margin: "auto",
            background: "black",
            borderRadius: "20px",
            padding: "10px"
        }}>
            <Bar data={data} options={options} />
        </div>
    );
}
