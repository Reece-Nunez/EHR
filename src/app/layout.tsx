import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://erhri.org'),
  title: {
    default: 'EHR Research Institute | Defending Constitutional Rights in the Digital Age',
    template: '%s | EHR Research Institute'
  },
  description: 'EHR Research Institute is a nonprofit organization dedicated to discovering and researching surveillance technologies that threaten our constitutional rights and civil liberties.',
  keywords: [
    'surveillance technology',
    'constitutional rights',
    'privacy rights',
    'civil liberties',
    'digital privacy',
    'government surveillance',
    'electronic health records',
    'data privacy',
    'nonprofit research',
    'surveillance research'
  ],
  authors: [{ name: 'EHR Research Institute' }],
  creator: 'EHR Research Institute',
  publisher: 'EHR Research Institute',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://erhri.org',
    title: 'EHR Research Institute | Defending Constitutional Rights in the Digital Age',
    description: 'EHR Research Institute is a nonprofit organization dedicated to discovering and researching surveillance technologies that threaten our constitutional rights and civil liberties.',
    siteName: 'EHR Research Institute',
    images: [
      {
        url: '/header.jpg',
        width: 1200,
        height: 630,
        alt: 'EHR Research Institute',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EHR Research Institute | Defending Constitutional Rights in the Digital Age',
    description: 'EHR Research Institute is a nonprofit organization dedicated to discovering and researching surveillance technologies that threaten our constitutional rights and civil liberties.',
    images: ['/header.jpg'],
  },
  alternates: {
    canonical: 'https://erhri.org',
  },
  category: 'nonprofit',
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EHR Research Institute',
    alternateName: 'EHRRI',
    url: 'https://erhri.org',
    logo: 'https://erhri.org/erh-logo.png',
    description: 'EHR Research Institute is a nonprofit organization dedicated to discovering and researching surveillance technologies that threaten our constitutional rights and civil liberties.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Box 3307',
      addressLocality: 'San Diego',
      addressRegion: 'CA',
      postalCode: '92163',
      addressCountry: 'US',
    },
    sameAs: [
      'https://surveillancenation.us/',
    ],
    nonprofitStatus: '501(c)(3)',
    foundingDate: '2024',
    areaServed: 'US',
    knowsAbout: [
      'surveillance technology',
      'constitutional rights',
      'privacy rights',
      'civil liberties',
      'digital privacy',
    ],
    potentialAction: {
      '@type': 'DonateAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://erhri.org/donate',
      },
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
