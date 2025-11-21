/*
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, User, Building, MessageSquare, CheckCircle2 } from 'lucide-react'
import { trackFormSubmit } from '@/hooks/useAnalytics'

const contactSchema = z.object({
    name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
    email: z.string().email('Email inválido'),
    company: z.string().optional(),
    message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

export function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(contactSchema),
    })

    const onSubmit = async (data) => {
        setIsSubmitting(true)

        try {
            // Formspree endpoint - substitua com seu ID
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                setIsSubmitted(true)
                trackFormSubmit('contact_main')
                reset()
                setTimeout(() => setIsSubmitted(false), 5000)
            }
        } catch (error) {
            console.error('Erro ao enviar formulário:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="max-w-2xl mx-auto text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                        Vamos Conversar?
                    </h2>
                    <p className="mt-4 text-slate-600 md:text-xl">
                        Conte-nos sobre seu desafio de infraestrutura.
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {isSubmitted ? (
                        <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
                            <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-green-900 mb-2">
                                Mensagem enviada com sucesso!
                            </h3>
                            <p className="text-green-700">
                                Obrigado pelo contato. Retornaremos em breve.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                    Nome <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Seu nome"
                                        className="pl-10"
                                        {...register('name')}
                                    />
                                </div>
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="seu@email.com"
                                        className="pl-10"
                                        {...register('email')}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                                    Empresa (opcional)
                                </label>
                                <div className="relative">
                                    <Building className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                    <Input
                                        id="company"
                                        type="text"
                                        placeholder="Nome da sua empresa"
                                        className="pl-10"
                                        {...register('company')}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                    Mensagem <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                    <Textarea
                                        id="message"
                                        placeholder="Descreva seu desafio de infraestrutura..."
                                        rows={5}
                                        className="pl-10"
                                        {...register('message')}
                                    />
                                </div>
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full bg-slate-900 text-white hover:bg-slate-800"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                            </Button>

                            <p className="text-xs text-center text-slate-500">
                                Ao enviar, você concorda com nossa política de privacidade.
                            </p>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
*/