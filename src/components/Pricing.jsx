import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-slate-900 sm:text-4xl">Planos Flexíveis</h2>
          <p className="mt-4 text-slate-600">Escolha o nível de suporte ideal para o seu estágio.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12 max-w-6xl mx-auto">
          {/* Plan 1: Guardian */}
          <Card className="flex flex-col border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-900">Guardian</CardTitle>
              <CardDescription>Manutenção e Segurança</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">R$ 1.800</span>
                <span className="text-slate-500">/mês</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Monitoramento
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Backups Gerenciados
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Patches de Segurança
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Relatório Mensal
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">
                Começar Agora
              </Button>
            </CardFooter>
          </Card>

          {/* Plan 2: Builder (Highlighted) */}
          <Card className="flex flex-col border-green-500 shadow-lg relative scale-105 z-10">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
              Mais Escolhido
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-900">Builder</CardTitle>
              <CardDescription>Evolução Contínua</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">R$ 3.500</span>
                <span className="text-slate-500">/mês</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2 font-medium text-slate-900">
                  <Check className="h-4 w-4 text-green-500" /> Tudo do Guardian +
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Gestão de CI/CD
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Troubleshooting de Deploy
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> 10h técnicas de evolução
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Atendimento Prioritário
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">Começar Agora</Button>
            </CardFooter>
          </Card>

          {/* Plan 3: On-Demand */}
          <Card className="flex flex-col border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-900">On-Demand</CardTitle>
              <CardDescription>Projetos Pontuais</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">Sob Consulta</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Migração para Nuvem
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Dockerização de Legado
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Auditoria de Custos
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Setup Inicial
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">
                Falar com Consultor
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
