import { useState, useEffect } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
  const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [professorSelecionado, setProfessorSelecionado] =
    useState<Professor | null>(null);

  useEffect(() => {
    ApiService.get("/professores/").then((response) => {
      setListaProfessores(response.data);
    });
  }, []);

  function MarcarAula() {
    if (professorSelecionado !== null) {
      if (ValidarDadosAula()) {
        ApiService.post(`professores/${professorSelecionado.id}/aulas`, {
          nome,
          email,
        })
          .then(() => {
            setProfessorSelecionado(null);
            alert("Cadastrado com sucesso");
          })
          .catch((error) => {
            alert(error.response?.data.message);
          });
      } else {
        alert("Preencha os dados corretamente");
      }
    }
  }

  function ValidarDadosAula() {
    return nome.length > 0 && email.length > 0;
  }

  return {
    listaProfessores,
    nome,
    setNome,
    email,
    setEmail,
    professorSelecionado,
    setProfessorSelecionado,
    MarcarAula,
  };
}
