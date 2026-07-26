/* ============================================
   SEMESTER 2 — DATA ARTEFAK
   Analisis untuk dua puluh empat artefak E-Portfolio 1 Semester 2.

   Dipisahkan dari js/artefak.js karena dibaca dua pihak: modal milik
   E-Portfolio 1 (yang menggabungkannya ke artifactData) dan varian
   nuansa UI yang menampilkan analisis tanpa modal.

   fileUrl sengaja dikosongkan. Begitu sebuah berkas diunggah, isi
   fileUrl dengan tautan Google Drive-nya; pratinjau dokumen akan
   muncul dengan sendirinya di bawah analisis.
   ============================================ */

export const SEMESTER2_ARTEFAK = {
  's2-atp': {
    title: 'Alur Tujuan Pembelajaran',
    type: 'Rancangan / Perencanaan Pembelajaran',
    fileUrl: '',
    context: 'Alur tujuan pembelajaran menurunkan capaian pembelajaran menjadi tujuan yang berurutan untuk praktik mengajar mandiri Teknik Pemesinan.',
    purpose: 'Saya menyusunnya agar urutan tujuan mengikuti alur kerja nyata di bengkel, bukan urutan bab pada buku, sehingga tiap tujuan menjadi pijakan bagi tujuan berikutnya.',
    pros: [
      'Tiap tujuan dinyatakan dengan kata kerja yang dapat diamati, sehingga dapat diukur tanpa penafsiran tambahan.',
      'Urutan tujuan mengikuti alur pekerjaan pemesinan: membaca gambar, merencanakan, menyiapkan, mengerjakan, memeriksa.',
      'Kompetensi sikap kerja dan keselamatan ditempatkan sejajar dengan kompetensi keterampilan, bukan sebagai pelengkap.'
    ],
    cons: [
      'Alur ini belum diuji terhadap murid dengan kemampuan awal yang jauh berbeda, sehingga loncatan antartujuan mungkin terlalu jauh bagi sebagian murid.',
      'Perkiraan waktu tiap tujuan masih berdasarkan asumsi, belum berdasarkan catatan pelaksanaan.'
    ],
    theory: 'Memakai backward design: capaian pembelajaran diturunkan lebih dahulu menjadi bukti yang diterima, baru menjadi urutan kegiatan.'
  },
  's2-rencana-asesmen': {
    title: 'Rencana Asesmen',
    type: 'Rancangan / Perencanaan Pembelajaran',
    fileUrl: '',
    context: 'Rencana asesmen memetakan setiap tujuan pembelajaran terhadap bentuk asesmen yang mengukurnya, mencakup asesmen awal, formatif, dan sumatif.',
    purpose: 'Pemetaan ini menutup dua celah sekaligus: tujuan yang tidak pernah diukur, dan penilaian atas hal yang tidak pernah diajarkan.',
    pros: [
      'Setiap tujuan dipasangkan dengan bentuk asesmennya pada satu tabel, sehingga celah langsung terlihat.',
      'Asesmen awal dipakai untuk memetakan kesiapan murid, bukan untuk memberi nilai.',
      'Asesmen formatif dirancang berjalan di tengah praktik tanpa menghentikan pekerjaan murid.'
    ],
    cons: [
      'Pelaksanaan asesmen formatif sambil mendampingi murid menuntut perhatian ganda yang tidak selalu dapat saya penuhi.',
      'Belum ada perkiraan waktu yang dibutuhkan untuk menilai seluruh murid dalam satu blok praktik.'
    ],
    theory: 'Menerapkan keselarasan konstruktif Biggs, yakni tujuan, kegiatan, dan asesmen yang dirancang sebagai satu garis lurus.'
  },
  's2-k3': {
    title: 'Handout Keselamatan Kerja',
    type: 'Materi Pembelajaran',
    fileUrl: '',
    context: 'Panduan keselamatan dan kesehatan kerja yang khusus disusun untuk praktik pemesinan, mencakup alat pelindung diri, prosedur aman, dan penanganan keadaan darurat.',
    purpose: 'Keselamatan kerja saya perlakukan sebagai kompetensi yang diajarkan dan dinilai, bukan sebagai peringatan yang dibacakan di awal pertemuan lalu dilupakan.',
    pros: [
      'Prosedur aman dikaitkan dengan alasan teknisnya, sehingga murid memahami sebab, bukan sekadar mematuhi aturan.',
      'Memuat daftar periksa yang dapat dipakai murid sendiri sebelum menyalakan mesin.',
      'Keselamatan kerja masuk sebagai aspek terpisah dalam rubrik penilaian.'
    ],
    cons: [
      'Handout belum menyertakan foto keadaan berbahaya yang nyata di bengkel sekolah sebagai contoh konkret.',
      'Penerapannya masih bergantung pada pengawasan saya, belum menjadi kebiasaan mandiri murid.'
    ],
    theory: 'Berpijak pada standar keselamatan kerja industri manufaktur yang diperkenalkan sebagaimana berlaku di tempat kerja, bukan sebagai aturan sekolah.'
  },
  's2-pengayaan': {
    title: 'Materi Pengayaan',
    type: 'Materi Pembelajaran',
    fileUrl: '',
    context: 'Bahan lanjutan bagi murid yang menyelesaikan pekerjaan lebih cepat dari perkiraan, berisi tantangan tambahan pada tingkat kesulitan yang lebih tinggi.',
    purpose: 'Pengayaan disiapkan agar murid yang cepat tidak menganggur menunggu temannya, dan tetap memperoleh tantangan yang sepadan dengan kemampuannya.',
    pros: [
      'Tantangan pengayaan tetap bertumpu pada kompetensi yang sama, sehingga bukan materi terpisah yang membingungkan.',
      'Dirancang dapat dikerjakan mandiri tanpa menambah beban pendampingan saya.',
      'Menutup masalah nyata di bengkel, yakni murid cepat yang menganggur menunggu giliran mesin berikutnya.'
    ],
    cons: [
      'Pengayaan masih berupa lembar tugas; belum tersedia bentuk yang memanfaatkan murid cepat sebagai pendamping sebaya.',
      'Belum ada patokan yang jelas kapan seorang murid dinyatakan siap menerima pengayaan.'
    ],
    theory: 'Menerapkan pembelajaran berdiferensiasi pada proses dan tingkat tantangan, dengan capaian pembelajaran yang tetap sama.'
  },
  's2-model3d': {
    title: 'Model Tiga Dimensi dan Animasi Langkah',
    type: 'Media Pembelajaran',
    fileUrl: '',
    context: 'Model tiga dimensi dan animasi langkah pengerjaan yang dipakai sebelum murid menyentuh mesin, untuk menjembatani gambar kerja dua dimensi dengan benda yang akan dihasilkan.',
    purpose: 'Kesulitan terbesar murid adalah membayangkan bentuk tiga dimensi dari gambar dua dimensi. Media ini dipilih justru karena menjawab kesulitan itu.',
    pros: [
      'Setelah penjembatanan ini, penjelasan lisan yang semula berulang menjadi jauh lebih singkat karena murid memiliki bayangan yang sama.',
      'Murid dapat memutar dan memeriksa model dari berbagai sisi, yang tidak mungkin dilakukan pada gambar cetak.',
      'Animasi langkah memperlihatkan urutan pengerjaan sebagai rangkaian, bukan sebagai daftar instruksi terpisah.'
    ],
    cons: [
      'Pemakaiannya bergantung pada ketersediaan perangkat di bengkel yang jumlahnya terbatas.',
      'Belum ada pengukuran yang memisahkan sumbangan media ini dari sumbangan pendampingan langsung.'
    ],
    theory: 'Mengacu pada teori beban kognitif: representasi visual yang tepat mengurangi beban ekstra sehingga perhatian murid tersedia untuk memahami inti pekerjaan.'
  },
  's2-media-cetak': {
    title: 'Media Cetak Cadangan',
    type: 'Media Pembelajaran',
    fileUrl: '',
    context: 'Versi cetak dari setiap media digital yang dipakai, disiapkan untuk berjaga bila perangkat atau jaringan di bengkel tidak tersedia.',
    purpose: 'Keterbatasan perangkat di bengkel adalah kondisi yang harus diterima, bukan dijadikan alasan. Cadangan cetak menjaga pembelajaran tetap berjalan.',
    pros: [
      'Pembelajaran tidak pernah terhenti karena masalah teknis pada perangkat.',
      'Versi cetak dapat dibawa murid ke sisi mesin, tempat perangkat digital justru berisiko.',
      'Menyamakan akses bagi murid yang tidak membawa perangkat sendiri.'
    ],
    cons: [
      'Penyiapan cadangan menambah beban persiapan yang cukup besar pada setiap pertemuan.',
      'Versi cetak kehilangan keunggulan model tiga dimensi yang dapat diputar.'
    ],
    theory: 'Berpijak pada prinsip perancangan pembelajaran yang tahan terhadap keadaan, yakni rencana yang tetap berjalan ketika satu komponennya gagal.'
  },
  's2-catatan-video': {
    title: 'Catatan Pengamatan Rekaman',
    type: 'Instrumen Refleksi',
    fileUrl: '',
    context: 'Penandaan momen kunci pada rekaman praktik mengajar mandiri beserta penelusuran penyebabnya, disusun sebagai catatan berwaktu.',
    purpose: 'Catatan berwaktu membuat temuan dapat ditunjukkan kembali, bukan sekadar diingat. Setiap momen ketika murid berhenti bekerja saya telusuri penyebabnya.',
    pros: [
      'Temuan ditautkan pada waktu tertentu di rekaman sehingga dapat diperiksa ulang oleh guru pamong maupun dosen.',
      'Penyebab murid berhenti bekerja dibedakan: instruksi kurang jelas, alat tidak tersedia, atau tugas terlalu jauh dari kemampuan.',
      'Pola persebaran perhatian saya di dalam bengkel ikut tercatat, hal yang tidak terasa saat mengajar.'
    ],
    cons: [
      'Penandaan dilakukan setelah pembelajaran, sehingga konteks yang tidak terekam kamera bergantung pada ingatan.',
      'Sudut pengambilan tunggal membuat sebagian kegiatan murid di sisi bengkel yang berlawanan tidak teramati.'
    ],
    theory: 'Menerapkan reflection-on-action Schon, yakni meninjau tindakan setelah peristiwa berlangsung dengan bukti yang dapat diperiksa ulang.'
  },
  's2-umpan-balik': {
    title: 'Umpan Balik Guru Pamong',
    type: 'Catatan Pembimbingan',
    fileUrl: '',
    context: 'Catatan masukan guru pamong atas pelaksanaan praktik mengajar mandiri, dikumpulkan setelah tiap siklus praktik.',
    purpose: 'Umpan balik guru pamong memberi sudut pandang yang tidak dapat saya peroleh dari rekaman maupun refleksi sendiri, karena beliau mengenal murid jauh lebih lama.',
    pros: [
      'Masukan dicatat berdampingan dengan pengamatan saya sendiri, sehingga perbedaan sudut pandang terlihat jelas.',
      'Memuat pengetahuan yang tidak tertulis di modul mana pun, seperti kebiasaan murid tertentu dan batas aman mesin.',
      'Tiap masukan ditindaklanjuti dengan satu perubahan konkret pada siklus berikutnya.'
    ],
    cons: [
      'Sebagian masukan disampaikan lisan setelah jam praktik dan baru dicatat kemudian, sehingga rinciannya bisa berkurang.',
      'Belum ada format tetap sehingga masukan antarsiklus sulit dibandingkan secara langsung.'
    ],
    theory: 'Bertumpu pada pembelajaran melalui pemagangan kognitif, yakni calon guru belajar dari praktisi berpengalaman melalui pengamatan dan umpan balik.'
  },
  's2-jurnal': {
    title: 'Catatan Harian PPL Mandiri',
    type: 'Jurnal Kegiatan',
    fileUrl: '',
    context: 'Jurnal harian kegiatan selama menjalani Praktik Pengalaman Lapangan Mandiri di SMK N 2 Depok, mencakup kegiatan mengajar dan nonmengajar.',
    purpose: 'Jurnal menjaga agar peristiwa kecil yang mudah terlupakan tetap tercatat, dan menjadi bahan ketika menyusun refleksi tiap siklus.',
    pros: [
      'Mencatat kegiatan mengajar dan nonmengajar dalam satu rangkaian waktu, sehingga keterkaitan keduanya terlihat.',
      'Pencatatan harian menangkap peristiwa saat masih segar, bukan setelah berlalu berminggu-minggu.',
      'Menjadi rujukan ketika menyusun LK refleksi maupun laporan akhir.'
    ],
    cons: [
      'Sebagian besar catatan masih bersifat naratif dan belum dirangkum menjadi temuan yang dapat ditindaklanjuti.',
      'Konsistensi pengisian menurun pada hari dengan jadwal praktik yang padat.'
    ],
    theory: 'Mengikuti praktik penjurnalan reflektif yang menempatkan pencatatan berkala sebagai bahan mentah bagi refleksi yang lebih dalam.'
  },
  's2-inventaris': {
    title: 'Administrasi dan Inventaris Bengkel',
    type: 'Dokumen Administrasi',
    fileUrl: '',
    context: 'Pencatatan alat dan bahan bengkel beserta administrasi pendukung praktik, yang saya kerjakan sebagai bagian dari kegiatan nonmengajar.',
    purpose: 'Awalnya administrasi terasa terpisah dari mengajar. Setelah menjalaninya, saya memahami ketertiban pencatatan alat berdampak langsung pada kelancaran praktik.',
    pros: [
      'Bengkel dengan inventaris rapi memungkinkan pembelajaran dimulai tepat waktu tanpa kehilangan menit-menit awal.',
      'Pencatatan alat yang rusak atau hilang mencegah gangguan yang berulang pada pertemuan berikutnya.',
      'Memberi gambaran nyata tentang keterbatasan sumber daya yang harus diperhitungkan saat menyusun rencana pembelajaran.'
    ],
    cons: [
      'Pencatatan masih dikerjakan manual sehingga menyita waktu yang cukup banyak.',
      'Belum ada mekanisme yang melibatkan murid dalam merawat inventaris sebagai bagian dari kompetensi kerja.'
    ],
    theory: 'Memandang sekolah sebagai satu sistem, tempat keberhasilan pembelajaran turut ditentukan oleh hal-hal di luar ruang kelas.'
  },
  's2-rekap': {
    title: 'Rekap Hasil Penilaian',
    type: 'Dokumen Penilaian',
    fileUrl: '',
    context: 'Rekapitulasi nilai murid per aspek pada tiap siklus praktik, mencakup ketepatan ukuran, ketepatan prosedur, dan keselamatan kerja.',
    purpose: 'Rekap per aspek memperlihatkan pola yang tidak terlihat pada nilai gabungan, misalnya murid dengan hasil kerja tepat tetapi prosedur yang belum aman.',
    pros: [
      'Nilai dipisah per aspek sehingga kekuatan dan kelemahan murid dapat dibaca terpisah.',
      'Perbandingan antarsiklus memperlihatkan apakah perbaikan pengajaran saya benar-benar berdampak.',
      'Dapat ditunjukkan kepada murid sebagai dasar percakapan tentang apa yang perlu mereka perbaiki.'
    ],
    cons: [
      'Rekap masih disusun manual sehingga rawan keliru salin ketika jumlah murid banyak.',
      'Belum menyertakan catatan kualitatif yang menjelaskan angka pada kasus murid tertentu.'
    ],
    theory: 'Menempatkan data penilaian sebagai bahan pengambilan keputusan pembelajaran, bukan sebagai catatan administratif semata.'
  },
  's2-tindak-lanjut': {
    title: 'Analisis Butir dan Tindak Lanjut',
    type: 'Dokumen Penilaian',
    fileUrl: '',
    context: 'Pembacaan pola kekeliruan murid pada hasil penilaian beserta rencana perbaikan pengajaran untuk siklus berikutnya.',
    purpose: 'Hasil penilaian saya baca sebagai umpan balik atas pengajaran saya, bukan semata penilaian atas murid. Ketika sebagian besar murid keliru pada aspek yang sama, yang perlu diperbaiki adalah cara saya mengajarkannya.',
    pros: [
      'Kekeliruan yang terjadi serentak pada banyak murid diperlakukan sebagai masalah pengajaran, bukan masalah murid.',
      'Setiap pola kekeliruan diikuti satu langkah perbaikan yang konkret pada siklus berikutnya.',
      'Menghubungkan instrumen penilaian kembali ke perencanaan, sehingga siklus perbaikan tertutup.'
    ],
    cons: [
      'Analisis masih bertumpu pada jumlah kekeliruan, belum menelusuri penyebabnya melalui wawancara dengan murid.',
      'Rentang satu siklus terlalu pendek untuk memastikan perbaikan benar-benar berdampak, bukan sekadar kebetulan.'
    ],
    theory: 'Mengikuti siklus penelitian tindakan kelas: rencana, tindakan, pengamatan, refleksi, lalu rencana berikutnya.'
  },
  's2-modul-ajar': {
    title: 'Modul Ajar Praktik Mengajar Mandiri',
    type: 'Rancangan / Perencanaan Pembelajaran',
    fileUrl: '',
    context: 'Modul ajar ini saya susun untuk praktik mengajar mandiri mata pelajaran produktif Teknik Pemesinan di SMK N 2 Depok. Rancangannya menuntut tujuan yang terukur pada dua dimensi sekaligus, yaitu ketepatan hasil kerja dan sikap kerja yang aman.',
    purpose: 'Saya ingin tujuan, kegiatan, dan asesmen dapat ditelusuri bolak-balik: setiap kegiatan inti merujuk pada satu tujuan tertentu, dan setiap tujuan memiliki instrumen yang mengukurnya. Pemeriksaan keselarasan saya lakukan sebelum modul diterapkan dengan memetakan ketiganya pada satu tabel.',
    pros: [
      'Tujuan, kegiatan, dan asesmen saya petakan pada satu tabel sehingga celah di antara ketiganya terlihat sejak sebelum modul diterapkan.',
      'Model pembelajaran berbasis pekerjaan dipilih dengan alasan yang jelas: kompetensi pemesinan tidak dapat dipahami hanya melalui penjelasan.',
      'Waktu persiapan mesin dan perapian bengkel diperhitungkan sejak awal sebagai bagian pembelajaran, bukan sisa waktu.'
    ],
    cons: [
      'Alokasi waktu praktik mandiri masih perlu diuji terhadap jumlah mesin yang tersedia, karena giliran murid menentukan seberapa jauh mereka sampai.',
      'Belum tersedia skenario cadangan bila mesin bermasalah di tengah blok praktik.'
    ],
    theory: 'Mengacu pada backward design Understanding by Design (Wiggins dan McTighe) yang menempatkan asesmen sebelum kegiatan, dipadu pendekatan pembelajaran berbasis pekerjaan pada pendidikan vokasi.'
  },
  's2-jobsheet': {
    title: 'Jobsheet dan Gambar Kerja',
    type: 'Perangkat Praktik',
    fileUrl: '',
    context: 'Jobsheet dan gambar kerja menjadi pegangan murid selama praktik di bengkel. Keduanya memuat urutan langkah, alat yang dibutuhkan, serta toleransi yang harus dicapai.',
    purpose: 'Saya menyusunnya agar murid dapat bekerja tanpa harus menunggu instruksi lisan saya pada setiap langkah, sehingga perhatian saya dapat diarahkan pada murid yang benar-benar memerlukan pendampingan.',
    pros: [
      'Urutan langkah disusun mengikuti alur kerja nyata sehingga murid memahami pekerjaan pemesinan dimulai jauh sebelum mesin dinyalakan.',
      'Toleransi dinyatakan sebagai angka yang dapat diukur, bukan sebagai kata sifat seperti rapi atau presisi.',
      'Murid diberi ruang menentukan sendiri urutan pengerjaan setelah memahami gambar, lalu mempertanggungjawabkan pilihannya.'
    ],
    cons: [
      'Jobsheet masih berupa lembar cetak tunggal; murid dengan kemampuan awal berbeda memerlukan versi berlapis.',
      'Belum memuat contoh hasil kerja yang benar sebagai pembanding visual bagi murid.'
    ],
    theory: 'Mengikuti prinsip scaffolding Vygotsky, yakni bantuan yang dikurangi bertahap seiring meningkatnya kemandirian murid.'
  },
  's2-bahan-ajar': {
    title: 'Bahan Ajar Pemesinan',
    type: 'Materi Pembelajaran',
    fileUrl: '',
    context: 'Bahan ajar ini disusun dan diterapkan pada praktik mengajar mandiri. Materi praktik pemesinan mudah melebar ke hal teknis yang belum diperlukan, sehingga kedalamannya perlu dibatasi secara sadar.',
    purpose: 'Saya membatasi kedalaman materi pada apa yang benar-benar dituntut capaian pembelajaran, lalu menyediakan pengayaan terpisah bagi murid yang bergerak lebih cepat.',
    pros: [
      'Kedalaman materi ditakar terhadap capaian pembelajaran, bukan terhadap keluasan bidang pemesinan itu sendiri.',
      'Urutan penyajian mengikuti alur kerja nyata: membaca gambar, merencanakan langkah, menyiapkan alat, mengerjakan, memeriksa hasil.',
      'Materi dikaitkan dengan praktik industri manufaktur sehingga murid melihat alasan di balik setiap prosedur.'
    ],
    cons: [
      'Pembatasan kedalaman berisiko membuat murid yang cepat merasa kurang tertantang bila pengayaan tidak benar-benar disiapkan.',
      'Keterkaitan dengan industri masih bertumpu pada penjelasan lisan, belum pada kunjungan atau narasumber.'
    ],
    theory: 'Bertumpu pada prinsip kurikulum vokasi yang menautkan capaian pembelajaran dengan standar kompetensi kerja di dunia industri.'
  },
  's2-lkpd': {
    title: 'Lembar Kerja Peserta Didik',
    type: 'Materi Pembelajaran',
    fileUrl: '',
    context: 'LKPD menuntun murid dari membaca gambar kerja menuju benda kerja jadi. Kemampuan awal murid dalam membaca gambar teknik berbeda cukup jauh, sehingga lembar ini disiapkan berlapis.',
    purpose: 'Saya ingin setiap murid menuju benda kerja yang sama tanpa ada yang merasa dikerjakan pada tugas yang lebih rendah dari temannya.',
    pros: [
      'Disiapkan dua lapis: lembar ringkas bagi yang sudah memahami dasar, dan pendampingan langkah demi langkah bagi yang masih kesulitan.',
      'Setiap tahap dibangun di atas tahap sebelumnya sehingga kekeliruan di awal terlihat sebagai akibat nyata pada hasil akhir.',
      'Memuat ruang bagi murid mencatat keputusan yang mereka ambil, bukan hanya mengisi jawaban.'
    ],
    cons: [
      'Dua lapis lembar menambah pekerjaan penggandaan dan pengelolaan di bengkel.',
      'Belum ada mekanisme yang memudahkan murid berpindah lapis di tengah praktik ketika ternyata salah menakar kemampuannya.'
    ],
    theory: 'Menerapkan pembelajaran berdiferensiasi pada proses, dengan tujuan dan produk akhir yang tetap sama bagi seluruh murid.'
  },
  's2-media': {
    title: 'Media Pembelajaran',
    type: 'Media Pembelajaran',
    fileUrl: '',
    context: 'Media yang dipergunakan dalam praktik mengajar mandiri, berupa tayangan, model tiga dimensi, dan animasi langkah pengerjaan. Media dipilih berdasarkan kesulitan yang benar-benar dihadapi murid, bukan berdasarkan kebaruan teknologinya.',
    purpose: 'Kesulitan terbesar dalam pemesinan adalah membayangkan bentuk tiga dimensi dari gambar dua dimensi. Media yang saya pilih harus menjembatani persoalan itu; yang tidak menjawab kesulitan tertentu saya tinggalkan.',
    pros: [
      'Media dipakai pada tahap sebelum murid menyentuh mesin, sehingga penjelasan lisan yang semula berulang menjadi jauh lebih singkat.',
      'Penggunaannya dirancang menuntut murid menunjukkan, menandai, atau memperbaiki, bukan sekadar menyimak tayangan.',
      'Tersedia versi cetak untuk setiap media digital, sehingga pembelajaran tetap berjalan ketika perangkat tidak tersedia.'
    ],
    cons: [
      'Penyiapan versi cadangan menambah beban persiapan yang cukup besar untuk setiap pertemuan.',
      'Belum ada pengukuran yang memisahkan sumbangan media dari sumbangan pendampingan langsung terhadap peningkatan pemahaman murid.'
    ],
    theory: 'Mengacu pada teori beban kognitif: media yang tepat mengurangi beban ekstra sehingga perhatian murid tersedia untuk memahami inti pekerjaan.'
  },
  's2-dok-media': {
    title: 'Dokumentasi Penggunaan Media',
    type: 'Dokumentasi',
    fileUrl: '',
    context: 'Foto dan catatan penggunaan media selama praktik berlangsung di bengkel, diambil pada tiap siklus praktik mengajar mandiri.',
    purpose: 'Dokumentasi ini menjadi bukti bahwa media benar-benar dipakai dalam pembelajaran, sekaligus bahan untuk menilai apakah penggunaannya berjalan seperti yang saya rancang.',
    pros: [
      'Merekam keadaan bengkel apa adanya, termasuk kendala teknis yang muncul saat media dipakai.',
      'Memperlihatkan sikap murid saat berinteraksi dengan media, yang sering luput saat saya sedang mendampingi murid lain.',
      'Dapat dibandingkan antarsiklus untuk melihat perubahan cara saya memakai media.'
    ],
    cons: [
      'Pengambilan dokumentasi sambil mengajar membuat sebagian momen penting terlewat.',
      'Belum disertai catatan waktu sehingga sulit menautkan foto dengan tahap pembelajaran tertentu.'
    ],
    theory: 'Dokumentasi diperlakukan sebagai data untuk refleksi, mengikuti prinsip praktik reflektif Schon yang menempatkan bukti lapangan sebagai bahan berpikir.'
  },
  's2-video': {
    title: 'Rekaman Praktik Mengajar Mandiri',
    type: 'Video Pelaksanaan Pembelajaran',
    fileUrl: '',
    context: 'Rekaman utuh pelaksanaan praktik mengajar mandiri, dari kegiatan pembuka hingga penutup. Menonton rekaman diri sendiri memperlihatkan hal yang tidak terasa saat sedang mengajar.',
    purpose: 'Saya memakai rekaman ini untuk memeriksa apakah apersepsi benar-benar mengantar murid pada tujuan, bagian mana dari kegiatan inti yang tersendat, serta bagaimana perhatian saya tersebar di dalam bengkel.',
    pros: [
      'Ukuran keberhasilan apersepsi dibuat sederhana dan teramati: apakah murid dapat menyebutkan apa yang akan mereka hasilkan hari itu.',
      'Momen ketika murid berhenti bekerja ditelusuri penyebabnya, karena penyebab yang berbeda menuntut perbaikan yang berbeda.',
      'Rekaman memperlihatkan berapa lama murid menganggur menunggu giliran mesin, yang tidak terasa saat mengajar.'
    ],
    cons: [
      'Kehadiran kamera kemungkinan memengaruhi perilaku murid pada awal pertemuan.',
      'Sudut pengambilan tunggal belum menangkap kegiatan murid yang berada di sisi bengkel yang berlawanan.'
    ],
    theory: 'Memakai kerangka praktik reflektif Schon, khususnya reflection-on-action, yakni meninjau tindakan setelah peristiwa berlangsung dengan bukti yang dapat diperiksa ulang.'
  },
  's2-lk4': {
    title: 'Lembar Refleksi Praktik Pembelajaran Mandiri',
    type: 'Lembar Kerja Refleksi',
    fileUrl: '',
    context: 'LK 4 Refleksi Praktik Pembelajaran Mandiri diisi pada tiap siklus praktik. Isinya menautkan pengamatan atas rekaman dengan rencana perbaikan pada siklus berikutnya.',
    purpose: 'Refleksi tertulis memaksa saya menyatakan temuan secara spesifik, bukan berhenti pada kesan umum bahwa pembelajaran berjalan lancar atau kurang lancar.',
    pros: [
      'Refleksi disusun per siklus sehingga perubahan cara mengajar dapat ditelusuri dari satu siklus ke siklus berikutnya.',
      'Umpan balik guru pamong dicatat berdampingan dengan pengamatan saya sendiri.',
      'Setiap temuan diikuti satu langkah perbaikan yang konkret, bukan sekadar niat memperbaiki.'
    ],
    cons: [
      'Pengisian refleksi setelah jam praktik berisiko kehilangan detail yang masih segar saat pembelajaran berlangsung.',
      'Belum seluruh temuan disertai bukti yang dapat ditunjukkan, sebagian masih bersandar pada ingatan.'
    ],
    theory: 'Mengikuti siklus perbaikan berkelanjutan pada penelitian tindakan kelas: rencana, tindakan, pengamatan, refleksi, lalu rencana berikutnya.'
  },
  's2-dok-nonmengajar': {
    title: 'Dokumentasi Kegiatan Nonmengajar',
    type: 'Dokumentasi Kegiatan',
    fileUrl: '',
    context: 'Catatan dan foto keterlibatan saya dalam kegiatan sekolah di luar jam mengajar, mencakup pendampingan guru pamong, administrasi, dan kegiatan sekolah lainnya.',
    purpose: 'Keterlibatan nonmengajar memberi akses pada pengetahuan yang tidak tertulis di modul mana pun, dan memperluas pandangan saya tentang murid di luar peran mereka di bengkel.',
    pros: [
      'Diskusi setelah jam praktik dengan guru pamong sering lebih banyak mengubah cara saya mengajar dibanding perencanaan yang saya susun sendiri.',
      'Ketertiban pencatatan inventaris alat terbukti berdampak langsung pada kelancaran praktik dan ketepatan waktu mulai.',
      'Perjumpaan dengan murid dalam peran berbeda mengubah cara saya menilai murid yang semula tampak pasif.'
    ],
    cons: [
      'Keterlibatan masih tersebar pada banyak kegiatan kecil sehingga sulit menunjukkan satu kontribusi yang utuh.',
      'Catatan sebagian besar bersifat naratif dan belum dirangkum menjadi temuan yang dapat ditindaklanjuti.'
    ],
    theory: 'Memandang sekolah sebagai satu ekosistem, sejalan dengan pendekatan yang menempatkan keberhasilan pembelajaran sebagai hasil kerja banyak pihak, bukan guru seorang diri.'
  },
  's2-lk12': {
    title: 'Orientasi dan Observasi Lingkungan Belajar',
    type: 'Lembar Kerja Observasi',
    fileUrl: '',
    context: 'LK 1 Orientasi Manajemen Sekolah dan LK 2 Observasi Lingkungan Belajar, disusun pada awal masa PPL Mandiri di SMK N 2 Depok.',
    purpose: 'Kedua lembar ini memetakan konteks tempat saya mengajar sebelum menyusun rancangan pembelajaran, agar rencana yang saya buat berpijak pada keadaan sekolah yang sebenarnya.',
    pros: [
      'Pemetaan dilakukan sebelum menyusun modul ajar, sehingga penjadwalan dan ketersediaan bahan sudah diperhitungkan sejak awal.',
      'Mencakup manajemen sekolah dan lingkungan belajar sekaligus, bukan hanya kondisi di dalam bengkel.',
      'Menjadi rujukan ketika rencana pembelajaran perlu disesuaikan di tengah siklus.'
    ],
    cons: [
      'Observasi dilakukan pada rentang waktu terbatas sehingga belum menangkap dinamika sekolah sepanjang semester.',
      'Sebagian data bersumber dari wawancara singkat yang belum diperiksa silang dengan dokumen sekolah.'
    ],
    theory: 'Berpijak pada pandangan bahwa pembelajaran selalu terikat konteks, sehingga rancangan yang baik di atas kertas belum tentu sesuai dengan keadaan sekolah tertentu.'
  },
  's2-instrumen': {
    title: 'Instrumen Penilaian Praktik Mandiri',
    type: 'Instrumen Penilaian',
    fileUrl: '',
    context: 'Kisi-kisi, soal, dan lembar penilaian yang saya rancang untuk mengukur ketercapaian tujuan pembelajaran pada praktik mengajar mandiri.',
    purpose: 'Instrumen diturunkan langsung dari tujuan pembelajaran agar tidak ada yang dinilai tanpa pernah diajarkan, dan tidak ada tujuan yang lolos tanpa diukur.',
    pros: [
      'Penilaian mencakup tiga hal terpisah: ketepatan ukuran hasil kerja, ketepatan prosedur, dan keselamatan kerja.',
      'Ketiganya dinilai sendiri-sendiri karena murid dapat menghasilkan benda kerja yang tepat melalui cara yang tidak aman.',
      'Hasil penilaian dibaca sebagai umpan balik atas pengajaran saya, bukan semata penilaian atas murid.'
    ],
    cons: [
      'Menilai tiga aspek terpisah untuk banyak murid dalam satu hari menuntut waktu yang tidak selalu tersedia.',
      'Belum ada mekanisme pemeriksaan silang dengan guru pamong untuk menguji konsistensi penilaian saya.'
    ],
    theory: 'Menerapkan prinsip keselarasan konstruktif Biggs, yaitu tujuan, kegiatan, dan asesmen yang dirancang saling menopang dalam satu garis.'
  },
  's2-rubrik': {
    title: 'Rubrik Penilaian Keterampilan Praktik',
    type: 'Rubrik Penilaian',
    fileUrl: '',
    context: 'Rubrik keterampilan pemesinan beserta patokan teramatinya, disusun dengan bahasa yang dapat dibaca murid dan bukan hanya oleh penilai.',
    purpose: 'Saya ingin murid dapat memeriksa hasil kerjanya sendiri sebelum menyerahkan, sehingga penilaian ikut berfungsi sebagai alat belajar.',
    pros: [
      'Setiap tingkatan dinyatakan dengan patokan teramati seperti batas penyimpangan ukuran, bukan dengan kata sifat yang menimbulkan tafsir berbeda.',
      'Benda kerja diperiksa dengan jangka sorong pada titik yang sudah ditentukan, sehingga hasil penilaian dapat ditelusuri kembali.',
      'Penilaian per aspek menekan pengaruh kesan umum terhadap murid yang kerap mewarnai penilaian praktik.'
    ],
    cons: [
      'Rubrik dengan banyak aspek membuat proses penilaian berjalan lebih lambat dibanding penilaian menyeluruh sekaligus.',
      'Bahasa rubrik masih perlu diuji langsung kepada murid untuk memastikan benar-benar dapat mereka pakai secara mandiri.'
    ],
    theory: 'Mengacu pada asesmen sebagai proses belajar (assessment as learning), yang menempatkan murid sebagai pembaca aktif kriteria penilaian dirinya sendiri.'
  },
};

/** Urutan artefak per komponen, dipakai varian UI untuk menyusun daftar. */
export const SEMESTER2_KOMPONEN = [
  { id: 's2ep1-rancangan',   nomor: '01', nama: 'Rancangan',   artefak: ['s2-modul-ajar', 's2-jobsheet', 's2-atp', 's2-rencana-asesmen'] },
  { id: 's2ep1-materi',      nomor: '02', nama: 'Materi',      artefak: ['s2-bahan-ajar', 's2-lkpd', 's2-k3', 's2-pengayaan'] },
  { id: 's2ep1-media',       nomor: '03', nama: 'Media',       artefak: ['s2-media', 's2-dok-media', 's2-model3d', 's2-media-cetak'] },
  { id: 's2ep1-video',       nomor: '04', nama: 'Video',       artefak: ['s2-video', 's2-lk4', 's2-catatan-video', 's2-umpan-balik'] },
  { id: 's2ep1-nonmengajar', nomor: '05', nama: 'Nonmengajar', artefak: ['s2-dok-nonmengajar', 's2-lk12', 's2-jurnal', 's2-inventaris'] },
  { id: 's2ep1-penilaian',   nomor: '06', nama: 'Penilaian',   artefak: ['s2-instrumen', 's2-rubrik', 's2-rekap', 's2-tindak-lanjut'] },
];
