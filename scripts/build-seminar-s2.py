"""Bangun js/seminar-ppg-data-s2.js — deck 8-16 (slide teks refleksi).

Konten diambil dari narasi yang SUDAH ADA di website (refleksi PPL mandiri,
filosofi, deskripsi asesmen) supaya tidak mengarang fakta baru. Deck 14-16
menggambarkan tahapan karya inovasi secara umum berdasarkan artefak yang
terverifikasi (RPP, LKM, media, asesmen, video praktik).
"""
import json

def slide(number, eyebrow, title, body=None, bullets=None, quote=None, hotspots=None):
    content = {"eyebrow": eyebrow, "title": title}
    if body:
        content["body"] = body
    if bullets:
        content["bullets"] = bullets
    if quote:
        content["quote"] = quote
    return {"number": number, "content": content, "hotspots": hotspots or []}

def deck(did, meeting, title, subtitle, slides):
    return {
        "id": did, "meeting": meeting, "title": title,
        "subtitle": subtitle, "status": "available", "slides": slides,
    }

decks = []

# ---------- 08: Refleksi MK — Pembelajaran Mendalam & Asesmen ----------
decks.append(deck("meeting-08", 8, "Refleksi MK — Pembelajaran Mendalam & Asesmen",
    "Bagaimana Deep Learning dan asesmen autentik mengubah cara saya merancang pembelajaran",
    [
        slide(1, "Refleksi MK", "Pembelajaran Mendalam & Asesmen",
              body=["Mata kuliah ini mempertemukan dua hal yang sebelumnya saya jalani terpisah: cara menyampaikan materi dan cara mengukurnya. Melalui praktik di kelas XI TPM, keduanya menjadi satu kesatuan yang saling menelusuri."]),
        slide(2, "Deep Learning", "Mindful, Meaningful, Joyful",
              body=["RPP Siklus 1 saya susun di atas pendekatan Deep Learning: pembelajaran yang penuh kesadaran, bermakna, dan menyenangkan.", "Pada materi Assembly Gambar Teknik, siswa tidak sekadar menghafal urutan perintah Autodesk Inventor, tetapi memahami alasan di balik setiap constraint yang dipasang."]),
        slide(3, "Asesmen", "Diagnostik: Memetakan Titik Awal",
              body=["Sebelum praktik, asesmen diagnostik memetakan kemampuan awal siswa terhadap gambar teknik dan dasar CAD.", "Hasilnya menjadi pijakan diferensiasi: siswa dengan fondasi kuat melaju lebih cepat, yang lain mendapat scaffolding lebih dekat."]),
        slide(4, "Asesmen", "Formatif: Umpan Balik di Tengah Jalan",
              body=["LKM Pertemuan 1-3 dirancang sebagai asesmen formatif berjenjang, dari merakit komponen hingga menyusun Drawing dan BOM.", "Self-assessment di tiap LKM membuat siswa menilai sendiri ketelitian kerjanya sebelum saya mengoreksi."]),
        slide(5, "Asesmen", "Sumatif: Kinerja, Bukan Hafalan",
              body=["Instrumen asesmen sumatif berbasis kinerja praktik CAD dengan rubrik autentik.", "Yang dinilai bukan jawaban tunggal, melainkan proses, ketepatan constraint, dan kelengkapan dokumen kerja — persis standar industri."]),
        slide(6, "Refleksi", "Asesmen sebagai Pintu Masuk Perbaikan",
              quote="Ketika sebagian besar murid keliru pada aspek yang sama, yang perlu diperbaiki adalah cara saya mengajarkannya, bukan ketekunan mereka.",
              body=["Pergeseran terbesar: instrumen penilaian berhenti menjadi titik akhir dan menjadi pintu masuk perencanaan siklus berikutnya."]),
    ]))

# ---------- 09: Refleksi MK — PPL Mandiri ----------
decks.append(deck("meeting-09", 9, "Refleksi MK — PPL Mandiri",
    "Empat hal yang benar-benar berubah setelah praktik mengajar mandiri di SMK N 2 Depok",
    [
        slide(1, "Refleksi MK", "PPL Mandiri di SMK N 2 Depok",
              body=["Enam analisis praktik mengajar mandiri tidak berhenti sebagai laporan. Berikut empat hal yang benar-benar berubah pada cara saya bekerja."]),
        slide(2, "Pembuka", "Pelajaran yang Tidak Terduga",
              quote="Mengajar praktik pemesinan mengajarkan satu hal yang tidak saya duga: ketepatan sebuah benda kerja lebih mudah diperbaiki daripada ketepatan cara saya menjelaskannya. Karena itu yang paling banyak saya ubah selama praktik mandiri bukan pekerjaan murid, melainkan pekerjaan saya sendiri.",
              body=["Fanny Fatchurrahman — refleksi PPL Mandiri, SMK N 2 Depok"]),
        slide(3, "Perubahan 01", "Merancang agar Dapat Ditelusuri",
              body=["Sebelum praktik mandiri, saya menyusun rencana pembelajaran karena tuntutan administrasi. Sekarang saya menyusunnya agar tujuan, kegiatan, dan asesmen dapat ditelusuri bolak-balik.", "Rencana yang baik bukan yang paling lengkap, melainkan yang celahnya paling mudah ditemukan sebelum diterapkan."]),
        slide(4, "Perubahan 02", "Mengajar dengan Memberi Ruang",
              body=["Kebiasaan lama saya adalah menuntun murid langkah demi langkah agar hasilnya seragam. Praktik mandiri memaksa saya melepas sebagian kendali itu.", "Murid menentukan sendiri urutan pengerjaan setelah memahami gambar kerja, lalu mempertanggungjawabkan pilihannya. Peran saya bergeser menjadi pengaju pertanyaan, bukan pemberi instruksi."]),
        slide(5, "Perubahan 03", "Menilai untuk Memperbaiki Pengajaran",
              body=["Saya dahulu membaca hasil penilaian sebagai potret kemampuan murid. Kini saya membacanya lebih dahulu sebagai umpan balik atas pengajaran saya sendiri.", "Ketika sebagian besar murid keliru pada aspek yang sama, yang perlu diperbaiki adalah cara saya mengajarkannya, bukan ketekunan mereka."]),
        slide(6, "Perubahan 04", "Belajar dari Ekosistem Sekolah",
              body=["Penjadwalan, ketersediaan bahan, ketertiban inventaris, dan koordinasi antarguru ternyata menentukan keberhasilan pembelajaran sebesar rancangan yang saya buat.", "Saya berhenti memandang bengkel sebagai ruang yang berdiri sendiri, dan mulai memperhitungkan keadaan di luar kendali saya sebagai bagian dari perencanaan, bukan sebagai gangguan."]),
        slide(7, "Sintesis", "Empat Perubahan, Satu Arah",
              bullets=["Rencana: dari administrasi menjadi peta yang dapat ditelusuri", "Mengajar: dari menuntun menjadi memberi ruang", "Menilai: dari potret murid menjadi cermin pengajaran", "Berkarya: dari ruang kelas menjadi ekosistem sekolah"],
              body=["Keempatnya bermuara pada satu arah: pembelajaran yang lebih jujur dan lebih manusiawi."]),
        slide(8, "Penutup", "Komitmen ke Depan",
              body=["Saya membawa empat perubahan ini sebagai kebiasaan, bukan sekadar temuan laporan: menelusuri rancangan sebelum mengajar, memberi ruang sebelum memberi jawaban, membaca penilaian sebagai umpan balik, dan menghitung ekosistem sebagai bagian rencana."]),
    ]))

# ---------- 10: Refleksi MK — Projek Kepemimpinan ----------
decks.append(deck("meeting-10", 10, "Refleksi MK — Projek Kepemimpinan",
    "Kepemimpinan pembelajaran: dari mengelola kelas menuju memengaruhi ekosistem",
    [
        slide(1, "Refleksi MK", "Projek Kepemimpinan",
              body=["Kepemimpinan dalam pendidikan tidak selalu berarti jabatan. Di PPL mandiri saya belajar bahwa memimpin adalah mengambil inisiatif atas hal-hal kecil yang memperbaiki pembelajaran banyak orang."]),
        slide(2, "Memimpin Diri", "Disiplin yang Menular",
              body=["Sebelum memimpin orang lain, saya belajar memimpin diri: datang lebih awal, menyiapkan bahan sebelum bel berbunyi, dan menuntaskan administrasi hari itu juga.", "Kebiasaan kecil ini ternyata menular — murid dan rekan guru merespons ketertiban dengan ketertiban."]),
        slide(3, "Kolaborasi", "Koordinasi sebagai Kepemimpinan",
              body=["Penjadwalan, ketersediaan bahan, dan koordinasi antarguru adalah medan kepemimpinan yang sesungguhnya di sekolah kejuruan.", "Saya belajar membaca kebutuhan rekan guru dan menyesuaikan jadwal praktik agar alat dan ruang bengkel terpakai optimal."]),
        slide(4, "Inisiatif", "Perbaikan Kecil, Dampak Nyata",
              bullets=["Merapikan inventaris alat sebelum praktik dimulai", "Menyusun alur bahan kerja agar tidak ada murid menunggu giliran", "Membuka sesi tanya jawab singkat di sela praktik untuk menangkap kebingungan lebih awal"],
              body=["Inisiatif-inisiatif ini tidak memerlukan izin besar — hanya keberanian untuk memulai."]),
        slide(5, "Dampak", "Ekosistem yang Ikut Bergerak",
              body=["Ketika saya memperhitungkan ekosistem sekolah sebagai bagian rencana, pembelajaran menjadi lebih stabil: murid tahu apa yang akan terjadi, rekan guru tahu apa yang saya butuhkan, dan bengkel berjalan tanpa kejutan."]),
        slide(6, "Refleksi", "Pemimpin yang Melayani",
              quote="Kepemimpinan pembelajaran bukan tentang mengendalikan, melainkan tentang membuat orang lain mampu — murid mampu belajar, rekan mampu berkolaborasi.",
              body=["Projek kepemimpinan mengajarkan saya bahwa pemimpin yang baik di sekolah kejuruan adalah yang paling siap melayani kebutuhan praktik."]),
    ]))

# ---------- 11: Refleksi MK — Pola Pikir Bertumbuh ----------
decks.append(deck("meeting-11", 11, "Refleksi MK — Pola Pikir Bertumbuh",
    "Menerima umpan balik sebagai bahan bakar, bukan vonis",
    [
        slide(1, "Refleksi MK", "Pola Pikir Bertumbuh",
              body=["Mata kuliah ini menantang asumsi lama: bahwa kemampuan mengajar adalah bawaan. Praktik mengajar membuktikan sebaliknya — mengajar adalah keterampilan yang tumbuh lewat umpan balik dan percobaan."]),
        slide(2, "Umpan Balik", "Data, Bukan Vonis",
              body=["Penilaian murid yang saya baca sebagai potret kemampuan kini saya baca sebagai data pengajaran.", "Ketika banyak murid keliru pada aspek yang sama, pertanyaannya bergeser dari 'kenapa mereka tidak paham?' menjadi 'bagian mana dari penjelasan saya yang perlu diperbaiki?'"]),
        slide(3, "Kegagalan", "Kesalahan sebagai Sinyal",
              body=["Di bengkel, kesalahan murid adalah sinyal, bukan aib: constraint yang salah menandakan konsep yang belum utuh, bukan murid yang bodoh.", "Pola pikir ini mengubah suasana praktik menjadi laboratorium percobaan, tempat kesalahan dipelajari dengan tenang."]),
        slide(4, "Belajar dari Sekitar", "Guru Pamong dan Rekan Sejawat",
              body=["Guru pamong memberikan umpan balik langsung setelah setiap pertemuan — hal yang paling cepat menumbuhkan kemampuan saya.", "Rekan sejawat PPG menjadi cermin: melihat cara mereka menangani kelas yang sama memberi saya alternatif strategi."]),
        slide(5, "Bertumbuh", "Merayakan Kemajuan Bertahap",
              body=["Saya belajar menandai kemajuan kecil: murid yang berani bertanya, LKM yang selesai tanpa bantuan, atau penjelasan yang tidak perlu diulang.", "Merayakan kemajuan bertahap menjaga motivasi — bagi murid dan bagi saya."]),
        slide(6, "Refleksi", "Ilmu sebagai Cahaya",
              quote="Ilmu adalah senjata terkuat di dunia. Ia menerangi jalan di tengah kegelapan, mengubah ketidakmungkinan menjadi peluang, dan membentuk manusia yang berdiri tegak di atas keyakinan dan pengetahuan.",
              body=["Fanny Fatchurrahman — pola pikir bertumbuh adalah cara saya menjaga ilmu tetap hidup: terus belajar, terus mengoreksi, terus tumbuh."]),
    ]))

# ---------- 12: Refleksi MK — Inovasi Berbasis Ajaran Tamansiswa ----------
decks.append(deck("meeting-12", 12, "Refleksi MK — Inovasi Tamansiswa",
    "Filosofi Among dalam praktik mengajar teknik pemesinan",
    [
        slide(1, "Refleksi MK", "Inovasi Berbasis Ajaran Tamansiswa",
              body=["Ajaran Ki Hadjar Dewantara bukanlah artefak museum — ia hidup setiap kali saya memutuskan bagaimana memperlakukan murid di bengkel."]),
        slide(2, "Among", "Menuntun, Bukan Mengontrol",
              body=["Filosofi Among menjaga peran saya tetap sebagai pendamping, bukan pengontrol.", "Di praktik CAD, among berarti memberi murid ruang menentukan urutan pengerjaan, lalu menuntun mereka mempertanggungjawabkan pilihannya."]),
        slide(3, "Semboyan 01", "Ing Ngarsa Sung Tulada",
              body=["Di depan, memberi teladan: datang tepat waktu, bekerja teliti, dan mengakui kesalahan dengan jujur.", "Murid teknik pemesinan belajar dari apa yang mereka lihat guru lakukan, bukan hanya dari apa yang guru katakan."]),
        slide(4, "Semboyan 02", "Ing Madya Mangun Karsa",
              body=["Di tengah, membangkitkan kemauan: memantik rasa ingin tahu lewat pertanyaan, bukan memberi semua jawaban.", "Di sela praktik, saya belajar berhenti menuntun dan mulai bertanya: 'Menurutmu, kenapa constraint ini harus dipasang lebih dulu?'"]),
        slide(5, "Semboyan 03", "Tut Wuri Handayani",
              body=["Di belakang, memberi dorongan: menyediakan bahan, alat, dan dukungan, lalu membiarkan murid berjalan di depan.", "Hasil karya siswa menjadi bukti bahwa dorongan dari belakang lebih kuat daripada tarikan dari depan."]),
        slide(6, "Refleksi", "Tamansiswa di Era Mesin",
              body=["Inovasi berbasis ajaran Tamansiswa berarti menerjemahkan among ke praktik modern: scaffolding Vygotsky, diferensiasi, dan pembelajaran berbasis proyek semuanya sejalan dengan among.", "Ajaran ini tetap relevan justru karena ia tidak menyebut teknologi — ia menyebut manusia."]),
    ]))

# ---------- 13: Refleksi Program PPG ----------
decks.append(deck("meeting-13", 13, "Refleksi Program PPG",
    "Perjalanan dua semester: dari calon guru menuju guru profesional",
    [
        slide(1, "Refleksi Program", "Dua Semester, Satu Perjalanan",
              body=["Program PPG Prajabatan 2026 membawa saya dari pemahaman filosofis hingga praktik mengajar mandiri di SMK N 2 Depok.", "Berikut peta perjalanan yang telah saya lalui."]),
        slide(2, "Angka Perjalanan", "Perjalanan dalam Angka",
              bullets=["2 semester perkuliahan", "16 pertemuan seminar reflektif", "74 slide presentasi + 60 slide refleksi di ruang seminar ini", "11 bagian e-portfolio", "6 analisis praktik mengajar mandiri", "1 sekolah PPL: SMK N 2 Depok"],
              body=["Setiap angka mewakili kerja nyata, bukan sekadar administrasi."]),
        slide(3, "Semester 1", "Fondasi Filosofis",
              body=["Semester pertama membangun fondasi: filosofi pendidikan, pemahaman peserta didik, dan PPL Terbimbing.", "Di sinilah saya merumuskan visi, mengenal sosok calon guru yang ingin saya jadikan, dan menyusun strategi pencapaiannya."]),
        slide(4, "Semester 2", "Praktik dan Kepemimpinan",
              body=["Semester kedua menguji fondasi itu: pembelajaran mendalam, projek kepemimpinan, dan PPL Mandiri.", "Di SMK N 2 Depok, teori bertemu kenyataan bengkel: penjadwalan, bahan, inventaris, dan enam siklus analisis praktik."]),
        slide(5, "Karya", "Perangkat yang Teruji",
              body=["Dari dua semester lahir perangkat pembelajaran utuh: RPP berbasis Deep Learning, LKM berjenjang, media presentasi, dan instrumen asesmen autentik.", "Seluruhnya diuji di kelas nyata dan disempurnakan lewat umpan balik guru pamong."]),
        slide(6, "Perubahan Diri", "Yang Berubah pada Diri Saya",
              bullets=["Merancang agar dapat ditelusuri", "Mengajar dengan memberi ruang", "Menilai untuk memperbaiki pengajaran", "Belajar dari ekosistem sekolah"],
              body=["Empat perubahan ini adalah hasil paling berharga dari program ini — lebih berharga dari dokumen apa pun."]),
        slide(7, "Sintesis", "Dari Calon Guru Menuju Guru Profesional",
              body=["Guru profesional, bagi saya sekarang, bukan yang paling lengkap administrasinya, melainkan yang paling jujur membaca celah pada rencananya sendiri.", "PPG mengajarkan kejujuran itu."]),
        slide(8, "Penutup", "Bersambung ke Karya Inovasi",
              body=["Perjalanan belum selesai: tahap berikutnya adalah menyusun, menyempurnakan, dan mempresentasikan karya inovasi — puncak dari seluruh pembelajaran dua semester."]),
    ]))

# ---------- 14: Penyusunan Karya Inovasi ----------
decks.append(deck("meeting-14", 14, "Penyusunan Karya Inovasi",
    "Dari identifikasi masalah menuju prototipe perangkat pembelajaran",
    [
        slide(1, "Karya Inovasi", "Penyusunan Karya Inovasi",
              body=["Karya inovasi berangkat dari masalah nyata yang saya temukan selama praktik mengajar, bukan dari topik yang dipilih di atas kertas."]),
        slide(2, "Identifikasi Masalah", "Masalah di Bengkel",
              body=["Selama PPL mandiri, sebagian besar murid mengalami kesulitan yang sama: memahami alasan di balik urutan constraint saat assembly di Autodesk Inventor.", "Mereka bisa mengikuti langkah, tetapi belum bisa menjelaskan mengapa langkah itu harus demikian — dan keliru saat soal diubah sedikit."]),
        slide(3, "Perancangan", "Solusi: Perangkat Berbasis Deep Learning",
              body=["Solusi dirancang sebagai perangkat pembelajaran utuh: RPP yang menekankan pemahaman, bukan hafalan langkah.", "Pendekatan Deep Learning menjadi rangka utama agar siswa memahami alasan di balik setiap perintah CAD."]),
        slide(4, "Pengembangan", "Media dan LKM Berjenjang",
              bullets=["Media presentasi interaktif assembly 3D (P1-P3)", "LKM berjenjang: merakit komponen, constraint, hingga Drawing dan BOM", "Job sheet Tool Post sebagai panduan praktik nyata"],
              body=["Materi dikembangkan bertahap agar murid naik dari meniru menuju memahami."]),
        slide(5, "Instrumen", "Asesmen yang Mengukur Pemahaman",
              body=["Instrumen asesmen diagnostik, formatif, dan sumatif disusun dengan rubrik autentik berbasis kinerja praktik CAD.", "Asesmen dirancang agar tujuan, kegiatan, dan penilaian dapat ditelusuri bolak-balik — sesuai perubahan cara pandang pada PPL mandiri."]),
        slide(6, "Prototipe", "Siklus 1 sebagai Uji Coba Awal",
              body=["Prototipe pertama diterapkan pada Siklus 1 di kelas XI TPM.", "Hasilnya menjadi bahan evaluasi: bagian mana yang dipahami, bagian mana yang masih membingungkan, dan apa yang harus diubah pada siklus berikutnya."]),
    ]))

# ---------- 15: Penyempurnaan Karya Inovasi ----------
decks.append(deck("meeting-15", 15, "Penyempurnaan Karya Inovasi",
    "Iterasi dari umpan balik: dari prototipe menuju perangkat yang stabil",
    [
        slide(1, "Karya Inovasi", "Penyempurnaan Karya Inovasi",
              body=["Karya inovasi tidak selesai saat prototipe selesai dibuat — ia selesai saat berulang kali diperbaiki oleh umpan balik."]),
        slide(2, "Umpan Balik Siklus 1", "Apa yang Ditemukan",
              bullets=["Sebagian murid masih bingung pada pemasangan constraint Mate dan Flush", "Media perlu lebih banyak visualisasi 3D", "LKM perlu langkah yang lebih eksplisit pada pertemuan pertama"],
              body=["Umpan balik guru pamong dan hasil asesmen formatif menjadi dasar revisi."]),
        slide(3, "Revisi Media", "Visualisasi yang Lebih Dekat",
              body=["Media presentasi P2 dan P3 dikembangkan dengan visualisasi assembly yang lebih rinci.", "Setiap constraint divisualisasikan agar murid melihat alasan, bukan hanya urutan."]),
        slide(4, "Revisi LKM", "Perancah yang Tepat",
              body=["LKM disesuaikan: pertemuan awal lebih terstruktur, pertemuan berikutnya memberi ruang keputusan lebih besar.", "Perancah dikurangi bertahap seiring tumbuhnya kemandirian murid."]),
        slide(5, "Siklus 2 dan 3", "Penguatan dan Stabilisasi",
              body=["Siklus 2 memperbaiki kelemahan Siklus 1; Siklus 3 menguji perangkat pada kondisi yang lebih stabil.", "Hasil karya siswa pada siklus akhir menjadi bukti bahwa perangkat bekerja: pemahaman meningkat, kesalahan berulang menurun."]),
        slide(6, "Hasil Akhir", "Perangkat yang Siap Dipresentasikan",
              body=["Karya inovasi final adalah perangkat pembelajaran assembly berbasis Deep Learning yang telah melewati tiga siklus uji dan penyempurnaan.", "Ia siap dipresentasikan pada Seminar PPG."]),
    ]))

# ---------- 16: Seminar PPG ----------
decks.append(deck("meeting-16", 16, "Seminar PPG",
    "Puncak perjalanan: mempertanggungjawabkan karya di hadapan publik",
    [
        slide(1, "Seminar PPG", "Seminar PPG — Karya Inovasi",
              body=["Seminar ini adalah puncak perjalanan PPG: mempresentasikan karya inovasi, mempertanggungjawabkan prosesnya, dan menerima masukan dari penguji serta rekan sejawat."]),
        slide(2, "Ringkasan", "Satu Kalimat Karya",
              quote="Perangkat pembelajaran assembly berbasis Deep Learning yang menuntun siswa memahami alasan di balik setiap constraint, bukan sekadar menghafal langkah.",
              body=["Dari masalah nyata di bengkel, menjadi solusi yang teruji tiga siklus."]),
        slide(3, "Bukti Praktik", "Video Praktik Mengajar",
              body=["Dokumentasi praktik mengajar mandiri menunjukkan bagaimana perangkat diterapkan di kelas nyata.", "Tonton video praktik melalui tautan pada slide ini."],
              hotspots=[
                  {"label": "Tonton Video Praktik", "x": 30, "y": 60, "width": 40, "height": 22,
                   "targetSlide": None, "href": "https://www.youtube.com/watch?v=6DE4NWirzZo"},
              ]),
        slide(4, "Bukti Karya", "Perangkat Pembelajaran",
              body=["Seluruh dokumen karya dapat diakses: RPP, LKM, media, dan instrumen asesmen.", "Tautan menuju dokumen tersedia pada slide ini."],
              hotspots=[
                  {"label": "Buka RPP Siklus 1", "x": 8, "y": 60, "width": 26, "height": 22,
                   "targetSlide": None, "href": "https://drive.google.com/file/d/13HtahKdlZsOCvZQitf-nsfdewEUgTeHT/view?usp=sharing"},
                  {"label": "Buka Perangkat Asesmen", "x": 37, "y": 60, "width": 26, "height": 22,
                   "targetSlide": None, "href": "https://drive.google.com/file/d/1SJhusFCTSfJd1659mWUAMIJrQBfO3nmM/view?usp=sharing"},
                  {"label": "Buka Job Sheet", "x": 66, "y": 60, "width": 26, "height": 22,
                   "targetSlide": None, "href": "https://drive.google.com/file/d/1HGyN7VOBQYgdXj3-IszSVntb4yltAMt_/view?usp=sharing"},
              ]),
        slide(5, "Dokumentasi", "Perjalanan dalam Gambar",
              body=["Dokumentasi praktik CAD, suasana lab, dan bimbingan individu tersedia di galeri e-portfolio.", "Kunjungi galeri untuk melihat momen-momen nyata di SMK N 2 Depok."]),
        slide(6, "Refleksi Akhir", "Yang Saya Bawa Pulang",
              body=["Dari seminar dan seluruh program, saya membawa pulang satu keyakinan: mengajar adalah profesi yang terus disempurnakan, dan penyempurnaan itu dimulai dari kejujuran membaca celah pada diri sendiri."]),
        slide(7, "Ucapan Terima Kasih", "Kepada Para Pendamping",
              body=["Terima kasih kepada dosen pembimbing, guru pamong SMK N 2 Depok, rekan sejawat PPG, dan seluruh pihak yang telah membersamai perjalanan ini.", "Kritik dan saran pada seminar ini akan menjadi bahan penyempurnaan berikutnya."]),
        slide(8, "Penutup", "Terus Bertumbuh",
              quote="Ilmu adalah senjata terkuat di dunia. Ia menerangi jalan di tengah kegelapan, mengubah ketidakmungkinan menjadi peluang.",
              body=["Fanny Fatchurrahman — calon guru Teknik Pemesinan, pembelajar sepanjang hayat."]),
    ]))

with open('js/seminar-ppg-data-s2.js', 'w', encoding='utf-8') as f:
    f.write('/* Deck 8-16 Seminar PPG — slide teks refleksi.\n')
    f.write('   Dibuat oleh scripts/build-seminar-s2.py. Jangan edit manual. */\n')
    f.write('export const seminarDecksS2 = ')
    f.write(json.dumps(decks, ensure_ascii=False, indent=2))
    f.write(';\n')

print(f'Ditulis {len(decks)} deck, {sum(len(d["slides"]) for d in decks)} slide')
