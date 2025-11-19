import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-sm bg-slate-900" />
                    <span className="text-lg font-bold tracking-tight text-slate-900">Arppel</span>
                </div>
                <nav className="hidden gap-6 md:flex">
                    <a href="#solutions" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                        Soluções
                    </a>
                    <a href="#methodology" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                        Metodologia
                    </a>
                    <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                        Planos
                    </a>
                    <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                        FAQ
                    </a>
                </nav>
                <Button className="bg-slate-900 text-white hover:bg-slate-800">Agendar Diagnóstico</Button>
            </div>
        </header>
    )
}
