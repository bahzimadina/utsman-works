/* ==========================================================================
   Utsman — utsman.works · multi-basa (id / en / su)
   Téks HTML default = Basa Indonésia. JS ieu ngarobih kana basa anu dipilih.
   Pilihan basa disimpen dina localStorage + ?lang=en / ?lang=su dina URL.
   ========================================================================== */
(function () {
  'use strict';

  var I18N = {
    id: {
      'meta.title': 'Utsman — Asisten AI untuk Pekerjaan Kantor, Pribadi, dan Organisasi',
      'meta.desc': 'Utsman adalah asisten AI yang membantu pekerjaan kantor, kebutuhan pribadi, dan urusan organisasi: mencatat, menyusun laporan, mengingatkan jadwal. Segera hadir.',
      'og.locale': 'id_ID',

      'skip': 'Lewati ke konten utama',
      'nav.aria': 'Navigasi utama',
      'nav.usage': 'Kegunaan',
      'nav.how': 'Cara kerja',
      'nav.tech': 'Teknologi',
      'nav.blog': 'Blog',
      'nav.secure': 'Keamanan',
      'nav.cta': 'Coming soon',
      'lang.aria': 'Pilih bahasa',
      'lang.id': 'Bahasa Indonesia',
      'lang.en': 'English',
      'lang.su': 'Bahasa Sunda',

      'hero.eyebrow': 'Agen AI untuk pekerjaan sehari-hari',
      'hero.h1': 'Pekerjaan kecil yang menumpuk, <span class="accent">diselesaikan</span> oleh satu asisten.',
      'hero.lede': 'Utsman mencatat, merangkum, menyusun, dan mengingatkan — untuk urusan kantor, kebutuhan pribadi, maupun kegiatan organisasi. Anda cukup menyebut apa yang perlu dikerjakan, dengan bahasa sehari-hari.',
      'hero.cta1': 'Beri tahu saya saat siap',
      'hero.cta2': 'Lihat kegunaannya',
      'hero.note': 'Masih disiapkan. Ingin dihubungi saat siap? <a href="mailto:bahzimadina@gmail.com?subject=Utsman.works%20—%20beri%20tahu%20saya">Kirim email</a>.',
      'hero.status': 'Segera hadir',
      'hero.role': 'Asisten AI untuk kantor, pribadi, dan organisasi',
      'hero.chip1': 'WhatsApp', 'hero.chip2': 'Telegram', 'hero.chip3': 'Email',
      'hero.photo.alt': 'Utsman, asisten AI, mengenakan peci hitam dan kemeja biru tua',
      'hero.art.alt': 'Ilustrasi asisten AI yang mengerjakan beberapa tugas sekaligus',

      'm.head': 'Yang tadinya menumpuk, kini beres.',
      'm.sub': 'Pekerjaan kecil itu tidak sulit — hanya banyak dan saling mengejar. Ini yang berubah setelah diserahkan.',
      'm.b1': 'Email, catatan, dan berkas tersebar di tiga tempat.',
      'm.a1': 'Terkumpul jadi satu laporan yang jelas.',
      'm.b2': 'Jadwal bentrok, ada yang terlewat.',
      'm.a2': 'Diingatkan sebelum jadi masalah.',
      'm.b3': 'Input data pagi-pagi, masih ada yang dobel.',
      'm.a3': 'Dicatat sekali, diperiksa dua kali.',
      'm.b4': 'Menyusun surat, poster, atau laporan selalu lama.',
      'm.a4': 'Selesai dalam hitungan menit, Anda tinggal memeriksa.',

      'u.head': 'Tiga tempat Utsman paling membantu',
      'u.sub': 'Satu asisten, tiga jenis pekerjaan. Bisa dipakai salah satu, bisa juga semuanya.',
      'u.k.alt': 'Utsman, asisten untuk pekerjaan kantor, memakai blazer',
      'u.p.alt': 'Utsman, asisten untuk urusan pribadi, memakai hoodie',
      'u.o.alt': 'Utsman, asisten untuk urusan organisasi, memakai kemeja biru',
      'u.k.title': 'Kantor',
      'u.k.p': 'Pekerjaan administrasi yang menyita waktu.',
      'u.k.l1': 'Merangkum rapat jadi notulen dan daftar tugas',
      'u.k.l2': 'Menyusun surat, laporan, dan bahan presentasi',
      'u.k.l3': 'Menyiapkan data sebelum rapat atau evaluasi',
      'u.p.title': 'Pribadi',
      'u.p.p': 'Urusan sehari-hari yang mudah terlewat.',
      'u.p.l1': 'Mengingatkan jadwal, tagihan, dan tanggal penting',
      'u.p.l2': 'Membantu menyusun rencana dan target pribadi',
      'u.p.l3': 'Merapikan catatan jadi tulisan yang beres',
      'u.o.title': 'Organisasi',
      'u.o.p': 'Urusan bersama yang perlu transparan.',
      'u.o.l1': 'Mencatat keuangan (kas, infak, donasi) dengan pemeriksaan otomatis',
      'u.o.l2': 'Membuat laporan kegiatan dan pengumuman',
      'u.o.l3': 'Mengelola data anggota, peserta, dan jadwal kegiatan',

      'c.head': 'Cara kerjanya sederhana',
      'c.sub': 'Tidak perlu belajar aplikasi baru. Tiga langkah, jalan.',
      'c.s1.t': 'Hubungkan',
      'c.s1.p': 'Lewat WhatsApp, Telegram, atau email yang sudah dipakai sehari-hari.',
      'c.s2.t': 'Sebutkan tugasnya',
      'c.s2.p': 'Bahasa sehari-hari saja. Tidak perlu merumuskan perintah yang rumit.',
      'c.s3.t': 'Anda yang memutuskan',
      'c.s3.p': 'Utsman mengerjakan lalu melaporkan hasilnya. Keputusan tetap di Anda.',

      'e.head': 'Contoh pekerjaan yang bisa diserahkan',
      'e.sub': 'Ini baru sebagian. Kalau bisa dijelaskan, biasanya bisa dikerjakan.',
      'e.c1': 'Merangkum rapat', 'e.c2': 'Menyusun laporan bulanan', 'e.c3': 'Membuat poster kegiatan',
      'e.c4': 'Mencatat keuangan organisasi', 'e.c5': 'Mengingatkan jadwal dan tagihan', 'e.c6': 'Menyiapkan surat resmi',
      'e.c7': 'Menyusun bahan presentasi', 'e.c8': 'Merapikan data peserta', 'e.c9': 'Membuat ringkasan bacaan',
      'e.c10': 'Mencari data yang tidak cocok',

      't.eyebrow': 'Di balik layar',
      't.head': 'Teknologi yang menjalankannya',
      't.sub': 'Utsman bukan satu aplikasi tunggal. Ia berdiri di atas beberapa lapisan yang sudah terbukti, dan lapisan itu bisa diganti sesuai kebutuhan.',
      't.1.t': 'Hermes Agent',
      't.1.p': 'Platform agen yang menjalankan tugas, memakai alat (terminal, peramban, berkas), dan menjaga konteks pekerjaan.',
      't.2.t': 'Model bahasa (LLM)',
      't.2.p': 'Model kecerdasan buatan untuk memahami permintaan dan menyusun hasil — dipilih sesuai jenis tugas, mutu, dan biaya.',
      't.3.t': 'Agen spesialis',
      't.3.p': 'Beberapa agen dengan keahlian berbeda: penulisan, riset, gambar, dan pemeriksaan hasil sebelum dikirim.',
      't.4.t': 'Integrasi data (MCP)',
      't.4.p': 'Tersambung ke aplikasi kerja seperti pembukuan dan arsip, jadi data tidak perlu disalin manual.',
      't.5.t': 'Otomasi terjadwal',
      't.5.p': 'Tugas rutin berjalan sendiri pada waktunya: pengingat, rekap, dan pengumuman.',
      't.6.t': 'Saluran yang sudah dipakai',
      't.6.p': 'WhatsApp, Telegram, dan email. Tidak ada aplikasi baru yang harus dipelajari.',
      't.note': 'Pilihan teknologinya mengikuti kebutuhan. Yang penting: hasilnya rapi, bisa diperiksa, dan datanya tetap di tangan Anda.',

      'a.head': 'Anda yang memegang datanya',
      'a.sub': 'Asisten untuk pekerjaan harus bisa dipercaya. Ini prinsipnya.',
      'a.i1.t': 'Berjalan di server Anda',
      'a.i1.p': 'Data dan riwayat pekerjaan tidak keluar dari sistem yang Anda kendalikan.',
      'a.i2.t': 'Aksesnya dibatasi',
      'a.i2.p': 'Siapa boleh menjalankan apa, tercatat dan bisa ditinjau kapan saja.',
      'a.i3.t': 'Bukan bahan pelatihan',
      'a.i3.p': 'Isi pekerjaan Anda tidak dipakai untuk melatih model pihak ketiga.',

      'cta.head': 'Masih disiapkan',
      'cta.p': 'Utsman sedang dibangun bertahap. Ingin diberi tahu saat siap — atau ingin membahas pemakaiannya untuk kantor, kebutuhan pribadi, atau organisasi Anda? Kirim email saja.',
      'cta.btn': 'Kirim email',

      'f.rights': '© 2026 Utsman · utsman.works',
      'f.email': 'Email'
    },

    en: {
      'meta.title': 'Utsman — An AI Assistant for Office, Personal, and Organisational Work',
      'meta.desc': 'Utsman is an AI assistant that helps with office work, personal matters, and organisational tasks: taking notes, drafting reports, keeping track of schedules. Coming soon.',
      'og.locale': 'en_US',

      'skip': 'Skip to main content',
      'nav.aria': 'Main navigation',
      'nav.usage': 'Uses',
      'nav.how': 'How it works',
      'nav.tech': 'Technology',
      'nav.blog': 'Blog',
      'nav.secure': 'Security',
      'nav.cta': 'Coming soon',
      'lang.aria': 'Choose language',
      'lang.id': 'Bahasa Indonesia',
      'lang.en': 'English',
      'lang.su': 'Bahasa Sunda',

      'hero.eyebrow': 'An AI agent for everyday work',
      'hero.h1': 'Small tasks that pile up, <span class="accent">handled</span> by one assistant.',
      'hero.lede': 'Utsman writes things down, summarises, drafts, and reminds — for office matters, personal needs, and organisational work. You just say what needs doing, in plain language.',
      'hero.cta1': 'Tell me when it is ready',
      'hero.cta2': 'See what it can do',
      'hero.note': 'Still being built. Want a note when it is ready? <a href="mailto:bahzimadina@gmail.com?subject=Utsman.works%20—%20notify%20me">Send an email</a>.',
      'hero.status': 'Coming soon',
      'hero.role': 'AI assistant for office, personal, and organisational work',
      'hero.chip1': 'WhatsApp', 'hero.chip2': 'Telegram', 'hero.chip3': 'Email',
      'hero.photo.alt': 'Utsman, an AI assistant, wearing a black cap and a dark blue shirt',
      'hero.art.alt': 'Illustration of an AI assistant working on several tasks at once',

      'm.head': 'What used to pile up is now done.',
      'm.sub': 'Small tasks are not hard — there are just many of them, one after another. Here is what changes once they are handed over.',
      'm.b1': 'Emails, notes, and files scattered in three places.',
      'm.a1': 'Collected into one clear report.',
      'm.b2': 'Clashing schedules, something gets missed.',
      'm.a2': 'Reminded before it becomes a problem.',
      'm.b3': 'Early morning data entry, still duplicated.',
      'm.a3': 'Entered once, checked twice.',
      'm.b4': 'Letters, posters, and reports always take hours.',
      'm.a4': 'Done in minutes, you only review.',

      'u.head': 'Three places Utsman helps most',
      'u.sub': 'One assistant, three kinds of work. Use one of them, or all of them.',
      'u.k.alt': 'Utsman, the assistant for office work, wearing a blazer',
      'u.p.alt': 'Utsman, the assistant for personal matters, wearing a hoodie',
      'u.o.alt': 'Utsman, the assistant for organisational work, wearing a blue shirt',
      'u.k.title': 'Office',
      'u.k.p': 'Administrative work that eats up your time.',
      'u.k.l1': 'Turn meetings into minutes and to-do lists',
      'u.k.l2': 'Draft letters, reports, and presentation material',
      'u.k.l3': 'Prepare data before a meeting or review',
      'u.p.title': 'Personal',
      'u.p.p': 'Everyday matters that are easy to miss.',
      'u.p.l1': 'Reminders for schedules, bills, and important dates',
      'u.p.l2': 'Help planning personal goals and targets',
      'u.p.l3': 'Tidy up notes into something readable',
      'u.o.title': 'Organisation',
      'u.o.p': 'Shared matters that need to be transparent.',
      'u.o.l1': 'Record finances (cash, donations, alms) with automatic checks',
      'u.o.l2': 'Produce activity reports and announcements',
      'u.o.l3': 'Manage members, participants, and event schedules',

      'c.head': 'How it works is simple',
      'c.sub': 'No new app to learn. Three steps and you are running.',
      'c.s1.t': 'Connect',
      'c.s1.p': 'Through WhatsApp, Telegram, or email you already use every day.',
      'c.s2.t': 'Say the task',
      'c.s2.p': 'Plain language is enough. No complicated instructions to formulate.',
      'c.s3.t': 'You decide',
      'c.s3.p': 'Utsman does the work and reports back. The decisions stay with you.',

      'e.head': 'Examples of work you can hand over',
      'e.sub': 'This is only part of it. If it can be explained, it can usually be done.',
      'e.c1': 'Summarise a meeting', 'e.c2': 'Draft a monthly report', 'e.c3': 'Make an event poster',
      'e.c4': 'Record the organisation finances', 'e.c5': 'Remind about schedules and bills', 'e.c6': 'Prepare official letters',
      'e.c7': 'Build presentation material', 'e.c8': 'Tidy up participant data', 'e.c9': 'Summarise long reading',
      'e.c10': 'Find data that does not match',

      't.eyebrow': 'Under the hood',
      't.head': 'The technology that runs it',
      't.sub': 'Utsman is not a single app. It stands on several proven layers, and those layers can be swapped to fit the job.',
      't.1.t': 'Hermes Agent',
      't.1.p': 'The agent platform that carries out tasks, uses tools (terminal, browser, files), and keeps the working context.',
      't.2.t': 'Language models (LLM)',
      't.2.p': 'AI models that understand the request and draft the result — chosen to fit the task, the quality, and the cost.',
      't.3.t': 'Specialist agents',
      't.3.p': 'Several agents with different skills: writing, research, images, and checking results before they are sent.',
      't.4.t': 'Data integration (MCP)',
      't.4.p': 'Connected to work applications such as bookkeeping and archives, so data is not copied by hand.',
      't.5.t': 'Scheduled automation',
      't.5.p': 'Routine work runs on its own when the time comes: reminders, recaps, and announcements.',
      't.6.t': 'Channels you already use',
      't.6.p': 'WhatsApp, Telegram, and email. No new app to learn.',
      't.note': 'The technology follows the need. What matters is that the result is tidy, checkable, and the data stays in your hands.',

      'a.head': 'You hold the data',
      'a.sub': 'An assistant used for real work has to be trustworthy. These are the principles.',
      'a.i1.t': 'Runs on your own server',
      'a.i1.p': 'Work data and history do not leave a system you control.',
      'a.i2.t': 'Access is limited',
      'a.i2.p': 'Who may run what is recorded and can be reviewed at any time.',
      'a.i3.t': 'Not training material',
      'a.i3.p': 'Your work content is not used to train third-party models.',

      'cta.head': 'Still being built',
      'cta.p': 'Utsman is being built step by step. Want a note when it is ready — or want to discuss using it for your office, personal needs, or organisation? Just send an email.',
      'cta.btn': 'Send an email',

      'f.rights': '© 2026 Utsman · utsman.works',
      'f.email': 'Email'
    },

    su: {
      'meta.title': 'Utsman — Asisten AI pikeun Pagawéan Kantor, Pribadi jeung Organisasi',
      'meta.desc': 'Utsman asisten AI anu ngabantos pagawean kantor, kaperluan pribadi, jeung urusan organisasi: nyatet, nyusun laporan, ngingetan jadwal. Nuju disiapkeun.',
      'og.locale': 'su_ID',

      'skip': 'Luncat ka eusi utama',
      'nav.aria': 'Navigasi utama',
      'nav.usage': 'Kagunaan',
      'nav.how': 'Cara gawé',
      'nav.tech': 'Téknologi',
      'nav.blog': 'Blog',
      'nav.secure': 'Kaamanan',
      'nav.cta': 'Coming soon',
      'lang.aria': 'Milih basa',
      'lang.id': 'Bahasa Indonesia',
      'lang.en': 'English',
      'lang.su': 'Bahasa Sunda',

      'hero.eyebrow': 'Agen AI pikeun pagawéan sapopoé',
      'hero.h1': 'Pagawéan leutik nu numpuk, <span class="accent">dibéréskeun</span> ku saurang asisten.',
      'hero.lede': 'Utsman nyatet, ngarangkum, nyusun, jeung ngingetan — naha éta urusan kantor, kaperluan pribadi, atawa kabutuhan organisasi. Anjeun cukup nyebatkeun naon anu kudu digarap, dina basa sapopoé.',
      'hero.cta1': 'Wartosan abdi nalika sayagi',
      'hero.cta2': 'Tingali kagunaanana',
      'hero.note': 'Nuju disiapkeun. Hoyong diwartosan nalika sayagi? <a href="mailto:bahzimadina@gmail.com?subject=Utsman.works%20—%20wartosan%20abdi">Kirim email</a>.',
      'hero.status': 'Nuju disiapkeun',
      'hero.role': 'Asisten AI pikeun kantor, pribadi, jeung organisasi',
      'hero.chip1': 'WhatsApp', 'hero.chip2': 'Telegram', 'hero.chip3': 'Email',
      'hero.photo.alt': 'Utsman, asisten AI, maké peci hideung jeung kameja bulao kolot',
      'hero.art.alt': 'Ilustrasi asisten AI nu ngerjakeun sababaraha tugas',

      'm.head': 'Anu tadina ngalongok, ayeuna beres.',
      'm.sub': 'Pagawéan leutik téh lain hésé — ngan loba jeung silih susul. Ieu anu robah lamun geus dipasrahkeun.',
      'm.b1': 'Email, catetan, jeung berkas sumebar di tilu tempat.',
      'm.a1': 'Kakumpul jadi hiji laporan anu jelas.',
      'm.b2': 'Jadwal bentrok, aya nu kalalai.',
      'm.a2': 'Diingetan sateuacan janten masalah.',
      'm.b3': 'Input data isuk-isuk, sok aya nu dobel.',
      'm.a3': 'Kacatet sakali, diparios dua kali.',
      'm.b4': 'Nyusun surat, poster, atawa laporan téh sok lila.',
      'm.a4': 'Rengse dina menit, anjeun tinggal mariksa.',

      'u.head': 'Tilu tempat Utsman paling ngabantos',
      'u.sub': 'Hiji asisten, tilu rupa kagiatan. Anjeun tiasa nganggo salah sahijina, atawa sadayana sakaligus.',
      'u.k.alt': 'Utsman, asisten pikeun pagawéan kantor, maké blazer',
      'u.p.alt': 'Utsman, asisten pikeun urusan pribadi, maké hoodie',
      'u.o.alt': 'Utsman, asisten pikeun urusan organisasi, maké kameja bulao',
      'u.k.title': 'Kantor',
      'u.k.p': 'Pagawean administrasi anu nyéépkeun waktos.',
      'u.k.l1': 'Nyimpulkeun rapat jadi notulen jeung daptar tugas',
      'u.k.l2': 'Nyusun surat, laporan, jeung bahan presentasi',
      'u.k.l3': 'Nyiapkeun data sateuacan rapat atanapi évaluasi',
      'u.p.title': 'Pribadi',
      'u.p.p': 'Urusan sapopoé anu gampang kalalai.',
      'u.p.l1': 'Ngingetan jadwal, tagihan, jeung kaping penting',
      'u.p.l2': 'Ngabantos nyusun rencana jeung target pribadi',
      'u.p.l3': 'Ngarapihkeun catetan jadi tulisan anu beres',
      'u.o.title': 'Organisasi',
      'u.o.p': 'Urusan babarengan anu kudu transparan.',
      'u.o.l1': 'Nyatet keuangan (kas, infaq, donasi) jeung parios otomatis',
      'u.o.l2': 'Nyieun laporan kagiatan jeung pangumuman',
      'u.o.l3': 'Ngaatur data anggota, peserta, jeung jadwal kagiatan',

      'c.head': 'Cara gawéna sederhana',
      'c.sub': 'Teu kedah diajar aplikasi énggal. Tilu léngkah, geus jalan.',
      'c.s1.t': 'Sambungkeun',
      'c.s1.p': 'Liwat WhatsApp, Telegrám, atanapi email anu tos anjeun anggo sapopoé.',
      'c.s2.t': 'Sebutkeun tugasna',
      'c.s2.p': 'Basa sapopoé waé. Teu kedah ngarumuskeun paréntah anu rumit.',
      'c.s3.t': 'Anjeun nu mutuskeun',
      'c.s3.p': 'Utsman ngagarap tur ngalaporkeun hasilna. Kaputusanana tetep di anjeun.',

      'e.head': 'Conto tugas anu tiasa dipasrahkeun',
      'e.sub': 'Ieu mah ukur sawaréh. Upami tiasa dijelaskeun, biasana tiasa dijalankeun.',
      'e.c1': 'Nyimpulkeun rapat', 'e.c2': 'Nyusun laporan bulanan', 'e.c3': 'Nyieun poster kagiatan',
      'e.c4': 'Nyatet keuangan organisasi', 'e.c5': 'Ngingetan jadwal jeung tagihan', 'e.c6': 'Nyiapkeun surat resmi',
      'e.c7': 'Nyusun bahan presentasi', 'e.c8': 'Ngarapihkeun data peserta', 'e.c9': 'Nyieun ringkesan bacaan',
      'e.c10': 'Milarian data anu teu cocog',

      't.eyebrow': 'Di balik layar',
      't.head': 'Téknologi nu ngajalankeunana',
      't.sub': 'Utsman téh sanés hiji aplikasi tunggal. Anjeunna nangtung dina sababaraha lapisan anu tos kabuktosan, sarta tiasa digentos luyu jeung kabutuhan.',
      't.1.t': 'Hermes Agent',
      't.1.p': 'Platform agén anu ngajalankeun tugas, maké parabot (terminal, panyungsi, berkas), jeung ngajaga kontéks pagawéan.',
      't.2.t': 'Modél basa (LLM)',
      't.2.p': 'Modél kacerdasan jieunan pikeun ngarti kana pamundut jeung nyusun hasilna — dipilih luyu jeung jenis tugas, mutu, jeung biaya.',
      't.3.t': 'Agén spesialis',
      't.3.p': 'Sababaraha agén kalayan kaahlian béda: nyerat, riset, gambar, jeung mariksa hasil sateuacan dikirim.',
      't.4.t': 'Integrasi data (MCP)',
      't.4.p': 'Tersambung ka aplikasi gawé sapertos pembukuan jeung arsip, jadi data teu kedah disalin manual.',
      't.5.t': 'Otomasi kajadwalan',
      't.5.p': 'Tugas rutin jalan sorangan dina waktosna: panginget, rekapan, jeung pangumuman.',
      't.6.t': 'Saluran anu tos dipaké',
      't.6.p': 'WhatsApp, Telegrám, jeung email. Teu aya aplikasi énggal anu kudu diajar.',
      't.note': 'Pilihan téknologina nurut kana kabutuhan. Nu penting: hasilna rapih, tiasa diparios, jeung datana tetep di anjeun.',

      'a.head': 'Anjeun nu nyekel datana',
      'a.sub': 'Asisten anu dipaké pikeun pagawéan kudu tiasa dipercaya. Ieu prinsipna.',
      'a.i1.t': 'Jalan di server anjeun',
      'a.i1.p': 'Data jeung riwayat pagawéan teu kaluar ti sistem anu anjeun kadalikeun.',
      'a.i2.t': 'Aksésna dibatesan',
      'a.i2.p': 'Saha anu tiasa ngajalankeun naon, kacatet sareng tiasa diparios unggal waktu.',
      'a.i3.t': 'Teu janten bahan latihan',
      'a.i3.p': 'Eusi pagawéan anjeun sanés bahan latihan modél pihak katilu.',

      'cta.head': 'Nuju disiapkeun',
      'cta.p': 'Utsman keur diwangun sahambat-sahambat. Lamun hoyong diwartosan nalika sayagi — atawa hoyong ngabahas pamakéanana pikeun kantor, kaperluan pribadi, atawa organisasi anjeun — kirim email waé.',
      'cta.btn': 'Kirim email',

      'f.rights': '© 2026 Utsman · utsman.works',
      'f.email': 'Email'
    }
  };

  var LANGS = ['id', 'en', 'su'];

  function normalize(v) {
    if (!v) return null;
    var s = String(v).slice(0, 2).toLowerCase();
    if (s === 'in') s = 'id';
    return LANGS.indexOf(s) >= 0 ? s : null;
  }

  function fromUrl() {
    try { return normalize(new URLSearchParams(window.location.search).get('lang')); }
    catch (e) { return null; }
  }
  function fromStore() {
    try { return normalize(window.localStorage.getItem('utsman-lang')); }
    catch (e) { return null; }
  }

  function apply(lang, remember) {
    var d = I18N[lang] || I18N.id;

    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n')];
      if (typeof v === 'string') el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n-html')];
      if (typeof v === 'string') el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n-alt')];
      if (typeof v === 'string') el.setAttribute('alt', v);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n-aria')];
      if (typeof v === 'string') el.setAttribute('aria-label', v);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n-title')];
      if (typeof v === 'string') el.setAttribute('title', v);
    });

    // judul + déskripsi kaca
    var t = d['meta.title'], de = d['meta.desc'];
    if (t) document.title = t;
    var md = document.querySelector('meta[name="description"]');
    if (md && de) md.setAttribute('content', de);
    var ogt = document.querySelector('meta[property="og:title"]');
    if (ogt && t) ogt.setAttribute('content', t);
    var ogd = document.querySelector('meta[property="og:description"]');
    if (ogd && de) ogd.setAttribute('content', de);
    var ogt2 = document.querySelector('meta[name="twitter:title"]');
    if (ogt2 && t) ogt2.setAttribute('content', t);
    var ogd2 = document.querySelector('meta[name="twitter:description"]');
    if (ogd2 && de) ogd2.setAttribute('content', de);
    var ogl = document.querySelector('meta[property="og:locale"]');
    if (ogl && d['og.locale']) ogl.setAttribute('content', d['og.locale']);

    // tombol pilih basa
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var on = btn.getAttribute('data-lang') === lang;
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      btn.classList.toggle('is-on', on);
    });

    if (remember) {
      try { window.localStorage.setItem('utsman-lang', lang); } catch (e) {}
      try {
        var u = new URL(window.location.href);
        if (lang === 'id') u.searchParams.delete('lang'); else u.searchParams.set('lang', lang);
        window.history.replaceState(null, '', u.pathname + (u.search ? u.search : '') + u.hash);
      } catch (e) {}
    }
  }

  function init() {
    // Basa default = Basa Indonésia. Ukur ?lang= atawa pilihan nu disimpen nu ngarobih.
    var lang = fromUrl() || fromStore() || 'id';
    apply(lang, false);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        apply(btn.getAttribute('data-lang'), true);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
