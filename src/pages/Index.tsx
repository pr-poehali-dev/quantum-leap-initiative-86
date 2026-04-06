import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const DOPPIO_PHOTO = "https://cdn.poehali.dev/projects/ea6f6db7-6266-4322-89a1-a7ef8f038f91/bucket/3e343c0d-bc02-4f77-96fa-6de4740da15f.png"

export default function LaunchPadPage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !name) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md border border-secondary/40 shadow-[0_0_40px_rgba(180,130,0,0.15)]">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="text-6xl">🤌</div>
              <h2 className="text-2xl font-bold text-secondary">Капо одобрил.</h2>
              <p className="text-muted-foreground">
                {name}, твоя заявка принята. Ждёшь звонка на {email}.<br />
                <span className="text-xs italic opacity-60">Молчи. Никому не говори.</span>
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="mt-4 border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                Подать другую заявку
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary/10 border-b border-primary/20 py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-secondary tracking-widest uppercase">
            🌹 Passione
          </h1>
          <nav className="hidden md:flex space-x-6 text-sm">
            <a href="https://yandex.ru/profile/128335072611?lang=ru" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">Территория</a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Связь</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-200px)] p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-4">
            <a
              href="https://ru.pinterest.com/pin/204562008074719940/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block"
            >
              <h2 className="text-4xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                Хочешь вступить в{" "}
                <span className="text-primary">Семью?</span>
              </h2>
              <p className="text-xs text-secondary/60 mt-1 italic">секретные материалы мафии</p>
            </a>
            <p className="text-base text-muted-foreground italic leading-relaxed">
              «Стая не выбирает вожака. Вожак выбирает стаю.<br />
              Оставьте заявку. Если вы достойны — вы услышите наш звонок.»
            </p>
          </div>

          <Card className="border border-primary/30 shadow-[0_0_60px_rgba(150,50,180,0.12)]">
            <CardHeader>
              <CardTitle className="text-center text-secondary text-xl tracking-wide">
                Анкета кандидата
              </CardTitle>
              <CardDescription className="text-center text-muted-foreground">
                Строго конфиденциально. Не показывай копам.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Icon name="User" className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Кличка или настоящее имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 bg-input border-border focus:border-primary"
                    required
                  />
                </div>
                <div className="relative">
                  <Icon name="Mail" className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Секретный email для связи"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-input border-border focus:border-primary"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground font-semibold tracking-wide transition-all"
                  disabled={isLoading}
                >
                  {isLoading ? "Проверяем досье..." : "Подать заявку в Семью"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Employee of the month */}
          <Card className="border border-secondary/40 shadow-[0_0_40px_rgba(180,130,0,0.1)]">
            <CardHeader>
              <CardTitle className="text-center text-secondary tracking-wide text-lg">
                🏆 Работник месяца
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="https://jojo.fandom.com/ru/wiki/Винегар_Доппио"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <img
                  src={DOPPIO_PHOTO}
                  alt="Винегар Доппио"
                  className="w-20 h-20 rounded-full object-cover object-top border-2 border-secondary/60 group-hover:border-secondary transition-colors flex-shrink-0"
                />
                <div className="space-y-1">
                  <p className="font-bold text-foreground group-hover:text-secondary transition-colors text-lg">
                    Винегар Доппио
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Верный. Исполнительный. Почти всегда вменяемый.
                  </p>
                  <p className="text-xs text-secondary/70 flex items-center gap-1">
                    Читать досье
                    <Icon name="ExternalLink" size={12} />
                  </p>
                </div>
              </a>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6 mt-16">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-muted-foreground text-sm italic">
            © 2025 Passione. Все права, включая право на молчание, защищены.
          </p>
          <div className="flex justify-center space-x-6 text-xs">
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              Кодекс чести
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              Условия принятия
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}