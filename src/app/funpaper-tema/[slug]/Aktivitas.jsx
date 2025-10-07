"use client";

import { useEffect, useState } from "react";
import LoadingCard from "@/components/LoadingCard";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

export default function Aktivitas({ id, slug }) {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/funpaper-tema/${slug}/activity`,
          { cache: "no-store" }
        );
        const data = await res.json();
        setActivities(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  return (
    <div className="mt-12">
      <h6 className="text-lg font-bold mb-4">
        Aktivitas apa saja yang tersedia di dalam worksheet?
      </h6>

      <div className="mb-8">
        {loading && <LoadingCard cols={3}/>}

        {!loading && activities.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center">
            {activities.map((activity, idx) => (
              <div key={activity.name}>
                <div
                  className="p-8 bg-[#fcfbf8] mb-2 rounded-xl cursor-pointer"
                  onClick={() => {
                    setPhotoIndex(idx);
                    setOpen(true);
                  }}
                >
                  <img
                    src={activity.image_url}
                    alt={activity.name}
                    width={110}
                    height={155}
                    className="rounded-lg"
                  />
                </div>
                <p className="text-center text-sm">{activity.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={photoIndex}
        slides={activities.map((a) => ({ src: a.image_url }))}
        carousel={{ finite: true }} // biar ga looping
        controller={{ closeOnBackdropClick: true }} // klik overlay bisa close
      />
    </div>
  );
}
