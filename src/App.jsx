<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LIMITLESS 2026 • Youth Stars Conference</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    :root {
      --font-sans: 'Inter', system_ui, sans-serif;
    }
    body {
      font-family: var(--font-sans);
    }
  </style>
</head>
<body class="min-h-screen bg-zinc-50 font-sans">

  <!-- Navbar -->
  <nav class="bg-white shadow sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo + Title -->
      <a href="#home" class="flex items-center gap-4 hover:opacity-90 transition">
        <img 
          src="/logo.png" 
          alt="Diocese Logo" 
          class="h-16 w-auto object-contain md:h-[72px]" 
        />
        <div>
          <h1 class="text-3xl md:text-4xl font-bold text-emerald-600 tracking-tighter">LIMITLESS</h1>
          <p class="text-xs md:text-sm text-zinc-500 -mt-1">2026 YOUTH STARS CONFERENCE</p>
        </div>
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex gap-8 font-medium">
        <a href="#home" class="hover:text-emerald-600 transition">Home</a>
        <a href="#countdown" class="hover:text-emerald-600 transition">Countdown</a>
        <a href="#speakers" class="hover:text-emerald-600 transition">Our Speakers</a>
        <a href="#videos" class="hover:text-emerald-600 transition">Contents</a>
        <a href="#flyers" class="hover:text-emerald-600 transition">Events</a>
        <a href="#skills" class="hover:text-emerald-600 transition">Skills</a>
        <a href="#youthstars" class="hover:text-emerald-600 transition">Empowerment</a>
      </div>

      <div class="flex items-center gap-4">
        <!-- REGISTER BUTTON -->
        <a 
          href="#registration" 
          class="bg-gradient-to-r from-yellow-400 to-emerald-600 text-black px-6 py-2.5 rounded-3xl font-bold hover:scale-105 transition text-sm md:text-base"
        >
          Register
        </a>

        <button
          onclick="toggleMobileMenu()"
          class="md:hidden p-3 text-3xl"
        >
          <span id="mobile-menu-icon">☰</span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t py-6">
      <div class="flex flex-col gap-6 px-8 text-lg font-medium">
        <a href="#home" onclick="toggleMobileMenu()" class="hover:text-emerald-600">Home</a>
        <a href="#countdown" onclick="toggleMobileMenu()" class="hover:text-emerald-600">Countdown</a>
        <a href="#speakers" onclick="toggleMobileMenu()" class="hover:text-emerald-600">Our Speakers</a>
        <a href="#videos" onclick="toggleMobileMenu()" class="hover:text-emerald-600">Contents</a>
        <a href="#flyers" onclick="toggleMobileMenu()" class="hover:text-emerald-600">Events</a>
        <a href="#skills" onclick="toggleMobileMenu()" class="hover:text-emerald-600">Skills</a>
        <a href="#youthstars" onclick="toggleMobileMenu()" class="hover:text-emerald-600">Empowerment</a>
        <a href="#registration" onclick="toggleMobileMenu()" class="hover:text-emerald-600">Register</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="bg-gradient-to-br from-sky-400 via-teal-500 to-emerald-600 text-white py-20">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <div class="inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full mb-8 text-sm font-medium">
        DIOCESE OF NIGER DELTA NORTH • ANGLICAN YOUTH FELLOWSHIP
      </div>
      <h1 class="text-7xl md:text-8xl font-black tracking-tighter mb-4">LIMITLESS</h1>
      <p class="text-3xl md:text-4xl font-light mb-8">2026 Biennial Youth Stars Conference</p>
      <div class="inline-block bg-yellow-400 text-black font-bold px-8 py-3 rounded-2xl mb-10 text-xl">
        16TH — 19TH APRIL 2026
      </div>

      <div class="max-w-2xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
        <img src="/poster.jpg" alt="LIMITLESS 2026" class="w-full">
      </div>
      <p class="text-xl">Jeremiah 32:27 • Ephesians 3:20</p>
    </div>
  </section>

  <!-- Countdown -->
  <section id="countdown" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-5xl font-bold mb-4">⏳ Countdown to LIMITLESS 2026</h2>
      <p class="text-xl text-zinc-600 mb-12">The atmosphere is already electric!</p>

      <div id="countdown-grid" class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <!-- Populated by JS -->
      </div>
    </div>
  </section>

  <!-- Meet Our Speakers (Updated for 9 flyers) -->
  <section id="speakers" class="py-20 bg-zinc-100">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <div class="flex justify-center items-center gap-4 mb-8">
        <h2 class="text-5xl font-bold">Meet Our Speakers</h2>
        <button
          onclick="toggleSpeakers()"
          id="speakers-toggle-btn"
          class="text-sm px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition"
        >
          Show Others
        </button>
      </div>

      <!-- Main Speaker Flyer -->
      <div class="max-w-2xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl">
        <img src="/main-speaker-flyer.jpg" alt="Main Speaker" class="w-full">
      </div>

      <!-- Second Speaker Flyer -->
      <div class="max-w-2xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl">
        <img src="/second-speaker-flyer.jpg" alt="Second Speaker" class="w-full">
      </div>

      <!-- Other Speakers - Now 7 more flyers (total 9) -->
      <div id="other-speakers-grid" class="hidden grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Populated by JS with real images -->
      </div>

      <p id="speakers-placeholder-text" class="text-zinc-500 italic mt-8">
        Click "Show Others" above to see the remaining 7 speakers
      </p>
    </div>
  </section>

  <!-- Videos Section with Thumbnails -->
  <section id="videos" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold mb-4">Conference Content Videos</h2>
        <p class="text-xl text-zinc-600">Powerful messages, skits and highlights</p>
      </div>

      <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-8" id="videos-grid">
        <!-- Populated by JS -->
      </div>
    </div>
  </section>

  <!-- Video Modal -->
  <div id="video-modal" class="hidden fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4">
    <div class="max-w-5xl w-full bg-zinc-900 rounded-3xl overflow-hidden">
      <div class="flex justify-between items-center p-5 border-b border-zinc-700">
        <h3 id="modal-video-title" class="text-white font-semibold text-xl"></h3>
        <button onclick="closeVideoModal()" class="text-white text-4xl leading-none hover:text-red-500">×</button>
      </div>
      <video id="modal-video-player" controls autoplay class="w-full"></video>
    </div>
  </div>

  <!-- Publicity Flyers -->
  <section id="flyers" class="py-20 bg-zinc-100">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="text-5xl font-bold mb-16">Publicity Flyers</h2>
      <div class="grid md:grid-cols-2 gap-10" id="flyers-grid">
        <!-- Populated by JS -->
      </div>
    </div>
  </section>

  <!-- Skills Acquisition Section -->
  <section id="skills" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold mb-4">Skills Acquisition Workshops</h2>
        <p class="text-xl text-zinc-600">Practical skills to empower you beyond the conference</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="skills-grid">
        <!-- Populated by JS -->
      </div>
    </div>
  </section>

  <!-- Youthstars Empowerment Scheme -->
  <section id="youthstars" class="py-20 bg-white">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <h2 class="text-5xl font-bold mb-6">Youthstars Empowerment Scheme</h2>
      <div class="max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-10">
        <img src="youthstars-flyer.jpg" alt="Youthstars Empowerment Scheme" class="w-full">
      </div>
    </div>
  </section>

  <!-- I Am Attending -->
  <section class="py-20 bg-emerald-50">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold mb-10">I Am Attending LIMITLESS 2026</h2>
      <div class="max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl mb-10">
        <img src="/iamattending-flyer.jpg" alt="I Am Attending" class="w-full">
      </div>
      <a
        href="https://inbranded.co/c/03161932-a656-4392-8e08-bb19ba0b4072"
        target="_blank"
        class="inline-block bg-emerald-600 text-white px-10 py-5 rounded-3xl text-xl font-bold hover:bg-emerald-700 transition"
      >
        Join "I Am Attending" →
      </a>
    </div>
  </section>

  <!-- Registration -->
  <section id="registration" class="py-20 bg-zinc-100">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-5xl font-bold mb-10">Register for LIMITLESS 2026</h2>
      
      <div class="bg-white p-8 rounded-3xl shadow-xl max-w-md mx-auto">
        <h3 class="text-2xl font-bold mb-8">Payment Details</h3>
        <div class="bg-emerald-50 p-6 rounded-2xl text-left mb-10">
          <p><strong>Bank:</strong> Fidelity Bank</p>
          <p><strong>Account Number:</strong> 6060362529</p>
          <p><strong>Account Name:</strong> Diocese of Niger Delta North Anglican Youth Fellowship</p>
          <p class="mt-4 text-sm text-emerald-700 font-medium">Registration Fee: ₦2,000</p>
        </div>
        <a
          href="https://docs.google.com/forms/d/1und_tEmjtt2fbrkfBP5-EsokEjKLLjsavIO6XNYBCqw/edit?usp=drivesdk"
          target="_blank"
          class="block w-full bg-gradient-to-r from-yellow-400 to-emerald-600 text-black py-6 rounded-3xl font-bold text-xl hover:scale-105 transition"
        >
          Fill Registration Form →
        </a>
      </div>
    </div>
  </section>

  <!-- Hidden Audio -->
  <audio id="themeSong" loop>
    <source src="/YOUR_THEME_SONG.mp3" type="audio/mpeg">
  </audio>

  <!-- Floating Play/Pause Button -->
  <button
    onclick="toggleMusic()"
    id="music-button"
    class="fixed bottom-8 left-8 z-[9999] flex items-center justify-center w-16 h-16 bg-white shadow-2xl border-2 border-emerald-600 rounded-3xl hover:bg-emerald-600 hover:text-white hover:scale-110 active:scale-95 transition-all text-emerald-600"
    title="Play Theme Song"
  >
    <i id="music-icon" class="fas fa-play text-4xl"></i>
  </button>

  <!-- Back to Top Button -->
  <button
    onclick="scrollToTop()"
    id="back-to-top"
    class="hidden fixed bottom-8 right-8 bg-emerald-600 text-white p-4 rounded-full shadow-xl hover:bg-emerald-700 transition z-50 text-2xl"
  >
    ↑
  </button>

  <!-- Footer -->
  <footer class="bg-emerald-700 text-white py-12 text-center">
    <p class="text-3xl font-bold">LIMITLESS 2026</p>
    <p class="mt-2">New Covenant Anglican Church, Oroabali Deanery</p>
    <p class="text-sm mt-6 opacity-75">Diocese of Niger Delta North • Anglican Communion</p>
  </footer>

  <script>
    // State variables
    let isPlaying = false;
    let showSpeakers = false;
    let showBackToTop = false;

    // Data: 9 Speakers (2 featured + 7 others with real flyers)
    const speakersData = {
      main: { title: "Main Speaker", image: "/main-speaker-flyer.jpg" },
      second: { title: "Second Speaker", image: "/second-speaker-flyer.jpg" },
      others: [
        { id: 3, title: "Speaker 3", image: "/speaker-flyer3.jpg" },
        { id: 4, title: "Speaker 4", image: "/speaker-flyer4.jpg" },
        { id: 5, title: "Speaker 5", image: "/speaker-flyer5.jpg" },
        { id: 6, title: "Speaker 6", image: "/speaker-flyer6.jpg" },
        { id: 7, title: "Speaker 7", image: "/speaker-flyer7.jpg" },
        { id: 8, title: "Speaker 8", image: "/speaker-flyer8.jpg" },
        { id: 9, title: "Speaker 9", image: "/speaker-flyer9.jpg" }
      ]
    };

    // Videos data (unchanged)
    const videos = [
      { id: 1, title: "This Year Will Be Better - Last Conference Recap", file: "video1.mp4" },
      { id: 2, title: "Freeze or Miss LIMITLESS 2026!", file: "video2.mp4" },
      { id: 3, title: "Roses Are Red, Violets Are Blue, Your Stars Align With Destiny", file: "video3.mp4" },
      { id: 4, title: "Unveiling the LIMITLESS 2026 Flyer", file: "video4.mp4" },
      { id: 5, title: "No More Excuses - She Tried Everything!", file: "video5.mp4" },
      { id: 6, title: "30 Million Naira Prank Gone Wrong", file: "video6.mp4" },
      { id: 7, title: "Save The Date - Phone Reveal", file: "video7.mp4" },
      { id: 8, title: "Youthstars Empowerment Grant Explained", file: "video8.mp4" },
      { id: 9, title: "Hachikaru's Personal Message", file: "video9.mp4" },
      { id: 10, title: "Mirabel's Personal Message", file: "video10.mp4" },
      { id: 11, title: "Amanda's Personal Message", file: "video11.mp4" },
      { id: 12, title: "Chisom's Personal Message", file: "video12.mp4" },
    ];

    // Publicity flyers (unchanged)
    const publicityFlyers = [
      { id: 1, title: "Movie Night" },
      { id: 2, title: "Indoor Games" },
      { id: 3, title: "Go and Tell Them" },
      { id: 4, title: "Yadah / Old School" },
    ];

    // Skills (unchanged)
    const skills = [
      { name: "Photography / Videography", emoji: "📸" },
      { name: "Mini Importation", emoji: "📦" },
      { name: "Social Media Management & Content Creation", emoji: "📱" },
      { name: "Graphics Design", emoji: "🎨" },
      { name: "Digital Marketing", emoji: "📈" },
      { name: "Coding", emoji: "💻" },
      { name: "Baking", emoji: "🧁" },
      { name: "Social Media Ads", emoji: "📣" },
      { name: "Amazon Kindle Publishing", emoji: "📚" },
      { name: "AI Video Creation", emoji: "🤖" },
      { name: "YouTube Monetisation", emoji: "▶️" },
      { name: "Waste to Wealth", emoji: "♻️" },
    ];

    // Countdown Timer
    function startCountdown() {
      const targetDate = new Date('2026-04-16T00:00:00').getTime();
      const grid = document.getElementById('countdown-grid');

      setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
          grid.innerHTML = `
            <div class="col-span-full text-3xl font-bold text-emerald-600">LIMITLESS 2026 IS HERE! 🎉</div>
          `;
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        grid.innerHTML = `
          <div class="bg-gradient-to-br from-emerald-50 to-white shadow-xl rounded-3xl p-10 border border-emerald-100">
            <div class="text-7xl font-bold text-emerald-600">${String(days).padStart(2, '0')}</div>
            <div class="uppercase text-sm tracking-widest text-zinc-500 mt-2">DAYS</div>
          </div>
          <div class="bg-gradient-to-br from-emerald-50 to-white shadow-xl rounded-3xl p-10 border border-emerald-100">
            <div class="text-7xl font-bold text-emerald-600">${String(hours).padStart(2, '0')}</div>
            <div class="uppercase text-sm tracking-widest text-zinc-500 mt-2">HOURS</div>
          </div>
          <div class="bg-gradient-to-br from-emerald-50 to-white shadow-xl rounded-3xl p-10 border border-emerald-100">
            <div class="text-7xl font-bold text-emerald-600">${String(minutes).padStart(2, '0')}</div>
            <div class="uppercase text-sm tracking-widest text-zinc-500 mt-2">MINUTES</div>
          </div>
          <div class="bg-gradient-to-br from-emerald-50 to-white shadow-xl rounded-3xl p-10 border border-emerald-100">
            <div class="text-7xl font-bold text-emerald-600">${String(seconds).padStart(2, '0')}</div>
            <div class="uppercase text-sm tracking-widest text-zinc-500 mt-2">SECONDS</div>
          </div>
        `;
      }, 1000);
    }

    // Render Videos
    function renderVideos() {
      const container = document.getElementById('videos-grid');
      container.innerHTML = videos.map(video => `
        <div onclick="openVideoModal(${video.id})" class="group relative bg-zinc-900 rounded-3xl overflow-hidden shadow-xl aspect-video cursor-pointer hover:shadow-2xl transition">
          <video src="${video.file}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" muted poster="thumb-${video.file.replace('.mp4', '.jpg')}"></video>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
            <div>
              <div class="text-yellow-400 text-xs font-medium tracking-widest">VIDEO ${String(video.id).padStart(2, '0')}</div>
              <h4 class="text-white font-semibold leading-tight text-lg">${video.title}</h4>
            </div>
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition shadow-lg">
              <i class="fas fa-play text-emerald-600 text-3xl ml-1"></i>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Render Publicity Flyers
    function renderFlyers() {
      const container = document.getElementById('flyers-grid');
      container.innerHTML = publicityFlyers.map((flyer, i) => `
        <div class="relative rounded-3xl overflow-hidden shadow-2xl group">
          <img src="/publicity-flyer${i+1}.jpg" alt="${flyer.title}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <h3 class="text-white text-2xl font-bold">${flyer.title}</h3>
          </div>
        </div>
      `).join('');
    }

    // Render Skills
    function renderSkills() {
      const container = document.getElementById('skills-grid');
      container.innerHTML = skills.map(skill => `
        <div class="group bg-white border border-zinc-200 rounded-3xl p-8 text-center hover:border-emerald-500 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
          <div class="text-5xl mb-4">${skill.emoji}</div>
          <h3 class="font-semibold text-lg leading-tight text-zinc-800 group-hover:text-emerald-600 transition">${skill.name}</h3>
        </div>
      `).join('');
    }

    // Render Other Speakers (7 flyers)
    function renderOtherSpeakers() {
      const container = document.getElementById('other-speakers-grid');
      container.innerHTML = speakersData.others.map(speaker => `
        <div class="bg-white rounded-3xl overflow-hidden shadow-lg">
          <img 
            src="${speaker.image}" 
            alt="${speaker.title}" 
            class="w-full h-80 object-cover"
          >
        </div>
      `).join('');
    }

    // Open video modal
    function openVideoModal(id) {
      const video = videos.find(v => v.id === id);
      if (!video) return;
      
      document.getElementById('modal-video-title').textContent = video.title;
      const player = document.getElementById('modal-video-player');
      player.src = video.file;
      document.getElementById('video-modal').classList.remove('hidden');
      player.play().catch(() => {});
    }

    function closeVideoModal() {
      const modal = document.getElementById('video-modal');
      const player = document.getElementById('modal-video-player');
      player.pause();
      player.src = '';
      modal.classList.add('hidden');
    }

    // Music toggle
    function toggleMusic() {
      const audio = document.getElementById('themeSong');
      const icon = document.getElementById('music-icon');
      const button = document.getElementById('music-button');

      if (isPlaying) {
        audio.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        button.classList.remove('bg-emerald-600', 'text-white');
      } else {
        audio.play().catch(() => {
          alert("Click again to play the theme song");
        });
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        button.classList.add('bg-emerald-600', 'text-white');
      }
      isPlaying = !isPlaying;
    }

    // Toggle mobile menu
    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      const icon = document.getElementById('mobile-menu-icon');
      
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.textContent = '✕';
      } else {
        menu.classList.add('hidden');
        icon.textContent = '☰';
      }
    }

    // Toggle speakers section
    function toggleSpeakers() {
      showSpeakers = !showSpeakers;
      
      const grid = document.getElementById('other-speakers-grid');
      const text = document.getElementById('speakers-placeholder-text');
      const btn = document.getElementById('speakers-toggle-btn');
      
      if (showSpeakers) {
        grid.classList.remove('hidden');
        text.classList.add('hidden');
        btn.textContent = 'Hide Others';
      } else {
        grid.classList.add('hidden');
        text.classList.remove('hidden');
        btn.textContent = 'Show Others';
      }
    }

    // Back to top
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Back to top visibility
    function handleScroll() {
      const btn = document.getElementById('back-to-top');
      if (window.scrollY > 500) {
        btn.classList.remove('hidden');
      } else {
        btn.classList.add('hidden');
      }
    }

    // Initialize everything
    function initialize() {
      startCountdown();
      renderVideos();
      renderFlyers();
      renderSkills();
      renderOtherSpeakers(); // Pre-render the 7 additional speaker flyers
      
      // Scroll listener for back-to-top
      window.addEventListener('scroll', handleScroll);
      
      console.log('%c✅ LIMITLESS 2026 website initialized with 9 speaker flyers!', 'color: #10b981; font-weight: bold');
    }

    // Run on load
    window.onload = initialize;
  </script>
</body>
</html>