export default function Footer() {
    return (
        <footer style={{ background: "linear-gradient(135deg, #0B1F3B 38%, #1E3A8A 60%)" }} className="mt-auto w-full">

            {/* Top section */}
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "40px 50px",
                gap: "40px"
            }}>

                {/* Left — Branding */}
                <div style={{ flex: 1, maxWidth: "350px" }}>
                    <p className="font-bold text-lg mb-3" style={{ color: "#00D4FF" }}>Student Developer Platform</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#E2E8F0" }}>
                        A full-stack web application where students can build their developer identity, publish technical blogs, and interact with other developers in a collaborative and open environment.
                    </p>
                </div>
                {/* Middle — Quick Links */}
                <div style={{ flex: 0.5, minWidth: "120px" }}>
                    <p className="font-bold text-xs tracking-widest mb-4" style={{ color: "#00D4FF", letterSpacing: "2px" }}>QUICK LINKS</p>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "12px", padding: 0, margin: 0, listStyle: "none" }}>
                        {[
                            { label: "Home", href: "#" },
                            { label: "About", href: "#" },
                            { label: "Blogs", href: "#" },
                            { label: "Login", href: "#" },
                            { label: "Register", href: "#" },
                        ].map(({ label, href }) => (
                            <li key={label}>
                                <a href={href}
                                    style={{ color: "#E2E8F0", fontSize: "14px", textDecoration: "none", display: "block" }}
                                    onMouseEnter={e => e.currentTarget.style.color = "#00D4FF"}
                                    onMouseLeave={e => e.currentTarget.style.color = "#E2E8F0"}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right — Contact Us */}
                <div style={{ flex: 0.5, minWidth: "180px" }}>
                    <p className="font-bold text-xs tracking-widest mb-4" style={{ color: "#00D4FF", letterSpacing: "2px" }}>CONTACT US</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

                        <a href="https://github.com/LinuxCampusClubSJCE/Commit31-OSS4"
                            target="_blank" rel="noreferrer"
                            style={{ color: "#E2E8F0", fontSize: "14px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
                            onMouseEnter={e => e.currentTarget.style.color = "#00D4FF"}
                            onMouseLeave={e => e.currentTarget.style.color = "#E2E8F0"}>
                            <span style={{ width: "18px", flexShrink: 0 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </span>
                            GitHub
                        </a>

                        <a href="https://www.instagram.com/linuxcampusclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank" rel="noreferrer"
                            style={{ color: "#E2E8F0", fontSize: "14px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
                            onMouseEnter={e => e.currentTarget.style.color = "#00D4FF"}
                            onMouseLeave={e => e.currentTarget.style.color = "#E2E8F0"}>
                            <span style={{ width: "18px", flexShrink: 0 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </span>
                            Instagram
                        </a>

                        <a href="https://www.linkedin.com/company/linux-campus-club/"
                            target="_blank" rel="noreferrer"
                            style={{ color: "#E2E8F0", fontSize: "14px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
                            onMouseEnter={e => e.currentTarget.style.color = "#00D4FF"}
                            onMouseLeave={e => e.currentTarget.style.color = "#E2E8F0"}>
                            <span style={{ width: "18px", flexShrink: 0 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </span>
                            LinkedIn
                        </a>

                        <a href="mailto:lccsjce@sjce.ac.in"
                            style={{ color: "#E2E8F0", fontSize: "14px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
                            onMouseEnter={e => e.currentTarget.style.color = "#00D4FF"}
                            onMouseLeave={e => e.currentTarget.style.color = "#E2E8F0"}>
                            <span style={{ width: "18px", flexShrink: 0 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </span>
                            lccsjce@sjce.ac.in
                        </a>

                    </div>
                </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #00D4FF", margin: "0 56px", opacity: 0.3 }} />

            {/* Bottom bar */}
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 56px"
            }}>
                <p style={{ color: "#94A3B8", fontSize: "14px" }}>
                    © {new Date().getFullYear()} Student Developer Platform. All rights reserved.
                </p>
                <p style={{ color: "#94A3B8", fontSize: "14px" }}>
                    Built with ❤️ by <span style={{ color: "#00D4FF", fontWeight: "bold" }}>Linux Campus Club SJCE</span>
                </p>
            </div>

        </footer>
    );
}