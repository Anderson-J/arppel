

export function Footer() {
    return (
        <footer className="bg-slate-900 py-12 text-slate-400">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-sm bg-white" />
                            <span className="text-lg font-bold tracking-tight text-white">Arppel</span>
                        </div>
                        <p className="text-sm">
                            Parceiro estratégico de engenharia para Startups e Software Houses.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">Soluções</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-green-400">
                                    CI/CD Automation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-400">
                                    Cloud Migration
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-400">
                                    Kubernetes Management
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-400">
                                    Cost Optimization
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">Empresa</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-green-400">
                                    Sobre Nós
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-400">
                                    Metodologia
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-400">
                                    Carreiras
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-400">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-green-400">
                                    Termos de Uso
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-400">
                                    Privacidade
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-400">
                                    SLA
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
                    <p className="text-xs">© 2025 Arppel. Todos os direitos reservados.</p>
                    <a href="#" className="text-xs hover:text-white">
                        Área do Cliente
                    </a>
                </div>
            </div>
        </footer>
    )
}
