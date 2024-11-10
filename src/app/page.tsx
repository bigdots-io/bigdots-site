"use client";

import Display from "./display";
import {
  box,
  text,
  twinkle,
  meteors,
  marquee,
  image,
  ripple,
  custom,
  coordinates,
  scene,
} from "@bigdots-io/display-engine";
import { useEffect, useState } from "react";

export default function Home() {
  const [trigger, setTrigger] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTrigger((trigger) => !trigger);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div style={{ margin: 10 }}>
        <Display
          layers={[scene({ sceneName: "moon" })]}
          dimensions={{ height: 32, width: 32 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Display
          layers={[
            coordinates({ coordinates: { "0:0": "#FFF", "0:1": "#FFF" } }),
          ]}
          dimensions={{ height: 10, width: 10 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Display
          layers={[
            box({ backgroundColor: "#FF0000" }),
            text({
              text: "hi1",
              alignment: "right",
              color: "rgba(255, 255, 255, .5)",
            }),
            text({
              text: "hi2",
              alignment: "center",
              color: "rgba(255, 255, 255, .8)",
            }),
            text({
              text: "hi3",
              alignment: "left",
              color: "rgba(255, 255, 255, 1)",
            }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Display
          layers={[
            box({
              backgroundColor: "#228B22",
              width: 5,
              height: 5,
              startingColumn: 5,
              startingRow: 10,
            }),
            box({
              backgroundColor: "#FF0000",
              width: 5,
              height: 5,
              startingColumn: 20,
              startingRow: 10,
            }),
            box({
              backgroundColor: "#00FFFF",
              width: 50,
              height: 10,
              startingColumn: 3,
              startingRow: 2,
              borderWidth: 1,
            }),
            box({
              backgroundColor: "#FFC0CB",
              width: 5,
              height: 5,
              startingColumn: 15,
              startingRow: 10,
            }),
            box({
              backgroundColor: "#FFFF00",
              width: 50,
              height: 3,
              startingColumn: 10,
              startingRow: 5,
            }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Display
          layers={[
            box({
              backgroundColor: {
                direction: "horizontal",
                colorStops: [
                  { color: "#FF0000", offset: 0 },
                  { color: "#228B22", offset: 0.5 },
                ],
              },
            }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Display
          layers={[
            box({
              backgroundColor: {
                direction: "vertical",
                colorStops: [
                  { color: "#FFFF00", offset: 0 },
                  { color: "#228B22", offset: 1 },
                ],
              },
            }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Display
          layers={[
            twinkle({ color: "#FF0000" }),
            text({
              text: "THIS IS A TEST",
              fontSize: 8,
              alignment: "center",
              color: "#FFFFFF",
              startingRow: 1,
            }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Display
          layers={[
            box({
              backgroundColor: trigger ? "#228B22" : "#FF0000",
            }),
            text({
              text: trigger ? "PASS" : "FAIL",
              font: "impact",
              fontSize: 16,
              alignment: "center",
              color: "#FFFFFF",
              startingRow: 1,
            }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Display
          layers={[
            marquee({
              color: "#228B22",
              text: "Watch out for meteors!",
              fontSize: 20,
              direction: "horizontal",
            }),
            meteors({}),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Display
          layers={[ripple({ speed: 4, waveHeight: 8 })]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Display
          layers={[
            box({ backgroundColor: "#FF5733" }),
            marquee({
              color: "#228B22",
              text: "hi",
              fontSize: 20,
              direction: "horizontal",
            }),
            ripple({ speed: 4, waveHeight: 2 }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Display
          layers={[
            box({ backgroundColor: "#B58B00" }),
            marquee({ color: "#FFF", speed: 100, direction: "horizontal" }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Display
          layers={[
            box({ backgroundColor: "#B58B00" }),
            marquee({ color: "#FFF", speed: 100, direction: "vertical" }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>

      <div style={{ margin: 10 }}>
        <Display
          layers={[image({ url: " /test.png" })]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>

      <div style={{ margin: 10 }}>
        <Display
          layers={[
            custom({
              customFunc: (ctx) => {
                ctx.textBaseline = "top";
                ctx.font = `12px Arial`;
                ctx.fillStyle = "Blue";

                ctx.fillText("Custom Implementation!", 0, 0);
              },
            }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>

      {/* <div style={{ margin: 10 }}>
        <Display
          layers={[
            image({ url: " /test.gif", startingRow: 1, speed: 500 }),
            image({ url: " /test.gif", startingRow: 9, speed: 250 }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div> */}
    </>
  );
}
