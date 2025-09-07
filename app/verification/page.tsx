import Link from "next/link"
import { ArrowRight, BadgeCheck, CheckCircle, FileCheck, Shield, Upload, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function VerificationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Verification</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Building Trust Through Verification
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Our verification process ensures the legitimacy and reliability of all participants on our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Our Process</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Verification Process</h2>
              <p className="max-w-[900px] text-muted-foreground">
                We've developed a thorough verification system to ensure the safety and reliability of our platform
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-3 md:gap-12">
            <div className="grid gap-2 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <FileCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Document Verification</h3>
              <p className="text-muted-foreground">
                We verify official registration documents, licenses, and identification to confirm legitimacy.
              </p>
            </div>
            <div className="grid gap-2 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Background Check</h3>
              <p className="text-muted-foreground">
                We conduct thorough background checks on organizations and review their operational history.
              </p>
            </div>
            <div className="grid gap-2 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <BadgeCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Verification Badge</h3>
              <p className="text-muted-foreground">
                Verified participants receive a badge on their profile, indicating they've passed our checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Levels */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Verification Levels
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Verification Tiers</h2>
              <p className="max-w-[900px] text-muted-foreground">
                We offer different levels of verification to accommodate various types of participants
              </p>
            </div>
          </div>

          <Tabs defaultValue="ngo" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="ngo">NGOs & Charities</TabsTrigger>
              <TabsTrigger value="restaurant">Restaurants & Food Businesses</TabsTrigger>
              <TabsTrigger value="individual">Individual Donors</TabsTrigger>
            </TabsList>

            <TabsContent value="ngo" className="pt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader className="text-center pb-2">
                    <Badge className="mb-2 bg-gray-200 text-gray-800 hover:bg-gray-200 mx-auto">Level 1</Badge>
                    <CardTitle>Basic Verification</CardTitle>
                    <CardDescription>Initial verification step</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>NGO registration certificate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Email and phone verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Basic profile information</span>
                      </li>
                    </ul>
                    <div className="pt-4 text-center">
                      <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-200">
                        <Shield className="h-3 w-3 mr-1" /> Basic Verified
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Free
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-green-600 shadow-md">
                  <CardHeader className="text-center pb-2 bg-green-50 rounded-t-lg">
                    <Badge className="mb-2 bg-green-600 hover:bg-green-600 mx-auto">Level 2</Badge>
                    <CardTitle>Pro Verification</CardTitle>
                    <CardDescription>Enhanced verification</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>All Basic verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Physical address verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Tax exemption documents</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Board member verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Priority in matching algorithm</span>
                      </li>
                    </ul>
                    <div className="pt-4 text-center">
                      <Badge className="bg-green-600 hover:bg-green-600">
                        <Shield className="h-3 w-3 mr-1" /> Pro Verified
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-green-600 hover:bg-green-700">₹1,999/year</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="text-center pb-2">
                    <Badge className="mb-2 bg-blue-600 hover:bg-blue-600 mx-auto">Level 3</Badge>
                    <CardTitle>Premium Verification</CardTitle>
                    <CardDescription>Highest level of verification</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>All Pro verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>On-site inspection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Financial audit review</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Beneficiary feedback collection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Top priority in matching algorithm</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Featured on platform homepage</span>
                      </li>
                    </ul>
                    <div className="pt-4 text-center">
                      <Badge className="bg-blue-600 hover:bg-blue-600">
                        <Shield className="h-3 w-3 mr-1" /> Premium Verified
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      ₹4,999/year
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="restaurant" className="pt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader className="text-center pb-2">
                    <Badge className="mb-2 bg-gray-200 text-gray-800 hover:bg-gray-200 mx-auto">Level 1</Badge>
                    <CardTitle>Basic Verification</CardTitle>
                    <CardDescription>Initial verification step</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Business registration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Email and phone verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Basic profile information</span>
                      </li>
                    </ul>
                    <div className="pt-4 text-center">
                      <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-200">
                        <Shield className="h-3 w-3 mr-1" /> Basic Verified
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Free
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-green-600 shadow-md">
                  <CardHeader className="text-center pb-2 bg-green-50 rounded-t-lg">
                    <Badge className="mb-2 bg-green-600 hover:bg-green-600 mx-auto">Level 2</Badge>
                    <CardTitle>Pro Verification</CardTitle>
                    <CardDescription>Enhanced verification</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>All Basic verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Food safety certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Health department rating</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Featured restaurant badge</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Priority in donor listings</span>
                      </li>
                    </ul>
                    <div className="pt-4 text-center">
                      <Badge className="bg-green-600 hover:bg-green-600">
                        <Shield className="h-3 w-3 mr-1" /> Pro Verified
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-green-600 hover:bg-green-700">₹1,999/year</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="text-center pb-2">
                    <Badge className="mb-2 bg-blue-600 hover:bg-blue-600 mx-auto">Level 3</Badge>
                    <CardTitle>Premium Verification</CardTitle>
                    <CardDescription>Highest level of verification</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>All Pro verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Kitchen inspection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Staff food safety training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Sustainability practices review</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Featured on platform homepage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Dedicated account manager</span>
                      </li>
                    </ul>
                    <div className="pt-4 text-center">
                      <Badge className="bg-blue-600 hover:bg-blue-600">
                        <Shield className="h-3 w-3 mr-1" /> Premium Verified
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      ₹4,999/year
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="individual" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 md:mx-auto md:max-w-3xl">
                <Card>
                  <CardHeader className="text-center pb-2">
                    <Badge className="mb-2 bg-gray-200 text-gray-800 hover:bg-gray-200 mx-auto">Level 1</Badge>
                    <CardTitle>Basic Verification</CardTitle>
                    <CardDescription>Standard verification for individuals</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Email verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Phone verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Basic profile information</span>
                      </li>
                    </ul>
                    <div className="pt-4 text-center">
                      <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-200">
                        <Shield className="h-3 w-3 mr-1" /> Basic Verified
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Free
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-green-600 shadow-md">
                  <CardHeader className="text-center pb-2 bg-green-50 rounded-t-lg">
                    <Badge className="mb-2 bg-green-600 hover:bg-green-600 mx-auto">Level 2</Badge>
                    <CardTitle>Pro Verification</CardTitle>
                    <CardDescription>Enhanced verification for individuals</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>All Basic verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>ID verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Address verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Trusted donor badge</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Priority in donor listings</span>
                      </li>
                    </ul>
                    <div className="pt-4 text-center">
                      <Badge className="bg-green-600 hover:bg-green-600">
                        <Shield className="h-3 w-3 mr-1" /> Pro Verified
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-green-600 hover:bg-green-700">₹499/year</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Verification Process Steps */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">How It Works</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Verification Process Steps</h2>
              <p className="max-w-[900px] text-muted-foreground">
                Follow these simple steps to get verified on our platform
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-4 md:gap-12">
            <div className="grid gap-2 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-bold">Create Account</h3>
              <p className="text-muted-foreground">Sign up and complete your basic profile information</p>
            </div>
            <div className="grid gap-2 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold">Submit Documents</h3>
              <p className="text-muted-foreground">Upload required verification documents based on your account type</p>
            </div>
            <div className="grid gap-2 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold">Verification Review</h3>
              <p className="text-muted-foreground">Our team reviews your documents and conducts necessary checks</p>
            </div>
            <div className="grid gap-2 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-bold">Get Verified</h3>
              <p className="text-muted-foreground">
                Receive your verification badge and enjoy enhanced platform features
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Document Requirements */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Required Documents
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Document Requirements</h2>
              <p className="text-muted-foreground">
                Different account types require different verification documents. Here's what you'll need:
              </p>
              <div className="space-y-6 mt-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">For NGOs & Charities</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>NGO registration certificate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Tax exemption certificate (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>List of board members/trustees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Annual reports (for Pro/Premium verification)</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">For Restaurants & Food Businesses</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Business registration/license</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Food safety certification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Health department rating/inspection report</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">For Individual Donors</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Government-issued ID (for Pro verification)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Proof of address (for Pro verification)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-4">
                <Link href="/signup" passHref>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Start Verification Process <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                  <CardTitle>Document Upload</CardTitle>
                  <CardDescription>Upload your verification documents securely through our platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-md p-4">
                    <label htmlFor="file-upload-1" className="cursor-pointer flex flex-col items-center space-y-2">
                      <div className="p-2 rounded-full bg-green-50">
                        <Upload className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Upload Registration Document</span>
                      <span className="text-xs text-muted-foreground">PDF, JPG or PNG up to 5MB</span>
                      <input id="file-upload-1" type="file" className="hidden" />
                    </label>
                  </div>

                  <div className="border rounded-md p-4">
                    <label htmlFor="file-upload-2" className="cursor-pointer flex flex-col items-center space-y-2">
                      <div className="p-2 rounded-full bg-green-50">
                        <Upload className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Upload ID Verification</span>
                      <span className="text-xs text-muted-foreground">PDF, JPG or PNG up to 5MB</span>
                      <input id="file-upload-2" type="file" className="hidden" />
                    </label>
                  </div>

                  <div className="border rounded-md p-4">
                    <label htmlFor="file-upload-3" className="cursor-pointer flex flex-col items-center space-y-2">
                      <div className="p-2 rounded-full bg-green-50">
                        <Upload className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Upload Additional Documents</span>
                      <span className="text-xs text-muted-foreground">PDF, JPG or PNG up to 5MB</span>
                      <input id="file-upload-3" type="file" className="hidden" />
                    </label>
                  </div>

                  <Button className="w-full">Upload Documents</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-12 md:py-16 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Get Verified Today</h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                Join our trusted network of verified participants and enhance your experience on our platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup" passHref>
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Start Verification
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
