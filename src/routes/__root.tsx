import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteChrome } from "@/components/site/site-chrome";
import appCss from "../styles.css?url";

const APP_NAME = "Flowga Studios";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Welcome to Flowga Studios — a yoga studio with classes, expert instructors, and The Yoga Handbook.",
      },
      { name: "theme-color", content: "#FEFAF7" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/jpeg", href: "/images/favicon.jpg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <SiteChrome>
            <Outlet />
          </SiteChrome>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <section className="cream" style={{ paddingTop: "7.5rem", minHeight: "70vh" }}>
      <div className="pad-x">
        <div className="container-md section-y" style={{ textAlign: "center" }}>
          <h1>Page not found</h1>
          <p className="body-lg" style={{ marginTop: "1rem" }}>
            This pose isn’t in our sequence. Let’s roll back to the studio.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <Link to="/" className="btn btn-primary">
              Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
