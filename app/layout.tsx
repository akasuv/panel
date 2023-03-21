import "./globals.css";

const getRes = async () => {
  const res = await fetch("http://localhost:4200/files", {
    cache: "no-cache",
  }).then((res) => res.json());

  return res;
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await getRes();

  return (
    <html lang="en" data-theme="light">
      <body>
        <div className="drawer drawer-mobile">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {children}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              {res.map((file: string) => (
                <li key={file}>
                  <a href={`/c/${file}`}>{file}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
