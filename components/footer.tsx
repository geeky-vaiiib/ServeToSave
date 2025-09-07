import Link from "next/link"
import { Facebook, Instagram, Leaf, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-400" />
              <span className="text-xl font-bold text-white">Serve To Save India</span>
            </Link>
            <p className="text-sm text-gray-400">
              Bridging the gap between food waste and hunger across India through technology.
            </p>
            <div className="flex gap-4">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/donate" className="text-gray-400 hover:text-white">
                  Donate Food
                </Link>
              </li>
              <li>
                <Link href="/request" className="text-gray-400 hover:text-white">
                  Request Food
                </Link>
              </li>
              <li>
                <Link href="/map" className="text-gray-400 hover:text-white">
                  Food Map
                </Link>
              </li>
              <li>
                <Link href="/logistics" className="text-gray-400 hover:text-white">
                  Logistics
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-400 hover:text-white">
                  Impact Reports
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/for-ngos" className="text-gray-400 hover:text-white">
                  For NGOs
                </Link>
              </li>
              <li>
                <Link href="/for-restaurants" className="text-gray-400 hover:text-white">
                  For Restaurants
                </Link>
              </li>
              <li>
                <Link href="/for-corporates" className="text-gray-400 hover:text-white">
                  For Corporates
                </Link>
              </li>
              <li>
                <Link href="/for-government" className="text-gray-400 hover:text-white">
                  For Government
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-gray-400 hover:text-white">
                  Partnership Programs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Subscribe</h3>
            <p className="text-sm text-gray-400">Stay updated with our progress and impact stories.</p>
            <div className="flex gap-2">
              <Input placeholder="Email address" className="border-gray-700 bg-gray-800 text-white" />
              <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Serve To Save India. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/terms" className="text-gray-400 hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white">
              Privacy
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
