import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Crown, Scroll, Users } from "lucide-react"
import Image from "next/image"

export function HistoryPage() {
  const periods = [
    {
      era: "Ancient Period",
      period: "543 BCE - 1017 CE",
      description:
        "The foundation of Sinhalese civilization with the arrival of Prince Vijaya and the establishment of Buddhism.",
      image: "/placeholder.svg?height=300&width=500",
      keyEvents: [
        "Arrival of Prince Vijaya (543 BCE)",
        "Introduction of Buddhism (247 BCE)",
        "Construction of Anuradhapura",
        "Building of great stupas and monasteries",
      ],
      significance: "Established the cultural and religious foundation of Sri Lanka",
    },
    {
      era: "Medieval Period",
      period: "1017 - 1505 CE",
      description:
        "Era of multiple kingdoms including Polonnaruwa, with remarkable achievements in art, architecture, and irrigation.",
      image: "/placeholder.svg?height=300&width=500",
      keyEvents: [
        "Rise of Polonnaruwa Kingdom",
        "Reign of King Parakramabahu I",
        "Construction of Gal Vihara",
        "Advanced irrigation systems",
      ],
      significance: "Golden age of Sinhalese art, architecture, and hydraulic engineering",
    },
    {
      era: "Colonial Period",
      period: "1505 - 1948 CE",
      description:
        "Portuguese, Dutch, and British colonial rule that significantly influenced Sri Lankan society and culture.",
      image: "/placeholder.svg?height=300&width=500",
      keyEvents: [
        "Portuguese arrival (1505)",
        "Dutch rule (1658-1796)",
        "British colonization (1796-1948)",
        "Introduction of tea and rubber plantations",
      ],
      significance: "Transformation of economy, introduction of Western education and legal systems",
    },
    {
      era: "Independence Era",
      period: "1948 - Present",
      description:
        "Modern Sri Lanka's journey from independence through civil conflict to post-war reconstruction and development.",
      image: "/placeholder.svg?height=300&width=500",
      keyEvents: [
        "Independence from Britain (1948)",
        "Adoption of Sinhala as official language",
        "Civil war period (1983-2009)",
        "Post-war reconstruction and growth",
      ],
      significance: "Nation-building, ethnic reconciliation, and economic development",
    },
  ]

  const culturalHeritage = [
    {
      title: "Buddhism in Sri Lanka",
      description:
        "Buddhism arrived in 247 BCE and became deeply rooted in Sri Lankan culture, shaping art, architecture, and daily life.",
      icon: <Scroll className="h-8 w-8 text-orange-600" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Ancient Hydraulic Civilization",
      description:
        "Sri Lanka developed one of the world's most advanced ancient irrigation systems, supporting large populations.",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Royal Dynasties",
      description:
        "Over 180 kings ruled Sri Lanka, creating a rich legacy of palaces, temples, and cultural traditions.",
      icon: <Crown className="h-8 w-8 text-yellow-600" />,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sri Lanka's <span className="text-red-600">Rich History</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Journey through 2,500 years of fascinating history, from ancient kingdoms to modern nation-building
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Historical Timeline</h2>
          <div className="space-y-8">
            {periods.map((period, index) => (
              <Card key={index} className="overflow-hidden border-2 border-red-100">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={period.image || "/placeholder.svg"}
                      alt={period.era}
                      width={500}
                      height={300}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-5 w-5 text-red-600 mr-2" />
                      <Badge className="bg-red-600 text-white">{period.period}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{period.era}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{period.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Events:</h4>
                      <ul className="space-y-2">
                        {period.keyEvents.map((event, eventIndex) => (
                          <li key={eventIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{event}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-red-800 mb-2">Historical Significance:</h5>
                      <p className="text-red-700 text-sm">{period.significance}</p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Cultural Heritage */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Cultural Heritage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culturalHeritage.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-orange-100">
                <CardContent className="p-6">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* UNESCO World Heritage Sites */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">UNESCO World Heritage Sites</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Ancient City of Sigiriya", year: "1982" },
              { name: "Ancient City of Polonnaruwa", year: "1982" },
              { name: "Sacred City of Anuradhapura", year: "1982" },
              { name: "Old Town of Galle", year: "1988" },
              { name: "Golden Temple of Dambulla", year: "1991" },
              { name: "Central Highlands", year: "2010" },
            ].map((site, index) => (
              <Card key={index} className="text-center bg-white">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{site.name}</h4>
                  <Badge variant="outline" className="border-orange-500 text-orange-700">
                    UNESCO {site.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-4">Experience Living History</h2>
          <p className="text-xl mb-6">Walk through ancient cities and witness 2,500 years of continuous civilization</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Plan Historical Tour
          </button>
        </div>
      </div>
    </div>
  )
}
