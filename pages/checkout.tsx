"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Truck, Shield, ArrowLeft } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import Image from "next/image"

export function CheckoutPage() {
  const { items, getTotal, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    phone: "",
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    // Simulate order processing
    alert("Order placed successfully! You will receive a confirmation email shortly.")
    clearCart()
    // In real app, redirect to order confirmation page
  }

  const subtotal = getTotal()
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <a href="#cart">
              <Button variant="ghost" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Cart
              </Button>
            </a>
            <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-600"}`}
              >
                1
              </div>
              <div className={`w-16 h-1 ${step >= 2 ? "bg-orange-600" : "bg-gray-200"}`}></div>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-600"}`}
              >
                2
              </div>
              <div className={`w-16 h-1 ${step >= 3 ? "bg-orange-600" : "bg-gray-200"}`}></div>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-600"}`}
              >
                3
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {step === 1 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h2>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          placeholder="123 Main Street"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                            placeholder="New York"
                          />
                        </div>
                        <div>
                          <Label htmlFor="postalCode">Postal Code</Label>
                          <Input
                            id="postalCode"
                            value={formData.postalCode}
                            onChange={(e) => handleInputChange("postalCode", e.target.value)}
                            placeholder="10001"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          value={formData.country}
                          onChange={(e) => handleInputChange("country", e.target.value)}
                          placeholder="United States"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <Button onClick={() => setStep(2)} className="w-full mt-6 bg-orange-600 hover:bg-orange-700">
                      Continue to Shipping
                    </Button>
                  </CardContent>
                </Card>
              )}

              {step === 2 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Shipping Method</h2>
                    <RadioGroup defaultValue="standard" className="space-y-4">
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="standard" id="standard" />
                        <div className="flex-1">
                          <Label htmlFor="standard" className="font-medium">
                            Standard Shipping
                          </Label>
                          <p className="text-sm text-gray-600">5-7 business days</p>
                        </div>
                        <span className="font-medium text-green-600">Free</span>
                      </div>

                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="express" id="express" />
                        <div className="flex-1">
                          <Label htmlFor="express" className="font-medium">
                            Express Shipping
                          </Label>
                          <p className="text-sm text-gray-600">2-3 business days</p>
                        </div>
                        <span className="font-medium">$15.00</span>
                      </div>

                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="overnight" id="overnight" />
                        <div className="flex-1">
                          <Label htmlFor="overnight" className="font-medium">
                            Overnight Shipping
                          </Label>
                          <p className="text-sm text-gray-600">Next business day</p>
                        </div>
                        <span className="font-medium">$35.00</span>
                      </div>
                    </RadioGroup>

                    <div className="flex space-x-4 mt-6">
                      <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                        Back
                      </Button>
                      <Button onClick={() => setStep(3)} className="flex-1 bg-orange-600 hover:bg-orange-700">
                        Continue to Payment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {step === 3 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Payment Information</h2>

                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) => handleInputChange("paymentMethod", value)}
                      className="mb-6"
                    >
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="card" id="card" />
                        <CreditCard className="h-5 w-5" />
                        <Label htmlFor="card">Credit/Debit Card</Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal">PayPal</Label>
                      </div>
                    </RadioGroup>

                    {formData.paymentMethod === "card" && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            value={formData.cardNumber}
                            onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>

                        <div>
                          <Label htmlFor="nameOnCard">Name on Card</Label>
                          <Input
                            id="nameOnCard"
                            value={formData.nameOnCard}
                            onChange={(e) => handleInputChange("nameOnCard", e.target.value)}
                            placeholder="John Doe"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input
                              id="expiryDate"
                              value={formData.expiryDate}
                              onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              value={formData.cvv}
                              onChange={(e) => handleInputChange("cvv", e.target.value)}
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center space-x-2 mt-6">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the Terms of Service and Privacy Policy
                      </Label>
                    </div>

                    <div className="flex space-x-4 mt-6">
                      <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                        Back
                      </Button>
                      <Button onClick={handleSubmit} className="flex-1 bg-green-600 hover:bg-green-700">
                        Place Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6 pt-4 border-t">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span>Secure SSL encryption</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Truck className="h-4 w-4 text-blue-600" />
                      <span>Free worldwide shipping</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
