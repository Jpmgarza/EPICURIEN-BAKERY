const menuItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Épicurien French Bakery — Menu",
  description: "Artisan French pastries, breads, pâtisseries and drinks",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Viennoiseries" },
    { "@type": "ListItem", position: 2, name: "Pains" },
    { "@type": "ListItem", position: 3, name: "Pâtisseries" },
    { "@type": "ListItem", position: 4, name: "Boissons" },
  ],
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD: ItemList schema — static structured data, no user input */}
      <script type="application/ld+json">
        {JSON.stringify(menuItemListSchema)}
      </script>
      {children}
    </>
  );
}
