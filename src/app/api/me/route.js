import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Sukrit arkornsakul",
    studentId: "630610649",
  });
};
