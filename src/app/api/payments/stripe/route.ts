import { stripe } from "@/lib/stripe";

export async function POST(
  request: Request
) {

  const body =
    await request.json();

  const session =
    await stripe.checkout.sessions.create({

      mode: "payment",

      line_items:
        body.items,

      success_url:
        `${process.env.NEXTAUTH_URL}/success`,

      cancel_url:
        `${process.env.NEXTAUTH_URL}/cart`
    });

  return Response.json({
    url: session.url
  });
}
