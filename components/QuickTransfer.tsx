import React from "react";
import { Card, CardContent, Typography, TextField, Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from '../styles/quickTransfer.module.css';

/**
 * List of users available for quick transfer.
 * Each user object contains:
 * - name: Full name of the user.
 * - role: Job title or designation.
 * - avatar: Path to the avatar image.
 */
const users = [
  { name: "Livia Bator", role: "CEO", avatar: "/New/quickTransfer2.svg" },
  { name: "Randy Press", role: "Director", avatar: "/New/quickTransfer2.svg" },
  { name: "Workman", role: "Designer", avatar: "/New/quickTransfer3.svg" },
];

/**
 * QuickTransfer Component
 *
 * A UI component for sending quick transactions to predefined users.
 *
 * Features:
 * - Displays a list of users with names, roles, and avatars.
 * - Provides an input field to enter an amount.
 * - Includes a "Send" button to initiate a transaction.
 *
 * @returns {JSX.Element} - The rendered QuickTransfer component.
 */
const QuickTransfer = () => {
  return (
    <div className={styles.card}>
      {/* Section Title */}
      <h4>Quick Transfer</h4>

      {/* Main Card Container */}
      <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3, marginLeft: "-0.1em" }}>
        {/* User List Section */}
        <CardContent 
          sx={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 2, 
            flexWrap: "wrap", 
            marginRight: "-3em" 
          }}
        >
          {users.map((user, index) => (
            <div key={index} style={{ textAlign: "center", flex: "1 1 2em" }}>
              {/* User Avatar */}
              <img 
                src={user.avatar} 
                alt={user.name} 
                style={{ width: 56, height: 56, borderRadius: '50%', marginBottom: '8px' }} 
              />
              {/* User Name */}
              <Typography fontWeight={index === 0 ? "bold" : "normal"}>{user.name}</Typography>
              {/* User Role */}
              <Typography color="primary" fontSize={14}>
                {user.role}
              </Typography>
            </div>
          ))}
          {/* Navigation Button */}
          <IconButton>
            <ArrowForwardIosIcon />
          </IconButton>
        </CardContent>

        {/* Amount Input and Send Button Section */}
        <div className={styles.inputAndButton} style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <div className={styles.writeAmount}>Write Amount</div>

          {/* Amount Input Field */}
          <TextField
            variant="outlined"
            placeholder="Write Amount"
            defaultValue="525.50"
            sx={{
              borderRadius: 20,
              width: "100%",
              overflow: "hidden",
              "& .MuiOutlinedInput-root": {
                borderRadius: 20,
              },
              flexGrow: 1,
              maxWidth: "12em",
            }}
          />

          {/* Send Button */}
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
              bgcolor: "black",
              color: "white",
              borderRadius: 20,
              padding: "1.1em 1.5em",
              minWidth: "fit-content",
              position: "absolute",
              right: "3.1em",
              top: "50%",
              transform: "translateY(-50%)",
              "@media (max-width: 600px)": {
                marginRight: "0.8em",
              },
              "@media (min-width: 600px) and (max-width: 800px)": {
                marginRight: "1.4em",
              },
              "@media (min-width: 800px) and (max-width: 1100px)": {
                marginRight: "-2.9em",
                marginTop: "1em",
              },
              "@media (min-width: 1100px) and (max-width: 1400px)": {
                marginRight: "-2.9em",
              },
            }}
          >
            Send
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default QuickTransfer;
