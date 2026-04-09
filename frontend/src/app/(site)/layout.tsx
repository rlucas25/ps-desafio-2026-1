export default function SiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {/* Seu header, footer, etc. específicos do site */}
            {children}
        </div>
    )
}