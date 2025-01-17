import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOiA4ODcyNDYsICJ0eXBlIjogImN1c3RvZHkiLCAia2V5IjogIjB4N0Q0MDBGRDFGNTkyYkI0RkNkNmEzNjNCZkQyMDBBNDNEMTY3MDRlNyJ9",
      payload: "eyJkb21haW4iOiAiaG9yc2VmYWN0c2V0aC1haXJob3Jud2F2ZS52ZXJjZWwuYXBwIn0",
      signature: "MHhkYjkzOTBmMTg1YmEyMzdmNWYwZTdhYzEwMzkzZTIzODgzODk3NzM4YWIwYzU5ZjkzOGRhZTI5Mjg0NjZiN2Q3NjZlYzdiYjkzMTk2N2I1OGE5ZTg5NjkwNWJjNTlhYjVkYjUyOGI1YWQ5ZjY0MDY5MDJjN2JkNGIzODcwZmI3ZDFj"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
