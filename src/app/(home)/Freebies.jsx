export default function Freebies() {
  return (
    <section className="base-section py-24 bg-[url('/images/bg/bg-activity-1.jpg')] bg-cover bg-center">
      <div className="container flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:basis-6/10 text-center lg:text-left order-2 lg:order-1">
          <h2 className="text-coklat text-4xl md:text-6xl font-bold mb-5">
            Lorem Ipsum
          </h2>
          <p className="">
            Google Form Survey
          </p>
          <div className="flex gap-2 pt-5 justify-center lg:justify-start">
              {/* <button className="tombol-biru text-[12px]! md:text-sm!">Download</button> */}
              <a href="https://t.me/terusmengajarofficial" target="_blank" className="tombol-pink bg-[#DB63A7]! text-[12px]! md:text-sm! inline-block">Join Waiting List</a>
            </div>
        </div>

        <div className="lg:basis-4/10 flex justify-center lg:justify-end order-1 lg:order-2">
          <img
            src="/images/funpaper/bundle/bundle-1.avif"
            alt=""
            className="h-[250px]"
          />
        </div>
      </div>
    </section>
  );
}
