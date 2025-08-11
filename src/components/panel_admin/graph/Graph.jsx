import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, layouts } from "chart.js";

// Registrar los elementos que usa PieChart
ChartJS.register(ArcElement, Tooltip, Legend);

export const Graph = ({ metrics }) => {

    const { counterVisits,
        counterViewEndPage,
        counterSlideSwiper,
        counterViewMessages,
        counterEmailSent } = metrics;

    // // Recuperar datos del localStorage
    // const clickHero = parseInt(localStorage.getItem("counterClickButtonHero")) || 40;
    // const visitProducts = parseInt(localStorage.getItem("counterVisitSectionProducts")) || 10;
    // const formSubmits = parseInt(localStorage.getItem("counterFormSubmits")) || 10;

    const data = {
        labels: ["Visitas",
            "Usuarios que llegaron al final de la pagina",
            "Usuarios que interactuaron con el swiper",
            "Usuarios que interactuaron con los mensajes",
            "Usuarios que dejaron su correo de contacto"
        ],
        datasets: [
            {
                label: "Métricas",
                data: [counterVisits, counterViewEndPage, counterSlideSwiper, counterViewMessages, counterEmailSent],
                backgroundColor: ['#E23F58', "#F59153", "#FFCE56", "#3BAEB0", "#62e23fff"],
                borderColor: ["#fff", "#fff", "#fff"],
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
        }
    };

    return (
        <div style={{
            width: "400px",
            margin: "auto",
            background: "black",
            borderRadius: "20px"
        }}>
            <Pie data={data} options={options} />
        </div>
    );
}
