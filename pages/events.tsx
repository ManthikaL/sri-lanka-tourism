import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Star } from "lucide-react";

export function EventsPage() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const festivals = [
    {
      id: 1,
      name: "Sinhala & Tamil New Year",
      month: "April",
      dates: "April 13-14",
      location: "Nationwide",
      significance:
        "Most important cultural celebration marking the traditional new year",
      description:
        "A time of family reunions, traditional games, and cultural rituals. Houses are cleaned, special foods prepared, and auspicious times observed.",
      image: "/eventspage/sinhala-tamil-new-year.jpg",
      category: "Cultural",
      duration: "2 days",
      attendance: "National Holiday",
      etiquette: [
        "Dress modestly",
        "Participate respectfully in rituals",
        "Bring gifts when visiting homes",
      ],
      highlights: [
        "Traditional games",
        "Special foods",
        "Oil lamp lighting",
        "Family gatherings",
      ],
    },
    {
      id: 2,
      name: "Vesak Festival",
      month: "May",
      dates: "May Full Moon",
      location: "Nationwide (especially Colombo)",
      significance: "Celebrates the birth, enlightenment, and death of Buddha",
      description:
        "The most sacred Buddhist festival featuring colorful lanterns, pandals (decorative displays), and acts of charity.",
      image: "/eventspage/vesak-festival.jpg",
      category: "Religious",
      duration: "3 days",
      attendance: "Free public celebration",
      etiquette: [
        "Remove shoes at temples",
        "Dress in white if possible",
        "Maintain silence during prayers",
      ],
      highlights: [
        "Vesak lanterns",
        "Pandal displays",
        "Free food stalls",
        "Temple visits",
      ],
    },
    {
      id: 3,
      name: "Kandy Esala Perahera",
      month: "July/August",
      dates: "July-August (10 nights)",
      location: "Kandy",
      significance:
        "One of Asia's grandest Buddhist processions honoring the Sacred Tooth Relic",
      description:
        "Spectacular procession featuring decorated elephants, traditional dancers, drummers, and fire performers.",
      image: "/eventspage/kandy-esala-perahera.jpg",
      category: "Religious/Cultural",
      duration: "10 nights",
      attendance: "Ticketed seating available",
      etiquette: [
        "Arrive early for good spots",
        "No flash photography",
        "Stand when elephants pass",
      ],
      highlights: [
        "Maligawa Tusker",
        "Traditional dancers",
        "Fire performers",
        "Drummers",
      ],
    },
    {
      id: 4,
      name: "Duruthu Perahera",
      month: "January",
      dates: "January Full Moon",
      location: "Kelaniya Temple, Colombo",
      significance: "Commemorates Buddha's first visit to Sri Lanka",
      description:
        "Colorful procession featuring traditional dancers, elephants, and cultural performances.",
      image: "/eventspage/duruthu-perahera.jpg",
      category: "Religious",
      duration: "1 day",
      attendance: "Free public event",
      etiquette: [
        "Respect temple rules",
        "Dress conservatively",
        "Follow crowd control instructions",
      ],
      highlights: [
        "Temple procession",
        "Cultural dances",
        "Elephant parade",
        "Religious ceremonies",
      ],
    },
    {
      id: 5,
      name: "Galle Literary Festival",
      month: "January",
      dates: "Mid-January",
      location: "Galle Fort",
      significance:
        "Premier literary event showcasing local and international authors",
      description:
        "Multi-day festival featuring book readings, discussions, workshops, and cultural events in the historic Galle Fort.",
      image: "/eventspage/galle-literary-festival.jpg",
      category: "Cultural/Literary",
      duration: "4 days",
      attendance: "Ticketed events",
      etiquette: [
        "Book in advance",
        "Respect venue rules",
        "Engage respectfully with authors",
      ],
      highlights: [
        "Author readings",
        "Panel discussions",
        "Book launches",
        "Cultural performances",
      ],
    },
    {
      id: 6,
      name: "Navam Perahera",
      month: "February",
      dates: "February Full Moon",
      location: "Gangaramaya Temple, Colombo",
      significance:
        "Celebrates the first Buddhist council and temple anniversary",
      description:
        "Urban procession featuring elephants, traditional dancers, and modern floats through Colombo streets.",
      image: "/eventspage/navam-perahera.jpg",
      category: "Religious",
      duration: "1 night",
      attendance: "Free street viewing",
      etiquette: [
        "Find safe viewing spots",
        "Respect parade route",
        "Be patient with crowds",
      ],
      highlights: [
        "Urban procession",
        "Modern floats",
        "Traditional elements",
        "Street celebrations",
      ],
    },
  ];

  const monthlyEvents = months.map((month) => ({
    month,
    events: festivals.filter((festival) => festival.month.includes(month)),
  }));

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Events & <span className="text-orange-600">Festivals</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience Sri Lanka's vibrant cultural calendar filled with
            colorful festivals, religious celebrations, and cultural events
            throughout the year
          </p>
        </div>

        {/* Festival Calendar */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Festival Calendar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyEvents.map((monthData, index) => (
              <Card
                key={index}
                className={`border-2 ${
                  monthData.events.length > 0
                    ? "border-orange-200 bg-orange-50"
                    : "border-gray-200"
                }`}
              >
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-orange-600" />
                    {monthData.month}
                  </h3>
                  {monthData.events.length > 0 ? (
                    <div className="space-y-2">
                      {monthData.events.map((event) => (
                        <div key={event.id} className="text-sm">
                          <p className="font-medium text-gray-800">
                            {event.name}
                          </p>
                          <p className="text-gray-600">{event.dates}</p>
                          <Badge variant="secondary" className="text-xs mt-1">
                            {event.category}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">No major festivals</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Festivals */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Major Festivals & Events
          </h2>
          <div className="space-y-8">
            {festivals.map((festival) => (
              <Card
                key={festival.id}
                className="overflow-hidden border-2 border-orange-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <img
                      src={festival.image || "/placeholder.svg"}
                      alt={festival.name}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {festival.name}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge className="bg-orange-600 text-white">
                            {festival.category}
                          </Badge>
                          <Badge variant="outline">{festival.duration}</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {festival.dates}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {festival.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {festival.duration}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        {festival.attendance}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {festival.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Cultural Significance:
                      </h4>
                      <p className="text-gray-700 text-sm">
                        {festival.significance}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Highlights:
                        </h4>
                        <ul className="space-y-1">
                          {festival.highlights.map((highlight, index) => (
                            <li
                              key={index}
                              className="flex items-start text-sm text-gray-700"
                            >
                              <Star className="h-3 w-3 mt-1 mr-2 text-yellow-500 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Etiquette & Tips:
                        </h4>
                        <ul className="space-y-1">
                          {festival.etiquette.map((tip, index) => (
                            <li
                              key={index}
                              className="flex items-start text-sm text-gray-700"
                            >
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Attend */}
        <div className="bg-gradient-to-r from-orange-100 to-green-100 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            How to Attend Festivals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-orange-200">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Locations
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Most festivals are free and public</li>
                  <li>• Major cities: Colombo, Kandy, Galle</li>
                  <li>• Temple complexes and public spaces</li>
                  <li>• Check local announcements for exact venues</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Etiquette
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Dress modestly and respectfully</li>
                  <li>• Remove shoes at religious sites</li>
                  <li>• Follow photography guidelines</li>
                  <li>• Respect local customs and traditions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Planning Tips
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Book accommodation early</li>
                  <li>• Arrive early for best viewing spots</li>
                  <li>• Bring water and sun protection</li>
                  <li>• Learn basic cultural greetings</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
