import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import styles from '../styles/expenseStatistics.module.css';

// Register required chart.js elements and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

/**
 * ExpenseChart Component
 * A pie chart representing the breakdown of different expense categories.
 *
 * Features:
 * - Displays expense distribution with percentage labels.
 * - Uses Chart.js with the "chartjs-plugin-datalabels" for data labels.
 * - Custom colors and hover effects for better visualization.
 */
const ExpenseChart = () => {
  /**
   * Data for the pie chart.
   * Represents different expense categories and their corresponding percentages.
   */
  const data = {
    labels: ["Entertainment", "Bill Expense", "Investment", "Others"], // Labels for each segment
    datasets: [
      {
        data: [30, 15, 20, 35], // Percentage distribution of expenses
        backgroundColor: ["#1F2A44", "#F37021", "#2B6ED2", "#101010"], // Segment colors
        hoverBackgroundColor: ["#293B5F", "#FA812F", "#3478D6", "#232323"], // Colors on hover
        borderWidth: 2,
        borderColor: "#fff", // White border for better separation
        offset: [35, 20, 40, 30], // Adds spacing between segments for emphasis
      },
    ],
  };

  /**
   * Chart configuration options.
   * Customizes legend display, data labels, and rotation.
   */
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the legend for a cleaner look
      },
      datalabels: {
        /**
         * Custom formatter for data labels.
         * Displays both the percentage and the corresponding category label.
         * 
         * @param {number} value - The data value of the segment.
         * @param {object} context - Context object containing chart data.
         * @returns {string} - Formatted percentage and label string.
         */
        formatter: (value: number, context: { dataIndex: number; chart: any }) => {
          const dataset = context.chart.data.datasets[0] as { data: number[] };
          const total = dataset.data.reduce((acc, val) => acc + val, 0); // Sum of all data values
          const percentage = ((value / total) * 100).toFixed(1); // Calculate percentage
          const label = context.chart.data.labels[context.dataIndex] as string; // Get corresponding label
          return `${percentage}%\n${label}`; // Return formatted text
        },
        color: '#fff', // White text for better contrast
        display: true, // Ensures labels are always visible
      },
    },
    rotation: 165, // Rotates the pie chart for a better visual arrangement
  };

  return (
    <div className={styles.chart} style={{ width: "300px", height: "300px", position: "relative" }}>
      <h4>Expense Statistics</h4>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ExpenseChart;
