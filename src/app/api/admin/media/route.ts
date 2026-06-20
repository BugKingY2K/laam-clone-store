import cloudinary from "@/lib/cloudinary";

export async function POST(
  request: Request
) {

  const body =
    await request.json();

  const result =
    await cloudinary.uploader.upload(
      body.image
    );

  return Response.json({
    url:
      result.secure_url
  });
}
