import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart, Building, DollarSign, LineChart, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ForCorporatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Corporate Solutions
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful CSR Solutions for Forward-Thinking Companies
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Transform your corporate social responsibility initiatives with our comprehensive food redistribution
                platform and impact tracking tools.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact?type=corporate" passHref>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#solutions" passHref>
                  <Button size="lg" variant="outline">
                    Explore Solutions
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center lg:justify-end">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Corporate CSR dashboard"
                className="rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Our Solutions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comprehensive Corporate Offerings
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tailored solutions to meet your company's social impact goals
              </p>
            </div>
          </div>

          <Tabs defaultValue="csr" className="mt-12">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="csr" aria-label="CSR Programs Tab">CSR Programs</TabsTrigger>
              <TabsTrigger value="cafeteria" aria-label="Corporate Cafeterias Tab">Corporate Cafeterias</TabsTrigger>
              <TabsTrigger value="employee" aria-label="Employee Engagement Tab">Employee Engagement</TabsTrigger>
              <TabsTrigger value="white-label" aria-label="White Label Solutions Tab">White Label Solutions</TabsTrigger>
            </TabsList>

            {/* CSR Programs Tab */}
            <TabsContent value="csr" className="pt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-2">
                    <Building className="h-6 w-6 text-green-600" />
                    <h3 className="text-2xl font-bold">Corporate Social Responsibility</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our platform provides a turnkey solution for companies looking to make a meaningful impact on food
                    security and sustainability as part of their CSR initiatives.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <DollarSign className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Sponsored Programs</span>
                        <p className="text-sm text-muted-foreground">
                          Fund specific food security initiatives in communities of your choice
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Community Impact</span>
                        <p className="text-sm text-muted-foreground">
                          Create lasting positive change in the communities where you operate
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <BarChart className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Impact Measurement</span>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive reporting on social and environmental outcomes
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Shield className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Brand Association</span>
                        <p className="text-sm text-muted-foreground">
                          Enhance your brand reputation through visible social impact
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div>
                    <Link href="/csr-programs" passHref>
                      <Button className="bg-green-600 hover:bg-green-700">Learn More About CSR Programs</Button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Card className="w-full max-w-md">
                    <CardHeader>
                      <CardTitle>CSR Impact Dashboard</CardTitle>
                      <CardDescription>Track and showcase your company's contribution</CardDescription>
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
                        <div className="text-sm text-muted-foreground">Program Options</div>
                        <div className="space-y-2">
                          <div className="p-3 bg-green-50 rounded-lg">
                            <h4 className="text-sm font-medium">Sponsored Community Kitchen</h4>
                            <p className="text-xs text-muted-foreground">
                              Fund a community kitchen in your target location
                            </p>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg">
                            <h4 className="text-sm font-medium">Food Security Initiative</h4>
                            <p className="text-xs text-muted-foreground">
                              Support food security efforts in underserved communities
                            </p>
                          </div>
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
    </div>
  );
}
