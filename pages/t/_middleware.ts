import { NextRequest, NextResponse } from "next/server";
import { SITE_NAME } from "../../lib/constants";

export function middleware(req: NextRequest) {
  // const { pathname } = req.nextUrl;
  if ((req.ua! as any).browser.name) {
    return NextResponse.next();
  }
  // return NextResponse.redirect("http://localhost:3000/files/add-tailwind-to-next.ts");
  return NextResponse.rewrite(
    { SITE_NAME } + "/files/add-tailwind-to-next.ts"
  );
}
