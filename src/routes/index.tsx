import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  PawPrint,
  Scissors,
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Tag,
  Truck,
  Users,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const whatsapp = "https://wa.me/554131552371";
const instagram = "https://www.instagram.com/petluny/";

const services = [
  {
    icon: Scissors,
    title: "Banho e Tosa",
    text: "Cuidados de higiene e estética realizados com atenção ao perfil e ao conforto de cada pet.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: ShoppingBag,
    title: "Ração e Acessórios",
    text: "Produtos para a rotina do seu pet, com orientação para facilitar uma escolha adequada às suas necessidades.",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Stethoscope,
    title: "Cuidado Veterinário",
    text: "Atendimento especializado para acompanhar a saúde e o bem-estar do seu animal de estimação.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Agendado",
    text: "Trabalhamos somente com horário agendado para oferecer uma experiência organizada, tranquila e personalizada.",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: PawPrint,
    title: "Orientação Personalizada",
    text: "Informações claras para ajudar você a tomar decisões mais seguras sobre os cuidados do seu pet.",
    image: "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Tag,
    title: "Soluções para a Rotina",
    text: "Um espaço pensado para concentrar serviços e produtos que tornam o cuidado diário mais simples.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80",
  },
];

const differentiators = [
  ["Atendimento personalizado", "Cada atendimento é planejado com atenção às necessidades do pet.", HeartHandshake],
  ["Horário agendado", "Organização para reduzir espera e tornar a experiência mais tranquila.", CalendarCheck],
  ["Qualidade e ética", "Qualidade técnica e ética profissional são prioridades, sem atalhos comerciais.", ShieldCheck],
  ["Experiência acolhedora", "Cuidado próximo para que tutores e pets se sintam seguros.", Sparkles],
  ["Orientação clara", "Comunicação objetiva para apoiar escolhas conscientes sobre o cuidado animal.", MessageCircle],
  ["Estrutura completa", "Pet shop com serviços e produtos reunidos em um só endereço.", ShoppingBag],
] as const;

const proofCards = [
  {
    title: "Cuidado com hora marcada",
    text: "O atendimento agendado ajuda a organizar a rotina e permite uma experiência mais dedicada.",
    icon: Clock3,
  },
  {
    title: "Relacionamento duradouro",
    text: "A proposta da Gunara Pet Luny é construir confiança no dia a dia, com atendimento próximo e consistente.",
    icon: Users,
  },
  {
    title: "Qualidade como prioridade",
    text: "A filosofia da marca coloca qualidade técnica e ética profissional acima de decisões comerciais.",
    icon: ShieldCheck,
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Index() {
  const [activeProof, setActiveProof] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/90 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <button onClick={() => scrollTo("inicio")} className="group flex items-center gap-3" aria-label="Gunara Pet Luny - início">
            <span className="grid size-11 place-items-center rounded-2xl bg-[#19e130] text-slate-950 shadow-lg shadow-[#19e130]/20">
              <PawPrint className="size-6" strokeWidth={2.5} />
            </span>
            <span className="text-left leading-none">
              <strong className="block text-lg font-black tracking-tight">Gunara Pet Luny</strong>
              <small className="mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Pet shop • Curitiba</small>
            </span>
          </button>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {[
              ["Sobre", "sobre"],
              ["Serviços", "servicos"],
              ["Diferenciais", "diferenciais"],
              ["Contato", "contato"],
            ].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-sm font-bold text-slate-600 transition hover:text-slate-950">
                {label}
              </button>
            ))}
          </nav>

          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#19e130] px-4 py-2.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-[#19e130]/20 transition hover:-translate-y-0.5 hover:shadow-xl">
            <MessageCircle className="size-4" />
            <span className="hidden sm:inline">Quero Tirar Dúvidas</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      <section id="inicio" className="relative flex min-h-[780px] items-center pt-20">
        <img
          src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=2200&q=85"
          alt="Foto profissional de um cachorro recebendo cuidado em um ambiente pet"
          className="absolute inset-0 size-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-950/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-3xl animate-[fadeUp_.7s_ease-out]">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#19e130]/40 bg-[#19e130]/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#6cff78]">
              <Sparkles className="size-4" /> Cuidado completo para seu pet
            </span>
            <h1 className="text-5xl font-black leading-[.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
              Cuidado que entrega <span className="text-[#19e130]">confiança.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
              Serviços e produtos para o bem-estar do seu pet, com atendimento personalizado, qualidade e relacionamento de longo prazo.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#19e130] px-7 py-4 text-sm font-black text-slate-950 shadow-xl shadow-[#19e130]/20 transition hover:-translate-y-1">
                Quero Falar com vendedor <ArrowRight className="size-5" />
              </a>
              <button onClick={() => scrollTo("servicos")} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white/20">
                Conhecer serviços
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-white/75">
              <span className="inline-flex items-center gap-2"><Check className="size-4 text-[#19e130]" /> Atendimento agendado</span>
              <span className="inline-flex items-center gap-2"><Check className="size-4 text-[#19e130]" /> Rua General Potiguara, 2500</span>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="scroll-mt-20 bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#ff0066]">Sobre a Gunara Pet Luny</span>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Qualidade e relacionamento para cuidar de quem faz parte da sua família.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              A Gunara Pet Luny foi pensada para oferecer uma experiência mais segura e organizada a tutores que valorizam qualidade no cuidado animal. Reunimos serviços e produtos em um ambiente acolhedor, com atendimento próximo e horário agendado.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Nossa filosofia é simples: qualidade técnica e ética profissional não são negociáveis. Por isso, cada contato deve gerar confiança, clareza e uma relação duradoura com o tutor e seu pet.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-5"><strong className="block text-2xl font-black">100%</strong><span className="text-xs font-bold text-slate-500">atendimento agendado</span></div>
              <div className="rounded-2xl bg-slate-50 p-5"><strong className="block text-2xl font-black">1</strong><span className="text-xs font-bold text-slate-500">endereço completo</span></div>
              <div className="rounded-2xl bg-slate-50 p-5"><strong className="block text-2xl font-black">6+</strong><span className="text-xs font-bold text-slate-500">soluções para pets</span></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#19e130]/10 blur-2xl" />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1599443015574-6c1c7c8f9a12?auto=format&fit=crop&w=1200&q=85"
              alt="Profissional cuidando de um cachorro com atenção e carinho"
              className="relative h-[520px] w-full rounded-[2.5rem] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-xl backdrop-blur sm:left-auto sm:w-80">
              <div className="flex items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#ff0066] text-white"><HeartHandshake className="size-5" /></span>
                <div><strong className="block text-sm font-black">Atendimento personalizado</strong><span className="mt-1 block text-xs leading-5 text-slate-500">Foco no bem-estar do pet e na tranquilidade de quem cuida.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="scroll-mt-20 bg-slate-50 px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#ff0066]">Serviços e soluções</span>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Tudo para tornar o cuidado do seu pet mais simples.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Escolha o serviço que precisa e fale diretamente com nossa equipe para confirmar disponibilidade e agendar.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative h-48 overflow-hidden">
                    <img loading="lazy" src={service.image} alt={service.title} className="size-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent" />
                    <span className="absolute bottom-4 left-4 grid size-11 place-items-center rounded-xl bg-white text-[#ff0066] shadow-lg"><Icon className="size-5" /></span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black">{service.title}</h3>
                    <p className="mt-3 min-h-14 text-sm leading-6 text-slate-600">{service.text}</p>
                    <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff0066] px-4 py-3 text-sm font-extrabold text-white transition hover:brightness-90">
                      Quero Agendar atendimento <ArrowRight className="size-4" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="scroll-mt-20 bg-slate-950 px-5 py-24 text-white lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#19e130]">Por que escolher a Gunara</span>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Profissionalismo que começa no atendimento.</h2>
              <p className="mt-6 leading-8 text-white/65">Nossa proposta é oferecer uma experiência que combine cuidado, organização, informação clara e respeito ao bem-estar animal.</p>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#19e130] px-6 py-3.5 text-sm font-black text-slate-950 transition hover:-translate-y-1">Quero Tirar Dúvidas <MessageCircle className="size-4" /></a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map(([title, text, Icon]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/[.05] p-6 transition hover:-translate-y-1 hover:border-[#19e130]/30 hover:bg-white/[.08]">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#19e130]/10 text-[#19e130]"><Icon className="size-5" /></span>
                  <h3 className="mt-5 text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="prova" className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#ff0066]">Confiança na prática</span>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Uma experiência pensada para tutores exigentes.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Em vez de promessas genéricas, mostramos os princípios que orientam a experiência na Gunara Pet Luny.</p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-12">
            <div className="flex items-center justify-between">
              <span className="grid size-14 place-items-center rounded-2xl bg-[#19e130] text-slate-950"><Star className="size-6 fill-current" /></span>
              <div className="flex gap-2">
                <button onClick={() => setActiveProof((activeProof - 1 + proofCards.length) % proofCards.length)} aria-label="Anterior" className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white transition hover:border-[#19e130]"><ChevronLeft className="size-5" /></button>
                <button onClick={() => setActiveProof((activeProof + 1) % proofCards.length)} aria-label="Próximo" className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white transition hover:border-[#19e130]"><ChevronRight className="size-5" /></button>
              </div>
            </div>
            {(() => {
              const item = proofCards[activeProof];
              const Icon = item.icon;
              return (
                <div key={item.title} className="mt-10 animate-[fadeIn_.35s_ease-out]">
                  <div className="mb-4 flex items-center gap-2 text-[#ff0066]"><Icon className="size-5" /><span className="text-sm font-black uppercase tracking-wider">Compromisso Gunara Pet Luny</span></div>
                  <h3 className="text-3xl font-black tracking-tight">{item.title}</h3>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{item.text}</p>
                </div>
              );
            })()}
            <div className="mt-8 flex gap-2" aria-label="Indicadores do carrossel">
              {proofCards.map((_, i) => <button key={i} onClick={() => setActiveProof(i)} aria-label={`Ir para item ${i + 1}`} className={`h-2 rounded-full transition-all ${i === activeProof ? "w-8 bg-[#ff0066]" : "w-2 bg-slate-300"}`} />)}
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-slate-400">Depoimentos de clientes reais podem ser adicionados aqui conforme autorização. Não incluímos nomes, cargos ou resultados inventados.</p>
        </div>
      </section>

      <section id="contato" className="scroll-mt-20 px-5 py-10 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#19e130] px-7 py-16 text-slate-950 sm:px-12 lg:px-20 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-900/60">Vamos conversar?</span>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Cuidado profissional para seu pet, com a tranquilidade que você procura.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-900/70">Fale com nossa equipe pelo WhatsApp para tirar dúvidas, consultar produtos ou agendar seu atendimento.</p>
            </div>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-xl transition hover:-translate-y-1">
              Quero Falar com vendedor <ArrowRight className="size-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 pb-28 pt-16 text-white lg:px-8 lg:pb-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-[#19e130] text-slate-950"><PawPrint className="size-6" /></span>
              <div><strong className="block text-lg font-black">Gunara Pet Luny</strong><span className="text-xs text-white/50">Pet shop em Curitiba</span></div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/55">Qualidade, relacionamento duradouro e cuidado responsável para animais de estimação.</p>
            <a href={instagram} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white/75 transition hover:text-[#19e130]"><Instagram className="size-4" /> @petluny</a>
          </div>
          <div>
            <h3 className="font-black">Atendimento</h3>
            <div className="mt-5 space-y-4 text-sm text-white/60">
              <p className="flex gap-3"><Clock3 className="mt-0.5 size-4 shrink-0 text-[#19e130]" />Segunda a sexta, das 9h às 18h</p>
              <p className="flex gap-3"><CalendarCheck className="mt-0.5 size-4 shrink-0 text-[#19e130]" />Somente com horário agendado</p>
              <p className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-[#19e130]" />Rua General Potiguara, 2500, loja 4 — Curitiba/PR</p>
            </div>
          </div>
          <div>
            <h3 className="font-black">Fale conosco</h3>
            <div className="mt-5 space-y-4 text-sm text-white/60">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="flex gap-3 transition hover:text-white"><MessageCircle className="size-4 text-[#19e130]" />(41) 31552-371</a>
              <p className="flex gap-3"><Truck className="size-4 text-[#19e130]" />Produtos, serviços e orientações</p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/35">© {new Date().getFullYear()} Gunara Pet Luny. Todos os direitos reservados.</div>
      </footer>

      <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com Gunara Pet Luny pelo WhatsApp" className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#19e130] text-slate-950 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:scale-105">
        <MessageCircle className="size-6" />
      </a>
    </main>
  );
}
