import { Clock, Heart, MapPin, MessageSquare, Search, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"

export default function RequestPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Request Food</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Access Food Resources for Your Community
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                NGOs, shelters, and community kitchens can request food donations through our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">Request Food Donations</h2>
                <p className="mt-2 text-muted-foreground">
                  Let us know about your food needs. We'll match you with available donations in your area.
                </p>
              </div>

              <Tabs defaultValue="ngo" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="ngo">For NGOs & Shelters</TabsTrigger>
                  <TabsTrigger value="community">For Community Kitchens</TabsTrigger>
                </TabsList>

                <TabsContent value="ngo" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization Name</Label>
                    <Input id="organization" placeholder="Enter your NGO or shelter name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registration">Registration Number</Label>
                    <Input id="registration" placeholder="NGO registration number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-person">Contact Person</Label>
                    <Input id="contact-person" placeholder="Full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="contact@organization.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Delivery Address</Label>
                    <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                      <MapPin className="ml-2 h-5 w-5 text-muted-foreground" />
                      <Input id="address" placeholder="Full address" className="border-0 focus-visible:ring-0" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="food-type">Food Type Needed</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select food type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cooked">Cooked Food</SelectItem>
                        <SelectItem value="raw">Raw Ingredients</SelectItem>
                        <SelectItem value="packaged">Packaged Food</SelectItem>
                        <SelectItem value="any">Any Type</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity (serves how many people)</Label>
                    <Input id="quantity" type="number" placeholder="e.g. 50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High (Needed within 24 hours)</SelectItem>
                        <SelectItem value="medium">Medium (Needed within 3 days)</SelectItem>
                        <SelectItem value="low">Low (Needed within a week)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <div className="flex items-start border rounded-md focus-within:ring-1 focus-within:ring-ring">
                      <MessageSquare className="mt-2 ml-2 h-5 w-5 text-muted-foreground" />
                      <Textarea
                        id="notes"
                        placeholder="Any specific requirements or information"
                        className="border-0 focus-visible:ring-0 min-h-[100px]"
                      />
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-green-600 hover:bg-green-700">Submit Request</Button>
                  </div>
                  <p className="text-sm text-muted-foreground text-center pt-2">
                    Not registered yet?{" "}
                    <Link href="/signup?type=ngo" className="text-green-600 hover:underline">
                      Register your NGO
                    </Link>{" "}
                    to access premium features.
                  </p>
                </TabsContent>

                <TabsContent value="community" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="community-name">Community Kitchen Name</Label>
                    <Input id="community-name" placeholder="Enter your community kitchen name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="community-type">Type of Community Kitchen</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="religious">Religious Institution</SelectItem>
                        <SelectItem value="community">Community Center</SelectItem>
                        <SelectItem value="school">School/Educational Institution</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="community-contact">Contact Person</Label>
                    <Input id="community-contact" placeholder="Full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="community-email">Email</Label>
                    <Input id="community-email" type="email" placeholder="contact@community.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="community-phone">Phone Number</Label>
                    <Input id="community-phone" type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="community-address">Delivery Address</Label>
                    <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                      <MapPin className="ml-2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="community-address"
                        placeholder="Full address"
                        className="border-0 focus-visible:ring-0"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="community-food-type">Food Type Needed</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select food type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cooked">Cooked Food</SelectItem>
                        <SelectItem value="raw">Raw Ingredients</SelectItem>
                        <SelectItem value="packaged">Packaged Food</SelectItem>
                        <SelectItem value="any">Any Type</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="community-quantity">Quantity (serves how many people)</Label>
                    <Input id="community-quantity" type="number" placeholder="e.g. 100" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="community-frequency">Request Frequency</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one-time">One-time Request</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="community-notes">Additional Notes</Label>
                    <Textarea
                      id="community-notes"
                      placeholder="Any specific requirements or information"
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-green-600 hover:bg-green-700">Submit Request</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Verified NGO Benefits</CardTitle>
                  <CardDescription>Get priority access to food donations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Heart className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <span className="font-medium">Priority Matching</span>
                      <p className="text-sm text-muted-foreground">Get matched with donors faster</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Clock className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <span className="font-medium">Regular Scheduling</span>
                      <p className="text-sm text-muted-foreground">Set up recurring food requests</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Users className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <span className="font-medium">Donor Network</span>
                      <p className="text-sm text-muted-foreground">Connect with regular donors</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link href="/for-ngos" passHref>
                      <Button variant="outline" className="w-full">
                        Learn More About Verification
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Find Available Donations</CardTitle>
                  <CardDescription>Search for food donations in your area</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                    <Search className="ml-2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Enter your location" className="border-0 focus-visible:ring-0" />
                  </div>
                  <div className="space-y-2">
                    <Label>Distance</Label>
                    <Select defaultValue="10">
                      <SelectTrigger>
                        <SelectValue placeholder="Select distance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">Within 5 km</SelectItem>
                        <SelectItem value="10">Within 10 km</SelectItem>
                        <SelectItem value="15">Within 15 km</SelectItem>
                        <SelectItem value="20">Within 20 km</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">Search Donations</Button>
                  <div className="pt-2 text-center">
                    <Link href="/map" className="text-sm text-green-600 hover:underline">
                      View Food Donation Map
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Success Story</h3>
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    width={60}
                    height={60}
                    alt="Hope Foundation"
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">Hope Foundation</h4>
                    <p className="text-sm text-muted-foreground">Delhi</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "We've been able to feed 200 children daily through the regular food donations we receive through this
                  platform. The verification process has helped us build trust with donors and receive consistent
                  support."
                </p>
                <div className="text-sm text-green-600">Serving 200+ people daily</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-12 md:py-16 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Need Regular Food Support?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                Register your organization to access premium features and regular food donations.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup?type=ngo" passHref>
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Register Now
                </Button>
              </Link>
              <Link href="/for-ngos" passHref>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
                  Learn About Pro Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
