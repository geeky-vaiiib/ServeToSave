import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, BarChart, Clock, DollarSign, Heart, Leaf, MapPin, Star, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ForRestaurantsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                For Restaurants & Food Businesses
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Turn Food Surplus into Social Impact
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join our network of responsible food businesses reducing waste while making a positive impact on
                communities in need.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup?type=restaurant" passHref>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Join as a Restaurant <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#benefits" passHref>
                  <Button size="lg" variant="outline">
                    See Benefits
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center lg:justify-end">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Restaurant donating food"
                className="rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Restaurant Benefits
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Restaurants Choose Us</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Joining our platform offers multiple benefits for your food business
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader className="pb-2">
                <Leaf className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Reduce Food Waste</CardTitle>
                <CardDescription>
                  Turn surplus food into a positive impact instead of contributing to landfills.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex flex-col">
              <CardHeader className="pb-2">
                <DollarSign className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Tax Benefits</CardTitle>
                <CardDescription>
                  Receive tax deductions for your food donations with our automated documentation.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex flex-col">
              <CardHeader className="pb-2">
                <Award className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Brand Reputation</CardTitle>
                <CardDescription>
                  Enhance your brand image as a socially responsible business committed to sustainability.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex flex-col">
              <CardHeader className="pb-2">
                <BarChart className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Impact Tracking</CardTitle>
                <CardDescription>
                  Monitor and showcase the social and environmental impact of your donations.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex flex-col">
              <CardHeader className="pb-2">
                <Clock className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Effortless Process</CardTitle>
                <CardDescription>
                  Simple donation workflow with optional logistics support for food pickup.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex flex-col">
              <CardHeader className="pb-2">
                <Heart className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Community Connection</CardTitle>
                <CardDescription>
                  Build meaningful relationships with local communities and organizations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Simple Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform makes food donation simple, efficient, and rewarding
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-4 md:gap-12">
            <div className="grid gap-2 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-bold">Sign Up</h3>
              <p className="text-muted-foreground">
                Create your restaurant profile and set your preferences for donation types and schedules.
              </p>
            </div>
            <div className="grid gap-2 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold">List Donations</h3>
              <p className="text-muted-foreground">
                Quickly post available food with details on quantity, type, and pickup window.
              </p>
            </div>
            <div className="grid gap-2 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold">Get Matched</h3>
              <p className="text-muted-foreground">
                Our AI matches your donation with nearby NGOs and arranges pickup logistics.
              </p>
            </div>
            <div className="grid gap-2 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-bold">Track Impact</h3>
              <p className="text-muted-foreground">
                Receive impact reports and tax receipts for all your contributions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Restaurants Making a Difference
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join these leading food businesses in our mission to reduce waste and hunger
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
            <Card className="flex flex-col">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="Restaurant 1"
                  className="rounded-t-lg object-cover w-full h-48"
                />
                <Badge className="absolute top-3 right-3 bg-green-600">Featured Partner</Badge>
              </div>
              <CardHeader>
                <CardTitle>Taj Palace Hotel</CardTitle>
                <CardDescription>Mumbai</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                  <Star className="h-4 w-4 fill-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "We've donated over 5,000 meals through this platform. The process is seamless, and we love seeing the
                  impact reports showing exactly how our food is helping the community."
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Utensils className="h-4 w-4" />
                  <span>5,000+ meals donated</span>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="Restaurant 2"
                  className="rounded-t-lg object-cover w-full h-48"
                />
                <Badge className="absolute top-3 right-3 bg-green-600">Featured Partner</Badge>
              </div>
              <CardHeader>
                <CardTitle>Spice Garden</CardTitle>
                <CardDescription>Delhi</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                  <Star className="h-4 w-4 fill-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "The logistics service has been a game-changer for us. We schedule regular pickups, and everything is
                  handled professionally. Our customers love hearing about our food donation program."
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Utensils className="h-4 w-4" />
                  <span>3,200+ meals donated</span>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="Restaurant 3"
                  className="rounded-t-lg object-cover w-full h-48"
                />
                <Badge className="absolute top-3 right-3 bg-green-600">Featured Partner</Badge>
              </div>
              <CardHeader>
                <CardTitle>Green Leaf Cafe</CardTitle>
                <CardDescription>Bangalore</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                  <Star className="h-4 w-4 fill-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "As a small cafe, we appreciate how easy the platform makes it to donate even small quantities of
                  food. The tax benefits have been substantial, and we love the positive customer feedback."
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Utensils className="h-4 w-4" />
                  <span>1,800+ meals donated</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Restaurant Plans
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose Your Plan</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Select the right level of tools and features for your restaurant
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {/* Free Plan */}
            <Card className="flex flex-col">
              <CardHeader className="flex flex-col space-y-1.5 pb-4">
                <CardTitle className="text-2xl font-bold">Basic</CardTitle>
                <CardDescription>For small restaurants and cafes</CardDescription>
                <div className="mt-2 text-4xl font-bold">
                  ₹0<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="grid gap-3 pt-0">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic donation listings</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Standard tax receipts</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic impact reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Community recognition</span>
                </div>
                <Button variant="outline" className="mt-4">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="flex flex-col border-green-600 shadow-md">
              <CardHeader className="flex flex-col space-y-1.5 pb-4 bg-green-50 rounded-t-lg">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 self-start">
                  Popular
                </div>
                <CardTitle className="text-2xl font-bold">Pro</CardTitle>
                <CardDescription>For medium-sized restaurants</CardDescription>
                <div className="mt-2 text-4xl font-bold">
                  ₹1,999<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="grid gap-3 pt-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All basic features</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority matching algorithm</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Detailed analytics dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Featured restaurant badge</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>5 free pickups per month</span>
                </div>
                <Button className="mt-4 bg-green-600 hover:bg-green-700">Upgrade Now</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="flex flex-col">
              <CardHeader className="flex flex-col space-y-1.5 pb-4">
                <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
                <CardDescription>For hotel chains & large restaurants</CardDescription>
                <div className="mt-2 text-4xl font-bold">
                  Custom<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="grid gap-3 pt-0">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All Pro features</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multi-location management</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom API integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Branded impact reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated account manager</span>
                </div>
                <Button variant="outline" className="mt-4">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Logistics Services */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Logistics Support
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Hassle-Free Food Pickup</h2>
              <p className="text-muted-foreground">
                Our logistics partners can handle the pickup and delivery of your food donations, making the process
                completely effortless for your restaurant.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <Clock className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">Flexible Scheduling</span>
                    <p className="text-sm text-muted-foreground">
                      Schedule one-time or recurring pickups that fit your restaurant's operations
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <MapPin className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">Temperature-Controlled Transport</span>
                    <p className="text-sm text-muted-foreground">
                      Specialized vehicles ensure food safety during transportation
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <DollarSign className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">Affordable Options</span>
                    <p className="text-sm text-muted-foreground">
                      Various pricing tiers to fit your budget, with free pickups for Pro subscribers
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <Utensils className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">Food Safety Compliance</span>
                    <p className="text-sm text-muted-foreground">
                      All logistics partners follow strict food safety protocols and regulations
                    </p>
                  </div>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/logistics" passHref>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Learn More About Logistics <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                width={600}
                height={500}
                alt="Food pickup logistics"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Reporting */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=500&width=600"
                width={600}
                height={500}
                alt="Impact dashboard"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Impact Reporting
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Showcase Your Social Impact</h2>
              <p className="text-muted-foreground">
                Our detailed impact reports help you quantify and communicate the difference your restaurant is making
                in the community and environment.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <Utensils className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">Meals Donated Tracking</span>
                    <p className="text-sm text-muted-foreground">
                      See exactly how many meals your donations have provided to those in need
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <Leaf className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">Environmental Impact</span>
                    <p className="text-sm text-muted-foreground">
                      Quantified metrics on CO2 emissions and water saved through waste reduction
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <DollarSign className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">Tax Benefit Documentation</span>
                    <p className="text-sm text-muted-foreground">
                      Automated tax receipts and documentation for all your donations
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <Award className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">Shareable Content</span>
                    <p className="text-sm text-muted-foreground">
                      Ready-to-use social media content highlighting your restaurant's impact
                    </p>
                  </div>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/impact" passHref>
                  <Button className="bg-green-600 hover:bg-green-700">
                    View Sample Impact Report <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">FAQ</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Common questions from restaurants about our platform
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6">
            <Card>
              <CardHeader>
                <CardTitle>What types of food can be donated?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept a wide variety of food donations, including prepared meals, raw ingredients, packaged foods,
                  and bakery items. All food must be unexpired, properly stored, and safe for consumption. Our platform
                  allows you to specify food types, quantities, and any dietary information.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How is food safety ensured during transportation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our logistics partners use temperature-controlled vehicles and follow strict food safety protocols.
                  Food is transported in food-grade containers, and all handlers are trained in proper food safety
                  procedures. We maintain temperature logs and ensure quick delivery to minimize any food safety risks.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What are the tax benefits for food donations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In India, businesses can claim tax deductions for food donations to registered charitable
                  organizations. Our platform automatically generates the necessary documentation for tax purposes,
                  including donation receipts with details on quantity, value, and recipient organization. We recommend
                  consulting with your tax advisor for specific advice related to your business.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How quickly can you arrange a pickup?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our standard pickup can be arranged within 4 hours of posting a donation. For urgent situations, our
                  express pickup service can respond within 1 hour in most service areas. You can also schedule
                  recurring pickups at specific times that work for your restaurant's operations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can we choose which organizations receive our donations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, Pro and Enterprise subscribers can set preferences for recipient organizations. You can select
                  specific NGOs or types of organizations (e.g., children's homes, homeless shelters) that you'd like to
                  support. You can also opt for our AI matching system to find the most efficient and impactful matches
                  based on need, proximity, and timing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-12 md:py-16 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Join Our Restaurant Network Today</h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                Start making a difference with your surplus food while enhancing your brand's social responsibility.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup?type=restaurant" passHref>
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Register Your Restaurant
                </Button>
              </Link>
              <Link href="/contact" passHref>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
