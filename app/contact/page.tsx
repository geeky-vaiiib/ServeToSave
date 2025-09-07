"use client"

import Link from "next/link"
import { Building, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-gray-900 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900 px-3 py-1 text-sm text-green-800 dark:text-green-200">Contact Us</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Have questions about our platform? Want to partner with us? We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-24 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-green-100 dark:bg-green-900 p-2">
                  <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">contact@servetosave.in</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-green-100 dark:bg-green-900 p-2">
                  <Building className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-medium">Support Hours</h3>
                  <p className="text-muted-foreground">Mon - Fri: 9AM - 6PM</p>
                  <p className="text-muted-foreground">Sat: 10AM - 4PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">How does the food redistribution work?</h3>
                  <p className="text-muted-foreground text-sm">
                    Our platform connects food donors (restaurants, events, individuals) with NGOs and charities 
                    that distribute food to those in need. We use AI to match donations with requests based on 
                    location, quantity, and timing.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Is there a cost to use the platform?</h3>
                  <p className="text-muted-foreground text-sm">
                    Basic features are completely free for both donors and NGOs. We offer premium features 
                    for organizations that need advanced analytics and logistics support.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">How do you ensure food safety?</h3>
                  <p className="text-muted-foreground text-sm">
                    We provide guidelines for safe food handling and storage. All registered NGOs are 
                    verified, and we track the entire donation process to ensure accountability.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Can individuals donate food?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes! Individuals can donate surplus food from events, parties, or home cooking. 
                    Our platform makes it easy to connect with local NGOs who can collect the food.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Simplified */}
      <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Visit Our Office</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Our headquarters is located at Siddaganga Institute of Technology in Tumkur, Karnataka
              </p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden border h-[400px] w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <p className="text-lg font-medium">Siddaganga Institute of Technology</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">B.H. Road, Tumkur - 572103, Karnataka, India</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Interactive map coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-24 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Make a Difference?</h2>
              <p className="max-w-[700px]">
                Join thousands of donors and NGOs who are already using our platform to reduce food waste 
                and fight hunger in India.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup" passHref>
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/about" passHref>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
