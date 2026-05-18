import Link from 'next/link'
import { NAV_LINKS, SITE } from '@/constants'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img src="/AS_LOGO_BLACK.png" alt={SITE.name} className="h-8" />
            <p className="mt-4 max-w-xs text-sm text-gray-600">
              Building modern digital systems and creative brands for businesses
              across Kenya and beyond.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Navigate</p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Contact</p>
            <p className="mt-4 text-sm text-gray-600">{SITE.email}</p>
            <p className="text-sm text-gray-600">{SITE.phone}</p>
          </div>
        </div>
        <p className="mt-12 border-t border-gray-100 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
