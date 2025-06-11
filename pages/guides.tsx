import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Phone, Mail, Users, Leaf, Heart, Award, Globe, Camera } from "lucide-react"

export function GuidesPage() {
  const featuredGuides = [
    {
      id: 1,
      name: "Kumara Perera",
      title: "Cultural Heritage Specialist",
      location: "Kandy & Central Province",
      rating: 4.9,
      reviews: 127,
      languages: ["English", "Sinhala", "German"],
      specialties: ["Ancient Temples", "Buddhist Culture", "Traditional Arts"],
      experience: "15 years",
      image: "/placeholder.svg?height=200&width=200",
      description:
        "Expert in Sri Lankan Buddhist culture and ancient history. Kumara has been guiding visitors through the sacred sites of Kandy and surrounding areas for over 15 years.",
      certifications: ["Licensed Tour Guide", "Cultural Heritage Specialist"],
      contact: {
        phone: "+94 77 123 4567",
        email: "kumara.guide@email.com",
      },
    },
    {
      id: 2,
      name: "Priya Jayawardena",
      title: "Wildlife & Nature Guide",
      location: "Yala & Southern Province",
      rating: 4.8,
      reviews: 89,
      languages: ["English", "Sinhala", "Tamil"],
      specialties: ["Wildlife Safari", "Bird Watching", "Nature Photography"],
      experience: "12 years",
      image: "/placeholder.svg?height=200&width=200",
      description:
        "Passionate wildlife enthusiast with extensive knowledge of Sri Lankan fauna. Specializes in leopard tracking and bird watching tours.",
      certifications: ["Wildlife Guide License", "First Aid Certified"],
      contact: {
        phone: "+94 71 987 6543",
        email: "priya.wildlife@email.com",
      },
    },
    {
      id: 3,
      name: "Ravi Fernando",
      title: "Adventure & Trekking Guide",
      location: "Hill Country & Ella",
      rating: 4.9,
      reviews: 156,
      languages: ["English", "Sinhala", "French"],
      specialties: ["Mountain Trekking", "Tea Plantation Tours", "Adventure Sports"],
      experience: "18 years",
      image: "/placeholder.svg?height=200&width=200",
      description:
        "Mountain climbing expert and tea plantation specialist. Ravi offers unique insights into hill country culture and sustainable tourism practices.",
      certifications: ["Mountain Guide Certification", "Sustainable Tourism Advocate"],
      contact: {
        phone: "+94 76 555 1234",
        email: "ravi.adventure@email.com",
      },
    },
  ]

  const localBusinesses = [
    {
      category: "Handicrafts",
      businesses: [
        {
          name: "Laksala Handicrafts",
          location: "Colombo",
          specialty: "Traditional masks, wood carvings, batik",
          description: "Government-certified authentic Sri Lankan handicrafts",
          contact: "+94 11 269 4305",
        },
        {
          name: "Barefoot Gallery",
          location: "Colombo",
          specialty: "Contemporary textiles, home decor",
          description: "Modern interpretations of traditional Sri Lankan designs",
          contact: "+94 11 258 9305",
        },
        {
          name: "Kandy Arts & Crafts",
          location: "Kandy",
          specialty: "Kandyan jewelry, traditional drums",
          description: "Family-run business preserving traditional craftsmanship",
          contact: "+94 81 222 3456",
        },
      ],
    },
    {
      category: "Cuisine",
      businesses: [
        {
          name: "Upali's by Nawaloka",
          location: "Colombo",
          specialty: "Authentic Sri Lankan cuisine",
          description: "Traditional recipes passed down through generations",
          contact: "+94 11 257 3456",
        },
        {
          name: "Spice Garden Restaurant",
          location: "Matale",
          specialty: "Spice-based cuisine, cooking classes",
          description: "Farm-to-table dining with organic spices",
          contact: "+94 66 222 7890",
        },
        {
          name: "Ella Spice Garden",
          location: "Ella",
          specialty: "Hill country cuisine, tea tastings",
          description: "Scenic dining with panoramic mountain views",
          contact: "+94 57 222 8901",
        },
      ],
    },
  ]

  const responsibleTourismPractices = [
    {
      title: "Environmental Conservation",
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      practices: [
        "Use reef-safe sunscreen when visiting beaches",
        "Don't touch or disturb coral reefs while snorkeling",
        "Avoid single-use plastics and carry reusable water bottles",
        "Stay on designated trails when hiking",
        "Don't pick flowers or disturb wildlife",
      ],
    },
    {
      title: "Cultural Respect",
      icon: <Heart className="h-8 w-8 text-red-600" />,
      practices: [
        "Dress modestly when visiting temples and religious sites",
        "Remove shoes before entering sacred spaces",
        "Ask permission before photographing people",
        "Learn basic greetings in local languages",
        "Respect local customs and traditions",
      ],
    },
    {
      title: "Economic Support",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      practices: [
        "Buy from local artisans and small businesses",
        "Eat at locally-owned restaurants",
        "Hire local guides and drivers",
        "Stay in locally-owned accommodations",
        "Participate in community-based tourism initiatives",
      ],
    },
    {
      title: "Wildlife Protection",
      icon: <Award className="h-8 w-8 text-orange-600" />,
      practices: [
        "Maintain safe distance from wildlife",
        "Don't feed wild animals",
        "Choose ethical wildlife experiences",
        "Support conservation projects",
        "Report any wildlife harassment or illegal activities",
      ],
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Local Guides & <span className="text-green-600">Community</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with certified local guides, discover authentic businesses, and learn about responsible tourism
            practices that benefit local communities
          </p>
        </div>

        {/* Featured Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Cultural Ambassadors</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredGuides.map((guide) => (
              <Card
                key={guide.id}
                className="overflow-hidden border-2 border-green-100 hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img src={guide.image || "/placeholder.svg"} alt={guide.name} className="w-full h-48 object-cover" />
                  <Badge className="absolute top-2 right-2 bg-green-600 text-white">{guide.experience}</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{guide.name}</h3>
                      <p className="text-green-600 font-medium">{guide.title}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1">{guide.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{guide.location}</span>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{guide.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {guide.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-green-100 text-green-800">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Languages:</h4>
                    <div className="flex flex-wrap gap-1">
                      {guide.languages.map((language, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 mb-4">
                    <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                      <Phone className="h-4 w-4 mr-1" />
                      Contact
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Mail className="h-4 w-4 mr-1" />
                      Email
                    </Button>
                  </div>

                  <div className="text-xs text-gray-500">
                    <p>
                      {guide.reviews} reviews • {guide.certifications.join(", ")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Local Businesses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Local Businesses</h2>
          {localBusinesses.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                {category.category === "Handicrafts" && <Camera className="h-6 w-6 mr-2 text-orange-600" />}
                {category.category === "Cuisine" && <Heart className="h-6 w-6 mr-2 text-red-600" />}
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.businesses.map((business, businessIndex) => (
                  <Card key={businessIndex} className="border-2 border-orange-100 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{business.name}</h4>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{business.location}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">{business.description}</p>
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-800 mb-1">Specialty:</h5>
                        <p className="text-sm text-gray-600">{business.specialty}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{business.contact}</span>
                        <Button size="sm" variant="outline">
                          Visit
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Tourism */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Responsible Tourism Practices</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Help preserve Sri Lanka's natural beauty and cultural heritage for future generations by following these
            responsible tourism guidelines
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responsibleTourismPractices.map((section, index) => (
              <Card key={index} className="border-2 border-white bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {section.icon}
                    <h3 className="text-lg font-bold text-gray-800 ml-3">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.practices.map((practice, practiceIndex) => (
                      <li key={practiceIndex} className="text-sm text-gray-700 flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {practice}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Join the Responsible Tourism Movement</h3>
            <p className="text-gray-600 mb-6">
              By following these practices, you help ensure that tourism benefits local communities while preserving Sri
              Lanka's natural and cultural treasures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                <Globe className="h-5 w-5 mr-2" />
                Learn More
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
                Become a Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
