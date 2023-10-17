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
