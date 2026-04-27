const API_URL = process.env.NEXT_PUBLIC_WP_API_URL as string;

async function fetchAPI(query: string, variables = {}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}


export async function getAffiliateProducts() {
  const data = await fetchAPI(`
    query {
      affiliateProducts {
        nodes {
          id
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          ... on AffiliateProduct {
            affiliateFields {
              productName
              affiliateLink
              rating
              price
              pros
              cons
            }
          }
        }
      }
    }
  `);


  return data.affiliateProducts.nodes;
}

export async function getProductBySlug(slug: string) {
  const data = await fetchAPI(`
    query GetProduct($id: ID!) {
      affiliateProduct(id: $id, idType: SLUG) {
        affiliateFields {
          affiliateLink
        }
      }
    }
  `, {
    variables: { id: slug }
  });

  return data.affiliateProduct;
}