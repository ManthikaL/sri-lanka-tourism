"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Camera,
  Heart,
  Share2,
  Download,
  Upload,
  Grid,
  List,
} from "lucide-react";

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const categories = [
    "All",
    "Nature",
    "Culture",
    "People",
    "Architecture",
    "Food",
    "Festivals",
    "Wildlife",
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Sigiriya Rock Fortress at Sunrise",
      category: "Nature",
      photographer: "Travel Sri Lanka",
      location: "Sigiriya",
      image: "/gallery/sigiriya-rock-sunrise.jpg",
      description:
        "The ancient rock fortress of Sigiriya emerges from the morning mist, showcasing its majestic presence.",
      likes: 245,
      downloads: 89,
      tags: ["sunrise", "ancient", "fortress", "mist"],
    },
    {
      id: 2,
      title: "Traditional Kandyan Dancer",
      category: "Culture",
      photographer: "Cultural Heritage",
      location: "Kandy",
      image: "/gallery/traditional-kandyan-dancer.jpeg",
      description:
        "A traditional Kandyan dancer in full costume performing at the Temple of the Tooth.",
      likes: 189,
      downloads: 67,
      tags: ["dance", "traditional", "costume", "culture"],
    },
    {
      id: 3,
      title: "Tea Plantation Workers",
      category: "People",
      photographer: "Life in Lanka",
      location: "Nuwara Eliya",
      image: "/gallery/tea-plantation-workers.jpg",
      description:
        "Tea pickers working in the lush green plantations of the hill country.",
      likes: 156,
      downloads: 45,
      tags: ["tea", "workers", "plantation", "hills"],
    },
    {
      id: 4,
      title: "Galle Fort Architecture",
      category: "Architecture",
      photographer: "Heritage Photos",
      location: "Galle",
      image: "/gallery/galle-fort-architecture.jpg",
      description:
        "Colonial Dutch architecture within the historic Galle Fort.",
      likes: 134,
      downloads: 78,
      tags: ["colonial", "dutch", "fort", "heritage"],
    },
    {
      id: 5,
      title: "Sri Lankan Curry Feast",
      category: "Food",
      photographer: "Taste of Lanka",
      location: "Colombo",
      image: "/gallery/curry-feast.jpg",
      description:
        "A traditional Sri Lankan rice and curry meal with various accompaniments.",
      likes: 298,
      downloads: 123,
      tags: ["curry", "rice", "traditional", "spices"],
    },
    {
      id: 6,
      title: "Vesak Lanterns",
      category: "Festivals",
      photographer: "Festival Moments",
      location: "Colombo",
      image: "/gallery/vesak-lanterns.jpg",
      description:
        "Colorful Vesak lanterns illuminating the streets during the Buddhist festival.",
      likes: 267,
      downloads: 91,
      tags: ["vesak", "lanterns", "buddhist", "festival"],
    },
    {
      id: 7,
      title: "Leopard in Yala",
      category: "Wildlife",
      photographer: "Wildlife Lanka",
      location: "Yala National Park",
      image: "/gallery/leopard-yala.jpg",
      description:
        "A majestic Sri Lankan leopard resting on a tree branch in Yala National Park.",
      likes: 445,
      downloads: 156,
      tags: ["leopard", "wildlife", "yala", "safari"],
    },
    {
      id: 8,
      title: "Fishermen on Stilts",
      category: "People",
      photographer: "Coastal Life",
      location: "Weligama",
      image: "/gallery/fishermen-stilts.jpg",
      description:
        "Traditional stilt fishermen practicing their ancient fishing method.",
      likes: 178,
      downloads: 89,
      tags: ["fishing", "stilts", "traditional", "coast"],
    },
    {
      id: 9,
      title: "Adam's Peak Pilgrimage",
      category: "Culture",
      photographer: "Sacred Journeys",
      location: "Adam's Peak",
      image: "/gallery/adams-peak.jpeg",
      description:
        "Pilgrims climbing Adam's Peak during the sacred pilgrimage season.",
      likes: 223,
      downloads: 67,
      tags: ["pilgrimage", "mountain", "sacred", "climbing"],
    },
    {
      id: 10,
      title: "Ella Nine Arch Bridge",
      category: "Architecture",
      photographer: "Railway Heritage",
      location: "Ella",
      image: "/gallery/nine-arch-bridge.jpg",
      description:
        "The iconic Nine Arch Bridge surrounded by lush green tea plantations.",
      likes: 334,
      downloads: 145,
      tags: ["bridge", "railway", "architecture", "tea"],
    },
    {
      id: 11,
      title: "Elephant Gathering",
      category: "Wildlife",
      photographer: "Nature Watch",
      location: "Minneriya",
      image: "/gallery/elephant-gathering.jpg",
      description:
        "Large herd of elephants gathering at Minneriya reservoir during dry season.",
      likes: 389,
      downloads: 178,
      tags: ["elephants", "gathering", "wildlife", "reservoir"],
    },
    {
      id: 12,
      title: "Sunset at Negombo Beach",
      category: "Nature",
      photographer: "Coastal Beauty",
      location: "Negombo",
      image: "/gallery/sunset-beach.jpg",
      description: "Golden sunset over the fishing boats at Negombo beach.",
      likes: 267,
      downloads: 98,
      tags: ["sunset", "beach", "boats", "golden"],
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Photo & Video <span className="text-purple-600">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the beauty of Sri Lanka through stunning photography
            capturing nature, culture, people, and unforgettable moments
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "hover:bg-purple-100 hover:border-purple-500"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* View Controls */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Submit Photo
            </Button>
          </div>
        </div>

        {/* Gallery Grid */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Badge className="absolute top-2 left-2 bg-purple-600 text-white">
                    {item.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>📍 {item.location}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {item.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        {item.downloads}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-gray-500">
                      by {item.photographer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-3 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <Badge className="bg-purple-600 text-white mb-2">
                          {item.category}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Heart className="h-4 w-4 mr-1" />
                          {item.likes}
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          {item.downloads}
                        </Button>
                        <Button size="sm" variant="outline">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <p>📍 {item.location}</p>
                        <p>📸 {item.photographer}</p>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* User Submission Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-8">
          <div className="text-center">
            <Camera className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Share Your Sri Lanka Moments
            </h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Have amazing photos from your Sri Lanka journey? Share them with
              fellow travelers and inspire others to visit!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                <Upload className="h-5 w-5 mr-2" />
                Submit Your Photos
              </Button>
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3"
              >
                View Submission Guidelines
              </Button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-bold text-gray-800 mb-2">High Quality</h3>
              <p className="text-gray-600 text-sm">
                Submit high-resolution photos (min 1920x1080)
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-gray-800 mb-2">Original Content</h3>
              <p className="text-gray-600 text-sm">
                Only submit your own original photographs
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-gray-800 mb-2">Get Featured</h3>
              <p className="text-gray-600 text-sm">
                Best photos featured on our homepage and social media
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
