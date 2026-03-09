interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  decoration?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  decoration = true,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const decorationAlign =
    align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`mb-12 ${alignClass}`}>
      <h2 className="text-text-primary mb-4 text-3xl font-bold md:text-4xl">
        {title}
      </h2>
      {decoration && (
        <div
          className={`bg-secundario mb-6 h-0.5 w-16 rounded-full ${decorationAlign}`}
        />
      )}
      {subtitle && (
        <p
          className={`text-lg text-gray-600 ${align === 'center' ? 'mx-auto max-w-3xl' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
