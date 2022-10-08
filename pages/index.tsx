import type { NextPage } from "next";
import Lista from "../src/components/Lista";
import { Box } from "@mui/material";
import { Professor } from "../src/@types/professor";

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Professor 1",
      foto: "https://github.com/gabrielmds222.png",
      descricao: "Professor de front-end",
      valor_hora: 100,
    },
    {
      id: 2,
      nome: "Professor 1",
      foto: "https://github.com/gabrielmds222.png",
      descricao: "Professor de front-end",
      valor_hora: 100,
    },
    {
      id: 3,
      nome: "Professor 1",
      foto: "https://github.com/gabrielmds222.png",
      descricao: "Professor de front-end",
      valor_hora: 100,
    },
    {
      id: 4,
      nome: "Professor 1",
      foto: "https://github.com/gabrielmds222.png",
      descricao: "Professor de front-end",
      valor_hora: 100,
    },
  ];

  return (
    <Box sx={{ backgroundColor: "secondary.main" }}>
      <Lista professores={professores} />
    </Box>
  );
};

export default Home;
