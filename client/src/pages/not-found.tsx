import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";

export default function NotFound() {
  useSeo({
    title: "404 | Página não encontrada | Iusti Produções",
    description: "A página que você procura não foi encontrada. Volte ao início para continuar explorando nossos serviços de fotografia e vídeo de casamento.",
    image: "/favicon.png",
    imageAlt: "Página não encontrada Iusti Produções",
    url: "https://www.iusti.productions/404",
    keywords: "404, página não encontrada, iusti produções, fotografia casamento, portfólio casamento",
    twitterSite: "@iustifotografia",
    twitterCreator: "@iustifotografia",
    ogType: "website",
    siteName: "Iusti Produções",
    locale: "pt_BR",
    themeColor: "#111111"
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Did you forget to add the page to the router?
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
