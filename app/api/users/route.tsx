import Server, { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Mosh" },
    { id: 2, name: "Chibueze" },
  ]);
}

export async function POST(request: NextRequest) {
  //Get the response body and convert it to JSON
  const body = await request.json();

  return NextResponse.json({ id: 1, name: body.name });
}
