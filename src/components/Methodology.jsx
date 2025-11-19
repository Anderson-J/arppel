import { MessageSquare, Ticket, Clock, FileText, Search } from 'lucide-react'

export function Methodology() {
    return (
        <section id="methodology" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative rounded-2xl bg-slate-900 p-8 md:p-12 overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-12 -mr-12 h-64 w-64 rounded-full bg-green-500/20 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>

                            <div className="relative z-10 grid gap-6">
                                <div className="flex items-start gap-4 rounded-lg bg-white/5 p-4 backdrop-blur-sm border border-white/10">
                                    <Ticket className="h-6 w-6 text-green-400 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">Ticket Aberto</h4>
                                        <p className="text-sm text-slate-400">Solicitação de novo ambiente de staging.</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="h-8 w-0.5 bg-white/10"></div>
                                </div>
                                <div className="flex items-start gap-4 rounded-lg bg-white/5 p-4 backdrop-blur-sm border border-white/10">
                                    <Search className="h-6 w-6 text-green-400 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">Triagem</h4>
                                        <p className="text-sm text-slate-400">Classificado como Prioridade Alta. Atribuído a Eng. Sênior.</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="h-8 w-0.5 bg-white/10"></div>
                                </div>
                                <div className="flex items-start gap-4 rounded-lg bg-green-500/10 p-4 backdrop-blur-sm border border-green-500/20">
                                    <FileText className="h-6 w-6 text-green-400 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-green-400">Resolvido & Documentado</h4>
                                        <p className="text-sm text-slate-400">Ambiente criado. PR aberto. Documentação atualizada.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-6">
                        <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-800">
                            Solution-First
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter text-slate-900 sm:text-4xl">
                            Por que não fazemos reuniões?
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Focamos em <span className="font-semibold text-slate-900">Deep Work</span>. Nossa comunicação é
                            centralizada via Portal de Tickets e Chat. Você abre a solicitação, e nossos engenheiros
                            resolvem na janela técnica.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                                    <Clock className="h-4 w-4" />
                                </div>
                                <span className="text-slate-700">Sem interrupções, apenas resultados.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                                    <MessageSquare className="h-4 w-4" />
                                </div>
                                <span className="text-slate-700">Comunicação eficiente.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                                    <FileText className="h-4 w-4" />
                                </div>
                                <span className="text-slate-700">Tudo 100% documentado.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
