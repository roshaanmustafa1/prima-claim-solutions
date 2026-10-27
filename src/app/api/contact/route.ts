import { consultationFormSchema, ApiResponse } from "@/types"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Server-side Zod validation
    const validationResult = consultationFormSchema.safeParse(body)

    if (!validationResult.success) {
      const fieldErrors: Record<string, string[]> = {}
      for (const issue of validationResult.error.issues) {
        const path = issue.path.join(".")
        if (!fieldErrors[path]) {
          fieldErrors[path] = []
        }
        fieldErrors[path].push(issue.message)
      }

      const response: ApiResponse = {
        success: false,
        message: "Invalid submission data. Please correct the highlighted errors.",
        errors: fieldErrors,
      }

      return Response.json(response, { status: 400 })
    }

    const validData = validationResult.data

    // In a production environment, this would integrate with an EHR CRM, secure webhook, or encrypted PostgreSQL database
    console.log("[Prime Claim Solutions] Inbound Consultation Audit Request Received:", {
      fullName: validData.fullName,
      email: validData.email,
      phone: validData.phone,
      practiceName: validData.practiceName,
      monthlyVolume: validData.monthlyVolume,
      ehrSystem: validData.ehrSystem,
      hasNotes: !!validData.message,
      timestamp: new Date().toISOString(),
    })

    const response: ApiResponse<{ requestId: string }> = {
      success: true,
      message:
        "Your complimentary 14-point RCM audit request has been registered. A Prime Claim Solutions Practice Director will contact you within 2 business hours.",
      data: {
        requestId: `PCS-${Date.now().toString(36).toUpperCase()}`,
      },
    }

    return Response.json(response, { status: 200 })
  } catch (err: unknown) {
    console.error("[Prime Claim Solutions] Error processing contact submission:", err)

    const response: ApiResponse = {
      success: false,
      message: "An internal server error occurred while processing your request.",
    }

    return Response.json(response, { status: 500 })
  }
}
