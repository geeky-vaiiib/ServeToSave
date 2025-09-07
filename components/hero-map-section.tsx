"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const HeroMapSection = () => {
  const [activeFilter, setActiveFilter] = useState("all")

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
          {/* This would be replaced with an actual Google Maps integration */}
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <p className="text-lg font-medium">Google Maps Integration</p>
              <p className="text-sm text-gray-500">
                Real-time food donation and request visualization would appear here
              </p>
            </div>
          </div>

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
