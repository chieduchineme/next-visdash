import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styles from '../styles/BalanceHistory.module.css';

// Register necessary chart.js elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

/**
 * BalanceHistoryChart Component
 * This component renders a line chart displaying balance history data over time.
 * It adjusts dynamically to container size and applies a gradient background to the chart.
 */
const BalanceHistoryChart = () => {
  const chartRef = useRef(null); // Reference to the chart container
  const [chartSize, setChartSize] = useState({ width: 600, height: 250 }); // State to manage chart dimensions

  // Effect hook to update chart size on window resize
  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        setChartSize({
          width: chartRef.current.offsetWidth || 600,
          height: chartRef.current.offsetHeight ? Math.min(chartRef.current.offsetHeight, 250) : 250,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize size on mount

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
  }, []);

  // Chart data
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"], // X-axis labels
    datasets: [
      {
        label: "Balance",
        data: [150, 370, 220, 300, 480, 420, 780, 210, 590, 220, 640, 600], // Sample balance data
        borderColor: "#0D47A1", // Line color
        backgroundColor: (context) => {
          const chart = context.chart;
          if (!chart) return;
          const { ctx, chartArea } = chart;
          if (!chartArea) return;
          
          // Create gradient fill for the line chart
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, "rgba(13, 71, 161, 0.2)");
          gradient.addColorStop(1, "rgba(13, 71, 161, 0)");
          return gradient;
        },
        fill: true, // Enable area fill under the line
        tension: 0.4, // Smooth curve
        pointRadius: 0, // Hide points on the line
        borderWidth: 2,
        pointBackgroundColor: "transparent",
        segment: { borderColor: "#0D47A1" },
      },
    ],
  };

  // Chart options for customization
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Hide legend
      tooltip: { enabled: true }, // Enable tooltips
    },
    scales: {
      x: {
        grid: { display: false }, // Hide grid lines on X-axis
        ticks: { color: "#333" },
        borderColor: "#333",
        borderWidth: 1,
      },
      y: {
        beginAtZero: false,
        grid: { color: "rgba(0, 0, 0, 0.1)", borderDash: [5, 5] }, // Dashed grid lines on Y-axis
        ticks: { color: "#333", padding: 10, stepSize: 200, min: 0, max: 800 }, // Custom Y-axis scale
        borderColor: "#333",
        borderWidth: 1,
      },
    },
    layout: {
      backgroundColor: "#FFFFFF", // Background color of chart area
    },
  };

  return (
    <div 
      ref={chartRef} 
      className={styles.chart} 
      style={{ width: "100%", maxWidth: "800px", margin: "auto", maxHeight: "280px" }}
    >
      <h4>Balance History</h4>
      <div style={{ height: "250px", backgroundColor: "white" }}> 
        {/* White background for better visibility */}
        <Line data={data} options={options} width={chartSize.width} height={chartSize.height} />
      </div>
    </div>
  );
};

export default BalanceHistoryChart;
