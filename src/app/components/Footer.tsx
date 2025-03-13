import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-neutral-700 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base font-light">
          &copy; SLCR | All Rights Reserved
        </p>
        <p className="text-sm md:text-base font-light">
          SLCR, Indian Institute of Technology, BHU, Varanasi.
        </p>
      </div>

      <div className="mt-2 flex flex-wrap justify-center gap-4">
        {[
          "/img/iitbhu.png",
          "/img/ganga.jpg",
          "/img/cgwb_logo_2.jpg",
          "/img/golden_jubilee_logo.png",
          "/img/logo.png",
          "/img/download.png",
        ].map((src, index) => (
          <div key={index} className=" max-sm:w-[40px] flex justify-center items-center">
            <Image
              src={src}
              alt={` logo ${index + 1}`}
              width={60}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
