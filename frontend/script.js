const API_URL = "https://sertifikat-backend-production.up.railway.app/api/sertifikat";

// Submit form
document.getElementById("formSertifikat").addEventListener("submit", async (e) => {
  e.preventDefault();
    const data = {
        nama: document.getElementById("nama").value,
        sertifikat: document.getElementById("sertifikat").value,
        mulai: document.getElementById("mulai").value,
        lama: parseInt(document.getElementById("lama").value)
    };
await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  loadData();
});

// Load tabel
async function loadData() {
  const res = await fetch(API_URL);
  const json = await res.json();
  const tbody = document.querySelector("#tabelSertifikat tbody");
  tbody.innerHTML = "";
    const today = new Date();

  json.data.forEach((row, i) => {
    const selesai = new Date(row.selesai);
    const diff = Math.floor((selesai - today) / (1000*60*60*24));
        let kelas = "ok", pengingat = `${diff} hari lagi`;
    if (diff < 0) { kelas = "expired"; pengingat = `${Math.abs(diff)} hari yang lalu`; }
    else if (diff === 0) { kelas = "soon"; pengingat = "Habis Hari Ini!"; }
    else if (diff <= 7) { kelas = "soon"; }

    tbody.innerHTML += `
      <tr class="${kelas}">
        <td>${i+1}</td>
        <td>${row.nama}</td>
        <td>${row.sertifikat}</td>
        <td>${new Date(row.mulai).toISOString().split("T")[0]}</td>
        <td>${selesai.toISOString().split("T")[0]}</td>
        <td>${row.keterangan}</td>
        <td>${pengingat}</td>
      </tr>
    `;
  });
} 
loadData();
