'use client';

import { useState } from 'react';

interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  helpful: number;
}

interface ProductReviewsProps {
  rating: number;
  reviewCount: number;
}

// Mock data para las reseñas
const mockReviews: Review[] = [
  {
    id: 1,
    userName: 'María González',
    rating: 5,
    comment:
      'Excelente producto! La calidad es increíble y realmente funciona. Lo recomiendo totalmente para relajarse después de un día estresante.',
    date: '2024-01-15',
    verified: true,
    helpful: 12,
  },
  {
    id: 2,
    userName: 'Carlos Ruiz',
    rating: 4,
    comment:
      'Muy buen producto, aunque esperaba un poco más de duración. El aroma es increíble y la calidad es excelente.',
    date: '2024-01-10',
    verified: true,
    helpful: 8,
  },
  {
    id: 3,
    userName: 'Ana Martínez',
    rating: 5,
    comment:
      'Perfecto para mi rutina de meditación. La calidad es premium y se nota la diferencia con otros productos similares.',
    date: '2024-01-08',
    verified: false,
    helpful: 15,
  },
  {
    id: 4,
    userName: 'Jorge Silva',
    rating: 4,
    comment:
      'Buen producto, llegó en perfecto estado. Lo uso para mis sesiones de yoga y funciona muy bien.',
    date: '2024-01-05',
    verified: true,
    helpful: 6,
  },
];

export function ProductReviews({ rating, reviewCount }: ProductReviewsProps) {
  const [reviews, setReviews] = useState(mockReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: '',
  });

  const renderStars = (
    rating: number,
    interactive = false,
    onRatingChange?: (rating: number) => void
  ) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <button
          key={i}
          onClick={() => interactive && onRatingChange?.(i)}
          className={`h-5 w-5 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'} ${
            interactive ? 'cursor-pointer hover:text-yellow-400' : ''
          }`}
          disabled={!interactive}
        >
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      );
    }
    return stars;
  };

  const handleSubmitReview = () => {
    if (newReview.comment.trim()) {
      const review: Review = {
        id: Date.now(),
        userName: 'Usuario Anónimo',
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toISOString().split('T')[0],
        verified: false,
        helpful: 0,
      };

      setReviews([review, ...reviews]);
      setNewReview({ rating: 5, comment: '' });
      setShowReviewForm(false);
    }
  };

  const handleHelpful = (reviewId: number) => {
    setReviews(
      reviews.map(review =>
        review.id === reviewId
          ? { ...review, helpful: review.helpful + 1 }
          : review
      )
    );
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Reseñas de Clientes
        </h2>
        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="from-secundario to-terciario hover:from-terciario hover:to-secundario rounded-full bg-gradient-to-br px-4 py-2 text-white transition-all hover:bg-gradient-to-br"
        >
          Escribir Reseña
        </button>
      </div>

      {/* Resumen de calificaciones */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="text-center">
          <div className="mb-2 text-4xl font-bold text-gray-900">{rating}</div>
          <div className="mb-2 flex justify-center">
            {renderStars(Math.floor(rating))}
          </div>
          <div className="text-sm text-gray-600">
            Basado en {reviewCount} reseñas
          </div>
        </div>

        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map(stars => (
            <div key={stars} className="flex items-center space-x-2">
              <span className="w-3 text-sm text-gray-600">{stars}</span>
              <svg
                className="h-4 w-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div className="h-2 flex-1 rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-yellow-400"
                  style={{ width: `${Math.random() * 100}%` }}
                ></div>
              </div>
              <span className="w-8 text-sm text-gray-600">
                {Math.floor(Math.random() * 50)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Formulario de nueva reseña */}
      {showReviewForm && (
        <div className="mb-6 rounded-lg bg-gray-50 p-6">
          <h3 className="mb-4 text-lg font-semibold">Escribir una reseña</h3>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Calificación
            </label>
            <div className="flex space-x-1">
              {renderStars(newReview.rating, true, rating =>
                setNewReview({ ...newReview, rating })
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Comentario
            </label>
            <textarea
              value={newReview.comment}
              onChange={e =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
              className="focus:ring-secundario w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:outline-none"
              rows={4}
              placeholder="Comparte tu experiencia con este producto..."
            />
          </div>

          <div className="flex space-x-3">
            <button
              onClick={handleSubmitReview}
              className="from-secundario to-terciario hover:from-terciario hover:to-secundario rounded-full bg-gradient-to-br px-6 py-2 text-white transition-all hover:bg-gradient-to-br"
            >
              Publicar Reseña
            </button>
            <button
              onClick={() => setShowReviewForm(false)}
              className="rounded-full bg-gray-200 px-6 py-2 text-gray-700 transition-colors hover:bg-gray-300"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Lista de reseñas */}
      <div className="space-y-6">
        {reviews.map(review => (
          <div
            key={review.id}
            className="border-b border-gray-200 pb-6 last:border-b-0"
          >
            <div className="mb-2 flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-secundario flex h-10 w-10 items-center justify-center rounded-full">
                  <span className="font-medium text-white">
                    {review.userName.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">
                      {review.userName}
                    </span>
                    {review.verified && (
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-600">
                        Verificado
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex">{renderStars(review.rating)}</div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="mb-3 leading-relaxed text-gray-700">
              {review.comment}
            </p>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleHelpful(review.id)}
                className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
                <span>Útil ({review.helpful})</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
