import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    excerpt: { type: 'string', required: true },
    slug: { type: 'string', required: true }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post.slug}`,
    },
  },
}))

const prettyCodeOptions = {
  theme: 'github-dark',
  getHighlighter: (options: any) => {
    return import('shiki').then(({ createHighlighter }) => createHighlighter(options))
  },
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push('highlighted')
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ['word']
  },
}

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [
      remarkGfm
    ],
    rehypePlugins: [
      rehypeSlug as any,
      [rehypePrettyCode, prettyCodeOptions],
    ],
  },
})
