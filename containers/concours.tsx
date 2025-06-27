"use client";

import Image from "next/image";
import { useEffect } from "react";

export const Concours = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      Tally.loadEmbeds();
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="relative h-64 md:h-screen min-w-full md:min-w-[45vw]">
        <Image
          src="/Images/leclerc.png"
          alt="Image Leclerc"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="flex flex-col md:ml-8 2xl:ml-24 ml-0 px-6 md:px-0 mt-8 md:mt-0 items-center text-center md:text-left">
        <div className="flex flex-col items-center text-center md:items-center md:text-center mt-12">
          <Image
            src="/images/icon_leclerc.png"
            alt="Logo Leclerc Levallois"
            width={150}
            height={0}
            quality={100}
          />
          <h2 className="uppercase text-black md:text-4xl text-3xl mt-12">
            tentez de gagnez vos
          </h2>
          <h2 className="uppercase text-orange-400 md:text-5xl text-4xl flame tracking-wide">
            essentiels de l'été
          </h2>
          <p className="uppercase max-w-full md:max-w-[60%] text-black mt-8 text-xl px-2 md:px-0">
            et si votre été commençait par une belle surprise ? jouer vite !
          </p>
        </div>
        <div className="w-full mt-8 ">
          <iframe
            data-tally-src="https://tally.so/embed/mBYk41?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="449"
            title="CONTACT"
            className=""
            style={{ border: "none" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};
