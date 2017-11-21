export const wrapLink = (change, href) => (
  change.wrapInline({
    type: 'link',
    data: { href }
  })
)

export const unwrapLink = (change) => change.unwrapInline('link')

export const hasLinks = value => value.inlines.some(inline => inline.type === 'link')
