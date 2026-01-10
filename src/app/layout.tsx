// app/layout.tsx — server component (fără 'use client')
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'; // adaptat pentru Next16
import { ReactNode } from 'react';
import ThemeWrapper from '@/components/ThemeWrapper'; // client component

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body>
        <AppRouterCacheProvider>
          <ThemeWrapper>
            {children}
          </ThemeWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
