type CardVariant = 'default' | 'elevated' | 'outlined';

interface CardProps {
  variant?: CardVariant;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-white shadow-sm hover:shadow-md',
  elevated: 'bg-white shadow-md hover:shadow-lg',
  outlined: 'bg-white border border-gray-200 hover:border-secundario',
};

export function Card({
  variant = 'default',
  className = '',
  children,
}: CardProps) {
  return (
    <div
      className={`rounded-2xl p-6 transition-shadow ${variantClasses[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
