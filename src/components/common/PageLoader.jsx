'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useTransition } from 'react';

export default function PageLoader() {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    NProgress.start();
    startTransition(() => {
      NProgress.done();
    });
  }, [pathname]);

  return null; // hanya untuk NProgress, tidak render apapun
}
