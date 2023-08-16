"use client";

import BigdotsDisplay, {
  meteorShowerMacro,
  solidColorMacro,
  textMacro,
  twinkleMacro,
} from "@bigdots-io/react-client";

export default function Home() {
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
    </>
  );
}
