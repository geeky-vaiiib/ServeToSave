"use client"

import { useState, useEffect } from "react"
import { Heart, Utensils, Users } from "lucide-react"

const ImpactCounter = () => {
  const [counters, setCounters] = useState({
    meals: 0,
    donors: 0,
    ngos: 0,
  })

  // Simulating counter animation on component mount
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => {
        const newMeals = prev.meals + Math.floor(Math.random() * 10000)
        const newDonors = prev.donors + Math.floor(Math.random() * 100)
        const newNgos = prev.ngos + Math.floor(Math.random() * 10)

        if (newMeals >= 1000000 && newDonors >= 10000 && newNgos >= 500) {
          clearInterval(interval)
          return { meals: 1000000, donors: 10000, ngos: 500 }
        }

        return {
          meals: Math.min(newMeals, 1000000),
          donors: Math.min(newDonors, 10000),
          ngos: Math.min(newNgos, 500),
        }
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-8 bg-green-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center justify-center p-4">
            <Utensils className="h-8 w-8 mb-2" />
            <div className="text-4xl font-bold">{counters.meals.toLocaleString()}+</div>
            <div className="text-lg">Meals Served</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <Users className="h-8 w-8 mb-2" />
            <div className="text-4xl font-bold">{counters.donors.toLocaleString()}+</div>
            <div className="text-lg">Active Donors</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <Heart className="h-8 w-8 mb-2" />
            <div className="text-4xl font-bold">{counters.ngos.toLocaleString()}+</div>
            <div className="text-lg">NGO Partners</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactCounter
