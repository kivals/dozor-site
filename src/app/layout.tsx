import "@/styles/globals.css";
import { involve } from "@/fonts/involve";
import { defaultMetadata, organizationJsonLd } from "@/lib/seo";

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${involve.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
      </body>
    </html>
  );
}
