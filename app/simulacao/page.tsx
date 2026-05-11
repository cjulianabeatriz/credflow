import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SimulacaoPage() {
  return (
    <Container>
      <main className="flex flex-col gap-8 pb-8">
        
        <Button variant="ghost" asChild className="w-fit -ml-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            Voltar
          </Link>
        </Button>

        <div className="flex flex-col">
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">
            Iniciando sua Análise
          </h1>
          <p className="text-muted-foreground text-lg">
            Preencha os dados abaixo para descobrirmos seu potencial de crédito.
          </p>
        </div>

        <div className="p-12 border-2 border-dashed rounded-lg bg-muted/20 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            Área do Formulário de Simulação
          </p>
        </div>

      </main>
    </Container>
  );
}