import type { MetaFunction } from "@remix-run/node";
import { SoundButton } from "~/componants/SoundButton";

import cringe from "../sounds/cringe.mp3";
import ratio from "../sounds/ratio.mp3";
import bebou from "../sounds/bebou.mp3";
import fucktono from "../sounds/fucktono.mp3";
import animaux from "../sounds/animaux.mp3";
import joue from "../sounds/joue.mp3";
import pcf from "../sounds/pcf.mp3";
import tomate from "../sounds/tomate.mp3";

const SOUND = [
  { name: "Cringe", url: cringe, emoji: "😬" },
  { name: "Ratio", url: ratio, emoji: "➗" },
  { name: "Bebou", url: bebou, emoji: "😍" },
  { name: "Fuck tono", url: fucktono, emoji: "‼️" },
  { name: "Animaux", url: animaux, emoji: "🐶" },
  { name: "Joue", url: joue, emoji: "🎮" },
  { name: "PCF", url: pcf, emoji: "☭" },
  { name: "Tomate", url: tomate, emoji: "🍅" },
]

export const meta: MetaFunction = () => {
  return [
    { title: "Ceyhan Soundboard" },
    { name: "Ceyhan soundboard app", content: "Ceyhan soundboard app" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans grid grid-cols-2 grid-rows-4 gap-0 h-dvh box-content">
      {SOUND.map((sound) => {
        return <SoundButton key={sound.name} sound={sound} />
      })}
    </div>
  );
}
