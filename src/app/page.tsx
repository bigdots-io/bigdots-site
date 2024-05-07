"use client";

import Display from "./display";
import {
  box,
  text,
  twinkle,
  meteors,
  marquee,
  image,
  time,
  ripple,
} from "@bigdots-io/display-engine";
import { useEffect, useState } from "react";

export default function Home() {
  const [trigger, setTrigger] = useState<boolean>(false);

  useEffect(() => {
    setInterval(() => {
      setTrigger((trigger) => !trigger);
    }, 1000);
  }, []);

  return (
    <>
      <div style={{ margin: 10 }}>
        <Display
          layers={[ripple({ brightness: 8, speed: 4, waveHeight: 2 })]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Display
          layers={[
            box({ color: "#FF0000" }),
            text({ text: "hi", alignment: "left", brightness: 4 }),
            text({
              text: "hi",
              alignment: "right",
              brightness: 7,
            }),
            text({
              text: "hi",
              alignment: "center",
            }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Display
          layers={[
            box({
              color: "#228B22",
              width: 5,
              height: 5,
              startingColumn: 5,
              startingRow: 10,
            }),
            box({
              color: "#FF0000",
              width: 5,
              height: 5,
              startingColumn: 20,
              startingRow: 10,
            }),
            box({
              color: "#00FFFF",
              width: 50,
              height: 10,
              startingColumn: 3,
              startingRow: 2,
              borderWidth: 1,
            }),
            box({
              color: "#FFC0CB",
              width: 5,
              height: 5,
              startingColumn: 15,
              startingRow: 10,
            }),
            box({
              color: "#FFFF00",
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
            twinkle({ speed: 100, color: "#AAA" }),
            text({
              text: "hello!!",
              alignment: "left",
              color: "#FFFF00",
            }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Display
          layers={[
            meteors({ color: "#FF0000" }),
            text({
              text: "THIS IS A TEST",
              font: "system-6",
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
              color: trigger ? "#228B22" : "#FF0000",
              brightness: 7,
            }),
            text({
              text: trigger ? "Pass" : "Fail",
              font: "system-16",
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
            box({ color: "#B58B00" }),
            marquee({ color: "#FFF", speed: 100 }),
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
            image({ url: " /test.gif", startingRow: 1, speed: 500 }),
            image({ url: " /test.gif", startingRow: 9, speed: 250 }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Display
          devMode
          layers={[
            box({ color: "#B58B00" }),
            time({ alignment: "center", startingRow: 2 }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
    </>
  );
}
