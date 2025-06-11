import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Train, Bus, Car, DollarSign, Shield, Heart, AlertTriangle, CreditCard } from "lucide-react"

export function TransportPage() {
  const transportModes = [
    {
      type: "Train",
      icon: <Train className="h-8 w-8 text-blue-600" />,
      description: "Scenic and affordable way to travel across the country",
      routes: ["Colombo to Kandy", "Kandy to Ella", "Colombo to Galle"],
      cost: "$2-15 per journey",
      pros: ["Scenic mountain views", "Affordable", "Cultural experience", "No traffic delays"],
      cons: ["Limited schedules", "Can be crowded", "Slower than buses"],
      tips: ["Book reserved seats in advance", "Try the observation car", "Bring snacks and water"],
    },
    {
      type: "Bus",
      icon: <Bus className="h-8 w-8 text-green-600" />,
      description: "Extensive network covering all parts of the island",
      routes: ["Intercity express", "Local routes", "Air-conditioned services"],
      cost: "$1-8 per journey",
      pros: ["Frequent services", "Reaches remote areas", "Very affordable", "Fast intercity routes"],
      cons: ["Can be crowded", "Traffic delays", "Varying comfort levels"],
      tips: ["Use air-conditioned buses for long journeys", "Keep valuables secure", "Learn basic Sinhala numbers"],
    },
    {
      type: "Tuk-tuk",
      icon: <Car className="h-8 w-8 text-orange-600" />,
      description: "Three-wheeler auto-rickshaws perfect for short distances",
      routes: ["City transport", "Short intercity trips", "Tourist areas"],
      cost: "$0.50-5 per trip",
      pros: ["Door-to-door service", "Flexible routes", "Cultural experience", "Good for short trips"],
      cons: ["No air conditioning", "Limited luggage space", "Negotiate prices"],
      tips: ["Agree on price before starting", "Use ride-hailing apps", "Carry small bills"],
    },
    {
      type: "Taxi/Car Rental",
      icon: <Car className="h-8 w-8 text-purple-600" />,
      description: "Private transport with driver or self-drive options",
      routes: ["Customized itineraries", "Airport transfers", "Day trips"],
      cost: "$25-60 per day",
      pros: ["Comfort and privacy", "Flexible schedule", "Air conditioning", "Luggage space"],
      cons: ["More expensive", "Traffic in cities", "Parking challenges"],
      tips: ["Hire reputable companies", "Agree on itinerary upfront", "Check insurance coverage"],
    },
  ]

  const visaInfo = [
    {
      country: "Most Countries",
      requirement: "Electronic Travel Authorization (ETA)",
      duration: "30 days",
      cost: "$20-50",
      processing: "24-72 hours",
    },
    {
      country: "India, Maldives",
      requirement: "Visa on Arrival",
      duration: "30 days",
      cost: "$25-35",
      processing: "At airport",
    },
    {
      country: "Singapore, Seychelles",
      requirement: "Visa Free",
      duration: "30 days",
      cost: "Free",
      processing: "None",
    },
  ]

  const healthTips = [
    {
      category: "Vaccinations",
      icon: <Heart className="h-6 w-6 text-red-600" />,
      items: ["Hepatitis A & B", "Typhoid", "Japanese Encephalitis (rural areas)", "Routine vaccines (MMR, DPT)"],
    },
    {
      category: "Health Precautions",
      icon: <Shield className="h-6 w-6 text-green-600" />,
      items: ["Drink bottled water", "Use mosquito repellent", "Sun protection", "Travel insurance recommended"],
    },
    {
      category: "Emergency Numbers",
      icon: <AlertTriangle className="h-6 w-6 text-orange-600" />,
      items: ["Police: 119", "Ambulance: 110", "Fire: 111", "Tourist Hotline: 1912"],
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Transport & <span className="text-blue-600">Travel Tips</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about getting around Sri Lanka, visa requirements, health tips, and practical
            travel information
          </p>
        </div>

        {/* Transportation Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">How to Get Around</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {transportModes.map((transport, index) => (
              <Card key={index} className="border-2 border-blue-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {transport.icon}
                    <h3 className="text-2xl font-bold text-gray-800 ml-3">{transport.type}</h3>
                  </div>

                  <p className="text-gray-700 mb-4">{transport.description}</p>

                  <div className="mb-4">
                    <Badge className="bg-green-100 text-green-800 mb-2">{transport.cost}</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-green-700">Pros:</h4>
                      <ul className="space-y-1">
                        {transport.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-red-700">Cons:</h4>
                      <ul className="space-y-1">
                        {transport.cons.map((con, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Travel Tips:</h4>
                    <ul className="space-y-1">
                      {transport.tips.map((tip, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Visa & Immigration */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Visa & Immigration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visaInfo.map((visa, index) => (
              <Card key={index} className="border-2 border-orange-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{visa.country}</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-700">Requirement:</span>
                      <p className="text-gray-600">{visa.requirement}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Duration:</span>
                      <p className="text-gray-600">{visa.duration}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Cost:</span>
                      <p className="text-gray-600">{visa.cost}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Processing:</span>
                      <p className="text-gray-600">{visa.processing}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Important Notes:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Apply for ETA at: www.eta.gov.lk</li>
              <li>• Passport must be valid for 6 months from arrival</li>
              <li>• Return ticket and proof of accommodation may be required</li>
              <li>• Extensions available through Department of Immigration</li>
            </ul>
          </div>
        </div>

        {/* Health & Safety */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Health & Safety Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {healthTips.map((category, index) => (
              <Card key={index} className="border-2 border-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-bold text-gray-800 ml-3">{category.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-gray-700 flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Currency & Cost of Living */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Currency & Cost of Living</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-green-200">
              <CardContent className="p-6 text-center">
                <CreditCard className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Currency</h3>
                <p className="text-gray-700 text-sm">Sri Lankan Rupee (LKR)</p>
                <p className="text-gray-700 text-sm">1 USD ≈ 300 LKR</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Budget Travel</h3>
                <p className="text-gray-700 text-sm">$15-25 per day</p>
                <p className="text-gray-700 text-sm">Hostels, local food, buses</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Mid-range</h3>
                <p className="text-gray-700 text-sm">$30-60 per day</p>
                <p className="text-gray-700 text-sm">Hotels, restaurants, taxis</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Luxury</h3>
                <p className="text-gray-700 text-sm">$100+ per day</p>
                <p className="text-gray-700 text-sm">Resorts, fine dining, private tours</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Typical Costs (USD)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Local meal:</span>
                  <span>$2-5</span>
                </div>
                <div className="flex justify-between">
                  <span>Restaurant meal:</span>
                  <span>$8-15</span>
                </div>
                <div className="flex justify-between">
                  <span>Hostel bed:</span>
                  <span>$8-15</span>
                </div>
                <div className="flex justify-between">
                  <span>Mid-range hotel:</span>
                  <span>$25-50</span>
                </div>
                <div className="flex justify-between">
                  <span>Local bus:</span>
                  <span>$0.50-2</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuk-tuk (short):</span>
                  <span>$1-3</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Money Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• ATMs widely available in cities</li>
                <li>• Credit cards accepted in hotels/restaurants</li>
                <li>• Carry cash for local transport/markets</li>
                <li>• Negotiate prices at markets</li>
                <li>• Tipping: 10% at restaurants</li>
                <li>• Keep small bills for tuk-tuks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
