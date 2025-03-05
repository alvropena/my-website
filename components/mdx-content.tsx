'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'

const components = {
  table: (props: any) => (
    <div className="overflow-x-auto">
      <table {...props} className="table-auto border-collapse" />
    </div>
  ),
  th: (props: any) => <th {...props} className="border p-2" />,
  td: (props: any) => <td {...props} className="border p-2" />,
}

export function MdxContent({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code)

  return (
    <div className="prose">
      <MDXContent components={components} />
    </div>
  )
}