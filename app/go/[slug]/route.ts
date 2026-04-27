import { getAffiliateProducts } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    // ✅ UNWRAP PARAMS
    const { slug } = await context.params;

    const products = await getAffiliateProducts();

    console.log("PARAM SLUG:", slug);
    console.log(
      "ALL PRODUCTS:",
      products.map((p: any) => p.slug)
    );

    if (!products || products.length === 0) {
      return NextResponse.json({ error: "No products found" }, { status: 404 });
    }

    const product = products.find(
      (p: any) =>
        p.slug?.trim().toLowerCase() === slug.trim().toLowerCase()
    );

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const url = product.affiliateFields?.affiliateLink;

    if (!url) {
      return NextResponse.json({ error: "No affiliate link" }, { status: 400 });
    }

    return NextResponse.redirect(url);
  } catch (error) {
    console.error("Redirect error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}