import { siteConfig } from '@/lib/site-content'

type RichTextProps = {
  html: string
  className?: string
}

export function RichText({ html, className }: RichTextProps) {
  const renderedHtml = html.replace(/\{\{reserveUrl\}\}/g, siteConfig.reserveUrl)

  return <span className={className} dangerouslySetInnerHTML={{ __html: renderedHtml }} />
}
