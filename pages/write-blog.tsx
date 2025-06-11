"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Upload, ImageIcon, Eye, Save, Send, X, Plus } from "lucide-react"

export function WriteBlogPage() {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: [] as string[],
    authorName: "",
    authorEmail: "",
    readTime: "",
  })
  const [newTag, setNewTag] = useState("")
  const [isPreview, setIsPreview] = useState(false)

  const categories = ["Adventure", "Culture", "Food", "Photography", "Budget Travel", "Solo Travel", "Family", "Nature"]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }))
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  const handleSubmit = () => {
    // Simulate blog submission
    alert("Thank you for your submission! Your blog post will be reviewed and published within 24-48 hours.")
    // Reset form
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      tags: [],
      authorName: "",
      authorEmail: "",
      readTime: "",
    })
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Share Your{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Story
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Inspire fellow travelers by sharing your Sri Lankan adventure. Your experiences could help someone plan
            their perfect trip!
          </p>
        </div>

        {/* Guidelines */}
        <Card className="mb-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">✍️ Writing Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <ul className="space-y-2">
                <li>• Write from personal experience</li>
                <li>• Include practical tips and advice</li>
                <li>• Use high-quality photos (optional)</li>
                <li>• Be honest about costs and challenges</li>
              </ul>
              <ul className="space-y-2">
                <li>• Minimum 500 words for detailed posts</li>
                <li>• Respect local culture and people</li>
                <li>• Include specific locations and dates</li>
                <li>• Proofread before submitting</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Preview */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-1 shadow-lg border border-amber-200">
            <Button
              variant={!isPreview ? "default" : "ghost"}
              onClick={() => setIsPreview(false)}
              className={`rounded-lg px-6 py-2 ${!isPreview ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white" : "text-gray-600"}`}
            >
              ✏️ Write
            </Button>
            <Button
              variant={isPreview ? "default" : "ghost"}
              onClick={() => setIsPreview(true)}
              className={`rounded-lg px-6 py-2 ${isPreview ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white" : "text-gray-600"}`}
            >
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
          </div>
        </div>

        {!isPreview ? (
          /* Write Mode */
          <Card className="bg-white/80 backdrop-blur-sm border border-amber-100 rounded-2xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Author Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="authorName" className="text-gray-700 font-medium">
                      Your Name *
                    </Label>
                    <Input
                      id="authorName"
                      value={formData.authorName}
                      onChange={(e) => handleInputChange("authorName", e.target.value)}
                      placeholder="Enter your name"
                      className="mt-2 rounded-xl border-amber-200 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="authorEmail" className="text-gray-700 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="authorEmail"
                      type="email"
                      value={formData.authorEmail}
                      onChange={(e) => handleInputChange("authorEmail", e.target.value)}
                      placeholder="your@email.com"
                      className="mt-2 rounded-xl border-amber-200 focus:border-amber-500"
                    />
                  </div>
                </div>

                {/* Blog Title */}
                <div>
                  <Label htmlFor="title" className="text-gray-700 font-medium">
                    Blog Title *
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="Give your story an engaging title..."
                    className="mt-2 rounded-xl border-amber-200 focus:border-amber-500"
                  />
                </div>

                {/* Category and Read Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="category" className="text-gray-700 font-medium">
                      Category *
                    </Label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) => handleInputChange("category", e.target.value)}
                      className="mt-2 w-full px-4 py-2 rounded-xl border border-amber-200 focus:border-amber-500 focus:outline-none bg-white"
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="readTime" className="text-gray-700 font-medium">
                      Estimated Read Time
                    </Label>
                    <Input
                      id="readTime"
                      value={formData.readTime}
                      onChange={(e) => handleInputChange("readTime", e.target.value)}
                      placeholder="e.g., 5 min read"
                      className="mt-2 rounded-xl border-amber-200 focus:border-amber-500"
                    />
                  </div>
                </div>

                {/* Excerpt */}
                <div>
                  <Label htmlFor="excerpt" className="text-gray-700 font-medium">
                    Short Description *
                  </Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => handleInputChange("excerpt", e.target.value)}
                    placeholder="Write a compelling summary of your story (2-3 sentences)..."
                    rows={3}
                    className="mt-2 rounded-xl border-amber-200 focus:border-amber-500"
                  />
                </div>

                {/* Tags */}
                <div>
                  <Label className="text-gray-700 font-medium">Tags</Label>
                  <div className="mt-2 flex flex-wrap gap-2 mb-3">
                    {formData.tags.map((tag, index) => (
                      <Badge key={index} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                        {tag}
                        <button onClick={() => removeTag(tag)} className="ml-2 text-amber-600 hover:text-amber-800">
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add a tag..."
                      className="rounded-xl border-amber-200 focus:border-amber-500"
                      onKeyPress={(e) => e.key === "Enter" && addTag()}
                    />
                    <Button
                      onClick={addTag}
                      variant="outline"
                      className="rounded-xl border-amber-300 hover:bg-amber-50"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Main Content */}
                <div>
                  <Label htmlFor="content" className="text-gray-700 font-medium">
                    Your Story *
                  </Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => handleInputChange("content", e.target.value)}
                    placeholder="Share your Sri Lankan adventure! Include details about places you visited, experiences you had, tips for other travelers, costs, challenges, and highlights. The more detailed and personal, the better!"
                    rows={15}
                    className="mt-2 rounded-xl border-amber-200 focus:border-amber-500"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <Label className="text-gray-700 font-medium">Photos (Optional)</Label>
                  <div className="mt-2 border-2 border-dashed border-amber-300 rounded-xl p-8 text-center hover:border-amber-400 transition-colors">
                    <ImageIcon className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Drag and drop your photos here, or click to browse</p>
                    <p className="text-sm text-gray-500">Support: JPG, PNG, WebP (Max 5MB each)</p>
                    <Button variant="outline" className="mt-4 rounded-xl border-amber-300 hover:bg-amber-50">
                      <Upload className="h-4 w-4 mr-2" />
                      Choose Files
                    </Button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    onClick={handleSubmit}
                    className="flex-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Submit for Review
                  </Button>
                  <Button variant="outline" className="flex-1 border-amber-300 hover:bg-amber-50 py-3 rounded-xl">
                    <Save className="h-5 w-5 mr-2" />
                    Save Draft
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Preview Mode */
          <Card className="bg-white/80 backdrop-blur-sm border border-amber-100 rounded-2xl">
            <CardContent className="p-8">
              <div className="mb-6">
                <Badge className="bg-amber-500 text-white mb-4">{formData.category || "Category"}</Badge>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{formData.title || "Your Blog Title"}</h1>
                <div className="flex items-center space-x-4 text-gray-600 mb-6">
                  <span>By {formData.authorName || "Your Name"}</span>
                  <span>•</span>
                  <span>{formData.readTime || "X min read"}</span>
                  <span>•</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  {formData.excerpt || "Your blog excerpt will appear here..."}
                </p>
              </div>

              <div className="prose max-w-none">
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {formData.content || "Your blog content will appear here..."}
                </div>
              </div>

              {formData.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-amber-200">
                  <h4 className="font-medium text-gray-800 mb-3">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-amber-300 text-amber-700">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
