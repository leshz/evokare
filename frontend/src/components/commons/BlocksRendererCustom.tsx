'use client'

import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Image from 'next/image'

import type { BlocksContent } from "@strapi/blocks-react-renderer";

/**
 * Configuration options for customizing the appearance of rendered blocks
 */
export interface BlocksRendererCustomProps {
  /** The Strapi blocks content to render */
  content: BlocksContent

  /** Custom class names for each block type */
  classNames?: {
    paragraph?: string
    heading?: {
      h1?: string
      h2?: string
      h3?: string
      h4?: string
      h5?: string
      h6?: string
    }
    list?: {
      ordered?: string
      unordered?: string
    }
    quote?: string
    code?: string
    image?: string
    link?: string
  }

  /** Custom class names for modifier (inline) elements */
  modifierClassNames?: {
    bold?: string
    italic?: string
    underline?: string
    strikethrough?: string
    code?: string
  }

  /** Custom colors for each block type (applied as inline styles or Tailwind classes) */
  colors?: {
    paragraph?: string
    heading?: string
    list?: string
    quote?: string
    code?: string
    link?: string
    text?: string // Default text color for all elements
  }

  /** Custom colors for modifier elements */
  modifierColors?: {
    bold?: string
    italic?: string
    underline?: string
    strikethrough?: string
    code?: string
  }
}

/**
 * Custom BlocksRenderer component that extends @strapi/blocks-react-renderer
 * with support for custom colors and CSS classes for each block and modifier type.
 *
 * @example
 * ```tsx
 * <BlocksRendererCustom
 *   content={strapiContent}
 *   classNames={{
 *     paragraph: "text-lg leading-relaxed",
 *     heading: {
 *       h1: "text-4xl font-bold",
 *       h2: "text-3xl font-semibold"
 *     }
 *   }}
 *   colors={{
 *     paragraph: "text-gray-800",
 *     link: "text-blue-600 hover:text-blue-800"
 *   }}
 * />
 * ```
 */
export const BlocksRendererCustom: React.FC<BlocksRendererCustomProps> = ({
  content,
  classNames = {},
  modifierClassNames = {},
  colors = {},
  modifierColors = {},
}) => {
  // Combine color and className for a given element
  const getClassString = (colorClass?: string, customClass?: string): string => {
    const baseColor = colors.text || ''
    const classes = [baseColor, colorClass, customClass].filter(Boolean).join(' ')
    return classes
  }

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        // Paragraph block
        paragraph: ({ children }) => (
          <p className={getClassString(colors.paragraph, classNames.paragraph)}>
            {children}
          </p>
        ),

        // Heading blocks (h1-h6)
        heading: ({ children, level }) => {
          const headingClass = classNames.heading?.[`h${level}` as keyof typeof classNames.heading] as string | undefined
          const className = getClassString(colors.heading, headingClass)

          switch (level) {
            case 1:
              return <h1 className={className}>{children}</h1>
            case 2:
              return <h2 className={className}>{children}</h2>
            case 3:
              return <h3 className={className}>{children}</h3>
            case 4:
              return <h4 className={className}>{children}</h4>
            case 5:
              return <h5 className={className}>{children}</h5>
            case 6:
              return <h6 className={className}>{children}</h6>
            default:
              return <h2 className={className}>{children}</h2>
          }
        },

        // List blocks (ordered and unordered)
        list: ({ children, format }) => {
          const isOrdered = format === 'ordered'
          const ListTag = isOrdered ? 'ol' : 'ul'
          const listClass = isOrdered
            ? classNames.list?.ordered
            : classNames.list?.unordered

          return (
            <ListTag className={getClassString(colors.list, listClass)}>
              {children}
            </ListTag>
          )
        },

        // Quote block
        quote: ({ children }) => (
          <blockquote className={getClassString(colors.quote, classNames.quote)}>
            {children}
          </blockquote>
        ),

        // Code block
        code: ({ children }) => (
          <pre className={getClassString(colors.code, classNames.code)}>
            <code>{children}</code>
          </pre>
        ),

        // Image block
        image: ({ image }) => (
          <Image
            src={image.url}
            alt={image.alternativeText || ''}
            width={image.width || 800}
            height={image.height || 600}
            className={classNames.image}
          />
        ),

        // Link block
        link: ({ children, url }) => (
          <a
            href={url}
            className={getClassString(colors.link, classNames.link)}
            target={url.startsWith('http') ? '_blank' : undefined}
            rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {children}
          </a>
        ),
      }}
      modifiers={{
        // Bold modifier
        bold: ({ children }) => (
          <strong className={getClassString(modifierColors.bold, modifierClassNames.bold)}>
            {children}
          </strong>
        ),

        // Italic modifier
        italic: ({ children }) => (
          <em className={getClassString(modifierColors.italic, modifierClassNames.italic)}>
            {children}
          </em>
        ),

        // Underline modifier
        underline: ({ children }) => (
          <u className={getClassString(modifierColors.underline, modifierClassNames.underline)}>
            {children}
          </u>
        ),

        // Strikethrough modifier
        strikethrough: ({ children }) => (
          <s className={getClassString(modifierColors.strikethrough, modifierClassNames.strikethrough)}>
            {children}
          </s>
        ),

        // Inline code modifier
        code: ({ children }) => (
          <code className={getClassString(modifierColors.code, modifierClassNames.code)}>
            {children}
          </code>
        ),
      }}
    />
  )
}
