"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Building, Check, Leaf, MapPin, User, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function GetStartedPage() {
  const [step, setStep] = useState(1)
  const [accountType, setAccountType] = useState("individual")
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // In a real app, you would redirect after successful registration
      window.location.href = "/dashboard"
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Get Started</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join the Movement to End Food Waste
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Create your account and start making a difference today. It only takes a few minutes to get set up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-24 bg-white flex-1">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            {/* Step Indicator */}
            {step < 4 && (
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? "bg-green-600 text-white" : "bg-gray-200"}`}
                    >
                      {step > 1 ? <Check className="h-4 w-4" /> : "1"}
                    </div>
                    <div className={`h-1 w-12 ${step > 1 ? "bg-green-600" : "bg-gray-200"}`}></div>
                  </div>
                  <div className="flex items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? "bg-green-600 text-white" : "bg-gray-200"}`}
                    >
                      {step > 2 ? <Check className="h-4 w-4" /> : "2"}
                    </div>
                    <div className={`h-1 w-12 ${step > 2 ? "bg-green-600" : "bg-gray-200"}`}></div>
                  </div>
                  <div className="flex items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 3 ? "bg-green-600 text-white" : "bg-gray-200"}`}
                    >
                      3
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex justify-between text-sm">
                  <span className={step >= 1 ? "text-green-600 font-medium" : "text-gray-500"}>Account Type</span>
                  <span className={step >= 2 ? "text-green-600 font-medium" : "text-gray-500"}>Profile Details</span>
                  <span className={step >= 3 ? "text-green-600 font-medium" : "text-gray-500"}>Verification</span>
                </div>
              </div>
            )}

            {/* Step 1: Choose Account Type */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Choose Your Account Type</CardTitle>
                  <CardDescription>Select the option that best describes you or your organization</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div
                    className={`flex items-start space-x-4 rounded-lg border p-4 cursor-pointer ${accountType === "individual" ? "border-green-600 bg-green-50" : ""}`}
                    onClick={() => setAccountType("individual")}
                  >
                    <div
                      className={`rounded-full p-2 ${accountType === "individual" ? "bg-green-100" : "bg-gray-100"}`}
                    >
                      <User
                        className={`h-6 w-6 ${accountType === "individual" ? "text-green-600" : "text-gray-500"}`}
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Individual Donor</p>
                      <p className="text-sm text-muted-foreground">
                        I want to donate food as an individual or household
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex items-start space-x-4 rounded-lg border p-4 cursor-pointer ${accountType === "restaurant" ? "border-green-600 bg-green-50" : ""}`}
                    onClick={() => setAccountType("restaurant")}
                  >
                    <div
                      className={`rounded-full p-2 ${accountType === "restaurant" ? "bg-green-100" : "bg-gray-100"}`}
                    >
                      <Utensils
                        className={`h-6 w-6 ${accountType === "restaurant" ? "text-green-600" : "text-gray-500"}`}
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Restaurant or Food Business</p>
                      <p className="text-sm text-muted-foreground">
                        I represent a restaurant, hotel, or food service business
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex items-start space-x-4 rounded-lg border p-4 cursor-pointer ${accountType === "ngo" ? "border-green-600 bg-green-50" : ""}`}
                    onClick={() => setAccountType("ngo")}
                  >
                    <div className={`rounded-full p-2 ${accountType === "ngo" ? "bg-green-100" : "bg-gray-100"}`}>
                      <Leaf className={`h-6 w-6 ${accountType === "ngo" ? "text-green-600" : "text-gray-500"}`} />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">NGO or Charity</p>
                      <p className="text-sm text-muted-foreground">
                        I represent an NGO or charity that distributes food to those in need
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex items-start space-x-4 rounded-lg border p-4 cursor-pointer ${accountType === "corporate" ? "border-green-600 bg-green-50" : ""}`}
                    onClick={() => setAccountType("corporate")}
                  >
                    <div className={`rounded-full p-2 ${accountType === "corporate" ? "bg-green-100" : "bg-gray-100"}`}>
                      <Building
                        className={`h-6 w-6 ${accountType === "corporate" ? "text-green-600" : "text-gray-500"}`}
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Corporate Partner</p>
                      <p className="text-sm text-muted-foreground">
                        I represent a company interested in CSR or partnership opportunities
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleNext}>
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}

            {/* Step 2: Profile Details */}
            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>
                    {accountType === "individual" && "Personal Details"}
                    {accountType === "restaurant" && "Restaurant Details"}
                    {accountType === "ngo" && "NGO Details"}
                    {accountType === "corporate" && "Company Details"}
                  </CardTitle>
                  <CardDescription>
                    Tell us more about {accountType === "individual" ? "yourself" : "your organization"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {accountType === "individual" && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First name</Label>
                          <Input id="first-name" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last name</Label>
                          <Input id="last-name" placeholder="Doe" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone number</Label>
                        <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                          <MapPin className="ml-2 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="address"
                            placeholder="Your address"
                            className="border-0 focus-visible:ring-0"
                            required
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {accountType === "restaurant" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="restaurant-name">Restaurant/Business Name</Label>
                        <Input id="restaurant-name" placeholder="Restaurant Name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="business-type">Business Type</Label>
                        <select
                          id="business-type"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          <option value="">Select business type</option>
                          <option value="restaurant">Restaurant</option>
                          <option value="hotel">Hotel</option>
                          <option value="catering">Catering Service</option>
                          <option value="cafe">Café</option>
                          <option value="bakery">Bakery</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="contact-name">Contact Person</Label>
                          <Input id="contact-name" placeholder="Full name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contact-position">Position</Label>
                          <Input id="contact-position" placeholder="e.g. Manager" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="business-email">Email</Label>
                        <Input id="business-email" type="email" placeholder="contact@restaurant.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="business-phone">Phone number</Label>
                        <Input id="business-phone" type="tel" placeholder="+91 98765 43210" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="business-address">Business Address</Label>
                        <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                          <MapPin className="ml-2 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="business-address"
                            placeholder="Business address"
                            className="border-0 focus-visible:ring-0"
                            required
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {accountType === "ngo" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="ngo-name">NGO/Charity Name</Label>
                        <Input id="ngo-name" placeholder="Organization Name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="registration-number">Registration Number</Label>
                        <Input id="registration-number" placeholder="NGO registration number" required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="ngo-contact">Contact Person</Label>
                          <Input id="ngo-contact" placeholder="Full name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ngo-position">Position</Label>
                          <Input id="ngo-position" placeholder="e.g. Director" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ngo-email">Email</Label>
                        <Input id="ngo-email" type="email" placeholder="contact@ngo.org" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ngo-phone">Phone number</Label>
                        <Input id="ngo-phone" type="tel" placeholder="+91 98765 43210" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ngo-address">Organization Address</Label>
                        <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                          <MapPin className="ml-2 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="ngo-address"
                            placeholder="Organization address"
                            className="border-0 focus-visible:ring-0"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ngo-description">Brief Description of Organization</Label>
                        <Textarea
                          id="ngo-description"
                          placeholder="Tell us about your organization's mission and the communities you serve"
                          className="min-h-[100px]"
                          required
                        />
                      </div>
                    </>
                  )}

                  {accountType === "corporate" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="company-name">Company Name</Label>
                        <Input id="company-name" placeholder="Company Name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <select
                          id="industry"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          <option value="">Select industry</option>
                          <option value="technology">Technology</option>
                          <option value="finance">Finance & Banking</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="retail">Retail</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="education">Education</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="corporate-contact">Contact Person</Label>
                          <Input id="corporate-contact" placeholder="Full name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="corporate-position">Position</Label>
                          <Input id="corporate-position" placeholder="e.g. CSR Manager" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="corporate-email">Email</Label>
                        <Input id="corporate-email" type="email" placeholder="contact@company.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="corporate-phone">Phone number</Label>
                        <Input id="corporate-phone" type="tel" placeholder="+91 98765 43210" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="corporate-address">Company Address</Label>
                        <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                          <MapPin className="ml-2 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="corporate-address"
                            placeholder="Company address"
                            className="border-0 focus-visible:ring-0"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="partnership-interest">Partnership Interest</Label>
                        <select
                          id="partnership-interest"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          <option value="">Select interest area</option>
                          <option value="csr">CSR Program</option>
                          <option value="sponsorship">Sponsorship</option>
                          <option value="employee">Employee Engagement</option>
                          <option value="cafeteria">Corporate Cafeteria Donations</option>
                          <option value="white-label">White Label Solution</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700" onClick={handleNext}>
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}

            {/* Step 3: Verification */}
            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>Verification</CardTitle>
                  <CardDescription>
                    {accountType === "individual" && "Set up your account and verify your identity"}
                    {accountType === "restaurant" && "Set up your account and verify your business"}
                    {accountType === "ngo" && "Set up your account and verify your organization"}
                    {accountType === "corporate" && "Set up your account and verify your company"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-verify">Email</Label>
                    <Input id="email-verify" type="email" placeholder="Your email address" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Create Password</Label>
                    <Input id="password" type="password" required />
                    <p className="text-xs text-muted-foreground">
                      Password must be at least 8 characters long and include a number and a special character
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" required />
                  </div>

                  {(accountType === "restaurant" || accountType === "ngo" || accountType === "corporate") && (
                    <div className="space-y-2">
                      <Label>Verification Documents</Label>
                      <div className="border rounded-md p-4">
                        <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center space-y-2">
                          <div className="p-2 rounded-full bg-green-50">
                            <svg
                              className="h-5 w-5 text-green-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                          </div>
                          <span className="text-sm font-medium">
                            {accountType === "restaurant" && "Upload Business License/Registration"}
                            {accountType === "ngo" && "Upload NGO Registration Certificate"}
                            {accountType === "corporate" && "Upload Company Registration Document"}
                          </span>
                          <span className="text-xs text-muted-foreground">PDF, JPG or PNG up to 5MB</span>
                          <input id="file-upload" type="file" className="hidden" />
                        </label>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="terms"
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                        required
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Link href="/terms" className="text-green-600 hover:underline">
                          terms of service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-green-600 hover:underline">
                          privacy policy
                        </Link>
                      </Label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="marketing"
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <Label htmlFor="marketing" className="text-sm">
                        I would like to receive updates about new features, success stories, and impact reports
                      </Label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700" onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </CardFooter>
              </Card>
            )}

            {/* Step 4: Success */}
            {step === 4 && (
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Account Created Successfully!</CardTitle>
                  <CardDescription>
                    Thank you for joining Serve To Save India. Your account has been created and is now pending
                    verification.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                  <p className="text-muted-foreground">
                    We've sent a confirmation email to your registered email address. Please click the link in the email
                    to verify your account.
                  </p>
                  <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800">
                    <p className="font-medium">What happens next?</p>
                    {accountType === "individual" && (
                      <p className="mt-1">
                        You can now log in to your account and start donating food or supporting our mission.
                      </p>
                    )}
                    {accountType === "restaurant" && (
                      <p className="mt-1">
                        Our team will review your business details within 24-48 hours. Once verified, you can start
                        listing food donations.
                      </p>
                    )}
                    {accountType === "ngo" && (
                      <p className="mt-1">
                        Our team will review your NGO details within 24-48 hours. Once verified, you can start
                        requesting food donations.
                      </p>
                    )}
                    {accountType === "corporate" && (
                      <p className="mt-1">
                        Our partnerships team will contact you within 24-48 hours to discuss collaboration
                        opportunities.
                      </p>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Link href="/login" passHref>
                    <Button className="bg-green-600 hover:bg-green-700">Go to Login</Button>
                  </Link>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {step < 4 && (
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-green-100 p-3">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Real-time Mapping</h3>
                <p className="text-muted-foreground">
                  Our Google Maps integration helps you visualize food donations and requests in your area.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-green-100 p-3">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">AI-Powered Matching</h3>
                <p className="text-muted-foreground">
                  Our smart AI assistant matches donations to requests based on urgency, location, and quantity.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-green-100 p-3">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Verified Network</h3>
                <p className="text-muted-foreground">
                  Our verification process ensures all participants are legitimate and trustworthy.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
