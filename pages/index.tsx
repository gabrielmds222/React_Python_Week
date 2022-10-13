import type { NextPage } from "next";
import Lista from "../src/components/Lista";
import { Box } from "@mui/material";
import { Professor } from "../src/@types/professor";
import { useIndex } from "../src/hooks/pages/useIndex";

const Home: NextPage = () => {
  const { listaProfessores } = useIndex();
  return (
    <Box sx={{ backgroundColor: "secondary.main" }}>
      <Lista professores={listaProfessores} />
    </Box>
  );
};

export default Home;
