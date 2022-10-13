export const FormatadorService = {
  valorMonetario(valor: number): string {
    return valor.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      style: "currency",
      currency: "BRL",
    });
  },
};
