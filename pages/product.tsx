"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"

interface ProductPageProps {
  productId: string
}

export function ProductPage({ productId }: ProductPageProps) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock product data - in real app, fetch based on productId
  const product = {
    id: productId,
    name: "Ceylon Tea Gift Set",
    category: "Tea & Spices",
    price: 45,
    originalPrice: 55,
    rating: 4.8,
    reviews: 124,
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    description:
      "Experience the finest Ceylon tea with our premium gift set featuring six distinct flavors from different regions of Sri Lanka. Each tea is carefully selected from high-altitude plantations and processed using traditional methods to preserve the authentic taste and aroma.",
    features: [
      "Six premium tea varieties",
      "Sourced from high-altitude plantations",
      "Traditional processing methods",
      "Beautiful gift packaging",
      "Includes brewing instructions",
      "Perfect for tea enthusiasts",
    ],
    specifications: {
      Weight: "300g total",
      Origin: "Nuwara Eliya, Sri Lanka",
      Packaging: "Eco-friendly gift box",
      "Shelf Life": "2 years",
      Certification: "Ceylon Tea Board Certified",
    },
    inStock: true,
    stockCount: 15,
    shipping: "Free worldwide shipping on orders over $50",
  }

  const relatedProducts = [
    {
      id: "2",
      name: "Cinnamon Bark Bundle",
      price: 15,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
    },
    {
      id: "4",
      name: "Spice Collection Set",
      price: 32,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
    },
    {
      id: "8",
      name: "Ayurvedic Herbal Kit",
      price: 38,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
    },
  ]

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
    })
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <a href="#home" className="text-gray-500 hover:text-gray-700">
            Home
          </a>
          <span className="mx-2 text-gray-400">/</span>
          <a href="#shop" className="text-gray-500 hover:text-gray-700">
            Shop
          </a>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={product.images[selectedImage] || "/placeholder.svg?height=500&width=500"}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg border-2 border-orange-100"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? "border-orange-500" : "border-gray-200"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg?height=100&width=100"}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              <Badge className="bg-orange-100 text-orange-800 mb-2">{product.category}</Badge>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium">{product.rating}</span>
                </div>
                <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-3xl font-bold text-gray-800">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <Badge className="bg-green-600 text-white">Save ${product.originalPrice - product.price}</Badge>
                )}
              </div>
              <p className="text-sm text-green-600 font-medium">{product.shipping}</p>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <label className="font-medium text-gray-800">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-500">({product.stockCount} in stock)</span>
              </div>

              <div className="flex space-x-4 mb-6">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="px-4">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" className="px-4">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Truck className="h-5 w-5 text-green-600" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="h-5 w-5 text-blue-600" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <RotateCcw className="h-5 w-5 text-orange-600" />
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Specifications</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-700">{key}:</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={relatedProduct.image || "/placeholder.svg?height=200&width=200"}
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-800">${relatedProduct.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm ml-1">{relatedProduct.rating}</span>
                    </div>
                  </div>
                  <a href={`#product-${relatedProduct.id}`} className="block mt-3">
                    <Button variant="outline" className="w-full">
                      View Product
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
