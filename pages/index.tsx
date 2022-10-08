import type { NextPage } from "next";
import Lista from "../src/components/Lista";
import { Box } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Box sx={{ backgroundColor: "secondary.main" }}>
      <Lista />
    </Box>
  );
};

export default Home;
