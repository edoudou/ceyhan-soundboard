import type { MetaFunction } from "@remix-run/node";
import { SoundButton } from "~/componants/SoundButton";

import cringe from "../sounds/cringe.mp3";

const SOUND = [
  { name: "Ceyhan", url: cringe, emoji: "😬" },
  { name: "Ceyhan", url: cringe, emoji: "➗" },
  { name: "Ceyhan", url: cringe, emoji: "😍" },
  { name: "Ceyhan", url: cringe, emoji: "‼️" },
  { name: "Ceyhan", url: cringe, emoji: "🐶" },
  { name: "Ceyhan", url: cringe, emoji: "🎮" },
  { name: "Ceyhan", url: cringe, emoji: "☭" },
  { name: "Ceyhan", url: cringe, emoji: "🍅" },
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
