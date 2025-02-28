// CustomBarChart.tsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Box, Typography } from "@mui/material";
import styles from '../styles/weeklyActivity.module.css';

/**
 * CustomBarChart Component
 * 
 * A custom bar chart to visualize weekly deposit and withdrawal activity. 
 * The chart displays two bars for each day of the week representing deposit and 
 * withdrawal values. The bar colors and the chart's design are customizable.
 * 
 * @returns {JSX.Element} - The rendered custom bar chart component displaying weekly activity.
 */
export default function CustomBarChart() {

  // Data representing deposit and withdrawal activities for each day of the week.
  const data = [
    { day: "Sat", deposit: 230, withdraw: 480 },
    { day: "Sun", deposit: 120, withdraw: 340 },
    { day: "Mon", deposit: 250, withdraw: 330 },
    { day: "Tue", deposit: 360, withdraw: 470 },
    { day: "Wed", deposit: 210, withdraw: 130 },
    { day: "Thu", deposit: 220, withdraw: 390 },
    { day: "Fri", deposit: 310, withdraw: 400 },
  ];

  return (
    <div className={styles.chart}>
      {/* Title of the chart */}
      <h4>Weekly Activity</h4>

      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "12px",  // Rounded corners for the box
          p: 3,  // Padding around the box content
          boxShadow: 2,  // Shadow around the box
          maxWidth: 700,  // Set a maximum width for the chart
        }}
      >
        {/* Legend for deposit and withdrawal categories */}
        <Typography variant="body2" align="right" sx={{ mb: 1, color: "#666" }}>
          <span style={{ color: "#2563eb", fontWeight: 600 }}>● Deposit</span>{" "}
          <span style={{ color: "#111", fontWeight: 600, marginLeft: 10 }}>
            ● Withdraw
          </span>
        </Typography>

        {/* Responsive container to make the chart resize based on available width */}
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            {/* Grid lines on the chart */}
            <CartesianGrid stroke="#e0e0e0" strokeWidth={1} vertical={false} />

            {/* X-axis representing the days of the week */}
            <XAxis dataKey="day" axisLine={false} />

            {/* Y-axis with custom ticks for better readability */}
            <YAxis
              axisLine={false}  // Hide Y-axis line
              ticks={[0, 100, 200, 300, 400, 500]}  // Custom Y-axis ticks
            />
            
            {/* Tooltip to display information on hover */}
            <Tooltip />
            
            {/* Bar for withdrawal data */}
            <Bar
              dataKey="withdraw"
              name=" "
              fill="#111"  // Color for withdrawal bars (black)
              radius={[10, 10, 10, 10]}  // Rounded corners for the bars
            />
            
            {/* Bar for deposit data */}
            <Bar
              dataKey="deposit"
              name=" "
              fill="#2563eb"  // Color for deposit bars (blue)
              radius={[10, 10, 10, 10]}  // Rounded corners for the bars
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
}
