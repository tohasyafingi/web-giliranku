import { useEffect, useState } from 'react'

type Heading = { id: string; text: string; level: number }

export function TableOfContents({ containerId = 'content' }: { containerId?: string }) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const root = document.getElementById(containerId) || document
    const selector = 'h2, h3'

    const ensureId = (el: HTMLElement) => {
      if (el.id) return el.id
      const slug = el.innerText
        .toLowerCase()
        .replace(/[^a-z0-9\\s-]/g, '')
        .trim()
        .replace(/\\s+/g, '-')
      el.id = slug
      return slug
    }

    const collect = () => {
      const els = Array.from(root.querySelectorAll(selector)) as HTMLElement[]
      return els.map((el) => ({ id: ensureId(el), text: el.innerText, level: Number(el.tagName[1]) }))
    }

    setHeadings(collect())

    const mutationObserver = new MutationObserver(() => setHeadings(collect()))
    mutationObserver.observe(root, { childList: true, subtree: true })

    // IntersectionObserver to update active heading
    const obsOptions = { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    const io = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible.length) {
        setActive(visible[0].target.id)
      }
    }, obsOptions)

    const elsToObserve = Array.from((document.getElementById(containerId) || document).querySelectorAll(selector)) as HTMLElement[]
    elsToObserve.forEach((el) => io.observe(el))

    return () => {
      mutationObserver.disconnect()
      io.disconnect()
    }
  }, [containerId])

  if (!headings.length) return null

  return (
    <div className="sticky top-24 rounded-xl border border-neutral-100 bg-white p-4 shadow-soft">
      <h2 className="text-sm font-semibold text-neutral-800 mb-3">Table of contents</h2>
      <nav aria-label="Table of contents">
        <ul className="space-y-2 text-sm text-neutral-600">
          {headings.map((h) => (
            <li key={h.id} className={h.level === 3 ? 'pl-3' : ''}>
              <a
                href={`#${h.id}`}
                className={`block rounded px-1 py-0.5 transition-colors hover:text-primary-600 ${active === h.id ? 'text-primary-700 font-semibold' : ''}`}
                aria-current={active === h.id ? 'true' : undefined}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
