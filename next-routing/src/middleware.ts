import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isLogin = true; // ganti true untuk simulasi sudah login

  if (!isLogin) {
    return NextResponse.redirect(new URL("/auth/login", req.url)); // ← sesuaikan path
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/produk", "/about"], // sesuaikan dengan route yang ada di project kamu
};