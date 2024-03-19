export async function getTableData() {
  const response = await fetch(
    "https://run.mocky.io/v3/cd737254-41a2-4806-a92a-5e16f29b16ea"
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch table data`);
  }

  return response.json();
}
