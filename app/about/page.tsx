import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, BarChart, Clock, Globe, Heart, Leaf, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Our Story</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Bridging the Gap Between Food Waste and Hunger
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Serve To Save India was founded with a simple mission: to create a technology-driven solution that
                connects surplus food with those who need it most.
              </p>
            </div>
            <div className="mx-auto flex w-full items-center justify-center lg:justify-end">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Serve To Save India team"
                className="rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <Card>
              <CardHeader>
                <Leaf className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To create a sustainable food ecosystem that eliminates food waste and hunger through technology,
                  community engagement, and strategic partnerships. We aim to redistribute surplus food efficiently and
                  safely to those who need it most.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A future where no edible food goes to waste and no person goes hungry. We envision a connected network
                  of food donors, recipients, and volunteers working together to create food security across India.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Our Journey</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How We Started</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From a simple idea to a nationwide movement
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <span className="text-xl font-bold text-green-600">2020</span>
                </div>
                <div className="absolute h-full w-0.5 bg-green-200 left-1/2 top-16 -translate-x-1/2 hidden md:block"></div>
              </div>
              <h3 className="text-lg font-bold">The Idea</h3>
              <p className="text-sm text-muted-foreground">
                Founded during the pandemic when food insecurity reached critical levels while food waste continued.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <span className="text-xl font-bold text-green-600">2021</span>
                </div>
                <div className="absolute h-full w-0.5 bg-green-200 left-1/2 top-16 -translate-x-1/2 hidden md:block"></div>
              </div>
              <h3 className="text-lg font-bold">First Platform</h3>
              <p className="text-sm text-muted-foreground">
                Launched our first digital platform connecting restaurants with local shelters in Mumbai.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <span className="text-xl font-bold text-green-600">2022</span>
                </div>
                <div className="absolute h-full w-0.5 bg-green-200 left-1/2 top-16 -translate-x-1/2 hidden md:block"></div>
              </div>
              <h3 className="text-lg font-bold">Expansion</h3>
              <p className="text-sm text-muted-foreground">
                Expanded to 5 major cities with AI-powered matching and logistics partnerships.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <span className="text-xl font-bold text-green-600">2023</span>
                </div>
              </div>
              <h3 className="text-lg font-bold">Today</h3>
              <p className="text-sm text-muted-foreground">
                Now operating in 12 cities with over 1 million meals redistributed and 500+ NGO partners.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
              What started as a simple idea during the COVID-19 pandemic has grown into a nationwide movement. Our
              founders witnessed both extreme food waste and hunger simultaneously and created a technology solution to
              bridge this gap.
            </p>
            <Link href="/impact" passHref>
              <Button className="bg-green-600 hover:bg-green-700">
                See Our Impact <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Changemakers</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The passionate team behind Serve To Save India
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Vaibhav J P"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Vaibhav J P</h3>
              <p className="text-sm text-green-600 mb-2">Lead Developer</p>
              <p className="text-sm text-muted-foreground">
                Student at Siddaganga Institute of Technology with expertise in AI and web development.
              </p>
              <p className="text-xs text-gray-500 mt-1">1SI23IS117</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Kritika"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Kritika</h3>
              <p className="text-sm text-green-600 mb-2">UI/UX Designer</p>
              <p className="text-sm text-muted-foreground">
                Creative designer with a passion for creating intuitive and accessible user experiences.
              </p>
              <p className="text-xs text-gray-500 mt-1">1SI23CI065</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Monisha"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Monisha</h3>
              <p className="text-sm text-green-600 mb-2">Backend Developer</p>
              <p className="text-sm text-muted-foreground">
                Skilled in database management and API development for seamless data flow.
              </p>
              <p className="text-xs text-gray-500 mt-1">1SI23CI029</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Tarun S Muragodnavar"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Tarun S Muragodnavar</h3>
              <p className="text-sm text-green-600 mb-2">AI Integration Specialist</p>
              <p className="text-sm text-muted-foreground">
                Expert in machine learning algorithms and AI-powered matching systems.
              </p>
              <p className="text-xs text-gray-500 mt-1">1SI23IS114</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
              Our team combines expertise in food systems, technology, logistics, and social impact. We're united by a
              common mission to create sustainable solutions to food waste and hunger.
            </p>
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-4">
              Team RestOfUs | Team ID: 67f205cc79aeb04077219328
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Drives Us</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The core principles that guide our work
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="text-center">
                <Heart className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle>Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  We believe that access to food is a basic human right. Our work is driven by compassion for those
                  experiencing food insecurity and a desire to create meaningful change.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  We operate with transparency and accountability in all our actions. We're committed to building trust
                  with our partners, donors, and the communities we serve.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  We believe in the power of partnerships. By bringing together diverse stakeholders, we create
                  sustainable solutions that have greater impact than any single organization could achieve alone.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle>Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  We leverage technology to create efficient systems that maximize impact. Our AI-powered matching
                  algorithm ensures food reaches those who need it most, when they need it.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <BarChart className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle>Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  We measure our success by our impact on communities. We're committed to tracking and reporting our
                  outcomes transparently to continuously improve our effectiveness.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  We continuously seek new and better ways to address food waste and hunger. We embrace creativity and
                  are not afraid to challenge conventional approaches.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">The Problem</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Addressing a Critical Gap</h2>
              <p className="text-muted-foreground">
                In India, approximately 68 million tonnes of food is wasted annually, while 190 million people go
                hungry. This stark contrast represents a critical gap in our food distribution system.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <Leaf className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">Massive Food Waste</span>
                    <p className="text-sm text-muted-foreground">
                      Restaurants, events, and households discard edible food that could feed millions
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <Users className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">Widespread Hunger</span>
                    <p className="text-sm text-muted-foreground">
                      Millions of people lack access to nutritious food despite the abundance of surplus
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <Heart className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">Coordination Challenges</span>
                    <p className="text-sm text-muted-foreground">
                      No centralized system to connect food donors with recipients efficiently
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <Globe className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">Environmental Impact</span>
                    <p className="text-sm text-muted-foreground">
                      Food waste contributes significantly to greenhouse gas emissions and resource depletion
                    </p>
                  </div>
                </li>
              </ul>
              <div className="pt-4">
                <p className="text-muted-foreground">
                  Our platform addresses these challenges by creating a smart ecosystem that connects donors with
                  recipients, optimizes logistics, and builds trust through verification.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                width={600}
                height={500}
                alt="Food waste and hunger problem visualization"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Our Technology
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Smart Solutions for Food Redistribution
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Leveraging cutting-edge technology to connect donors with recipients
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="text-center">
                <svg
                  className="h-8 w-8 text-green-600 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <CardTitle>React & Node.js</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Our platform is built with React for a component-based frontend and Node.js with Express for robust
                  backend APIs, file handling, authentication, and database connections.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <svg
                  className="h-8 w-8 text-green-600 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
                <CardTitle>MongoDB & Mongoose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  We use MongoDB with Mongoose for efficient storage and management of donation and request data,
                  ensuring scalability and flexibility as our platform grows.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <svg
                  className="h-8 w-8 text-green-600 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <CardTitle>Google Maps API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Our integration with Google Maps API provides real-time visualization of donation and request
                  locations, making it easy to identify nearby opportunities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <svg
                  className="h-8 w-8 text-green-600 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <CardTitle>AI-Powered Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  We leverage OpenAI API and TensorFlow.js for smart suggestions, route planning, and anomaly detection,
                  ensuring optimal matching of donors and recipients.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <svg
                  className="h-8 w-8 text-green-600 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
                <CardTitle>Tailwind CSS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Our user interface is built with Tailwind CSS, a utility-first CSS framework that allows us to create
                  a responsive, accessible, and visually appealing design.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <svg
                  className="h-8 w-8 text-green-600 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <CardTitle>Secure Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  We implement robust authentication and verification processes to ensure the security and
                  trustworthiness of all platform participants.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Our Impact</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Making a Difference</h2>
              <p className="text-muted-foreground">
                Since our founding, we've made significant progress in addressing food waste and hunger across India.
                Here's a snapshot of our impact:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <Leaf className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">1,000,000+ Meals Redistributed</span>
                    <p className="text-sm text-muted-foreground">
                      Nutritious meals that would have gone to waste have reached those in need
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <Users className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">10,000+ Active Donors</span>
                    <p className="text-sm text-muted-foreground">
                      Restaurants, hotels, event venues, and individuals regularly contributing
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <Heart className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">500+ NGO Partners</span>
                    <p className="text-sm text-muted-foreground">
                      Verified organizations distributing food to communities in need
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <Globe className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">12 Cities and Growing</span>
                    <p className="text-sm text-muted-foreground">
                      Expanding our reach to address food insecurity nationwide
                    </p>
                  </div>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/impact" passHref>
                  <Button className="bg-green-600 hover:bg-green-700">
                    View Detailed Impact Report <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                width={600}
                height={500}
                alt="Impact visualization"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-12 md:py-16 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Join Our Mission</h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
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
              <Link href="/contact" passHref>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
