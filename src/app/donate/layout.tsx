import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support EHR Research Institute with a tax-deductible donation. Help us continue our critical work in discovering and researching surveillance technologies that threaten our constitutional rights.',
  keywords: [
    'donate',
    'support nonprofit',
    'tax-deductible donation',
    'privacy rights donation',
    'surveillance research funding',
    '501c3 donation',
  ],
  openGraph: {
    title: 'Donate to EHR Research Institute',
    description: 'Support our mission to research and expose surveillance technologies that threaten constitutional rights. Your donation is tax-deductible.',
    url: 'https://erhri.org/donate',
    type: 'website',
    images: [
      {
        url: '/header.jpg',
        width: 1200,
        height: 630,
        alt: 'Support EHR Research Institute',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Donate to EHR Research Institute',
    description: 'Support our mission to research and expose surveillance technologies that threaten constitutional rights. Your donation is tax-deductible.',
    images: ['/header.jpg'],
  },
  alternates: {
    canonical: 'https://erhri.org/donate',
  },
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DonateAction',
    name: 'Donate to EHR Research Institute',
    description: 'Support EHR Research Institute with a tax-deductible donation',
    recipient: {
      '@type': 'Organization',
      name: 'EHR Research Institute',
      url: 'https://erhri.org',
      nonprofitStatus: '501(c)(3)',
    },
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://erhri.org/donate',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
