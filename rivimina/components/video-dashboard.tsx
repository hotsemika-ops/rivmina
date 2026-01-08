"use client"

import { useState } from "react"
import VideoPlayer from "@/components/video-player"

interface VideoDashboardProps {
  userEmail: string
  onLogout: () => void
}

interface Video {
  id: string
  title: string
  url: string
}

export default function VideoDashboard({ userEmail, onLogout }: VideoDashboardProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  const videos: Video[] = [
    {
      id: "1",
      title: "Rivimina Udana Day 1",
      url: "/api/video?id=video1",
    },
    {
      id: "2",
      title: "Rivimina Udana Day 1",
      url: "/api/video?id=video2",
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Video Library</h1>
            <p className="text-sm text-muted-foreground mt-1">{userEmail}</p>
          </div>
          <button
            onClick={onLogout}
            className="px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {selectedVideo ? (
          <div className="space-y-6">
            <button onClick={() => setSelectedVideo(null)} className="text-primary hover:underline text-sm font-medium">
              ← Back to Videos
            </button>
            <VideoPlayer video={selectedVideo} />
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-6">All Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {videos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="text-left p-4 border border-border rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="bg-muted rounded mb-3 h-32 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{video.title}</h3>
                </button>
              ))}
            </div>
            
          </div>
        )}
      </div>
    </div>
  )
}
