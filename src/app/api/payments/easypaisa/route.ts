export async function POST(
  request: Request
) {

  const body =
    await request.json();

  return Response.json({

    method:
      "EASYPAISA",

    account:
      process.env
        .EASYPAISA_ACCOUNT_NUMBER,

    amount:
      body.amount
  });
}
