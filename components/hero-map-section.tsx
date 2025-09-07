"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

// Dynamically import the map component to avoid SSR issues
const LeafletMap = dynamic(() => import('./leaflet-map'), {
  ssr: false,
  loading: () => <div className="w-full h-[500px] bg-gray-200 rounded-xl flex items-center justify-center">
    <p>Loading map...</p>
  </div>
})

const HeroMapSection = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  // Sample data for demonstration
  const sampleMarkers = [
    {
      id: '1',
      lat: 28.6139,
      lng: 77.2090,
      title: 'Hotel Grand Palace',
      description: 'Vegetarian buffet for 50 people',
      type: 'donation' as const
    },
    {
      id: '2',
      lat: 19.0760,
      lng: 72.8777,
      title: 'Hope Foundation',
      description: 'Urgent need for 30 meals',
      type: 'request' as const
    },
    {
      id: '3',
      lat: 13.0827,
      lng: 80.2707,
      title: 'Green Restaurant',
      description: 'Daily surplus food available',
      type: 'donation' as const
    },
    {
      id: '4',
      lat: 22.5726,
      lng: 88.3639,
      title: 'Care Center',
      description: 'Food for elderly residents',
      type: 'request' as const
    },
    {
      id: '5',
      lat: 12.9716,
      lng: 77.5946,
      title: 'Tech Cafeteria',
      description: 'Successfully donated to local NGO',
      type: 'completed' as const
    }
  ]

  const filteredMarkers = activeFilter === 'all'
    ? sampleMarkers
    : sampleMarkers.filter(marker => marker.type === activeFilter)

  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Live Food Map</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">See What's Happening Now</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Real-time visualization of food donations and requests across India.
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            onClick={() => setActiveFilter("all")}
            className={activeFilter === "all" ? "bg-green-600 hover:bg-green-700" : ""}
          >
            All
          </Button>
          <Button
            variant={activeFilter === "donations" ? "default" : "outline"}
            onClick={() => setActiveFilter("donations")}
            className={activeFilter === "donations" ? "bg-green-600 hover:bg-green-700" : ""}
          >
            Donations
          </Button>
          <Button
            variant={activeFilter === "requests" ? "default" : "outline"}
            onClick={() => setActiveFilter("requests")}
            className={activeFilter === "requests" ? "bg-green-600 hover:bg-green-700" : ""}
          >
            Requests
          </Button>
          <Button
            variant={activeFilter === "completed" ? "default" : "outline"}
            onClick={() => setActiveFilter("completed")}
            className={activeFilter === "completed" ? "bg-green-600 hover:bg-green-700" : ""}
          >
            Completed
          </Button>
        </div>
        <div className="mt-6 relative w-full h-[500px] rounded-xl overflow-hidden border shadow-md">
          <LeafletMap
            markers={filteredMarkers}
            height="500px"
            onMarkerClick={(marker) => {
              console.log('Marker clicked:', marker)
              // Handle marker click - could open a modal or navigate to details
            }}
          />

          {/* Sample cards that would overlay on map */}
          <div className="absolute top-10 left-10">
            <Card className="w-64 bg-white/90 backdrop-blur-sm shadow-lg">
              <CardHeader className="p-4">
                <CardTitle className="text-sm font-medium">Hotel Grand Palace</CardTitle>
                <CardDescription className="text-xs">Donating excess food from event</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-xs">
                  <p>Quantity: Serves 50 people</p>
                  <p>Type: Vegetarian Buffet</p>
                  <p>Available for: 4 more hours</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="absolute bottom-10 right-10">
            <Card className="w-64 bg-white/90 backdrop-blur-sm shadow-lg">
              <CardHeader className="p-4">
                <CardTitle className="text-sm font-medium">Hope Foundation</CardTitle>
                <CardDescription className="text-xs">Requesting food for shelter</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-xs">
                  <p>Quantity: For 30 people</p>
                  <p>Urgency: High</p>
                  <p>Type: Any food welcomed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button className="bg-green-600 hover:bg-green-700">Open Full Map View</Button>
        </div>
      </div>
    </section>
  )
}

export default HeroMapSection
