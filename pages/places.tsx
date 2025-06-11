import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock } from "lucide-react";
import Image from "next/image";

export function PlacesPage() {
  const places = [
    {
      id: 1,
      name: "Sigiriya Rock Fortress",
      location: "Central Province",
      description:
        "Ancient rock fortress and palace ruins with stunning frescoes and water gardens. A UNESCO World Heritage Site.",
      image: "/places/sigiriya.jpg",
      rating: 4.8,
      duration: "3-4 hours",
      highlights: [
        "UNESCO Site",
        "Ancient Frescoes",
        "Lion Gate",
        "Mirror Wall",
      ],
      bestTime: "Early morning or late afternoon",
    },
    {
      id: 2,
      name: "Temple of the Tooth",
      location: "Kandy",
      description:
        "Sacred Buddhist temple housing a tooth relic of Buddha. The spiritual heart of Sri Lanka.",
      image: "/places/temple-of-tooth.jpg",
      rating: 4.7,
      duration: "2-3 hours",
      highlights: [
        "Sacred Relic",
        "Daily Ceremonies",
        "Royal Palace",
        "Buddhist Art",
      ],
      bestTime: "During puja ceremonies",
    },
    {
      id: 3,
      name: "Galle Fort",
      location: "Southern Province",
      description:
        "Historic fortified city built by Portuguese and Dutch colonizers. Perfect blend of European and Asian architecture.",
      image: "/places/galle-fort.jpg",
      rating: 4.6,
      duration: "Half day",
      highlights: [
        "Colonial Architecture",
        "Lighthouse",
        "Ramparts Walk",
        "Museums",
      ],
      bestTime: "Sunset for best views",
    },
    {
      id: 4,
      name: "Yala National Park",
      location: "Southern Province",
      description:
        "Premier wildlife destination famous for leopards, elephants, and diverse bird species.",
      image: "/places/yala-national-park.jpg",
      rating: 4.5,
      duration: "Full day",
      highlights: [
        "Leopard Safari",
        "Elephant Herds",
        "200+ Bird Species",
        "Ancient Ruins",
      ],
      bestTime: "February to July",
    },
    {
      id: 5,
      name: "Nuwara Eliya",
      location: "Central Province",
      description:
        'Hill station known as "Little England" with tea plantations, cool climate, and colonial charm.',
      image: "/places/nuwara-eliya.jpg",
      rating: 4.4,
      duration: "2-3 days",
      highlights: [
        "Tea Plantations",
        "Gregory Lake",
        "Strawberry Fields",
        "Golf Course",
      ],
      bestTime: "April to September",
    },
    {
      id: 6,
      name: "Anuradhapura",
      location: "North Central Province",
      description:
        "Ancient capital with magnificent stupas, monasteries, and the sacred Bodhi Tree.",
      image: "/places/anuradhapura.jpg",
      rating: 4.6,
      duration: "Full day",
      highlights: [
        "Sacred Bodhi Tree",
        "Ancient Stupas",
        "Monasteries",
        "Archaeological Museum",
      ],
      bestTime: "Early morning",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover Sri Lanka's{" "}
            <span className="text-orange-600">Amazing Places</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From ancient kingdoms to pristine beaches, explore the diverse
            landscapes and rich heritage of the Pearl of the Indian Ocean
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {places.map((place) => (
            <Card
              key={place.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-orange-100"
            >
              <div className="relative">
                <Image
                  src={place.image || "/placeholder.svg"}
                  alt={place.name}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-600 text-white">
                    <Star className="h-3 w-3 mr-1" />
                    {place.rating}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {place.name}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {place.duration}
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {place.location}
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {place.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Highlights:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {place.highlights.map((highlight, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-green-100 text-green-800"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <span className="font-medium">Best time to visit:</span>{" "}
                  {place.bestTime}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-orange-600 to-red-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl mb-6">
            Plan your perfect Sri Lankan adventure today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Travel Agent
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Download Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
