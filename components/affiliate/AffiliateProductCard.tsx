type Product = {
  id: string;
  slug: string;
  featuredImage?: {
    node?: { sourceUrl?: string };
  };
  affiliateFields: {
    productName: string;
    affiliateLink: string;
    rating: number;
    price: string;
    pros: string;
    cons: string;
  };
};

export default function AffiliateProductCard({ product }: { product: Product }) {
  const f = product.affiliateFields;

  const prosList = f.pros?.split("\n") || [];

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
      {/* Image */}
      <img
        src={product.featuredImage?.node?.sourceUrl || ""}
        alt={f.productName}
        className="w-full h-48 object-cover rounded-xl"
      />

      {/* Content */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{f.productName}</h2>

        <p className="text-sm text-gray-500 mt-1">⭐ {f.rating}</p>

        <p className="text-red-600 font-bold mt-1">{f.price}</p>

        {/* Pros */}
        <ul className="mt-3 text-sm text-gray-700 space-y-1">
          {prosList.slice(0, 3).map((pro, i) => (
            <li key={i}>✔ {pro}</li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`/go/${product.slug}`}
          className="block mt-4 text-center bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
        >
          Check Latest Price
        </a>
      </div>
    </div>
  );
}