/**
 * @file SectionHeader.tsx
 * @description Reusable section header component with title and subtitle.
 */

import type { FC, ReactNode } from 'react'

/**
 * @description Props for the SectionHeader component.
 */
interface SectionHeaderProps {
  /** Primary title text. */
  title: string
  /** Optional subtitle or description below the title. */
  subtitle?: ReactNode
  /** Optional alignment of the text content. */
  align?: 'left' | 'center'
}

/**
 * @description Renders a large section header with consistent typography.
 */
export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = 'left',
}) => {
  const alignment =
    align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.18em] uppercase text-[#F5F5F5]">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-sm sm:text-base text-zinc-300">{subtitle}</p>
      )}
    </div>
  )
}
