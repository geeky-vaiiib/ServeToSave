"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Filter, Heart, MapPin, Search, Utensils } from "lucide-react"
import Link from "next/link"

export default function MapPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Food Map</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Real-Time Food Donation Map
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Visualize food donations and requests across India. Find opportunities to donate or receive food in your
                area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-12 bg-white flex-1">
        <div className="container px-4 md:px-6 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 h-full">
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                <Search className="ml-2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search location" className="border-0 focus-visible:ring-0" />
              </div>

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Filters</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
              </div>

              {showFilters && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="type">Type</Label>
                    <Select defaultValue="all">
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="donations">Donations</SelectItem>
                        <SelectItem value="requests">Requests</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="food-type">Food Type</Label>
                    <Select defaultValue="all">
                      <SelectTrigger id="food-type">
                        <SelectValue placeholder="Select food type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="cooked">Cooked Food</SelectItem>
                        <SelectItem value="raw">Raw Ingredients</SelectItem>
                        <SelectItem value="packaged">Packaged Food</SelectItem>
                        <SelectItem value="bakery">Bakery Items</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="distance">Distance</Label>
                    <Select defaultValue="10">
                      <SelectTrigger id="distance">
                        <SelectValue placeholder="Select distance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">Within 5 km</SelectItem>
                        <SelectItem value="10">Within 10 km</SelectItem>
                        <SelectItem value="15">Within 15 km</SelectItem>
                        <SelectItem value="20">Within 20 km</SelectItem>
                        <SelectItem value="50">Within 50 km</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Minimum Quantity (serves)</Label>
                    <Input id="quantity" type="number" placeholder="e.g. 10" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Available Within</Label>
                    <Select defaultValue="24">
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Select time frame" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 hours</SelectItem>
                        <SelectItem value="6">6 hours</SelectItem>
                        <SelectItem value="12">12 hours</SelectItem>
                        <SelectItem value="24">24 hours</SelectItem>
                        <SelectItem value="48">48 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-2">
                    <Button className="w-full bg-green-600 hover:bg-green-700">Apply Filters</Button>
                  </div>
                </div>
              )}

              <Tabs defaultValue="nearby">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="nearby">Nearby</TabsTrigger>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                </TabsList>
                <TabsContent value="nearby" className="space-y-4 pt-4">
                  <Card>
                    <CardHeader className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-base">Hotel Grand Palace</CardTitle>
                          <CardDescription className="text-xs">2.3 km away</CardDescription>
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Donation</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-xs space-y-1">
                        <p>Quantity: Serves 50 people</p>
                        <p>Type: Vegetarian Buffet</p>
                        <p>Available for: 4 more hours</p>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <Button variant="outline" size="sm" className="text-xs">
                          View Details
                        </Button>
                        <Button size="sm" className="text-xs bg-green-600 hover:bg-green-700">
                          Request
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-base">Hope Foundation</CardTitle>
                          <CardDescription className="text-xs">3.1 km away</CardDescription>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Request</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-xs space-y-1">
                        <p>Quantity: For 30 people</p>
                        <p>Urgency: High</p>
                        <p>Type: Any food welcomed</p>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <Button variant="outline" size="sm" className="text-xs">
                          View Details
                        </Button>
                        <Button size="sm" className="text-xs bg-green-600 hover:bg-green-700">
                          Donate
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-base">Sharma Wedding</CardTitle>
                          <CardDescription className="text-xs">4.5 km away</CardDescription>
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Donation</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-xs space-y-1">
                        <p>Quantity: Serves 100 people</p>
                        <p>Type: Mixed Menu</p>
                        <p>Available for: 2 more hours</p>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <Button variant="outline" size="sm" className="text-xs">
                          View Details
                        </Button>
                        <Button size="sm" className="text-xs bg-green-600 hover:bg-green-700">
                          Request
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="recent" className="space-y-4 pt-4">
                  <Card>
                    <CardHeader className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-base">Corporate Event</CardTitle>
                          <CardDescription className="text-xs">Posted 30 minutes ago</CardDescription>
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Donation</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-xs space-y-1">
                        <p>Quantity: Serves 75 people</p>
                        <p>Type: Lunch Buffet</p>
                        <p>Available for: 5 more hours</p>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <Button variant="outline" size="sm" className="text-xs">
                          View Details
                        </Button>
                        <Button size="sm" className="text-xs bg-green-600 hover:bg-green-700">
                          Request
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-base">Children's Shelter</CardTitle>
                          <CardDescription className="text-xs">Posted 45 minutes ago</CardDescription>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Request</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-xs space-y-1">
                        <p>Quantity: For 25 children</p>
                        <p>Urgency: Medium</p>
                        <p>Type: Breakfast items</p>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <Button variant="outline" size="sm" className="text-xs">
                          View Details
                        </Button>
                        <Button size="sm" className="text-xs bg-green-600 hover:bg-green-700">
                          Donate
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-base">Bakery Surplus</CardTitle>
                          <CardDescription className="text-xs">Posted 1 hour ago</CardDescription>
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Donation</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-xs space-y-1">
                        <p>Quantity: 50 bread loaves, 100 pastries</p>
                        <p>Type: Bakery Items</p>
                        <p>Available for: 8 more hours</p>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <Button variant="outline" size="sm" className="text-xs">
                          View Details
                        </Button>
                        <Button size="sm" className="text-xs bg-green-600 hover:bg-green-700">
                          Request
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="pt-4">
                <Link href="/pro-features" passHref>
                  <Button variant="outline" className="w-full">
                    Upgrade to Pro for Advanced Filters
                  </Button>
                </Link>
              </div>
            </div>

            {/* Map */}
            <div className="relative w-full h-[600px] rounded-xl overflow-hidden border shadow-md">
              {/* This would be replaced with an actual Google Maps integration */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg font-medium">Google Maps Integration</p>
                  <p className="text-sm text-gray-500">
                    Real-time food donation and request visualization would appear here
                  </p>
                </div>
              </div>

              {/* Filter buttons that would overlay on map */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full shadow-md p-1">
                <div className="flex space-x-1">
                  <Button
                    variant={activeFilter === "all" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveFilter("all")}
                    className={activeFilter === "all" ? "bg-green-600 hover:bg-green-700 rounded-full" : "rounded-full"}
                  >
                    All
                  </Button>
                  <Button
                    variant={activeFilter === "donations" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveFilter("donations")}
                    className={
                      activeFilter === "donations" ? "bg-green-600 hover:bg-green-700 rounded-full" : "rounded-full"
                    }
                  >
                    <Utensils className="h-4 w-4 mr-1" />
                    Donations
                  </Button>
                  <Button
                    variant={activeFilter === "requests" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveFilter("requests")}
                    className={
                      activeFilter === "requests" ? "bg-green-600 hover:bg-green-700 rounded-full" : "rounded-full"
                    }
                  >
                    <Heart className="h-4 w-4 mr-1" />
                    Requests
                  </Button>
                  <Button
                    variant={activeFilter === "ngos" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveFilter("ngos")}
                    className={
                      activeFilter === "ngos" ? "bg-green-600 hover:bg-green-700 rounded-full" : "rounded-full"
                    }
                  >
                    <MapPin className="h-4 w-4 mr-1" />
                    NGOs
                  </Button>
                </div>
              </div>

              {/* Sample cards that would overlay on map */}
              <div className="absolute top-20 left-20">
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

              <div className="absolute bottom-20 right-20">
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
          </div>
        </div>
      </section>

      {/* Pro Features */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Pro Features</div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Unlock Advanced Map Features</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Upgrade to Pro for enhanced map features and priority access to food donations.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Real-Time Notifications</CardTitle>
                <CardDescription>Get instant alerts for new donations in your area</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Pro users receive push notifications when new food donations become available within their specified
                  radius, ensuring you never miss an opportunity.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Advanced Filtering</CardTitle>
                <CardDescription>Customize your search with detailed criteria</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Filter by food type, quantity, distance, dietary restrictions, and more to find exactly what you need
                  when you need it.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Priority Matching</CardTitle>
                <CardDescription>Get matched with donors before basic users</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Pro users receive priority in our matching algorithm, increasing your chances of securing food
                  donations before they're claimed by others.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Link href="/pricing" passHref>
              <Button className="bg-green-600 hover:bg-green-700">Upgrade to Pro</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-8 md:py-12 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter">Ready to Make a Difference?</h2>
              <p className="mx-auto max-w-[700px]">
                Join our platform to donate or request food and help us reduce waste while feeding those in need.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/donate" passHref>
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Donate Food
                </Button>
              </Link>
              <Link href="/request" passHref>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
                  Request Food
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
