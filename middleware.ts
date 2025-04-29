import { NextRequest, NextResponse } from 'next/server';
import { createLocaleRedirect, pathnameHasLocale } from "@/i18n";

export async function middleware(request: NextRequest) {

  //Show root "fr" page if root page asked
  // return NextResponse.rewrite(
  //   new URL('/fr', request.url)
  // );

  if (!pathnameHasLocale(request)) {
    return createLocaleRedirect(request);
  }
}

export const config = {
  // Don’t change the URL of Next.js assets starting with _next
  // matcher: ['/'],
  matcher: ["/((?!_next|api|slice-simulator|icon.svg).*)"],
};
