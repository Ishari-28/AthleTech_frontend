import { useState, useEffect } from "react";
import "../styles/Gallery.css";
import { GalleryImage } from "./GalleryImage";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icons for pagination
import { Box, Typography } from "@mui/material";

import bgImage from "../assets/images/Home Page Carousel.svg";

const PageName = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "60vh",
        color: "white",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "40px", md: "60px" },
          fontWeight: 800,
        }}
      >
        Gallery of <span style={{ color: "#FF754A" }}>Champions</span>
      </Typography>
      <Typography sx={{ marginTop: "5px", width: "80%" }}>
        Celebrating the spirit of athletics—one moment at a time.
      </Typography>
    </Box>
  );
};

const Images = () => {
  // console.log(GalleryImage)

  const [file, setFile] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(10); // Default images per page

  // Function to Update Images Per Page Based on Screen Size
  useEffect(() => {
    const updateImagesPerPage = () => {
      if (window.innerWidth <= 375) {
        setImagesPerPage(12);
      } else {
        setImagesPerPage(12);
      }
    };

    updateImagesPerPage(); // Call function on component mount

    window.addEventListener("resize", updateImagesPerPage); // Listen for window resize events

    return () => window.removeEventListener("resize", updateImagesPerPage); // Cleanup listener on component unmount
  }, []);

  const totalPages = Math.ceil(GalleryImage.length / imagesPerPage); //Calculate total pages

  //Get current images for the page
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = GalleryImage.slice(
    startIndex,
    startIndex + imagesPerPage
  );

  return (
    <div className="gallery-main-container">
      <div className="gallery-container">
        {currentImages.map((file, index) => (
          <div
            className="galleryimage"
            key={index}
            onClick={() => setFile(file)}
          >
            {file.type === "image" && (
              <img src={file.url} alt={`Gallery ${index}`} />
            )}
          </div>
        ))}
      </div>

      {/* Popup model for image */}
      {file && (
        <div className="popup-galleryimage">
          <span onClick={() => setFile(null)}>&times;</span>
          <img src={file?.url} alt="Selected" />
        </div>
      )}

      <div className="pagination">
        <button
          className="pagination-arrow"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={20} />
        </button>

        {/* **Generate Page Numbers Dynamically** */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`pagination-number ${
              currentPage === page ? "active" : ""
            }`}
          >
            {page}
          </button>
        ))}

        <button
          className="pagination-arrow"
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div>
      <PageName />
      <Images />
    </div>
  );
};

export default Gallery;
