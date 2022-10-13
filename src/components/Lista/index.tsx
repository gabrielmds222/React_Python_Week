import {
  ListaStyled,
  ItemLista,
  Foto,
  Informacoes,
  Nome,
  Valor,
  Descricao,
  ListaVazia,
} from "./styles";

import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import { FormatadorService } from "../../services/FormatadorService";

interface ListaProps {
  professores: Professor[];
  onSelect: (professor: Professor) => void;
}

const Lista = (props: ListaProps) => {
  return (
    <div>
      {props.professores.length > 0 ? (
        <ListaStyled>
          {props.professores.map((professor) => (
            <ItemLista key={professor.id}>
              <Foto src={professor.foto} />

              <Informacoes>
                <Nome>{professor.nome}</Nome>
                <Valor>
                  {FormatadorService.valorMonetario(professor.valor_hora)} por
                  hora
                </Valor>
                <Descricao>
                  {FormatadorService.limitarTexto(professor.descricao, 200)}
                </Descricao>
                <Button
                  sx={{ width: "70%" }}
                  onClick={() => props.onSelect(professor)}
                >
                  Marcar aula com {professor.nome}
                </Button>
              </Informacoes>
            </ItemLista>
          ))}
        </ListaStyled>
      ) : (
        <ListaVazia>Nenhum item encontrado</ListaVazia>
      )}
    </div>
  );
};

export default Lista;
