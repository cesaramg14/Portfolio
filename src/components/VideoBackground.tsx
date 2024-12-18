import { useEffect, useRef } from "react";

export default function VideoBackground() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate=0.75;
        }
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-1">
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute min-w-full min-h-full object-cover opacity-60"
            >
                <source src="/Portfolio/video_bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
        </div>
    )
}