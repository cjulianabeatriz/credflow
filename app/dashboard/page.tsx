
import Container from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <Container>
      <div>
            <h1 className="text-2xl font-bold">Olá, Juliana! </h1>
            <span>aqui está sua análise financeira</span>
            </div>
             <Card className="w-full max-w-sm">
              <div >
                <h2 className="text-lg font-semibold">Score CredFlow</h2>
                <h1 className="text-3xl font-bold">850</h1> 
                <span>pontos</span>
              </div>
              <Badge>Perfil: Baixo risco</Badge>
              <span>Seu score está ótimo! Isso indica uma boa saúde financeira.</span>
             </Card>
    </Container>
  );
}