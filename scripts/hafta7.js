const temaBtn = document.getElementById("temaBtn");
const html = document.documentElement;

temaBtn.addEventListener("click", function () {
	if (html.getAttribute("data-bs-theme") === "dark") {
		html.setAttribute("data-bs-theme", "light");
		temaBtn.textContent = "Koyu Tema";
	} else {
		html.setAttribute("data-bs-theme", "dark");
		temaBtn.textContent = "Açık Tema";
	}
});

const form = document.getElementById("basvuruFormu");
const uyariAlani = document.getElementById("uyariAlani");
const sonucAlani = document.getElementById("sonucAlani");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	uyariAlani.innerHTML = "";
	sonucAlani.innerHTML = "";

	const adSoyad = document.getElementById("adSoyad").value.trim();
	const eposta = document.getElementById("eposta").value.trim();
	const bolum = document.getElementById("bolum").value;
	const workshop = document.getElementById("workshop").value;
	const mesaj = document.getElementById("mesaj").value.trim();
	const kvkk = document.getElementById("kvkk").checked;

	const eksikler = [];
	if (!adSoyad) eksikler.push("Ad Soyad");
	if (!eposta) eksikler.push("E-posta");
	if (!bolum) eksikler.push("Bölüm");
	if (!workshop) eksikler.push("Workshop");
	if (!kvkk) eksikler.push("KVKK onayı");

	if (eksikler.length > 0) {
		uyariAlani.innerHTML =
			'<div class="alert alert-danger">' +
			"<strong>Eksik alanlar:</strong> " + eksikler.join(", ") +
			"</div>";
		return;
	}

	sonucAlani.innerHTML =
		'<div class="card shadow rounded-4 border-success">' +
		'<div class="card-body">' +
		'<h5 class="card-title text-success mb-3">Başvurunuz Alındı!</h5>' +
		'<ul class="list-group list-group-flush">' +
		'<li class="list-group-item"><strong>Ad Soyad:</strong> ' + adSoyad + "</li>" +
		'<li class="list-group-item"><strong>E-posta:</strong> ' + eposta + "</li>" +
		'<li class="list-group-item"><strong>Bölüm:</strong> ' + bolum + "</li>" +
		'<li class="list-group-item"><strong>Workshop:</strong> ' + workshop + "</li>" +
		(mesaj ? '<li class="list-group-item"><strong>Not:</strong> ' + mesaj + "</li>" : "") +
		"</ul>" +
		"</div>" +
		"</div>";

	form.reset();
});
