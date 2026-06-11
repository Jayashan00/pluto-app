import "./globals.css";

export const metadata = {
  title: "Pluto Token",
  description: "Your gateway to a cosmic crypto adventure",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Marhey:wght@400;500;600;700&family=Gloomie+Saturday&display=swap" rel="stylesheet" />
      </head>
      {/* Add suppressHydrationWarning right here! */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}