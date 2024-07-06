import { appURL } from "@/constants/constant";
import { Button } from "@/shadcn/ui/button";
import { useSelectedProjectStore } from "@/store/selected-project"
import { useEffect, useRef, useState } from "react";

function Player() {
    const { elements, currentElement } = useSelectedProjectStore();
        const [currentIndex, setCurrentIndex] = useState(currentElement);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        console.log(`Cambio elemento actual`);
        setCurrentIndex(currentElement);
    }, [currentElement]);

    const play = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const pause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const next = () => {
        if (currentIndex < elements.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const previous = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const setVideo = async () => {
        if (currentIndex !== -1 && videoRef.current && elements[currentIndex].videoUrl) {
            console.log('modificando')
            console.log(`Video Url: ${elements[currentIndex].videoUrl}`);
            const videoUrl = `${appURL}/${elements[currentIndex].videoUrl}`;
            videoRef.current.src = videoUrl;
            await videoRef.current.load();
            play();
        }
    }

    useEffect(() => {
        console.log('Cambio index')
        setVideo();
    }, [currentIndex]);

    return (
        <div className="py-2 bg-gray-700 text-white flex flex-col items-center justify-between border-8 border-slate-900">
            <video ref={videoRef} controls className="w-full max-w-lg h-full rounded-lg mb-4">
                {currentIndex !== -1 && (
                    <source src={`${appURL}/${elements[currentIndex]?.videoUrl}`} type="video/mp4" />
                )}
            </video>
            <div className="flex space-x-4 bg-slate-600 p-2 rounded">
                <Button
                    variant="blue"
                    onClick={previous}
                    disabled={currentIndex <= 0}
                >
                    Anterior
                </Button>
                <Button
                    variant="success"
                    onClick={play}
                    disabled={currentIndex === -1}
                >
                    Play
                </Button>
                <Button
                    variant="destructive"
                    onClick={pause}
                    disabled={currentIndex === -1}
                >
                    Pausa
                </Button>
                <Button
                    variant="blue"
                    onClick={next}
                    disabled={currentIndex >= elements.length - 1}
                >
                    Siguiente
                </Button>
            </div>
        </div>
    );
}

export default Player;
