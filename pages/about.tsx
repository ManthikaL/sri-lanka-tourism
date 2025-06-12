import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, TrendingUp, Heart, Globe, Leaf } from "lucide-react";
import Image from "next/image";

export function AboutPage() {
  const stats = [
    {
      label: "Population",
      value: "22.2 Million",
      icon: <Users className="h-6 w-6 text-blue-600" />,
    },
    {
      label: "Capital",
      value: "Sri Jayawardenepura Kotte",
      icon: <MapPin className="h-6 w-6 text-red-600" />,
    },
    {
      label: "GDP Growth",
      value: "4.2%",
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
    },
    {
      label: "Languages",
      value: "Sinhala, Tamil, English",
      icon: <Globe className="h-6 w-6 text-orange-600" />,
    },
  ];

  const currentChallenges = [
    {
      title: "Economic Recovery",
      description:
        "Sri Lanka is working towards economic stabilization with international support and structural reforms.",
      status: "In Progress",
    },
    {
      title: "Tourism Revival",
      description:
        "The tourism industry is recovering with new initiatives to attract international visitors.",
      status: "Improving",
    },
    {
      title: "Infrastructure Development",
      description:
        "Major infrastructure projects are underway to improve connectivity and facilities.",
      status: "Active",
    },
  ];

  const achievements = [
    {
      title: "High Literacy Rate",
      description: "92.6% literacy rate, one of the highest in South Asia",
      icon: <Heart className="h-8 w-8 text-red-600" />,
    },
    {
      title: "Biodiversity Hotspot",
      description:
        "Home to 26% of endemic flowering plants and 16% of endemic mammals",
      icon: <Leaf className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Tea Excellence",
      description: "World's 4th largest tea producer with premium Ceylon tea",
      icon: <Globe className="h-8 w-8 text-orange-600" />,
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-green-600">Sri Lanka</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the current status, achievements, and future prospects of
            the Pearl of the Indian Ocean
          </p>
        </div>

        {/* Country Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              The Pearl of the Indian Ocean
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Sri Lanka, officially the Democratic Socialist Republic of Sri
                Lanka, is an island nation in South Asia located in the Indian
                Ocean southwest of the Bay of Bengal and southeast of the
                Arabian Sea.
              </p>
              <p>
                Known for its rich cultural heritage, stunning natural beauty,
                and warm hospitality, Sri Lanka has been a crossroads of trade
                and culture for over two millennia. The country boasts eight
                UNESCO World Heritage Sites and is renowned for its
                biodiversity, ancient civilizations, and premium tea production.
              </p>
              <p>
                Today, Sri Lanka is working towards sustainable development
                while preserving its unique cultural identity and natural
                environment. The nation continues to be a popular destination
                for travelers seeking authentic experiences, from ancient
                temples to pristine beaches.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/about/pearl-indian-ocean.jpg"
              alt="Sri Lankan landscape with flag colors"
              width={700}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Key Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow border-2 border-orange-100"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Status */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Current Status & Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentChallenges.map((challenge, index) => (
              <Card key={index} className="border-2 border-green-100">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">
                      {challenge.title}
                    </h3>
                    <Badge
                      className={`
                      ${
                        challenge.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : ""
                      }
                      ${
                        challenge.status === "Improving"
                          ? "bg-green-100 text-green-800"
                          : ""
                      }
                      ${
                        challenge.status === "Active"
                          ? "bg-blue-100 text-blue-800"
                          : ""
                      }
                    `}
                    >
                      {challenge.status}
                    </Badge>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Notable Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow border-2 border-red-100"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Geography & Climate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="border-2 border-orange-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Geography
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Area:</strong> 65,610 km² (25,330 sq mi)
                </li>
                <li>
                  <strong>Coastline:</strong> 1,340 km of pristine beaches
                </li>
                <li>
                  <strong>Highest Point:</strong> Pidurutalagala (2,524 m)
                </li>
                <li>
                  <strong>Climate Zones:</strong> Tropical, Hill Country, Dry
                  Zone
                </li>
                <li>
                  <strong>Monsoons:</strong> Southwest (May-Sep), Northeast
                  (Dec-Feb)
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Economy</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Currency:</strong> Sri Lankan Rupee (LKR)
                </li>
                <li>
                  <strong>Main Industries:</strong> Tea, Textiles, Tourism, IT
                </li>
                <li>
                  <strong>Exports:</strong> Tea, Garments, Gems, Coconut
                  products
                </li>
                <li>
                  <strong>Agriculture:</strong> Rice, Tea, Rubber, Coconut
                </li>
                <li>
                  <strong>Services:</strong> Growing IT and financial sectors
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Future Outlook */}
        <div className="bg-gradient-to-r from-green-100 to-orange-100 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Future Outlook
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Sri Lanka is positioned for sustainable growth with focus on
              digital transformation, renewable energy, and sustainable tourism.
              The country aims to become a knowledge-based economy while
              preserving its cultural heritage and natural environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-green-700 mb-2">
                  Green Economy
                </h4>
                <p className="text-gray-600">
                  Transition to renewable energy and sustainable practices
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">
                  Digital Hub
                </h4>
                <p className="text-gray-600">
                  Developing as a regional technology and innovation center
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-orange-700 mb-2">
                  Tourism Excellence
                </h4>
                <p className="text-gray-600">
                  Sustainable tourism focusing on authentic experiences
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-gradient-to-r from-orange-600 to-green-600 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-4">
            Experience Sri Lanka Today
          </h2>
          <p className="text-xl mb-6">
            Join us in discovering the beauty, culture, and warmth of Sri Lanka
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Plan Your Visit
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
