import { useContext } from 'react';
import { ProductDataContext } from '../context/ProductContext';
import { Link } from 'react-router';

const Products = () => {
  const productData = useContext(ProductDataContext);

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
            Our collection
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Explore our products
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Find something you love from our hand-picked collection.
          </p>
        </div>

        {productData.length === 0 ? (
          <div className="flex min-h-64 items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="text-center">
              <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-amber-200 border-t-amber-500" />
              <p className="font-medium text-slate-600">Loading products...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productData.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
              >
                <div className="flex h-64 items-center justify-center bg-white p-8">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col border-t border-slate-100 p-5">
                  {product.category && (
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-600">
                      {product.category}
                    </p>
                  )}
                  <h2 className="line-clamp-2 text-lg font-semibold leading-snug text-slate-900">
                    {product.title}
                  </h2>
                  <div className="mt-auto flex items-center justify-between pt-5">
                    {product.price != null && (
                      <span className="text-xl font-bold text-slate-900">
                        ${Number(product.price).toFixed(2)}
                      </span>
                    )}
                    <span className="font-semibold text-amber-600 transition group-hover:translate-x-1">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Products;
