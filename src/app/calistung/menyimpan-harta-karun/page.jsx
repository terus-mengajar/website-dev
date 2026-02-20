// src/app/calistung/menyimpan-harta-karun/page.jsx

import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Menyimpan Harta Karun";

export const metadata = {
  title: TITLE,
};

export default function Page() {
  return (
    <CalistungPageLayout title={TITLE}>
      Konten menyimpan harta karun di sini
    </CalistungPageLayout>
  );
}
