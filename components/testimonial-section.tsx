"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Manager, Food For All NGO",
    content:
      "Serve To Save has revolutionized how we source food donations. The AI matching system has increased our efficiency by 70%, allowing us to feed more people with less effort.",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Executive Chef, Grand Hyatt",
    content:
      "As a hotel with frequent events, we always had excess food going to waste. Now we can donate it easily through the platform and track our impact. The logistics service is exceptional!",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 3,
    name: "Arjun Patel",
    role: "CSR Director, Tech Innovations Inc.",
    content:
      "The corporate dashboard gives us unprecedented visibility into our CSR impact. The white label solution integrated perfectly with our company's existing systems.",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 4,
    name: "Meera Reddy",
    role: "Government Food Security Program",
    content:
      "The data insights provided by Serve To Save have been invaluable for our policy planning. We can now identify food insecurity hotspots and target our interventions effectively.",
    avatar: "/placeholder.svg?height=50&width=50",
  },
]

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPrevDisabled, setIsPrevDisabled] = useState(true)
  const [isNextDisabled, setIsNextDisabled] = useState(false)

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
      setIsNextDisabled(false)
      if (activeIndex - 1 === 0) {
        setIsPrevDisabled(true)
      }
    }
  }

  const handleNext = () => {
    if (activeIndex < testimonials.length - 2) {
      setActiveIndex(activeIndex + 1)
      setIsPrevDisabled(false)
      if (activeIndex + 1 === testimonials.length - 2) {
        setIsNextDisabled(true)
      }
    }
  }

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Success Stories from Our Network
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from the organizations and individuals making a difference with our platform.
            </p>
          </div>
        </div>

        <div className="mt-12 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 50}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-[50%] px-4">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
                      <div className="flex items-center gap-4">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <Button variant="outline" size="icon" onClick={handlePrev} disabled={isPrevDisabled}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button variant="outline" size="icon" onClick={handleNext} disabled={isNextDisabled}>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
