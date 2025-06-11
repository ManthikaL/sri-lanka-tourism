import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Camera, ShoppingBag, Clock } from "lucide-react";

export function HomePage() {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-orange-600" />,
      title: "Amazing Places",
      description:
        "Explore ancient temples, pristine beaches, and lush tea plantations",
    },
    {
      icon: <Camera className="h-8 w-8 text-green-600" />,
      title: "Unique Activities",
      description: "Safari adventures, cultural experiences, and water sports",
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-red-600" />,
      title: "Authentic Souvenirs",
      description: "Take home genuine Sri Lankan crafts and specialties",
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-600" />,
      title: "Rich History",
      description: "Discover 2,500 years of fascinating cultural heritage",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/home/home-page.jpg"
          alt="Sri Lankan landscape with ancient temple"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
            Welcome to Sri Lanka
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            The Pearl of the Indian Ocean awaits your discovery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#places">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
              >
                Explore Places
              </Button>
            </a>
            <a href="#shop">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3"
              >
                Shop Souvenirs
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Visit Sri Lanka?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From ancient wonders to natural beauty, Sri Lanka offers
              unforgettable experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow border-2 border-orange-100"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Preview Section */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-green-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="/home/Sigiriya-home.jpg"
                alt="Sigiriya Rock Fortress"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-red-700">
                  Historic Sigiriya
                </h3>
                <p className="text-gray-600 mb-4">
                  Ancient rock fortress with stunning frescoes and gardens
                </p>
                <a href="#places">
                  <Button className="bg-red-600 hover:bg-red-700">
                    Learn More
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="/home/tea-home.jpg"
                alt="Tea plantation in Nuwara Eliya"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-700">
                  Tea Country
                </h3>
                <p className="text-gray-600 mb-4">
                  Rolling hills covered in emerald tea plantations
                </p>
                <a href="#activities">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Explore
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="/home/authentic-crafts-home.jpg"
                alt="Traditional Sri Lankan handicrafts"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-orange-700">
                  Authentic Crafts
                </h3>
                <p className="text-gray-600 mb-4">
                  Handmade treasures and traditional souvenirs
                </p>
                <a href="#shop">
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    Shop Now
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
