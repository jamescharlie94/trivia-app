import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  const navigate = useNavigate();

  const handleClickBegin = useCallback(() => {
    navigate("/qa");
  }, [navigate]);

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Typography variant="h3" marginBottom={10}>
        Welcome to the Trivia Challenge!
      </Typography>
      <Typography variant="h5" marginBottom={10}>
        You will be presented with 10 True or False questions.
      </Typography>
      <Typography variant="h5" marginBottom={10}>
        Can you score 100%?
      </Typography>
      <Button color="primary" variant="contained" onClick={handleClickBegin}>
        BEGIN
      </Button>
    </Box>
  );
}
