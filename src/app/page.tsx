"use client";

import BigdotsDisplay, {
  image,
  marquee,
  meteorShower,
  solidColor,
  text,
  twinkle,
} from "@bigdots-io/react-client";
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
        <BigdotsDisplay
          layers={[
            solidColor({ color: "#FF0000" }),
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
        <BigdotsDisplay
          layers={[
            solidColor({
              color: "#228B22",
              width: 5,
              height: 5,
              startingColumn: 5,
              startingRow: 10,
            }),
            solidColor({
              color: "#FF0000",
              width: 5,
              height: 5,
              startingColumn: 20,
              startingRow: 10,
            }),
            solidColor({
              color: "#00FFFF",
              width: 50,
              height: 10,
              startingColumn: 3,
              startingRow: 2,
            }),
            solidColor({
              color: "#FFC0CB",
              width: 5,
              height: 5,
              startingColumn: 15,
              startingRow: 10,
            }),
            solidColor({
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
        <BigdotsDisplay
          layers={[
            twinkle({ speed: 100, color: "#AAA" }),
            text({
              text: "hello!!",
              alignment: "right",
              color: "#FFFF00",
              startingRow: 1,
              width: 62,
            }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <BigdotsDisplay
          layers={[
            meteorShower({ color: "#FF0000" }),
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
        <BigdotsDisplay
          layers={[
            solidColor({
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
        <BigdotsDisplay
          layers={[
            solidColor({ color: "#B58B00" }),
            marquee({ color: "#FFF", speed: 100 }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <BigdotsDisplay
          layers={[image({ url: " /test.png" })]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <BigdotsDisplay
          layers={[image({ url: " /test.gif", startingRow: 3 })]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
    </>
  );
}
