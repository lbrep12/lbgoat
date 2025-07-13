export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Serve static assets (images, HTML, etc.)
    if (
      url.pathname === "/" ||
      url.pathname.endsWith(".html") ||
      url.pathname.endsWith(".webp") ||
      url.pathname.endsWith(".png") ||
      url.pathname.endsWith(".jpg") ||
      url.pathname.endsWith(".jpeg")
    ) {
      // Serve index.html for root, or the requested file for others
      const assetPath = url.pathname === "/" ? "/index.html" : url.pathname;
      return env.ASSETS.fetch(new Request(url.origin + assetPath, request));
    }

    // Serve leaderboard API
    if (url.pathname === "/api/leaderboard") {
      const API_URL = 'https://apis.goated.com/user/affiliate/referral-leaderboard/UCW47GH';
      const API_KEY = env.LEADERBOARD_API_KEY;
      const response = await fetch(API_URL, {
        headers: API_KEY ? { 'Authorization': `Bearer ${API_KEY}` } : {}
      });
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response("Not found", { status: 404 });
  }
};
