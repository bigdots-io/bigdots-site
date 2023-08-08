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
      <BigdotsDisplay
        layers={[textMacro({ text: "hi", alignment: "center" })]}
        dimensions={{ height: 16, width: 64 }}
      />
      <BigdotsDisplay
        layers={[solidColorMacro({ color: "#00FFFF" })]}
        dimensions={{ height: 16, width: 64 }}
      />
      <BigdotsDisplay
        layers={[twinkleMacro({ speed: 100 })]}
        dimensions={{ height: 16, width: 64 }}
      />
      <BigdotsDisplay
        layers={[meteorShowerMacro({ color: "#FF0000" })]}
        dimensions={{ height: 16, width: 64 }}
      />
    </>
  );
}
