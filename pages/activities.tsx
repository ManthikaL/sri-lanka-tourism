import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, DollarSign, Star } from "lucide-react";
import Image from "next/image";

export function ActivitiesPage() {
  const activities = [
    {
      id: 1,
      name: "Wildlife Safari",
      category: "Adventure",
      description:
        "Experience thrilling wildlife encounters in Yala or Udawalawe National Parks. Spot leopards, elephants, and exotic birds.",
      image: "/activities/wildlife-safari.jpg",
      duration: "6-8 hours",
      groupSize: "2-8 people",
      price: "$75-120",
      rating: 4.8,
      highlights: [
        "Leopard spotting",
        "Elephant herds",
        "Bird watching",
        "Professional guide",
      ],
    },
    {
      id: 2,
      name: "Tea Plantation Tour",
      category: "Cultural",
      description:
        "Explore lush tea estates in Nuwara Eliya, learn about tea processing, and enjoy fresh Ceylon tea tastings.",
      image: "/activities/tea-plantation.jpg",
      duration: "4-5 hours",
      groupSize: "1-15 people",
      price: "$35-50",
      rating: 4.6,
      highlights: [
        "Tea factory visit",
        "Plantation walk",
        "Tea tasting",
        "Scenic views",
      ],
    },
    {
      id: 3,
      name: "Whale Watching",
      category: "Marine",
      description:
        "Witness magnificent blue whales and dolphins off the coast of Mirissa. Best whale watching destination in Asia.",
      image: "/activities/whale-watching.jpg",
      duration: "3-4 hours",
      groupSize: "10-30 people",
      price: "$40-60",
      rating: 4.7,
      highlights: [
        "Blue whales",
        "Dolphins",
        "Boat ride",
        "Marine photography",
      ],
    },
    {
      id: 4,
      name: "Ancient City Tour",
      category: "Historical",
      description:
        "Discover the ancient kingdoms of Anuradhapura and Polonnaruwa with their magnificent stupas and ruins.",
      image: "/activities/ancient-city-tour.jpg",
      duration: "Full day",
      groupSize: "2-12 people",
      price: "$60-90",
      rating: 4.5,
      highlights: [
        "Ancient stupas",
        "Royal palaces",
        "Buddhist temples",
        "Archaeological sites",
      ],
    },
    {
      id: 5,
      name: "Surfing Lessons",
      category: "Water Sports",
      description:
        "Learn to surf on the beautiful beaches of Arugam Bay or Weligama with experienced local instructors.",
      image: "/activities/surfing-lessons.jpg",
      duration: "2-3 hours",
      groupSize: "1-6 people",
      price: "$25-40",
      rating: 4.4,
      highlights: [
        "Professional instruction",
        "Equipment included",
        "Beach location",
        "All skill levels",
      ],
    },
    {
      id: 6,
      name: "Cooking Class",
      category: "Culinary",
      description:
        "Master authentic Sri Lankan cuisine with hands-on cooking classes featuring traditional spices and techniques.",
      image: "/activities/cooking-class.jpg",
      duration: "3-4 hours",
      groupSize: "2-10 people",
      price: "$30-45",
      rating: 4.9,
      highlights: [
        "Traditional recipes",
        "Spice garden visit",
        "Hands-on cooking",
        "Full meal included",
      ],
    },
    {
      id: 7,
      name: "Train Journey",
      category: "Scenic",
      description:
        "Experience one of the world's most beautiful train rides from Kandy to Ella through misty mountains.",
      image: "/activities/train-journey.jpg",
      duration: "6-7 hours",
      groupSize: "Individual",
      price: "$15-25",
      rating: 4.8,
      highlights: [
        "Scenic mountain views",
        "Tea plantations",
        "Waterfalls",
        "Historic railway",
      ],
    },
    {
      id: 8,
      name: "Ayurveda Spa",
      category: "Wellness",
      description:
        "Rejuvenate with traditional Ayurvedic treatments and massages using authentic herbs and oils.",
      image: "/activities/ayurveda-spa.jpg",
      duration: "2-8 hours",
      groupSize: "1-2 people",
      price: "$40-150",
      rating: 4.6,
      highlights: [
        "Traditional treatments",
        "Herbal medicines",
        "Relaxation",
        "Wellness consultation",
      ],
    },
  ];

  const categories = [
    "All",
    "Adventure",
    "Cultural",
    "Marine",
    "Historical",
    "Water Sports",
    "Culinary",
    "Scenic",
    "Wellness",
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Unforgettable <span className="text-green-600">Activities</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in Sri Lanka's diverse experiences, from thrilling
            adventures to cultural discoveries
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="cursor-pointer hover:bg-green-100 hover:border-green-500 px-4 py-2"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map((activity) => (
            <Card
              key={activity.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-green-100"
            >
              <div className="relative">
                <Image
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-green-600 text-white">
                    {activity.category}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-white text-gray-800">
                    <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {activity.rating}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {activity.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {activity.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {activity.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    {activity.groupSize}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {activity.price}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {activity.highlights.slice(0, 2).map((highlight, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs bg-orange-100 text-orange-800"
                      >
                        {highlight}
                      </Badge>
                    ))}
                    {activity.highlights.length > 2 && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-gray-100 text-gray-600"
                      >
                        +{activity.highlights.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-green-600 to-orange-600 text-white py-2 rounded-lg font-semibold hover:from-green-700 hover:to-orange-700 transition-all">
                  Book Now
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-green-600 to-orange-600 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-4">
            Create Your Perfect Itinerary
          </h2>
          <p className="text-xl mb-6">
            Combine multiple activities for the ultimate Sri Lankan experience
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Plan My Trip
          </button>
        </div>
      </div>
    </div>
  );
}
