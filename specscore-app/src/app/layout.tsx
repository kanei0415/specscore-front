import type { Metadata } from 'next';
import './styles/global.css';

export const metadata: Metadata = {
  title: 'Specscore',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
