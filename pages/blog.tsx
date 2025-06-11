"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, MessageCircle, Search, Calendar, Eye, PenTool } from "lucide-react"

export function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Adventure", "Culture", "Food", "Photography", "Budget Travel", "Solo Travel", "Family"]

  const blogPosts = [
    {
      id: 1,
      title: "My Epic 2-Week Journey Through Sri Lanka: From Ancient Temples to Pristine Beaches",
      excerpt:
        "An incredible adventure exploring the cultural triangle, hill country, and southern coast. Here's everything you need to know for the perfect Sri Lankan itinerary.",
      author: "Sarah Johnson",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Adventure",
      image: "/placeholder.svg?height=300&width=500",
      likes: 234,
      comments: 45,
      views: 1250,
      tags: ["itinerary", "temples", "beaches", "culture"],
      featured: true,
    },
    {
      id: 2,
      title: "Street Food Paradise: A Culinary Adventure in Colombo",
      excerpt:
        "Discover the incredible flavors of Sri Lankan street food. From hoppers to kottu roti, here's your guide to eating like a local in Colombo.",
      author: "Michael Chen",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Food",
      image: "/placeholder.svg?height=300&width=500",
      likes: 189,
      comments: 32,
      views: 890,
      tags: ["food", "colombo", "street food", "local cuisine"],
      featured: false,
    },
    {
      id: 3,
      title: "Capturing the Magic: Photography Tips for Sri Lanka",
      excerpt:
        "From sunrise at Sigiriya to the tea plantations of Ella, learn how to capture Sri Lanka's stunning landscapes and vibrant culture through your lens.",
      author: "Emma Rodriguez",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Photography",
      image: "/placeholder.svg?height=300&width=500",
      likes: 156,
      comments: 28,
      views: 720,
      tags: ["photography", "landscapes", "tips", "equipment"],
      featured: true,
    },
    {
      id: 4,
      title: "Budget Backpacking in Sri Lanka: $30 a Day Adventure",
      excerpt:
        "Prove that you don't need a big budget to have an amazing time in Sri Lanka. Here's how I traveled the island for just $30 a day.",
      author: "Jake Thompson",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Budget Travel",
      image: "/placeholder.svg?height=300&width=500",
      likes: 298,
      comments: 67,
      views: 1580,
      tags: ["budget", "backpacking", "hostels", "local transport"],
      featured: false,
    },
    {
      id: 5,
      title: "Solo Female Travel in Sri Lanka: Safety, Tips, and Amazing Experiences",
      excerpt:
        "My solo journey through Sri Lanka as a female traveler. Safety tips, best places to stay, and the incredible people I met along the way.",
      author: "Priya Patel",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Solo Travel",
      image: "/placeholder.svg?height=300&width=500",
      likes: 267,
      comments: 54,
      views: 1120,
      tags: ["solo travel", "female travel", "safety", "experiences"],
      featured: true,
    },
    {
      id: 6,
      title: "Family Fun in Sri Lanka: Kid-Friendly Activities and Destinations",
      excerpt:
        "Traveling with kids in Sri Lanka? Here are the best family-friendly activities, accommodations, and destinations for an unforgettable family vacation.",
      author: "David Wilson",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-03",
      readTime: "8 min read",
      category: "Family",
      image: "/placeholder.svg?height=300&width=500",
      likes: 145,
      comments: 23,
      views: 650,
      tags: ["family travel", "kids", "activities", "hotels"],
      featured: false,
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Travel{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Blogs
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover Sri Lanka through the eyes of fellow travelers. Read inspiring stories, practical tips, and hidden
            gems from real experiences.
          </p>
          <a href="#write-blog">
            <Button className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <PenTool className="h-5 w-5 mr-2" />
              Write Your Story
            </Button>
          </a>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search blogs, destinations, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-3 rounded-xl border-amber-200 focus:border-amber-500 bg-white/80 backdrop-blur-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 rounded-xl transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                    : "hover:bg-amber-50 hover:border-amber-300"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 w-1 h-8 rounded-full mr-4"></span>
              Featured Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-amber-100 rounded-2xl"
                >
                  <div className="relative">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg">
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-amber-500 text-white shadow-lg">{post.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-amber-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={post.authorAvatar || "/placeholder.svg"}
                        alt={post.author}
                        className="w-10 h-10 rounded-full border-2 border-amber-200"
                      />
                      <div>
                        <p className="font-medium text-gray-800">{post.author}</p>
                        <div className="flex items-center text-sm text-gray-500 space-x-3">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          {post.likes}
                        </span>
                        <span className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {post.comments}
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {post.views}
                        </span>
                      </div>
                      <Button variant="outline" size="sm" className="rounded-xl border-amber-300 hover:bg-amber-50">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 w-1 h-8 rounded-full mr-4"></span>
            Latest Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm border border-amber-100 rounded-2xl"
              >
                <div className="relative">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <Badge className="absolute top-3 right-3 bg-emerald-500 text-white shadow-lg">{post.category}</Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={post.authorAvatar || "/placeholder.svg"}
                      alt={post.author}
                      className="w-8 h-8 rounded-full border-2 border-amber-200"
                    />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{post.author}</p>
                      <div className="flex items-center text-xs text-gray-500 space-x-2">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Heart className="h-3 w-3 mr-1" />
                        {post.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        {post.comments}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs rounded-lg border-amber-300 hover:bg-amber-50"
                    >
                      Read
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-amber-100 via-orange-100 to-red-100 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Share Your Sri Lankan Adventure</h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Have an amazing story to tell? Inspire other travelers by sharing your experiences, tips, and discoveries
            from Sri Lanka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#write-blog">
              <Button className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <PenTool className="h-5 w-5 mr-2" />
                Write Your Blog
              </Button>
            </a>
            <Button
              variant="outline"
              className="border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-xl"
            >
              Submission Guidelines
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
