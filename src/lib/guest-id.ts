export function getOrCreateGuestId() {
  if (typeof window === "undefined") return null; // pastikan di browser

  let guestId = localStorage.getItem("guest_id");
  if (!guestId) {
    guestId = `guest_${crypto.randomUUID()}`;
    localStorage.setItem("guest_id", guestId);
  }
  return guestId;
}
