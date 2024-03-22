export async function getTableData() {
  const response = await fetch(
    "https://run.mocky.io/v3/083bbabe-ac5f-4187-917f-db9a60e1466f"
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch table data`);
  }

  return response.json();
}
