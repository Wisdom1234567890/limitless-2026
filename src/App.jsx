import { useState, useEffect } from 'react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 0, minutes: 0, seconds: 0 });
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showSpeakers, setShowSpeakers] = useState(false);

  // Countdown Timer
  useEffect(() => {
    const targetDate = new Date('2026-04-16T00:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Back to Top
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById('themeSong');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => alert("Click again to play the theme song"));
    }
    setIsPlaying(!isPlaying);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const publicityFlyers = [
    { id: 1, title: "Movie Night" },
    { id: 2, title: "Indoor Games" },
    { id: 3, title: "Go and Tell Them" },
    { id: 4, title: "Yadah / Old School" },
  ];

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

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo + Title - Already 50% smaller */}
          <a href="#home" className="flex items-center gap-4 hover:opacity-90 transition">
            <img 
              src="/logo.png" 
              alt="Diocese Logo" 
              className="h-16 w-auto object-contain md:h-[72px]" 
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-emerald-600 tracking-tighter">LIMITLESS</h1>
              <p className="text-xs md:text-sm text-zinc-500 -mt-1">2026 YOUTH STARS CONFERENCE</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#home" className="hover:text-emerald-600 transition">Home</a>
            <a href="#countdown" className="hover:text-emerald-600 transition">Countdown</a>
            <a href="#speakers" className="hover:text-emerald-600 transition">Our Speakers</a>
            <a href="#videos" className="hover:text-emerald-600 transition">Contents</a>
            <a href="#flyers" className="hover:text-emerald-600 transition">Events</a>
            <a href="#skills" className="hover:text-emerald-600 transition">Skills</a>
            <a href="#youthstars" className="hover:text-emerald-600 transition">Empowerment</a>
          </div>

          <div className="flex items-center gap-4">
            {/* REGISTER BUTTON - Now says "Register" only + smaller size */}
            <a 
              href="#registration" 
              className="bg-gradient-to-r from-yellow-400 to-emerald-600 text-black px-6 py-2.5 rounded-3xl font-bold hover:scale-105 transition text-sm md:text-base"
            >
              Register
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 text-3xl"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t py-6">
            <div className="flex flex-col gap-6 px-8 text-lg font-medium">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#countdown" onClick={() => setIsMobileMenuOpen(false)}>Countdown</a>
              <a href="#speakers" onClick={() => setIsMobileMenuOpen(false)}>Our Speakers</a>
              <a href="#videos" onClick={() => setIsMobileMenuOpen(false)}>Contents</a>
              <a href="#flyers" onClick={() => setIsMobileMenuOpen(false)}>Events</a>
              <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
              <a href="#youthstars" onClick={() => setIsMobileMenuOpen(false)}>Empowerment</a>
              <a href="#registration" onClick={() => setIsMobileMenuOpen(false)}>Register</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-sky-400 via-teal-500 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full mb-8 text-sm font-medium">
            DIOCESE OF NIGER DELTA NORTH • ANGLICAN YOUTH FELLOWSHIP
          </div>
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-4">LIMITLESS</h1>
          <p className="text-3xl md:text-4xl font-light mb-8">2026 Biennial Youth Stars Conference</p>
          <div className="inline-block bg-yellow-400 text-black font-bold px-8 py-3 rounded-2xl mb-10 text-xl">
            16TH — 19TH APRIL 2026
          </div>

          <div className="max-w-2xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img src="/poster.jpg" alt="LIMITLESS 2026" className="w-full" />
          </div>
          <p className="text-xl">Jeremiah 32:27 • Ephesians 3:20</p>
        </div>
      </section>

      {/* Countdown */}
      <section id="countdown" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-4">⏳ Countdown to LIMITLESS 2026</h2>
          <p className="text-xl text-zinc-600 mb-12">The atmosphere is already electric!</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="bg-gradient-to-br from-emerald-50 to-white shadow-xl rounded-3xl p-10 border border-emerald-100">
                <div className="text-7xl font-bold text-emerald-600">{String(value).padStart(2, '0')}</div>
                <div className="uppercase text-sm tracking-widest text-zinc-500 mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Speakers */}
      <section id="speakers" className="py-20 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-4 mb-8">
            <h2 className="text-5xl font-bold">Meet Our Speakers</h2>
            <button
              onClick={() => setShowSpeakers(!showSpeakers)}
              className="text-sm px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition"
            >
              {showSpeakers ? 'Hide Others' : 'Show Others'}
            </button>
          </div>

          {/* Main Speaker Flyer */}
          <div className="max-w-2xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl">
            <img src="/main-speaker-flyer.jpg" alt="Main Speaker" className="w-full" />
          </div>

          {/* Other Speakers - Hidden by default */}
          {showSpeakers && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg h-80 flex items-center justify-center border-2 border-dashed border-zinc-300">
                  <p className="text-zinc-400 text-center">Speaker {i+2}<br/>Coming Soon</p>
                </div>
              ))}
            </div>
          )}

          {!showSpeakers && (
            <p className="text-zinc-500 italic mt-8">Click "Show Others" above to see other speakers when ready</p>
          )}
        </div>
      </section>

      {/* Videos Section with Thumbnails */}
      <section id="videos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Conference Content Videos</h2>
            <p className="text-xl text-zinc-600">Powerful messages, skits and highlights</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="group relative bg-zinc-900 rounded-3xl overflow-hidden shadow-xl aspect-video cursor-pointer hover:shadow-2xl transition"
              >
                <video
                  src={video.file}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  muted
                  poster={`thumb-${video.file.replace('.mp4', '.jpg')}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
                  <div>
                    <div className="text-yellow-400 text-xs font-medium tracking-widest">VIDEO {String(video.id).padStart(2, '0')}</div>
                    <h4 className="text-white font-semibold leading-tight text-lg">{video.title}</h4>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition shadow-lg">
                    <i className="fas fa-play text-emerald-600 text-3xl ml-1"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4">
          <div className="max-w-5xl w-full bg-zinc-900 rounded-3xl overflow-hidden">
            <div className="flex justify-between items-center p-5 border-b border-zinc-700">
              <h3 className="text-white font-semibold text-xl">{selectedVideo.title}</h3>
              <button onClick={() => setSelectedVideo(null)} className="text-white text-4xl leading-none hover:text-red-500">×</button>
            </div>
            <video src={selectedVideo.file} controls autoPlay className="w-full" />
          </div>
        </div>
      )}

      {/* Publicity Flyers */}
      <section id="flyers" className="py-20 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-16">Publicity Flyers</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {publicityFlyers.map((flyer, i) => (
              <div key={i} className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img src={`/publicity-flyer${i+1}.jpg`} alt={flyer.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                  <h3 className="text-white text-2xl font-bold">{flyer.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Acquisition Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Skills Acquisition Workshops</h2>
            <p className="text-xl text-zinc-600">Practical skills to empower you beyond the conference</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white border border-zinc-200 rounded-3xl p-8 text-center hover:border-emerald-500 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{skill.emoji}</div>
                <h3 className="font-semibold text-lg leading-tight text-zinc-800 group-hover:text-emerald-600 transition">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Youthstars Empowerment Scheme */}
      <section id="youthstars" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Youthstars Empowerment Scheme</h2>
          <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-10">
            <img src="youthstars-flyer.jpg" alt="Youthstars Empowerment Scheme" className="w-full" />
          </div>
        </div>
      </section>

      {/* I Am Attending */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">I Am Attending LIMITLESS 2026</h2>
          <div className="max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl mb-10">
            <img src="/iamattending-flyer.jpg" alt="I Am Attending" className="w-full" />
          </div>
          <a
            href="https://inbranded.co/c/03161932-a656-4392-8e08-bb19ba0b4072"
            target="_blank"
            className="inline-block bg-emerald-600 text-white px-10 py-5 rounded-3xl text-xl font-bold hover:bg-emerald-700 transition"
          >
            Join "I Am Attending" →
          </a>
        </div>
      </section>

      {/* Registration - Box reduced by 40% */}
      <section id="registration" className="py-20 bg-zinc-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-10">Register for LIMITLESS 2026</h2>
          
          {/* Box size reduced by 40% (max-w-2xl → max-w-md + less padding) */}
          <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-8">Payment Details</h3>
            <div className="bg-emerald-50 p-6 rounded-2xl text-left mb-10">
              <p><strong>Bank:</strong> Fidelity Bank</p>
              <p><strong>Account Number:</strong> 6060362529</p>
              <p><strong>Account Name:</strong> Diocese of Niger Delta North Anglican Youth Fellowship</p>
              <p className="mt-4 text-sm text-emerald-700 font-medium">Registration Fee: ₦5,000</p>
            </div>
            <a
              href="https://docs.google.com/forms/d/1und_tEmjtt2fbrkfBP5-EsokEjKLLjsavIO6XNYBCqw/edit?usp=drivesdk"
              target="_blank"
              className="block w-full bg-gradient-to-r from-yellow-400 to-emerald-600 text-black py-6 rounded-3xl font-bold text-xl hover:scale-105 transition"
            >
              Fill Registration Form →
            </a>
          </div>
        </div>
      </section>

      {/* Hidden Audio */}
      <audio id="themeSong" loop>
        <source src="/YOUR_THEME_SONG.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Play/Pause Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-8 left-8 z-[9999] flex items-center justify-center w-16 h-16 bg-white shadow-2xl border-2 border-emerald-600 rounded-3xl hover:bg-emerald-600 hover:text-white hover:scale-110 active:scale-95 transition-all text-emerald-600"
        title={isPlaying ? "Pause Theme Song" : "Play Theme Song"}
      >
        <i className={`fas text-4xl ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
      </button>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-emerald-600 text-white p-4 rounded-full shadow-xl hover:bg-emerald-700 transition z-50 text-2xl"
        >
          ↑
        </button>
      )}

      {/* Footer */}
      <footer className="bg-emerald-700 text-white py-12 text-center">
        <p className="text-3xl font-bold">LIMITLESS 2026</p>
        <p className="mt-2">New Covenant Anglican Church, Oroabali Deanery</p>
        <p className="text-sm mt-6 opacity-75">Diocese of Niger Delta North • Anglican Communion</p>
      </footer>
    </div>
  );
}

export default App;