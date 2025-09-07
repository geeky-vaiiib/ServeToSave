import { ArrowRight, Heart, Clock, MapPin, Upload } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import DonationForm from "@/components/donation-form"
import Link from "next/link"

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Make a Difference
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Donate Surplus Food</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Every donation counts. Your excess food can help feed those in need and reduce waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Simple Process</CardTitle>
                <CardDescription>Fill out a quick form with details about your food donation.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Quick Pickup</CardTitle>
                <CardDescription>We match your donation with nearby NGOs for quick collection.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Track Impact</CardTitle>
                <CardDescription>See where your donation went and the impact it made.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">Donation Details</h2>
                <p className="mt-2 text-muted-foreground">
                  Let us know about the food you wish to donate. We'll match it with the right recipient.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Why Donate?</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Reduce food waste and environmental impact</li>
                  <li>Help feed those who are food insecure</li>
                  <li>Get tax benefits for your donations</li>
                  <li>Track your social impact with detailed reports</li>
                  <li>Effortless logistics with our pickup service</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Donations can come from:</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  <Card>
                    <CardContent className="p-4">
                      <div className="font-medium">Restaurants & Hotels</div>
                      <p className="text-sm text-muted-foreground">Surplus food from kitchens and events</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="font-medium">Households</div>
                      <p className="text-sm text-muted-foreground">Excess food from parties and gatherings</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="font-medium">Corporate Cafeterias</div>
                      <p className="text-sm text-muted-foreground">Daily surplus from office canteens</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="font-medium">Event Organizers</div>
                      <p className="text-sm text-muted-foreground">Leftover food from functions</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="font-medium flex items-center gap-2 text-green-800">
                  <Upload className="h-4 w-4" />
                  Food Safety Documentation
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  For larger donations, we recommend uploading food safety documents to expedite the process.
                </p>
              </div>
            </div>
            <div>
              <DonationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Services */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Logistics & Pickup Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Need help with food transportation? Our logistics partners can assist.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Standard Pickup</CardTitle>
                <CardDescription>Free for Pro subscribers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">₹249</p>
                <p className="text-muted-foreground">per pickup</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Same-day pickup (within 4 hours)
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Up to 10km distance
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Temperature-maintained vehicles
                  </li>
                </ul>
                <Button className="mt-6 w-full bg-green-600 hover:bg-green-700">Book Pickup</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Express Pickup</CardTitle>
                <CardDescription>Priority service</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">₹399</p>
                <p className="text-muted-foreground">per pickup</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Urgent pickup (within 1 hour)
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Up to 15km distance
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Temperature-maintained vehicles
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority handling
                  </li>
                </ul>
                <Button className="mt-6 w-full">Book Express</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bulk Transport</CardTitle>
                <CardDescription>For large donations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">Custom</p>
                <p className="text-muted-foreground">based on requirements</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Large quantity food transport
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Multiple destinations
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Refrigerated transport available
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Dedicated logistics coordinator
                  </li>
                </ul>
                <Button variant="outline" className="mt-6 w-full">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Donations That Made a Difference</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                See how food donations from our platform have helped communities across India.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-green-100 p-2">
                    <Heart className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Taj Palace Hotel</h3>
                    <p className="text-sm text-muted-foreground">Mumbai</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "We donated leftover food from a corporate event that would have gone to waste. Within an hour, it was
                  picked up and distributed to 150 children at a nearby shelter."
                </p>
                <div className="text-sm text-green-600">150 meals served • June 2023</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-green-100 p-2">
                    <Heart className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Google India Office</h3>
                    <p className="text-sm text-muted-foreground">Bangalore</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Our cafeteria donates surplus food daily. The platform has made it simple to schedule regular pickups
                  and see the direct impact of our CSR initiative."
                </p>
                <div className="text-sm text-green-600">500+ meals per month • Ongoing</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-green-100 p-2">
                    <Heart className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Sharma Wedding</h3>
                    <p className="text-sm text-muted-foreground">Delhi</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "We had so much food left after our daughter's wedding. Instead of wasting it, we used the app to
                  donate it. The express pickup service was incredibly fast."
                </p>
                <div className="text-sm text-green-600">200 meals served • May 2023</div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Link href="/success-stories" passHref>
              <Button variant="link" className="text-green-600">
                Read More Success Stories <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-12 md:py-16 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Donate?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                Your food donation can make a real difference in someone's life today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Donate Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
