import type { Product } from "@/lib/types"
import ProductCard from "./product-card"

interface CategorySectionProps {
  title: string
  products: Product[]
}

export default function CategorySection({ title, products }: CategorySectionProps) {
  return (
    <section className="py-8">
      <div className="container-custom">
        <h2 className="section-title">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
