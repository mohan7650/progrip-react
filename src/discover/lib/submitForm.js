// Sends form data as JSON to the configured endpoint.
// With no endpoint set, development builds log the payload and resolve so the
// UI can be tested; production builds throw so a missing setup is never hidden.

export async function submitForm(endpoint, data) {
  if (!endpoint) {
    if (import.meta.env.DEV) {
      console.info("[dev] No form endpoint configured — payload:", data);
      await new Promise((resolve) => setTimeout(resolve, 400));
      return;
    }
    throw new Error("Form endpoint is not configured (see .env.example).");
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Form request failed with status ${res.status}`);
  }
}
