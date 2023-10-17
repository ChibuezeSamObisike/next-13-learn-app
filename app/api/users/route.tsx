import Server, { NextRequest, NextResponse } from "next/server";

import schema from "./schema";

export async function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Mosh" },
    { id: 2, name: "Chibueze" },
  ]);
}

export async function POST(request: NextRequest) {
  //Get the response body and convert it to JSON
  const body = await request.json();

  const validation = schema.safeParse(body);

  //We need to validate the body of the request validate then return 400 error
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name });
}
