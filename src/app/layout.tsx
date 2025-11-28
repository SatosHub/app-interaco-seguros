import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ConnectAll - Conecte-se com Todos',
  description: 'App de encontros para todos os gêneros. Chat gratuito, chamadas pagas com créditos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}