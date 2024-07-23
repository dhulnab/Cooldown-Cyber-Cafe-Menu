import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function GET(_request, { params }) {
  const items = await db.product.findMany({
    where: { productCategory: params.productName },
  });

  const headers = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  return new Response(JSON.stringify(items), {
    headers,
    status: 200,
  });
}
