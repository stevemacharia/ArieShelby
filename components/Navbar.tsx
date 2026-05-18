'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NAV_LINKS, SITE } from '@/constants'
import Link from 'next/link'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-gray-100 bg-white/95 px-6 py-4 shadow-sm backdrop-blur-md lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <img src="/AS_LOGO_BLACK.png" alt={SITE.name} className="h-8 w-auto" />
          <span className="hidden font-bold text-primary sm:inline">{SITE.name}</span>
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a href={SITE.phoneHref} className="btn-primary !px-5 !py-2.5 text-sm">
            Contact
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden rounded-md p-2 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 bg-black/30" />
        <Dialog.Panel className="fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6 shadow-xl">
          <div className="flex justify-between">
            <img src="/AS_LOGO_BLACK.png" alt="" className="h-8" />
            <button type="button" onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-8 space-y-4">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-semibold text-gray-900"
              >
                {item.label}
              </Link>
            ))}
            <a href={SITE.phoneHref} className="btn-primary mt-4 block text-center">
              {SITE.phone}
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
