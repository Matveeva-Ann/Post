'use client';

import { store } from '@/redux/state';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
