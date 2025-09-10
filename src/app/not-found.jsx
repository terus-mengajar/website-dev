"use client";

import { Suspense } from "react";

function NotFoundContent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="mt-2">Halaman tidak ditemukan</p>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={null}>
      <NotFoundContent />
    </Suspense>
  );
}
