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

const Lista = () => {
  return (
    <ListaStyled>
      <ItemLista>
        <Foto src="https://github.com/gabrielmds222.png" />

        <Informacoes>
          <Nome>Gabriel Medeiros</Nome>
          <Valor>R$100,00 por hora</Valor>
          <Descricao>Aulas de programação</Descricao>
          <Button>Marcar aula</Button>
        </Informacoes>
      </ItemLista>
    </ListaStyled>
  );
};

export default Lista;
