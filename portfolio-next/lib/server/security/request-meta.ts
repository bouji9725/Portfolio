export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (!forwardedFor) {
    return "unknown";
  }

  // x-forwarded-for can contain multiple IPs: "client, proxy1, proxy2"
  return forwardedFor.split(",")[0]?.trim() || "unknown";
}