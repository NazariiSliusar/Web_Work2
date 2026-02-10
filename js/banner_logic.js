function banner_status(status) {
  const banner = document.getElementById("banner");
  banner.classList.remove("banner-good", "banner-warning", "banner-error");
  if (status === "good") banner.classList.add("banner-good");
  if (status === 'warning') banner.classList.add("banner-warning");
  if (status === "error") banner.classList.add("banner-error");
}
