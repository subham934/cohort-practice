import { useContext } from 'react';
import { Link, useParams } from 'react-router';
import { ProductDataContext } from '../context/ProductContext';

const ProductDetail = () => {
  const { id } = useParams();
  const productData = useContext(ProductDataContext);
  const product = productData.find((item) => String(item.id) === id);

  if (productData.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-amber-200 border-t-amber-500" />
          <p className="font-medium text-slate-600">Loading product details...</p>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
        <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <p className="text-6xl font-bold text-amber-400">404</p>
          <h1 className="mt-4 text-2xl font-bold text-slate-900">Product not found</h1>
          <p className="mt-2 text-slate-600">
            This product may have been removed or the link may be incorrect.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-amber-500 hover:text-slate-950"
          >
            Back to products
          </Link>
        </div>
      </main>
    );
  }

  const rating =
    typeof product.rating === 'object' ? product.rating.rate : product.rating;
  const reviewCount =
    typeof product.rating === 'object' ? product.rating.count : null;

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/products"
          className="mb-7 inline-flex items-center gap-2 font-semibold text-slate-600 transition hover:text-amber-600"
        >
          <span aria-hidden="true">←</span> Back to products
        </Link>

        <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex items-center justify-center bg-slate-100 p-8 sm:p-10 lg:p-12">
            <div className="flex h-[300px] w-[240px] shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-[240px] max-w-[180px] object-contain mix-blend-multiply"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center border-t border-slate-100 p-7 sm:p-10 lg:border-t-0 lg:border-l lg:p-14">
            {product.category && (
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
                {product.category}
              </p>
            )}

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              {product.title}
            </h1>

            {rating != null && (
              <div className="mt-5 flex items-center gap-3">
                <span className="text-lg tracking-wider text-amber-400" aria-hidden="true">
                  ★★★★★
                </span>
                <span className="text-sm font-semibold text-slate-600">
                  {rating}/5{reviewCount != null && ` (${reviewCount} reviews)`}
                </span>
              </div>
            )}

            {product.price != null && (
              <p className="mt-6 text-4xl font-bold text-slate-900">
                ${Number(product.price).toFixed(2)}
              </p>
            )}

            {product.description && (
              <p className="mt-6 leading-7 text-slate-600">{product.description}</p>
            )}

            <div className="mt-8 rounded-2xl bg-amber-50 p-4 text-sm text-amber-900">
              <span className="font-bold">Free delivery</span> on this item. Easy returns within 30 days.
            </div>

            <button
              type="button"
              className="mt-5 w-full cursor-pointer rounded-full bg-slate-900 px-6 py-4 text-lg font-bold text-white transition hover:-translate-y-0.5 hover:bg-amber-500 hover:text-slate-950 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-200"
            >
              Add to cart
            </button>
          </div>
        </article>
      </div>
    </main>
  );
};

export default ProductDetail;
