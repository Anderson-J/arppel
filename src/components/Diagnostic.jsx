import { useState } from "react"
import { AlertCircle, CheckCircle2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Diagnostic() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    companyModel: "",
    teamSize: "",
    hosting: "",
    deployMethod: "",
    mainChallenge: "",
    budget: "",
    name: "",
    email: "",
    linkedin: "",
  })
  const [showLowValueMessage, setShowLowValueMessage] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step < 4) setStep((prev) => prev + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (formData.teamSize === "no-devs" || formData.budget === "below-1k") {
      setShowLowValueMessage(true)
      return
    }

    setSubmitted(true)
  }

  const canProceedStep1 = formData.companyModel !== "" && formData.teamSize !== ""
  const canProceedStep2 = formData.hosting !== "" && formData.deployMethod !== ""
  const canProceedStep3 = formData.mainChallenge !== "" && formData.budget !== ""
  const canSubmit = formData.name !== "" && formData.email !== ""

  if (submitted) {
    return (
      <section id="diagnostic" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl rounded-xl border border-green-200 bg-green-50 p-8 text-center shadow-sm">
            <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green-600" />
            <h3 className="mb-2 text-2xl font-bold text-slate-900">Análise Solicitada com Sucesso!</h3>
            <p className="text-slate-600">
              Nossa equipe irá revisar suas informações e entrar em contato em até 24 horas úteis.
            </p>
          </div>
        </div>
      </section>
    )
  }

  if (showLowValueMessage) {
    return (
      <section id="diagnostic" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <AlertCircle className="mx-auto mb-4 h-12 w-12 text-slate-600" />
            <h3 className="mb-2 text-center text-2xl font-bold text-slate-900">
              Obrigado pelo seu interesse!
            </h3>
            <p className="mb-6 text-center text-slate-600">
              Com base no perfil informado, recomendamos começar com nossos materiais gratuitos.
            </p>
            <div className="text-center">
              <Button className="bg-green-500 text-white hover:bg-green-600">
                Baixar E-book Gratuito: DevOps para Iniciantes
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="diagnostic" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col gap-4 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
            <Sparkles className="h-4 w-4" />
            Diagnóstico técnico gratuito
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-slate-900 sm:text-4xl">
            Descubra onde sua operação de nuvem trava e como destravar
          </h2>
          <p className="text-slate-600 md:text-lg">
            Responda 4 passos rápidos para receber um plano sob medida de CI/CD, observabilidade e FinOps.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr,1fr]">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-lg">
              <picture>
                <source
                  srcSet="/diagnostic-visual.webp 1x, /diagnostic-visual@2x.webp 2x"
                  type="image/webp"
                />
                <img
                  src="/diagnostic-visual.webp"
                  alt="Preview de observabilidade e pipelines Arppel"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover opacity-90"
                />
              </picture>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="relative -mt-20 space-y-3 px-6 pb-6 text-white md:-mt-28">
                <div className="inline-flex items-center gap-2 rounded-full bg-green-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  SLA 24h
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-100">
                  <span className="rounded-full bg-white/10 px-3 py-1">CI/CD</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Observabilidade</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">FinOps</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Tempo de resposta</p>
                <p className="text-2xl font-bold text-green-600">24h úteis</p>
                <p className="text-sm text-slate-600">Diagnóstico inicial por engenheiro sênior.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Redução média de custo</p>
                <p className="text-2xl font-bold text-green-600">-28%</p>
                <p className="text-sm text-slate-600">Ajuste de sizing, autoscaling e cache.</p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <div className="mb-8 flex items-center justify-center gap-2">
              {[1, 2, 3, 4].map((currentStep) => (
                <div
                  key={currentStep}
                  className={`h-2 w-16 rounded-full transition-colors ${
                    currentStep === step
                      ? "bg-green-500"
                      : currentStep < step
                      ? "bg-green-500/50"
                      : "bg-slate-200"
                  }`}
                />
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-slate-900">Perfil da Empresa</h3>
                  <p className="text-slate-600">Entenda o contexto para calibrar a recomendação.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyModel" className="text-slate-700">
                    Qual modelo descreve melhor sua empresa?
                  </Label>
                  <Select value={formData.companyModel} onValueChange={(value) => updateField("companyModel", value)}>
                    <SelectTrigger id="companyModel" className="w-full border-slate-300 bg-white text-slate-900">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent className="z-50 border-slate-200 bg-white text-slate-900">
                      <SelectItem value="startup" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        Startup (SaaS)
                      </SelectItem>
                      <SelectItem value="software-house" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        Software House / Fábrica
                      </SelectItem>
                      <SelectItem value="ecommerce" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        E-commerce
                      </SelectItem>
                      <SelectItem value="traditional" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        Empresa Tradicional
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-slate-700">Tamanho da Equipe de Desenvolvimento (Devs):</Label>
                  <RadioGroup value={formData.teamSize} onValueChange={(value) => updateField("teamSize", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no-devs" id="no-devs" className="border-slate-400 text-green-600" />
                      <Label htmlFor="no-devs" className="cursor-pointer font-normal text-slate-700">
                        Não tenho devs internos.
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1-5" id="1-5" className="border-slate-400 text-green-600" />
                      <Label htmlFor="1-5" className="cursor-pointer font-normal text-slate-700">
                        1 - 5 Desenvolvedores.
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="6-20" id="6-20" className="border-slate-400 text-green-600" />
                      <Label htmlFor="6-20" className="cursor-pointer font-normal text-slate-700">
                        6 - 20 Desenvolvedores.
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="20+" id="20plus" className="border-slate-400 text-green-600" />
                      <Label htmlFor="20plus" className="cursor-pointer font-normal text-slate-700">
                        20+ Desenvolvedores.
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex justify-end">
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={!canProceedStep1}
                    className="bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-50"
                  >
                    Próximo
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-slate-900">Maturidade Técnica</h3>
                  <p className="text-slate-600">Mapa atual de infraestrutura e deploy para dimensionar esforço.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hosting" className="text-slate-700">
                    Onde sua aplicação está hospedada hoje?
                  </Label>
                  <Select value={formData.hosting} onValueChange={(value) => updateField("hosting", value)}>
                    <SelectTrigger id="hosting" className="w-full border-slate-300 bg-white text-slate-900">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent className="z-50 border-slate-200 bg-white text-slate-900">
                      <SelectItem value="azure" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        Azure
                      </SelectItem>
                      <SelectItem value="aws" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        AWS
                      </SelectItem>
                      <SelectItem value="digitalocean" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        DigitalOcean/Linode
                      </SelectItem>
                      <SelectItem value="gcp" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        Google Cloud
                      </SelectItem>
                      <SelectItem value="local" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        Servidor Local/VPS
                      </SelectItem>
                      <SelectItem value="not-cloud" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        Ainda não está na nuvem
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-slate-700">Como são feitos os deploys (atualizações) hoje?</Label>
                  <RadioGroup value={formData.deployMethod} onValueChange={(value) => updateField("deployMethod", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="manual" id="manual" className="border-slate-400 text-green-600" />
                      <Label htmlFor="manual" className="cursor-pointer font-normal text-slate-700">
                        Manual (FTP / Drag & Drop).
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="semi-auto" id="semi-auto" className="border-slate-400 text-green-600" />
                      <Label htmlFor="semi-auto" className="cursor-pointer font-normal text-slate-700">
                        Script Básico / Semi-automático.
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cicd" id="cicd" className="border-slate-400 text-green-600" />
                      <Label htmlFor="cicd" className="cursor-pointer font-normal text-slate-700">
                        Pipeline Automatizado (CI/CD).
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unknown" id="unknown" className="border-slate-400 text-green-600" />
                      <Label htmlFor="unknown" className="cursor-pointer font-normal text-slate-700">
                        Não sei dizer.
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex justify-between">
                  <Button type="button" onClick={handleBack} variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-100">
                    Voltar
                  </Button>
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={!canProceedStep2}
                    className="bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-50"
                  >
                    Próximo
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-slate-900">O Problema (A Dor)</h3>
                  <p className="text-slate-600">Priorize a dor principal para direcionarmos o plano técnico.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mainChallenge" className="text-slate-700">
                    Qual o principal desafio técnico no momento?
                  </Label>
                  <Select value={formData.mainChallenge} onValueChange={(value) => updateField("mainChallenge", value)}>
                    <SelectTrigger id="mainChallenge" className="w-full border-slate-300 bg-white text-slate-900">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent className="z-50 border-slate-200 bg-white text-slate-900">
                      <SelectItem value="instability" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        Deploy quebra com frequência / Instabilidade.
                      </SelectItem>
                      <SelectItem value="costs" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        Custos de nuvem estão muito altos (FinOps).
                      </SelectItem>
                      <SelectItem value="time" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        Time de dev perde muito tempo configurando infra.
                      </SelectItem>
                      <SelectItem value="security" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        Preciso de auditoria de segurança e backup.
                      </SelectItem>
                      <SelectItem value="migration" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        Quero migrar para a Nuvem (Setup Inicial).
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-slate-700">
                    Orçamento Mensal Estimado para Infra/DevOps:
                  </Label>
                  <Select value={formData.budget} onValueChange={(value) => updateField("budget", value)}>
                    <SelectTrigger id="budget" className="w-full border-slate-300 bg-white text-slate-900">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent className="z-50 border-slate-200 bg-white text-slate-900">
                      <SelectItem value="below-1k" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        Abaixo de R$ 1.000 (Projetos pequenos).
                      </SelectItem>
                      <SelectItem value="1.5-3k" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        R$ 1.500 - R$ 3.000 (Manutenção).
                      </SelectItem>
                      <SelectItem value="3-5k" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        R$ 3.000 - R$ 5.000 (Evolução/CI/CD).
                      </SelectItem>
                      <SelectItem value="above-5k" className="cursor-pointer focus:bg-slate-100 focus:text-slate-900">
                        Acima de R$ 5.000.
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-between">
                  <Button type="button" onClick={handleBack} variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-100">
                    Voltar
                  </Button>
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={!canProceedStep3}
                    className="bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-50"
                  >
                    Próximo
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-slate-900">Contato</h3>
                  <p className="text-slate-600">Última etapa para receber o roadmap sob medida.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    placeholder="João Silva"
                    required
                    className="border-slate-300 bg-white text-slate-900"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700">
                    E-mail Corporativo
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    placeholder="joao@empresa.com.br"
                    required
                    className="border-slate-300 bg-white text-slate-900"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin" className="text-slate-700">
                    LinkedIn (Opcional)
                  </Label>
                  <Input
                    id="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={(event) => updateField("linkedin", event.target.value)}
                    placeholder="https://linkedin.com/in/seu-perfil"
                    className="border-slate-300 bg-white text-slate-900"
                  />
                </div>

                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <Button type="button" onClick={handleBack} variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-100">
                    Voltar
                  </Button>
                  <Button
                    type="submit"
                    disabled={!canSubmit}
                    className="bg-green-500 text-white hover:bg-green-600 disabled:opacity-50"
                  >
                    Solicitar Análise Técnica
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
