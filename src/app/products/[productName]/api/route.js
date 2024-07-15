import itemsData from "@/app/testData.json";

export const dynamic = "force-dynamic";
export async function GET(_request, { params }) {
  const items = itemsData.items.filter(
    (item) => item.category === params.productName
  );
  return Response.json(items);
}
