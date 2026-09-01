import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import '../src/index.css';

export const metadata: Metadata = {
  title: 'Build with Gideon | Frontend Dev & Responsive Web Expert',
  description:
    'Need modern web apps or site fixes? Gideon is a Frontend Developer building fast, responsive websites. Available for freelance projects & full-time roles',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Web Developer',
  ],
  openGraph: {
    title: 'Build with Gideon | Frontend Dev & Responsive Web Expert',
    description:
      'Need modern web apps or site fixes? Gideon is a Frontend Developer building fast, responsive websites. Available for freelance projects & full-time roles',
    url: 'https://gideon-s-dev-hub.vercel.app/',
    siteName: "Chukwudi Gideon's Portfolio",
    images: [
      {
        url: 'https://i.ibb.co/RpvQHjhK/animated-me.jpg',
        width: 1200,
        height: 630,
        alt: 'Chukwudi Gideon — Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}