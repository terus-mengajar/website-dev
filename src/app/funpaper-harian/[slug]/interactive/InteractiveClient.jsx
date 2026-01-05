"use client";

import dynamic from "next/dynamic";

const InteractiveCanvas = dynamic(
  () => import("./InteractiveCanvas"),
  { ssr: false }
);

export default function InteractiveClient({ imageUrl }) {
  // console.log('client url '+imageUrl)
  return <InteractiveCanvas imageUrl={imageUrl} />;
}
