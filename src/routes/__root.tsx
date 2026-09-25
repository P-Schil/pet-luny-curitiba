import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-black text-slate-950">404</h1>
        <h2 className="mt-4 text-xl font-bold text-slate-900">Página não encontrada</h2>
        <p className="mt-2 text-sm text-slate-500">A página que você procura não existe.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-[#19e130] px-5 py-3 text-sm font-bold text-slate-950">Voltar ao início</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-bold text-slate-950">Não foi possível carregar a página</h1>
        <p className="mt-2 text-sm text-slate-500">Atualize a página ou tente novamente.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-full bg-[#19e130] px-5 py-3 text-sm font-bold text-slate-950">Tentar novamente</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Gunara Pet Luny | Pet Shop em Curitiba" },
      { name: "description", content: "Gunara Pet Luny: banho e tosa, ração, acessórios e cuidado especializado para pets em Curitiba. Atendimento personalizado e somente com horário agendado." },
      { name: "author", content: "Gunara Pet Luny" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Gunara Pet Luny | Pet Shop em Curitiba" },
      { property: "og:description", content: "Cuidado completo para seu pet, com atendimento personalizado, qualidade e horário agendado." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://images.unsplash.com" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>;
}
