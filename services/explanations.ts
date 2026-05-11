export function gerarExplicacoes({
  renda,
  dividas,
}: {
  renda: number;
  dividas: number;
}) {
  const comprometimento = dividas / renda;

  const mensagens = [];

  if (comprometimento > 0.6) {
    mensagens.push("Seu nível de endividamento está muito alto.");
  }

  if (comprometimento < 0.3) {
    mensagens.push("Seu controle de dívidas é positivo.");
  }

  if (renda < 2000) {
    mensagens.push("Sua renda pode limitar seu acesso ao crédito.");
  }

  return mensagens;
}