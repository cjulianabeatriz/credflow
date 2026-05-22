# CredFlow

# CredFlow

Plataforma de simulação e análise de crédito pessoal.

## 🗺️ Arquitetura e Mapa do Sistema (Sitemap)

```mermaid
graph TD
    A[ /auth ] --> A1[ /login ]
    A[ /auth ] --> A2[ /register ]
    A[ /auth ] --> A3[ /onboarding ]

    B[ /dashboard ] --> B1[ Cards: Score & Perfil ]
    B[ /dashboard ] --> B2[ Gráfico: Entradas vs Saídas ]

    C[ /analise-credito ] --> C1[ Aba: Fatores de Impacto ]
    C[ /analise-credito ] --> C2[ Aba: Evolução do Score ]

    D[ /fluxo-caixa ] --> D1[ Calendário de Recebíveis ]
    D[ /fluxo-caixa ] --> D2[ Análise de Volatilidade ]

    E[ /simulador ] --> E1[ Sliders Dinâmicos ]
    E[ /simulador ] --> E2[ Stress Test de Renda ]

## Estrutura do Monorepo

```
credflow/
├── apps/
│   ├── web/     # Frontend — Next.js 16 + React 19 + TypeScript
│   └── api/     # Backend — Spring Boot 3 + Java 21 + Maven (em breve)
├── packages/    # Pacotes compartilhados (em breve)
├── nx.json      # Configuração do Nx
└── package.json # Workspace root
```

## Pré-requisitos

- Node.js 20+
- npm 10+

## Instalação

```bash
npm install
```

## Rodando o projeto

```bash
# Frontend em modo desenvolvimento
npm run dev

# Build do frontend
npm run build

# Lint
npm run lint
```

## Tecnologias

| Camada | Tecnologia |
|---|---|
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui |
| Monorepo | Nx 21, npm workspaces |
| Backend (em breve) | Spring Boot 3, Java 21, Maven, PostgreSQL |
