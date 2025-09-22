'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTransition } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setMounted(true);
    NProgress.configure({ showSpinner: false });
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Start NProgress segera saat klik link
    const handleLinkClick = (e) => {
      const aTag = e.target.closest('a');
      if (!aTag) return;
      const href = aTag.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:')) return;

      NProgress.start();
    };

    document.addEventListener('click', handleLinkClick);

    return () => document.removeEventListener('click', handleLinkClick);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    // Done NProgress saat path berubah dan page selesai render
    NProgress.start(); // fallback
    startTransition(() => {
      NProgress.done();
    });
  }, [pathname, searchParams, mounted]);

  return null;
}
