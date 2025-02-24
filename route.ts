import { NextResponse } from "next/server"
import mongoose from "mongoose"
import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ipa-website"
mongoose.connect(MONGODB_URI)

// Define Contact schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  aiResponse: String,
  createdAt: { type: Date, default: Date.now },
})

// Create Contact model
const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    // Generate AI response
    const aiResponse = await generateAIResponse(message)

    // Save contact form submission to database
    const contact = new Contact({ name, email, message, aiResponse })
    await contact.save()

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 })
  }
}

async function generateAIResponse(message: string): Promise<string> {
  const prompt = `As an AI assistant for a company specializing in Intelligent Process Automation, 
  provide a brief response to the following customer inquiry: "${message}"`

  const result = await streamText({
    model: openai("gpt-4o"),
    prompt,
  })

  return result.text
}

