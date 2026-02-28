import ProductsPageClient from "@/components/ProductsPageClient";

export const metadata = {
  title: "Products | Blue Fin Engineering Enterprises",
  description:
    "Explore our range of material handling, automation machinery, conveyors, fabrications, and industrial consumables.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero header */}
      <section className="bg-blue-950 pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="h-1 w-14 bg-accent rounded-full shrink-0" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                Our <span className="font-bold text-accent">Products</span>
              </h1>
              <p className="text-blue-200/90 mt-2 text-sm sm:text-base">
                Material handling, automation machinery, and assembly solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductsPageClient />
    </div>
  );
}
