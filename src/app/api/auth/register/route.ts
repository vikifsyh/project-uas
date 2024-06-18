import { register } from "@/app/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();
  const res = await register(req);
  return NextResponse.json(
    { status: res.status, message: res.message },
    { status: res.statusCode }
  );

  // await register(
  //   req,
  //   ({ status, message }: { status: boolean; message: string }) => {
  //     if (status) {
  //       return NextResponse.json({ status, message }, { status: 200 });
  //     } else {
  //       return NextResponse.json({ status, message }, { status: 400 });
  //     }
  //   }
  // );
}
