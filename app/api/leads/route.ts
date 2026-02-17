import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "leads.json");

export async function POST(req: Request) {
  const body = await req.json();

  if (!body?.email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const existing = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, "utf8"))
    : [];

  existing.push({
    ...body,
    createdAt: new Date().toISOString()
  });

  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

  return NextResponse.json({ success: true });
}
