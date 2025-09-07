import Link from "next/link"
import { ArrowRight, Heart, Leaf, MapPin, Rocket, TrendingUp, Users, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import ImpactCounter from "@/components/impact-counter"
import HeroMapSection from "@/components/hero-map-section"
import TestimonialSection from "@/components/testimonial-section"

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Join the Movement
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Serving India by Saving Food
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Connect surplus food with those who need it most. Our AI-powered platform bridges the gap between food
                waste and hunger.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/donate" passHref>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Donate Food <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/request" passHref>
                  <Button size="lg" variant="outline">
                    Request Food
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-green-600" />
                  <span>10,000+ Donors</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4 text-green-600" />
                  <span>500+ NGOs</span>
                </div>
                <div className="flex items-center gap-1">
                  <Utensils className="h-4 w-4 text-green-600" />
                  <span>1M+ Meals Saved</span>
                </div>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center lg:justify-end">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Food donation illustration"
                className="rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Counter */}
      <ImpactCounter />

      {/* How it works */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Our Process</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform makes food donation and distribution simple, efficient, and transparent.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-3 md:gap-12">
            <div className="grid gap-2 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Utensils className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Donate Food</h3>
              <p className="text-muted-foreground">
                Restaurants, households, and event organizers can easily donate surplus food through our platform.
              </p>
            </div>
            <div className="grid gap-2 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Smart Matching</h3>
              <p className="text-muted-foreground">
                Our AI matches donations with nearby recipients based on needs, quantity, and logistics.
              </p>
            </div>
            <div className="grid gap-2 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Feed Communities</h3>
              <p className="text-muted-foreground">
                NGOs and shelters receive food safely and efficiently to distribute to those in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Visualization */}
      <HeroMapSection />

      {/* Subscription Plans */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Freemium Plans
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose Your Plan</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Select the right level of tools and features for your organization.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {/* Free Plan */}
            <Card className="flex flex-col">
              <CardHeader className="flex flex-col space-y-1.5 pb-4">
                <CardTitle className="text-2xl font-bold">Basic</CardTitle>
                <CardDescription>For individuals and small NGOs</CardDescription>
                <div className="mt-2 text-4xl font-bold">
                  ₹0<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="grid gap-3 pt-0">
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span>Basic donation/request forms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span>Location-based matching</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span>Standard notification system</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span>Basic verification badge</span>
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
                <CardDescription>For established NGOs</CardDescription>
                <div className="mt-2 text-4xl font-bold">
                  ₹1,999<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="grid gap-3 pt-4">
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span>All basic features</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span>Priority matching algorithm</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span>Detailed analytics dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span>Verified NGO badge</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span>Dedicated support</span>
                </div>
                <Button className="mt-4 bg-green-600 hover:bg-green-700">Upgrade Now</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="flex flex-col">
              <CardHeader className="flex flex-col space-y-1.5 pb-4">
                <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
                <CardDescription>For large organizations & CSR</CardDescription>
                <div className="mt-2 text-4xl font-bold">
                  Custom<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="grid gap-3 pt-0">
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span>All Pro features</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span>White-label solution</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span>Custom integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span>Advanced impact reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-green-600" />
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

      {/* Partnerships Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Partnerships</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                CSR & Corporate Partnerships
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join leading organizations making a difference in food security across India.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>CSR Impact Dashboard</CardTitle>
                <CardDescription>
                  Track and showcase your organization's contribution to fighting hunger.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span>Real-time impact metrics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span>Customizable CSR reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span>Employee engagement tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span>SDG alignment tracking</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full bg-green-600 hover:bg-green-700">Request Demo</Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>White Label Solutions</CardTitle>
                <CardDescription>Customize our platform with your brand for maximum impact.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <Rocket className="h-4 w-4 text-green-600" />
                    <span>Branded user experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Rocket className="h-4 w-4 text-green-600" />
                    <span>Custom workflows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Rocket className="h-4 w-4 text-green-600" />
                    <span>Dedicated API access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Rocket className="h-4 w-4 text-green-600" />
                    <span>Enterprise-grade security</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Link href="/partnerships" passHref>
              <Button variant="link" className="text-green-600">
                View All Partnership Opportunities <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Support Us */}
      <section className="py-12 md:py-24 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Support Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Help Us Feed More</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Your contributions help us expand our platform and reach more communities in need.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-3xl gap-6 py-12 md:grid-cols-2">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Platform Donation</CardTitle>
                <CardDescription>Support our operational costs directly.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4 text-muted-foreground">
                  Your donation helps us maintain and improve our platform, reaching more people in need.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">Donate Now</Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Grant Applications</CardTitle>
                <CardDescription>For organizations wanting to fund our mission.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4 text-muted-foreground">
                  We welcome partnerships with foundations, government bodies, and grant-making organizations.
                </p>
                <Button className="w-full">Apply for Grants</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-12 md:py-24 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Start Making an Impact Today
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you're donating food, requesting support, or funding our mission - every action counts.
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
              <Link href="/subscribe" passHref>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
                  Join As Partner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
