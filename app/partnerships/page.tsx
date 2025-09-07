import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  BarChart,
  Building,
  Clock,
  DollarSign,
  Globe,
  HandHeart,
  Laptop,
  LineChart,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PartnershipsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Partner With Us
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Strategic Partnerships to End Hunger Together
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join forces with Serve To Save India to make a significant impact on food waste and hunger through
                technology-enabled solutions.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact?type=partnership" passHref>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#partnership-options" passHref>
                  <Button size="lg" variant="outline">
                    Explore Options
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center lg:justify-end">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Strategic partnership illustration"
                className="rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-options" className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Partnership Options
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Choose Your Partnership Path
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From corporate social responsibility to logistics providers, we offer multiple ways to collaborate.
              </p>
            </div>
          </div>

          <Tabs defaultValue="csr" className="mt-12">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="csr">CSR Partners</TabsTrigger>
              <TabsTrigger value="logistics">Logistics Partners</TabsTrigger>
              <TabsTrigger value="technology">Technology Partners</TabsTrigger>
              <TabsTrigger value="government">Government & Grants</TabsTrigger>
            </TabsList>

            {/* CSR Partners Tab */}
            <TabsContent value="csr" className="pt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-2">
                    <Building className="h-6 w-6 text-green-600" />
                    <h3 className="text-2xl font-bold">Corporate Social Responsibility</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Partner with us to fulfill your CSR objectives related to food security, waste reduction, and
                    community support.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <DollarSign className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Sponsored Initiatives</span>
                        <p className="text-sm text-muted-foreground">
                          Fund specific programs or regions to address food insecurity
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Employee Engagement</span>
                        <p className="text-sm text-muted-foreground">
                          Involve your team in meaningful volunteer opportunities
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <BarChart className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Impact Dashboard</span>
                        <p className="text-sm text-muted-foreground">
                          Track and showcase the difference your company is making
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <ShieldCheck className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Brand Association</span>
                        <p className="text-sm text-muted-foreground">
                          Align your brand with a trusted social impact platform
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div>
                    <Link href="/csr-partnerships" passHref>
                      <Button className="bg-green-600 hover:bg-green-700">CSR Partnership Details</Button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Card className="w-full max-w-md">
                    <CardHeader>
                      <CardTitle>CSR Impact Showcase</CardTitle>
                      <CardDescription>A sample of what your company's dashboard would look like</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">Your Impact</div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-green-50 rounded-lg text-center">
                            <div className="text-3xl font-bold text-green-700">10,450</div>
                            <div className="text-sm">Meals Provided</div>
                          </div>
                          <div className="p-4 bg-green-50 rounded-lg text-center">
                            <div className="text-3xl font-bold text-green-700">4,200</div>
                            <div className="text-sm">KG CO₂ Saved</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">Communities Reached</div>
                        <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center">
                          <LineChart className="h-6 w-6 text-muted-foreground" />
                          <span className="ml-2 text-sm text-muted-foreground">Interactive Map Visualization</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">Recognition</div>
                        <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-lg">
                          <Trophy className="h-5 w-5 text-amber-600" />
                          <div className="text-sm">
                            <span className="font-medium">Gold Impact Partner</span>
                            <p className="text-xs text-muted-foreground">Top 5% of corporate contributors</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Logistics Partners Tab */}
            <TabsContent value="logistics" className="pt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-green-600" />
                    <h3 className="text-2xl font-bold">Logistics & Transportation Partners</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Help us bridge the gap between food donors and recipients with efficient transportation solutions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Clock className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Fleet Integration</span>
                        <p className="text-sm text-muted-foreground">
                          Connect your delivery fleet to our platform for efficient pickup and delivery
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Globe className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Route Optimization</span>
                        <p className="text-sm text-muted-foreground">
                          Our AI system optimizes routes to minimize time and fuel usage
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <DollarSign className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Service Fee Revenue</span>
                        <p className="text-sm text-muted-foreground">
                          Generate additional revenue through our logistics marketplace
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <HandHeart className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Social Impact</span>
                        <p className="text-sm text-muted-foreground">
                          Contribute to social welfare while growing your business
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div>
                    <Link href="/logistics-partnerships" passHref>
                      <Button className="bg-green-600 hover:bg-green-700">Logistics Partnership Details</Button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Card className="w-full max-w-md">
                    <CardHeader>
                      <CardTitle>Logistics Partnership Benefits</CardTitle>
                      <CardDescription>Join our network of transportation providers</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium mb-1">Commission Structure</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Standard Pickup:</span>
                              <span className="font-medium">₹200 per trip</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Express Pickup:</span>
                              <span className="font-medium">₹350 per trip</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Bulk Transport:</span>
                              <span className="font-medium">Custom pricing</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium mb-1">Technology Integration</h4>
                          <p className="text-sm text-muted-foreground">
                            Our API connects with your existing delivery management system for seamless operations.
                          </p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium mb-1">Service Areas</h4>
                          <div className="text-sm text-muted-foreground">
                            <div>Currently accepting partners in:</div>
                            <div className="grid grid-cols-2 gap-1 mt-1">
                              <div>• Mumbai</div>
                              <div>• Delhi NCR</div>
                              <div>• Bangalore</div>
                              <div>• Chennai</div>
                              <div>• Hyderabad</div>
                              <div>• Kolkata</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Technology Partners Tab */}
            <TabsContent value="technology" className="pt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-2">
                    <Laptop className="h-6 w-6 text-green-600" />
                    <h3 className="text-2xl font-bold">Technology & Integration Partners</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Collaborate with us to enhance our platform's capabilities or integrate our services into your
                    solutions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Globe className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">API Integration</span>
                        <p className="text-sm text-muted-foreground">
                          Connect your systems with our platform through our robust API
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Laptop className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">White Label Solutions</span>
                        <p className="text-sm text-muted-foreground">
                          License our technology for your own branded offering
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <LineChart className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Data Insights</span>
                        <p className="text-sm text-muted-foreground">
                          Access anonymized data for research and innovation
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Joint Development</span>
                        <p className="text-sm text-muted-foreground">
                          Collaborate on innovative solutions for food security
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div>
                    <Link href="/technology-partnerships" passHref>
                      <Button className="bg-green-600 hover:bg-green-700">Technology Partnership Details</Button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Card className="w-full max-w-md">
                    <CardHeader>
                      <CardTitle>White Label Platform</CardTitle>
                      <CardDescription>License our technology for your own branded solution</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <h4 className="font-medium">Licensing Options</h4>
                        <div className="grid gap-3">
                          <div className="p-4 border rounded-lg">
                            <div className="font-medium mb-1">Basic License</div>
                            <div className="text-sm text-muted-foreground mb-2">
                              Core food donation platform with your branding
                            </div>
                            <div className="text-lg font-bold">
                              ₹75,000<span className="text-sm font-normal text-muted-foreground">/month</span>
                            </div>
                          </div>
                          <div className="p-4 border rounded-lg border-green-200 bg-green-50">
                            <div className="font-medium mb-1">Enterprise License</div>
                            <div className="text-sm text-muted-foreground mb-2">
                              Full platform with custom integrations & support
                            </div>
                            <div className="text-lg font-bold">
                              ₹2,50,000<span className="text-sm font-normal text-muted-foreground">/month</span>
                            </div>
                          </div>
                          <div className="p-4 border rounded-lg">
                            <div className="font-medium mb-1">API Access</div>
                            <div className="text-sm text-muted-foreground mb-2">
                              Integration with your existing systems
                            </div>
                            <div className="text-lg font-bold">
                              Custom<span className="text-sm font-normal text-muted-foreground"> pricing</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Government & Grants Tab */}
            <TabsContent value="government" className="pt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-2">
                    <Building className="h-6 w-6 text-green-600" />
                    <h3 className="text-2xl font-bold">Government & Grant Partnerships</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Collaborate with government bodies, foundations, and grant-making organizations to scale our impact.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Building className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Public-Private Partnerships</span>
                        <p className="text-sm text-muted-foreground">
                          Joint initiatives with government food security programs
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <DollarSign className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Grant Funding</span>
                        <p className="text-sm text-muted-foreground">Support specific programs or platform expansion</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Globe className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">SDG Alignment</span>
                        <p className="text-sm text-muted-foreground">
                          Contribute to Sustainable Development Goal #2: Zero Hunger
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <BarChart className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Data & Research</span>
                        <p className="text-sm text-muted-foreground">
                          Access to food insecurity data for policy planning
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div>
                    <Link href="/government-partnerships" passHref>
                      <Button className="bg-green-600 hover:bg-green-700">Government Partnership Details</Button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Card className="w-full max-w-md">
                    <CardHeader>
                      <CardTitle>Grant & Funding Opportunities</CardTitle>
                      <CardDescription>Support specific initiatives and measure impact</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium mb-1">Current Funding Needs</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex justify-between">
                              <span>Platform Expansion to Tier 2 Cities:</span>
                              <span className="font-medium">₹50 Lakhs</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Food Safety Technology Integration:</span>
                              <span className="font-medium">₹25 Lakhs</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Rural Distribution Network:</span>
                              <span className="font-medium">₹75 Lakhs</span>
                            </li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium mb-1">Program Outcomes</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Detailed impact measurement and reporting</li>
                            <li>• Regular milestone updates</li>
                            <li>• Transparent fund utilization</li>
                            <li>• Recognition in all program materials</li>
                            <li>• Joint press releases and media opportunities</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium mb-1">Eligibility</h4>
                          <p className="text-sm text-muted-foreground">
                            We welcome partnerships with government bodies, foundations, CSR initiatives, and
                            international aid organizations.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Partnership Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Real Impact Through Collaboration
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how our partners are helping transform food security across India.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    width={60}
                    height={60}
                    alt="Tata Consultancy Services"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Tata Consultancy Services</h3>
                    <p className="text-sm text-muted-foreground">CSR Partner</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Our partnership with Serve To Save has enabled us to distribute over 100,000 meals in the past year
                  across 5 cities. The detailed impact reports have been instrumental in showcasing our CSR initiatives
                  to stakeholders."
                </p>
                <div className="text-sm text-green-600">100,000+ meals • 5 cities • 12 months</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    width={60}
                    height={60}
                    alt="Porter Logistics"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Porter Logistics</h3>
                    <p className="text-sm text-muted-foreground">Logistics Partner</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Integrating with Serve To Save has created a new revenue stream for our drivers while contributing to
                  a social cause. The route optimization has made pickups efficient and cost-effective."
                </p>
                <div className="text-sm text-green-600">2,500+ deliveries • 3 cities • Additional revenue stream</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    width={60}
                    height={60}
                    alt="Ministry of Food Processing"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Ministry of Food Processing</h3>
                    <p className="text-sm text-muted-foreground">Government Partner</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "The data insights provided by Serve To Save have informed our policy decisions on food security. The
                  public-private partnership model has proven effective in reaching vulnerable communities."
                </p>
                <div className="text-sm text-green-600">National program • Policy impact • Data-driven decisions</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-12 md:py-16 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Make an Impact?</h2>
              <p className="text-lg">
                Join our growing network of partners working together to end hunger and reduce food waste across India.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-2">
                <Link href="/contact?type=partnership" passHref>
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                    Start Partnership Conversation
                  </Button>
                </Link>
                <Link href="/partnership-brochure" passHref>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
                    Download Info Pack
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-500 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm">Active Partners</div>
                </div>
                <div className="bg-green-500 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm">Cities Covered</div>
                </div>
                <div className="bg-green-500 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold">1M+</div>
                  <div className="text-sm">Meals Distributed</div>
                </div>
                <div className="bg-green-500 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold">₹5Cr+</div>
                  <div className="text-sm">Partner Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
