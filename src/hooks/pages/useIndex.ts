import { useState, useEffect } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
  const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);

  useEffect(() => {
    ApiService.get("/professores/").then((response) => {
      setListaProfessores(response.data);
    });
  }, []);

  return {
    listaProfessores,
  };
}
