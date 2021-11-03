import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if ((req.ua! as any).browser.name) {
    return NextResponse.next();
  }
  // return NextResponse.redirect("http://localhost:3000/files" + pathname);
  return NextResponse.rewrite("http://localhost:3000/files" + pathname);
}
