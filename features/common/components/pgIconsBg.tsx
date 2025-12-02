"use client"
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  OutMode,
} from "@tsparticles/engine";
//import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import { loadImageShape } from "@tsparticles/shape-image";
import { lightIcons, darkIcons } from "../constants/pgIconsLists";
import { useTheme } from "next-themes";


type IconsListType = {
  src: String;
  width: number;
  height: number;
}[]

export function PgIconsBg() {
  const [init, setInit] = useState(false);
  const [iconSet, setIConSet] = useState<IconsListType>(lightIcons)
  const { theme } = useTheme()

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      await loadImageShape(engine);

      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => theme === "dark" ? setIConSet(darkIcons) : setIConSet(lightIcons), [theme]);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "trasnparent",
        },
      },
      rotate: {
        value: 1,          // 初期角度（0度）
        random: true,      // ランダムに初期角度を設定
        direction: "randowm", // "clockwise" | "counter-clockwise" | "random"
        animation: {
          enable: true,    // 回転アニメーションを有効にする
          speed: 100,       // 回転速度
          sync: true      // 個々のパーティクルが別々に回る
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          // onClick: {
          //   enable: true,
          //   mode: "push",
          // },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#333",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 0.2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 40,
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: { min: 4, max: 10 } // ここを大きくすると画像も大きくなる
        },
        shape: {
          type: "image",
          options: {
            image: iconSet
          }
        }
      },
      detectRetina: true,
    }),
    [iconSet],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};