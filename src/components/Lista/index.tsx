import {
  ListaStyled,
  ItemLista,
  Foto,
  Informacoes,
  Nome,
  Valor,
  Descricao,
} from "./styles";

import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";

interface ListaProps {
  professores: Professor[];
}

const Lista = (props: ListaProps) => {
  return (
    <ListaStyled>
      {props.professores.map((professor) => (
        <ItemLista>
          <Foto src={professor.foto} />

          <Informacoes>
            <Nome>{professor.nome}</Nome>
            <Valor>{professor.valor_hora}</Valor>
            <Descricao>{professor.descricao}</Descricao>
            <Button sx={{ width: "70%" }}>Marcar aula com Gabriel</Button>
          </Informacoes>
        </ItemLista>
      ))}
    </ListaStyled>
  );
};

export default Lista;
