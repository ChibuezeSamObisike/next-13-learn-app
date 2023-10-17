import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, props: Props) {
  const {
    params: { id },
  } = props;

  //Fetch Data from DB
  // If not found return a 404 error
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id, name: "Mosh" });
}

//PUT for replacing an Object
// Patch for replacing one or more properties

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  // Validate the request body
  // Fetch user with the given ID
  //Update the user and return

  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(request: NextRequest, props: Props) {
  const {
    params: { id },
  } = props;

  //Fetch user from db

  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({});
}
