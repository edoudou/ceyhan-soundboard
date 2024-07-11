import { useEffect, useState } from "react";

export type Sound = {
  name: string;
  url: string;
  emoji: string;
};

export const SoundButton = ({ sound }: { sound: Sound }) => {
    const [audio, setAudio] = useState<HTMLAudioElement>();

    useEffect(() => {
        setAudio(new Audio(sound.url));
    }, [sound.url]);


    return (
        <button className="p-4  flex items-center justify-center h-full" onClick={() => { audio?.play() }}>
            <span className="text-2xl h-full bg-gray-300 active:bg-gray-200 rounded-lg w-full flex flex-auto content-center justify-center flex-wrap   ">
                <span className="flex content-center justify-center">{sound.emoji}</span>
            </span>
        </button>
    );
}