import { cn } from "@/lib/utils"

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("text-3xl font-light mb-8", className)}>
      {children}
    </h1>
  )
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn("text-xl font-normal mb-2", className)}>
      {children}
    </h2>
  )
}

export function H3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn("text-base font-medium mb-1", className)}>
      {children}
    </h3>
  )
}

export function Paragraph({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-gray-600 text-sm", className)}>
      {children}
    </p>
  )
}

export function SmallText({ children, className }: TypographyProps) {
  return (
    <span className={cn("text-sm text-gray-600", className)}>
      {children}
    </span>
  )
} 