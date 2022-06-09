import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'

export default function Header() {

    return (
        <header className="flex items-center justify-between py-10 px-5">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              {
                <div className="mr-3 sm:hidden">
                  Din hundvalp 🐕
                </div>
              }
              {
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                 Din hundvalp 🐕
                </div>
            }
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </header>
    )
}