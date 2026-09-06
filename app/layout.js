export const metadata = {
  title: "Epla",
  description: "Epla virtual market",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
