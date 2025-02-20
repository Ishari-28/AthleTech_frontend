import { Box, Link, Typography } from "@mui/material";
import eventLogo from "../../assets/images/eventLogo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { links } from "../../DB/socialMedia";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#101524",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          width: "80%",
          paddingTop: "60px",
          gap: "30px",
        }}
      >
        <Box>
          <Typography
            sx={{
              lineHeight: "24px",
              fontSize: "20px",
              fontWeight: 600,
              marginBottom: "15px",
            }}
          >
            MORA Kid Athlete
          </Typography>
          <Typography sx={{ lineHeight: "24px", fontSize: "14px" }}>
            University of Moratuwa
          </Typography>
          <Typography sx={{ lineHeight: "24px", fontSize: "14px" }}>
            Bandaranayake Mawatha, Moratuwa
          </Typography>
          <Typography sx={{ lineHeight: "24px", fontSize: "14px" }}>
            Sri Lanka
          </Typography>
          <Typography sx={{ lineHeight: "24px", fontSize: "14px" }}>
            071 777 7838
          </Typography>
        </Box>

        <Box
          component="img"
          src={eventLogo}
          sx={{
            width: "200px",
            height: "auto",
          }}
        ></Box>

        <Box sx={{ display: "flex", gap: "50px", height: "100px" }}>
          <Link href={links.fb} sx={{ textDecoration: "none", color: "white" }}>
            <FacebookRoundedIcon sx={{ fontSize: "40px", cursor: "pointer" }} />
          </Link>
          <Link
            href={links.whatsApp}
            sx={{ textDecoration: "none", color: "white" }}
          >
            <WhatsAppIcon sx={{ fontSize: "40px", cursor: "pointer" }} />
          </Link>
          <Link
            href={links.emai}
            sx={{ textDecoration: "none", color: "white" }}
          >
            <EmailOutlinedIcon sx={{ fontSize: "40px", cursor: "pointer" }} />
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "80%",
          marginTop: { xs: "5px", md: "40px" },
          padding: " 10px",
          borderTop: "1px solid white",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ color: "white", fontSize: "14px" }}>
          MORA Kid Athlete | All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
