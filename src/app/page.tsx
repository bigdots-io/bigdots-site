"use client";

import BigdotsDisplay, {
  meteorShowerMacro,
  solidColorMacro,
  textMacro,
  twinkleMacro,
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
            solidColorMacro({ color: "#FF0000" }),
            textMacro({ text: "hi", alignment: "left" }),
            textMacro({
              text: "hi",
              alignment: "right",
            }),
            textMacro({
              text: "hi",
              alignment: "center",
            }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <BigdotsDisplay
          layers={[solidColorMacro({ color: "#00FFFF" })]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <BigdotsDisplay
          layers={[
            twinkleMacro({ speed: 100, color: "#AAA" }),
            textMacro({
              text: "hello!!",
              alignment: "right",
              color: "#FFFF00",
              startingRow: 1,
            }),
          ]}
          dimensions={{ height: 16, width: 64 }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <BigdotsDisplay
          layers={[
            meteorShowerMacro({ color: "#FF0000" }),
            textMacro({
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
            solidColorMacro({ color: trigger ? "#228B22" : "#FF0000" }),
            textMacro({
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
    </>
  );
}
