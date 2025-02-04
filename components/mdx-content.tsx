'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'

export function MdxContent({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code)

  return (
    <div className="prose">
      <MDXContent />
    </div>
  )
}