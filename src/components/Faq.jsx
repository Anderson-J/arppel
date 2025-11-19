import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageSquare } from 'lucide-react'

export function Faq() {
    return (
        <section id="faq" className="py-20 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                        Perguntas Frequentes
                    </h2>
                    <p className="max-w-[700px] text-slate-600 md:text-xl">
                        Tire suas dúvidas sobre nosso modelo de trabalho e escopo.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Tabs defaultValue="metodologia" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-8 h-auto">
                            <TabsTrigger value="metodologia" className="text-xs sm:text-sm px-2 py-2 sm:px-3 sm:py-2">
                                Metodologia
                            </TabsTrigger>
                            <TabsTrigger value="escopo" className="text-xs sm:text-sm px-2 py-2 sm:px-3 sm:py-2">
                                Escopo Técnico
                            </TabsTrigger>
                            <TabsTrigger value="contratual" className="text-xs sm:text-sm px-2 py-2 sm:px-3 sm:py-2">
                                Contratual
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="metodologia">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left">
                                        Por que vocês adotam o modelo de Tickets?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600">
                                        Acreditamos que interrupções matam a produtividade. Ao centralizarmos a comunicação via Tickets e
                                        Chat, garantimos que 100% das solicitações sejam documentadas e resolvidas com foco técnico total.
                                        Isso nos permite entregar uma infraestrutura robusta por um custo menor.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left">
                                        Posso ligar ou agendar reuniões de vídeo?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600">
                                        Não realizamos atendimento telefônico ou reuniões de rotina. Todo o suporte é feito via Portal do
                                        Cliente ou Chat. Em casos estratégicos (novos projetos), podemos agendar conferências prévias, mas o
                                        dia a dia é resolvido via texto e código.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left">
                                        Qual é o tempo de resposta (SLA)?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600">
                                        Monitoramento é 8/5. Para atendimento: Crítico (é imediato e comunicado aos engenheiros via automação), Alta Prioridade (4h úteis), Dúvidas Gerais (1 dia útil). Nossa janela principal de execução técnica ocorre horário comercial, garantindo que manutenções não afetem sua operação.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </TabsContent>

                        <TabsContent value="escopo">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left">
                                        Vocês fazem suporte de TI (impressoras, wi-fi)?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600">
                                        Não. Somos uma consultoria especializada em DevOps, SRE e Cloud. Não consertamos impressoras, e-mail de
                                        usuário ou computadores locais. Nosso foco é garantir que seus servidores e pipelines funcionem.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left">
                                        E se meu servidor cair às 22h da noite?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600">
                                        Nossas ferramentas de "self-healing" atuam instantaneamente para reiniciar serviços. Se falhar,
                                        nossos engenheiros recebem alertas críticos e são imediatamente notificados. O monitoramento de incidentes críticos é contínuo, independente do horário.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </TabsContent>

                        <TabsContent value="contratual">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left">
                                        Existe fidelidade ou multa?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600">
                                        Não. Nossos planos mensais podem ser cancelados com aviso prévio de 30 dias. Acreditamos na retenção
                                        pela qualidade, não por contrato.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left">
                                        Sou uma startup pequena, é para mim?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600">
                                        Se você já tem um produto rodando na nuvem e clientes usando, sim. Nosso serviço é ideal para quem
                                        precisa profissionalizar uma infraestrutura que foi feita "às pressas" no início.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </TabsContent>
                    </Tabs>

                    <div className="mt-12 p-6 bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="space-y-1 text-center sm:text-left">
                            <h4 className="font-semibold text-slate-900">Ainda tem dúvidas técnicas?</h4>
                            <p className="text-sm text-slate-600">Fale com a gente.</p>
                        </div>
                        <Button variant="secondary" className="shrink-0">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Iniciar Chat
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
