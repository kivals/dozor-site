import "@/styles/globals.css";
import { involve } from "@/fonts/involve";
import { defaultMetadata, organizationJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { YandexMetrika } from "@/components/analytics/YandexMetrika";

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${involve.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <YandexMetrika />
      </body>
    </html>
  );
}
