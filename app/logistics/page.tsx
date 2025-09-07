"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, MapPin, Package, Truck, Users, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function LogisticsPage() {
  const [selectedStep, setSelectedStep] = useState(1)

  const processSteps = [
    {
      id: 1,
      title: "Food Donation Posted",
      description: "Donor posts available food with details and pickup location",
      icon: Package,
      status: "completed"
    },
    {
      id: 2,
      title: "NGO Request Matched",
      description: "Our AI system matches the donation with nearby NGO requests",
      icon: Users,
      status: "completed"
    },
    {
      id: 3,
      title: "Logistics Coordination",
      description: "Pickup and delivery logistics are automatically arranged",
      icon: Truck,
      status: "active"
    },
    {
      id: 4,
      title: "Food Collection",
      description: "Our logistics partner collects food from the donor location",
      icon: MapPin,
      status: "pending"
    },
    {
      id: 5,
      title: "Quality Check",
      description: "Food quality and safety verification at collection point",
      icon: CheckCircle,
      status: "pending"
    },
    {
      id: 6,
      title: "Delivery to NGO",
      description: "Food is delivered to the requesting NGO or distribution center",
      icon: CheckCircle,
      status: "pending"
    }
  ]

  const logisticsPartners = [
    {
      name: "Zomato Feeding India",
      type: "Food Delivery Network",
      coverage: "Pan India",
      speciality: "Last-mile delivery",
      logo: "/placeholder.svg"
    },
    {
      name: "Delhivery",
      type: "Logistics Partner",
      coverage: "Major Cities",
      speciality: "Temperature-controlled transport",
      logo: "/placeholder.svg"
    },
    {
      name: "Local NGO Network",
      type: "Community Partners",
      coverage: "Local Areas",
      speciality: "Community distribution",
      logo: "/placeholder.svg"
    },
    {
      name: "Volunteer Network",
      type: "Community Volunteers",
      coverage: "Neighborhood",
      speciality: "Immediate pickup & delivery",
      logo: "/placeholder.svg"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900 px-3 py-1 text-sm text-green-800 dark:text-green-200">
                Logistics & Operations
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Seamless Food Distribution Network
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Our efficient logistics system ensures food reaches those in need quickly and safely, 
                from donation to distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-12 md:py-24 bg-white dark:bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900 px-3 py-1 text-sm text-green-800 dark:text-green-200">
                How It Works
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                From Donation to Distribution
              </h2>
              <p className="max-w-[700px] text-muted-foreground">
                Our streamlined process ensures efficient food redistribution with minimal waste and maximum impact.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            {/* Process Steps */}
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <Card 
                  key={step.id} 
                  className={`cursor-pointer transition-all ${
                    selectedStep === step.id ? 'ring-2 ring-green-500 bg-green-50 dark:bg-green-950' : ''
                  }`}
                  onClick={() => setSelectedStep(step.id)}
                >
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className={`rounded-full p-2 ${
                      step.status === 'completed' ? 'bg-green-100 dark:bg-green-900' :
                      step.status === 'active' ? 'bg-blue-100 dark:bg-blue-900' :
                      'bg-gray-100 dark:bg-gray-800'
                    }`}>
                      <step.icon className={`h-5 w-5 ${
                        step.status === 'completed' ? 'text-green-600 dark:text-green-400' :
                        step.status === 'active' ? 'text-blue-600 dark:text-blue-400' :
                        'text-gray-500'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{step.title}</h3>
                        <Badge variant={
                          step.status === 'completed' ? 'default' :
                          step.status === 'active' ? 'secondary' :
                          'outline'
                        }>
                          {step.status === 'completed' ? 'Completed' :
                           step.status === 'active' ? 'In Progress' :
                           'Pending'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Process Visualization */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Real-time Tracking</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Estimated Delivery</p>
                      <p className="text-sm text-muted-foreground">2:30 PM - 3:00 PM</p>
                    </div>
                  </div>
                  <Badge>On Time</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Current Location</p>
                      <p className="text-sm text-muted-foreground">En route to NGO</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Live</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="font-medium">Food Quantity</p>
                      <p className="text-sm text-muted-foreground">50 meals ready</p>
                    </div>
                  </div>
                  <Badge variant="outline">Verified</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Partners */}
      <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900 px-3 py-1 text-sm text-green-800 dark:text-green-200">
                Our Network
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Logistics Partners</h2>
              <p className="max-w-[700px] text-muted-foreground">
                We work with trusted partners to ensure reliable and efficient food distribution across India.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {logisticsPartners.map((partner, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <Truck className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                  <CardDescription>{partner.type}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <div className="text-sm">
                    <span className="font-medium">Coverage:</span> {partner.coverage}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Speciality:</span> {partner.speciality}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-24 bg-white dark:bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900 px-3 py-1 text-sm text-green-800 dark:text-green-200">
                Get Support
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Need Help with Logistics?
              </h2>
              <p className="text-muted-foreground">
                Our logistics team is available 24/7 to help with any questions or issues regarding 
                food pickup, delivery, or tracking.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Emergency Hotline</p>
                    <p className="text-sm text-muted-foreground">+91 98765 43210 (24/7)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Logistics Support</p>
                    <p className="text-sm text-muted-foreground">logistics@servetosave.in</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Track Your Donation</CardTitle>
                  <CardDescription>Enter your tracking ID to see real-time status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Enter tracking ID (e.g., STI123456)"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Track Donation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Make a Difference?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                Join our network of donors and NGOs to help reduce food waste and fight hunger.
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
