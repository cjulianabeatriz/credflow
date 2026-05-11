// src/components/features/form/CreditForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { creditSchema, CreditFormData } from "@/types/credit";
import { analisarCredito } from "@/services/creditAnalysis";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CreditForm() {
  const [step, setStep] = useState(1);
  const [resultado, setResultado] = useState<any>(null);

  const form = useForm<CreditFormData>({
    resolver: zodResolver(creditSchema),
  });

  const onSubmit = (data: CreditFormData) => {
    const resultado = analisarCredito(data);
    setResultado(resultado);
  };

  return (
    <div className="space-y-6 mt-6">
      {/* STEP 1 */}
      {step === 1 && (
        <>
          <Input placeholder="Nome" {...form.register("nome")} />
          <Input
            type="number"
            placeholder="Idade"
            {...form.register("idade", { valueAsNumber: true })}
          />

          <Button onClick={() => setStep(2)}>Continuar</Button>
        </>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <>
          <Input
            type="number"
            placeholder="Renda mensal"
            {...form.register("renda", { valueAsNumber: true })}
          />

          <Input
            type="number"
            placeholder="Dívidas atuais"
            {...form.register("dividas", { valueAsNumber: true })}
          />

          <Button onClick={() => setStep(3)}>Continuar</Button>
        </>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <>
          <select
            className="w-full h-12 border rounded-xl px-3"
            {...form.register("tipoRenda")}
          >
            <option value="">Tipo de renda</option>
            <option value="CLT">CLT</option>
            <option value="AUTONOMO">Autônomo</option>
          </select>

          <Button onClick={form.handleSubmit(onSubmit)}>
            Analisar crédito
          </Button>
        </>
      )}

      {/* RESULTADO */}
      {resultado && (
        <div className="p-4 rounded-xl border mt-6">
          <h2 className="text-lg font-semibold">{resultado.status}</h2>
          <p className="text-sm text-muted-foreground">
            {resultado.mensagem}
          </p>
        </div>
      )}
    </div>
  );
}