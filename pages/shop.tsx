"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Filter } from "lucide-react";
import { useCart } from "@/contexts/cart-context";

export function ShopPage() {
  const { addItem } = useCart();

  const products = [
    {
      id: "1",
      name: "Ceylon Tea Gift Set",
      category: "Tea & Spices",
      price: 45,
      originalPrice: 55,
      rating: 4.8,
      reviews: 124,
      image: "/shoppage/ceylon-tea.jpg",
      description: "Premium Ceylon tea collection with 6 different flavors",
      inStock: true,
      featured: true,
    },
    {
      id: "2",
      name: "Handwoven Batik Sarong",
      category: "Textiles",
      price: 35,
      originalPrice: null,
      rating: 4.6,
      reviews: 89,
      image: "/shoppage/batik-sarong.jpg",
      description: "Traditional Sri Lankan batik sarong with elephant motifs",
      inStock: true,
      featured: false,
    },
    {
      id: "3",
      name: "Wooden Elephant Sculpture",
      category: "Handicrafts",
      price: 28,
      originalPrice: 35,
      rating: 4.7,
      reviews: 156,
      image: "/shoppage/wooden-elephant.jpg",
      description: "Hand-carved wooden elephant from sustainable teak",
      inStock: true,
      featured: true,
    },
    {
      id: "4",
      name: "Cinnamon Bark Bundle",
      category: "Tea & Spices",
      price: 15,
      originalPrice: null,
      rating: 4.9,
      reviews: 203,
      image: "/shoppage/cinnamon-bark.jpg",
      description: "Authentic Ceylon cinnamon bark, premium quality",
      inStock: true,
      featured: false,
    },
    {
      id: "5",
      name: "Gem Stone Jewelry Set",
      category: "Jewelry",
      price: 120,
      originalPrice: 150,
      rating: 4.5,
      reviews: 67,
      image: "/shoppage/gem-stone.jpg",
      description: "Blue sapphire and moonstone jewelry set",
      inStock: false,
      featured: true,
    },
    {
      id: "6",
      name: "Coconut Shell Bowl Set",
      category: "Handicrafts",
      price: 22,
      originalPrice: null,
      rating: 4.4,
      reviews: 91,
      image: "/shoppage/coconut-shell-bowl.jpg",
      description: "Eco-friendly coconut shell bowls, set of 4",
      inStock: true,
      featured: false,
    },
    {
      id: "7",
      name: "Traditional Mask Collection",
      category: "Art & Culture",
      price: 65,
      originalPrice: 80,
      rating: 4.8,
      reviews: 78,
      image: "/shoppage/traditional-mask.jpg",
      description: "Set of 3 traditional Sri Lankan devil dance masks",
      inStock: true,
      featured: true,
    },
    {
      id: "8",
      name: "Ayurvedic Herbal Kit",
      category: "Health & Wellness",
      price: 38,
      originalPrice: null,
      rating: 4.6,
      reviews: 112,
      image: "/shoppage/ayurvedic-herbal.jpg",
      description: "Traditional Ayurvedic herbs and oils collection",
      inStock: true,
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Tea & Spices",
    "Textiles",
    "Handicrafts",
    "Jewelry",
    "Art & Culture",
    "Health & Wellness",
  ];

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Authentic Sri Lankan{" "}
            <span className="text-orange-600">Souvenirs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take home genuine Sri Lankan crafts, spices, and treasures that
            capture the essence of our beautiful island
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-orange-100 hover:border-orange-500 px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            More Filters
          </Button>
        </div>

        {/* Featured Products Banner */}
        <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-lg p-6 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-2">Featured Products</h2>
          <p className="text-orange-100">
            Handpicked authentic items that represent the best of Sri Lankan
            craftsmanship
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-orange-100"
            >
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg?height=300&width=300"}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.featured && (
                  <Badge className="absolute top-2 left-2 bg-red-600 text-white">
                    Featured
                  </Badge>
                )}
                {product.originalPrice && (
                  <Badge className="absolute top-2 right-2 bg-green-600 text-white">
                    Sale
                  </Badge>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge className="bg-gray-800 text-white">
                      Out of Stock
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-orange-100 text-orange-800"
                  >
                    {product.category}
                  </Badge>
                </div>

                <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-800">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <a href={`#product-${product.id}`} className="flex-1">
                    <Button variant="outline" className="w-full text-sm">
                      View Details
                    </Button>
                  </a>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                    size="sm"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Shop With Us */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6 border-2 border-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Authentic Products</h3>
            <p className="text-gray-600 text-sm">
              All items are genuine Sri Lankan products sourced directly from
              local artisans
            </p>
          </Card>

          <Card className="text-center p-6 border-2 border-orange-100">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600 text-sm">
              Each product is carefully selected and quality-checked before
              shipping
            </p>
          </Card>

          <Card className="text-center p-6 border-2 border-red-100">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Worldwide Shipping</h3>
            <p className="text-gray-600 text-sm">
              We ship authentic Sri Lankan products to customers around the
              globe
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
