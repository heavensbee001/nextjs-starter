import { NextRequest, NextResponse } from "next/server";

export const getValidSubdomain = (host?: string | null) => {
  let subdomain: string | null = null;

  if (!host && typeof window !== "undefined") {
    // On client side, get the host from window
    host = window.location.host;
  }
  if (host && host.includes(".")) {
    const candidate = host.split(".")[0];

    if (candidate && !candidate.includes("localhost")) {
      // Valid candidate
      subdomain = candidate;
    }
  }
  return subdomain;
};

const PUBLIC_FILE = /\.(.*)$/; // Files

export const subdomainMiddleware = async (req: NextRequest) => {
  // Clone the URL
  const url = req.nextUrl.clone();

  // Skip public files
  if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes("_next")) {
    return url.pathname;
  }

  if (
    url.pathname.includes("robots.txt") ||
    url.pathname.includes("sitemap.xml")
  ) {
    console.log(`>>> Skipping: ${url.pathname}`);

    return url.pathname;
  }

  const host = req.headers.get("host");
  const subdomain =
    process.env.NEXT_PUBLIC_FORCE_SUBDOMAIN_LOCALHOST ||
    getValidSubdomain(host);

  if (subdomain) {
    // Subdomain available, rewriting
    // console.log(
    //   `>>> Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`
    // );
    url.pathname = `/${subdomain}${url.pathname}`;
  }

  return url.pathname;
};
