import { useState } from "react";
import { Professor } from "../../@types/professor";

export function useIndex() {
  const [listaProfessores, setListaProfessores] = useState<Professor[]>([
    {
      id: 1,
      nome: "Professor 1",
      foto: "https://github.com/gabrielmds222.png",
      descricao: "Professor de front-end",
      valor_hora: 100,
    },
    {
      id: 2,
      nome: "Professor 2",
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
  ]);

  return {
    listaProfessores,
  };
}
