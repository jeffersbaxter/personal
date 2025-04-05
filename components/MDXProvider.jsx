'use client';

import { MDXProvider } from '@mdx-js/react';

const components = {
  h2: ({ children }) => <p>{children}</p>, // Retain h2 rendering
};

export function CustomMDXProvider({ children }) {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  );
}