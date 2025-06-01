
  const profileIcon = document.getElementById("sidebar-profile");
  const profilePanel = document.getElementById("profilePanel");

  // Tampilkan atau sembunyikan panel saat ikon diklik
  profileIcon.addEventListener("click", function (e) {
    e.stopPropagation(); // Mencegah event bubbling
    profilePanel.classList.toggle("open");
  });

  // Tutup panel saat klik di luar area panel
  document.addEventListener("click", function (e) {
    const isClickInsidePanel = profilePanel.contains(e.target);
    const isClickOnIcon = profileIcon.contains(e.target);

    if (!isClickInsidePanel && !isClickOnIcon) {
      profilePanel.classList.remove("open");
    }
  });

  // Tombol Tutup di dalam panel (jika ada)
  function closeProfilePanel() {
    profilePanel.classList.remove("open");
  }