import { Box, Typography } from "@mui/material";

import winners from "../../assets/images/AboutUsImages/winners.jpg";

const description =
  "Last year’s Kids’ Athletic Meet was a grand event with the participation of many colleges and individual athletes, creating an exciting and competitive atmosphere. Held at the University of Moratuwa grounds, the event witnessed remarkable performances from young talents. Among them, the athletes from Maris Stella College shone brightly, securing the Boys’ Championship title with their dedication and skill. We congratulate them on their achievement and look forward to another thrilling competition this year!";

function PastWinners() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: { xs: "30px", md: "100px" },
        // width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "20px", md: " 0 100px" },
        marginBottom: { xs: "40px", md: "100px" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "35px", md: "48px" },
          fontWeight: 600,
          color: "rgb(47, 47, 47)",
          textAlign: "left",
        }}
      >
        2024 Mora Kid Athelete Winners
      </Typography>

      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            fontSize: "16px",
            margin: "15px 0",
            color: "rgba(20,20,20,0.8)",
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {description}
        </Typography>
      </Box>

      <Box
        component="img"
        src={winners}
        sx={{
          width: { xs: "100%", md: "100%" },
          height: { xs: "auto", md: "auto" },
          borderRadius: "10px",
        }}
      ></Box>
    </Box>
  );
}

export default PastWinners;
