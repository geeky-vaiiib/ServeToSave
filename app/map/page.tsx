"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

// Dynamically import the map component to avoid SSR issues
const LeafletMap = dynamic(() => import("@/components/leaflet-map"), {
  ssr: false,
  loading: () => null
})

export default function MapPage() {
  const [currentLocation, setCurrentLocation] = useState<[number, number] | null>(null)
  const [activeFilter, setActiveFilter] = useState("all")

  const sampleMarkers = [
    {
      id: "1",
      lat: 28.6139,
      lng: 77.2090,
      title: "Hotel Grand Palace",
      description: "Fresh surplus food from wedding event",
      type: "donation" as const,
      quantity: "Serves 50 people",
      dietType: "Vegetarian",
      expiryTime: "4 hours",
      postedTime: "30 minutes ago",
      distance: "2.3 km"
    },
    {
      id: "2",
      lat: 19.0760,
      lng: 72.8777,
      title: "Hope Foundation",
      description: "NGO seeking food for evening meal service",
      type: "request" as const,
      quantity: "For 30 people",
      urgency: "high" as const,
      dietType: "Any",
      postedTime: "1 hour ago",
      distance: "3.1 km"
    }
  ]

  const filteredMarkers = activeFilter === "all"
    ? sampleMarkers
    : sampleMarkers.filter(marker => marker.type === activeFilter)

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-800 py-12 md:py-16">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container px-4 md:px-6 relative z-10 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block rounded-lg bg-green-500/20 backdrop-blur-sm px-3 py-1 text-sm mb-3">Interactive Map</div>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Find Food Donations Near You</h1>
            <p className="text-gray-200 mt-3">Locate nearby donations and requests in real-time. Reduce waste, feed people.</p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={() => {
                if ("geolocation" in navigator) navigator.geolocation.getCurrentPosition((p) => setCurrentLocation([p.coords.latitude, p.coords.longitude]))
              }}>
                Use My Location
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">Make a Donation</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map area */}
      <section className="py-8 bg-gray-50 flex-1">
        <div className="container px-4 md:px-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Map</h2>
            <div className="flex gap-2">
              <Button variant={activeFilter === 'all' ? 'default' : 'outline'} size="sm" onClick={() => setActiveFilter('all')}>All</Button>
              <Button variant={activeFilter === 'donation' ? 'default' : 'outline'} size="sm" onClick={() => setActiveFilter('donation')}>Donations</Button>
              <Button variant={activeFilter === 'request' ? 'default' : 'outline'} size="sm" onClick={() => setActiveFilter('request')}>Requests</Button>
            </div>
          </div>

          <div className="w-full rounded-xl overflow-hidden border bg-white shadow-sm" style={{ minHeight: 600 }}>
            <LeafletMap
              markers={filteredMarkers}
              height="100%"
              center={currentLocation || undefined}
              zoom={currentLocation ? 13 : 6}
              showUserLocation={!!currentLocation}
              className="z-0"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
