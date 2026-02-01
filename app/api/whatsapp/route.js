export async function POST(req) {
  try {
    const data = await req.json();

    const response = await fetch(
      "https://graph.facebook.com/v22.0/984721394721423/messages",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: "94767785300",
          type: "template",
          template: {
            name: "new_lead_alert",
            language: { code: "en" },
            components: [
              {
                type: "body",
                parameters: [
                  { type: "text", text: data.name },
                  { type: "text", text: data.email },
                  { type: "text", text: data.service },
                  { type: "text", text: data.message },
                ],
              },
            ],
          },
        }),
      }
    );

    const result = await response.json();

    return Response.json({ success: true, result });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}
