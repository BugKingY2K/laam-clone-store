export async function POST(
  request: Request
) {

  const body =
    await request.json();

  return Response.json({

    method:
      "JAZZCASH",

    amount:
      body.amount,

    status:
      "pending"
  });
}
