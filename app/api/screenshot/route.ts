import { NextRequest, NextResponse } from "next/server";

const SCREENSHOT_ENDPOINT = "https://api.screenshotone.com/take";

function getSafeTarget(rawUrl: string | null) {
  if (!rawUrl) {
    return null;
  }

  try {
    const target = new URL(rawUrl);
    if (target.protocol !== "http:" && target.protocol !== "https:") {
      return null;
    }
    return target.toString();
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const targetUrl = getSafeTarget(request.nextUrl.searchParams.get("url"));
  const accessKey = process.env.SCREENSHOTONE_ACCESS_KEY;

  if (!targetUrl) {
    return NextResponse.json(
      { error: "Missing or invalid `url` query parameter." },
      { status: 400 }
    );
  }

  if (!accessKey) {
    return NextResponse.json(
      { error: "Missing SCREENSHOTONE_ACCESS_KEY in environment variables." },
      { status: 500 }
    );
  }

  const screenshotUrl = new URL(SCREENSHOT_ENDPOINT);
  screenshotUrl.searchParams.set("access_key", accessKey);
  screenshotUrl.searchParams.set("url", targetUrl);
  screenshotUrl.searchParams.set("viewport_width", "1280");
  screenshotUrl.searchParams.set("viewport_height", "720");
  screenshotUrl.searchParams.set("format", "jpg");

  const response = await fetch(screenshotUrl.toString(), {
    next: { revalidate: 60 * 60 * 24 },
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch screenshot from ScreenshotOne." },
      { status: response.status }
    );
  }

  const imageBuffer = await response.arrayBuffer();
  const contentType = response.headers.get("content-type") ?? "image/jpeg";

  return new NextResponse(imageBuffer, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Cache-Control":
        "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
