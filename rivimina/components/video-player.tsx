"use client"

interface VideoPlayerProps {
  video: {
    id: string
    title: string
    url: string
  }
}

export default function VideoPlayer({ video }: VideoPlayerProps) {
  return (
    <div className="space-y-4">
      <div className="bg-muted rounded-lg overflow-hidden">
        <video src={video.url} controlsList="nodownload noremoteplayback " controls className="w-full aspect-video bg-black" />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">{video.title}</h1>
      </div>
    </div>
  )
}
