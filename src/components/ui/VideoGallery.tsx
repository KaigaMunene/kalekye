'use client';

import { useRef } from 'react';

const videos = [
  {
    title: 'Host Program',
    videoUrl: '/videos/OYM-HOST-PROGRAM.mp4',
  },
  {
    title: 'Public Speaking Program',
    videoUrl: '/videos/OYM-PUBLIC-SPEAKING.mp4',
  },
  {
    title: 'Voiceover Program',
    videoUrl: '/videos/OYM-VOICEOVER.mp4',
  },
];

const VideoGallery = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (index: number): void => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video && !video.paused) {
        video.pause();
      }
    });
  };

  return (
    <section className="font-forum" aria-labelledby="video-gallery-section">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-normal mb-6" id="video-gallery-section">
          Featured Videos
        </h2>

        {/* Responsive grid: 1 col on mobile, 3 cols on medium+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.title}
              className="flex flex-col items-center bg-white rounded-lg shadow p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                controls
                onPlay={() => handlePlay(index)}
                className="w-full h-96 object-contain rounded-lg mb-4"
                src={video.videoUrl}
              />
              <h3 className="text-lg font-light text-gray-800">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
