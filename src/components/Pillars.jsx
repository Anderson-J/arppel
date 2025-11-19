import { Rocket, Terminal, Eye, TrendingUp } from 'lucide-react'

const pillars = [
  {
    icon: Rocket,
    title: "Automação de Deploy (CI/CD)",
    text: "Fim do 'na minha máquina funciona'. Pipelines automatizados para deploys seguros e frequentes.",
  },
  {
    icon: Terminal,
    title: "Infraestrutura como Código (IaC)",
    text: "Ambientes reprodutíveis com Terraform. Subimos infraestrutura em minutos, totalmente documentada.",
  },
  {
    icon: Eye,
    title: "Observabilidade & SRE",
    text: "Monitoramento proativo. Identificamos gargalos e erros antes que seu cliente final perceba.",
  },
  {
    icon: TrendingUp,
    title: "FinOps & Otimização",
    text: "Análise contínua da fatura de Cloud para eliminar desperdícios e ajustar recursos.",
  },
]

export function Pillars() {
  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-slate-900 sm:text-4xl">Nossos Pilares</h2>
          <p className="mt-4 text-slate-600">Base sólida para escalar sua operação tecnológica.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                <pillar.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">{pillar.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
