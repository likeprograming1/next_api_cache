import { revalidatePath } from "next/cache";
export const GET = async (request) => {
  try {
    // Extract the 'path' parameter from the request's URL
    const path = request.nextUrl.searchParams.get("path");

    if (path) {
      // Call revalidatePath with the extracted path
      revalidatePath(path);
      return Response.json(
        { revalidated: true, now: Date.now() },
        { status: 200 }
      );
    }

    // Return a response if the 'path' parameter is missing
    return Response.json(
      {
        revalidated: false,
        now: Date.now(),
        message: "Missing path to revalidate",
      },
      { status: 202 }
    );
  } catch (error) {
    // Return a response in case of an error
    return Response.json({ error: `Error: ${error.message}` }, { status: 500 });
  }
};
