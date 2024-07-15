import itemsData from "@/app/testData.json";

export const dynamic = "force-dynamic";
export async function GET(_request, { params }) {
  const items = itemsData.items.filter(
    (item) => item.category === params.productName
  );

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
