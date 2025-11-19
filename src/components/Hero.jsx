import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                    <motion.div
                        className="flex flex-col justify-center space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="space-y-4">
                            <motion.div
                                className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-700"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                                Disponível para novos projetos
                            </motion.div>
                            <motion.h1
                                className="text-4xl font-bold tracking-tighter text-slate-900 sm:text-5xl xl:text-6xl/none"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                Infraestrutura de Big Tech para sua Software House.
                            </motion.h1>
                            <motion.p
                                className="max-w-[550px] text-slate-600 md:text-xl leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Tenha pipelines CI/CD, monitoramento e redução de custos em nuvem sem contratar um time interno.
                                Operação 100% focada em entregas.
                            </motion.p>
                        </div>
                        <motion.div
                            className="flex flex-col gap-3 min-[400px]:flex-row"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
                                Falar com Engenheiro
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button size="lg" variant="outline" className="border-slate-200 text-slate-900 hover:bg-slate-50">
                                Ver Planos
                            </Button>
                        </motion.div>
                        <motion.div
                            className="flex items-center gap-4 text-sm text-slate-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <div className="flex items-center gap-1">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <span>Azure</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <span>AWS</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <span>Kubernetes</span>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="relative w-full max-w-[500px] lg:max-w-[600px] mx-auto"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="overflow-hidden rounded-xl bg-slate-100 p-2 shadow-xl border border-slate-200">
                            {/* Abstract Server/Code Visualization */}
                            <div className="w-full rounded-lg bg-slate-900 p-6 font-mono text-xs text-green-400 shadow-inner overflow-hidden relative">
                                <div className="absolute top-0 left-0 w-full h-8 bg-slate-800 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="mt-8 space-y-2 opacity-80">
                                    <p>
                                        <span className="text-purple-400">module</span> "kubernetes_cluster" {"{"}
                                    </p>
                                    <p className="pl-4">
                                        source = <span className="text-yellow-300">"./modules/k8s"</span>
                                    </p>
                                    <p className="pl-4">
                                        region = <span className="text-yellow-300">"us-east-1"</span>
                                    </p>
                                    <p className="pl-4">
                                        node_count = <span className="text-blue-400">3</span>
                                    </p>
                                    <p className="pl-4">
                                        auto_scaling = <span className="text-blue-400">true</span>
                                    </p>
                                    <p>{"}"}</p>
                                    <br />
                                    <p>
                                        <span className="text-slate-500"># Deploying infrastructure...</span>
                                    </p>
                                    <p>
                                        <span className="text-green-500">✓</span> VPC created
                                    </p>
                                    <p>
                                        <span className="text-green-500">✓</span> Subnets configured
                                    </p>
                                    <p>
                                        <span className="text-green-500">✓</span> Load Balancer active
                                    </p>
                                    <div className="animate-pulse mt-4">_</div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-green-100/50 blur-3xl -z-10"></div>
                        <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
