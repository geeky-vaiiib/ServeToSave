import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, BadgeCheck, BarChart, CheckCircle, Heart, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ForNGOsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                For NGOs & Shelters
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get Verified Food Donations for Your Community
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join our network to receive regular food donations, access logistics support, and gain visibility for
                your cause.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup?type=ngo" passHref>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Register Your NGO <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/ngo-subscription" passHref>
                  <Button size="lg" variant="outline">
                    Subscription Plans
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center lg:justify-end">
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="NGO using Serve To Save India platform"
                className="rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">NGO Benefits</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How We Help NGOs</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform provides everything your organization needs to receive and distribute food efficiently.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader className="pb-2">
                <Heart className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Verified Food Sources</CardTitle>
                <CardDescription>
                  All food donations on our platform undergo a verification process for safety and quality.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex flex-col">
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Community Visibility</CardTitle>
                <CardDescription>
                  Get seen by donors in your area and build lasting relationships with regular contributors.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex flex-col">
              <CardHeader className="pb-2">
                <BarChart className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Impact Reporting</CardTitle>
                <CardDescription>
                  Track and showcase the impact of food received to supporters and stakeholders.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Verification Badge Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 w-fit">
                Get Verified
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">NGO Verification Program</h2>
              <p className="text-muted-foreground">
                Our verification process builds trust between donors and recipients. Verified NGOs receive priority
                matching and enhanced visibility.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Enhanced trust for potential donors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Priority matching algorithm placement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Verified badge on your profile and listings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Access to premium donations and regular donors</span>
                </li>
              </ul>
              <div>
                <Link href="/verification" passHref>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Apply for Verification <BadgeCheck className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <div className="absolute -top-6 -right-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 border-4 border-white">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="pt-8 pb-4 text-center">
                  <Badge className="h-24 w-24 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Verified NGO Badge</h3>
                  <p className="text-muted-foreground mb-4">
                    Display this badge on your profile to show donors you're a trusted partner.
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="text-sm font-medium text-green-800 mb-1">Level 1 Verification</h4>
                      <p className="text-xs text-muted-foreground">Basic documentation and registration verification</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="text-sm font-medium text-green-800 mb-1">Level 2 Verification</h4>
                      <p className="text-xs text-muted-foreground">Site visit and operational verification</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="text-sm font-medium text-green-800 mb-1">Level 3 Verification</h4>
                      <p className="text-xs text-muted-foreground">Full audit and premium verification status</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Subscription Plans
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
                <CardDescription>For small NGOs and shelters</CardDescription>
                <div className="mt-2 text-4xl font-bold">
                  ₹0<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="grid gap-3 pt-0">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Basic donation request forms</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Location-based matching</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Standard notification system</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
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
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>All basic features</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Priority matching algorithm</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Detailed analytics dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Premium verified NGO badge</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Free pickup service (5 per month)</span>
                </div>
                <Button className="mt-4 bg-green-600 hover:bg-green-700">Upgrade Now</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="flex flex-col">
              <CardHeader className="flex flex-col space-y-1.5 pb-4">
                <CardTitle className="text-2xl font-bold">Network</CardTitle>
                <CardDescription>For large NGO networks</CardDescription>
                <div className="mt-2 text-4xl font-bold">
                  Custom<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="grid gap-3 pt-0">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>All Pro features</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Multi-location management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Custom API integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Advanced impact reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
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

      {/* Impact Data Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 w-fit">
                Impact Data
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Track & Report Your Impact</h2>
              <p className="text-muted-foreground">
                Our platform provides comprehensive data on the impact of food donations received and distributed by
                your organization.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Real-time tracking of food received and distributed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Visual reports for stakeholders and funders</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Export data for grant applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Environmental impact metrics (CO2 saved)</span>
                </li>
              </ul>
              <div>
                <Link href="/impact-reporting" passHref>
                  <Button className="bg-green-600 hover:bg-green-700">View Demo Report</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Impact dashboard"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Hear From Our NGO Partners
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                NGOs across India are making a bigger impact with our platform.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    width={60}
                    height={60}
                    alt="Hope Foundation"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Hope Foundation</h3>
                    <p className="text-sm text-muted-foreground">Mumbai</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Before joining Serve To Save, we would spend hours searching for food donations. Now, we receive
                  regular matching with nearby donors, and the verified badge has significantly increased donor trust in
                  our organization."
                </p>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    width={60}
                    height={60}
                    alt="Food For All"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Food For All</h3>
                    <p className="text-sm text-muted-foreground">Delhi</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "The Pro subscription has been a game-changer for our shelter. We're now able to feed 40% more people
                  with the same resources, and the logistics support has removed a major operational headache."
                </p>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    width={60}
                    height={60}
                    alt="Child Care Trust"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Child Care Trust</h3>
                    <p className="text-sm text-muted-foreground">Bangalore</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "The impact reports generated by the platform have been instrumental in securing additional grants.
                  Donors love the transparency, and we love the streamlined operations."
                </p>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                </div>
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
              <h2 className="text-3xl font-bold tracking-tighter">Join Our NGO Network Today</h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                Get access to regular food donations, logistics support, and tools to measure your impact.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup?type=ngo" passHref>
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Register Now
                </Button>
              </Link>
              <Link href="/contact" passHref>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
