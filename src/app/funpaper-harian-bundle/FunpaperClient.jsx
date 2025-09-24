"use client";

import FunpaperList from "./FunpaperList";

export default function Client() {

  return (
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 order-1 lg:order-2">
            <FunpaperList />
          </div>
        </div>
      </div>

    </section>
  );
}
