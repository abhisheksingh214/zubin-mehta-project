import React, { useEffect, useRef, useState } from 'react';

const translations = {
  en: {
    hero: {
      badge: "Embassy of Israel, New Delhi",
      title1: "Zubin Mehta",
      title2: "The Israel Philharmonic Orchestra",
      subtitle: "A Cultural Bridge Between India and Israel",
      scroll: "Scroll to explore"
    },
    nav: {
      hero: "Hero",
      mural: "The Mural",
      journey: "Journey",
      bond: "Bond",
      returning: "India",
      discover: "Discover"
    },
    mural: {
      label: "About",
      title: "About the Mural",
      text: "This mural, commissioned by the Embassy of Israel in New Delhi and painted by imagenation street art, honors decades of historical, cultural, and artistic connection between India and Israel. Centered on the remarkable journey of Zubin Mehta—one of India’s most celebrated musicians—and his deep bond with the Israel Philharmonic Orchestra, it reflects how music can bridge nations, histories, and identities."
    },
    journey: {
      label: "Biography",
      title: "Zubin Mehta",
      subtitle: "From Mumbai to the World",
      p1: "Born in Mumbai in 1936, Zubin Mehta grew up in a deeply musical family. His father, Mehli Mehta, was a renowned violinist and conductor, and played a key role in shaping India’s classical music scene.",
      p2: "Mehta moved to Vienna to study conducting at the prestigious Academy of Music, quickly rising to become one of the world’s leading conductors. Despite his global career, he has always maintained a strong connection to his Indian roots."
    },
    bond: {
      label: "Legacy",
      title: "A Lifelong Bond with Israel",
      p1: "Zubin Mehta’s relationship with the Israel Philharmonic Orchestra began in 1969. He later became its Music Director for Life—an extraordinary title reflecting decades of artistic leadership and deep personal commitment.",
      p2: "Through his work, Mehta helped shape the orchestra into one of the world’s finest, based in Tel Aviv, while also serving as a cultural ambassador for Israel across the globe."
    },
    returning: {
      label: "Homecoming",
      title: "Returning to India",
      text: "Over the years, Zubin Mehta has brought the Israel Philharmonic Orchestra back to India for historic performances, including landmark concerts in Mumbai (2013) and New Delhi. These visits were powerful moments of cultural exchange, reconnecting Mehta with his birthplace while introducing Israeli artistry to Indian audiences."
    },
    discover: {
      label: "Explore",
      title: "Discover More",
      text: "Explore the music, legacy, and upcoming performances of the Israel Philharmonic Orchestra.",
      cta: "Visit Israel Philharmonic Orchestra"
    },
    footer: {
      thanks: "Special thanks to:",
      partners: "We extend our sincere thanks to our partners who made this project possible:",
      commissioned: "Commissioned by the Embassy of Israel in New Delhi",
      credits: "Photo Credits"
    }
  },
  hi: {
    hero: {
      badge: "इज़राइल दूतावास, नई दिल्ली",
      title1: "ज़ुबिन मेहता",
      title2: "इज़राइल फ़िलहारमोनिक ऑर्केस्ट्रा",
      subtitle: "भारत और इज़राइल के बीच एक सांस्कृतिक सेतु",
      scroll: "अन्वेषण के लिए स्क्रॉल करें"
    },
    nav: {
      hero: "मुख्य",
      mural: "भित्ति चित्र",
      journey: "यात्रा",
      bond: "संबंध",
      returning: "भारत",
      discover: "खोजें"
    },
    mural: {
      label: "के बारे में",
      title: "भित्ति चित्र के बारे में",
      text: "यह भित्ति चित्र, जिसे नई दिल्ली में इज़राइल दूतावास द्वारा आयोगित किया गया और imagenation street art द्वारा बनाया गया, भारत और इज़राइल के बीच दशकों से चले आ रहे ऐतिहासिक, सांस्कृतिक और कलात्मक संबंधों का सम्मान करता है। ज़ुबिन मेहता की असाधारण यात्रा—जो भारत के सबसे प्रसिद्ध संगीतकारों में से एक हैं—और इज़राइल फ़िलहारमोनिक ऑर्केस्ट्रा के साथ उनके गहरे संबंध को केंद्र में रखते हुए, यह दर्शाता है कि संगीत कैसे देशों, इतिहासों और पहचानों को जोड़ सकता है।"
    },
    journey: {
      label: "जीवनी",
      title: "ज़ुबिन मेहता",
      subtitle: "मुंबई से दुनिया तक",
      p1: "1936 में मुंबई में जन्मे ज़ुबिन मेहता एक गहरे संगीत-प्रेमी परिवार में पले-बढ़े। उनके पिता, मेहली मेहता, एक प्रसिद्ध वायलिन वादक और कंडक्टर थे, जिन्होंने भारत के शास्त्रीय संगीत परिदृश्य को आकार देने में महत्वपूर्ण भूमिका निभाई।",
      p2: "मेहता ने वियना जाकर प्रतिष्ठित संगीत अकादमी में संचालन (कंडक्टिंग) की पढ़ाई की और जल्द ही दुनिया के अग्रणी कंडक्टरों में शामिल हो गए। अपने वैश्विक करियर के बावजूद, उन्होंने हमेशा अपनी भारतीय जड़ों से गहरा संबंध बनाए रखा है।"
    },
    bond: {
      label: "विरासत",
      title: "इज़राइल के साथ आजीवन संबंध",
      p1: "ज़ुबिन मेहता का इज़राइल फ़िलहारमोनिक ऑर्केस्ट्रा के साथ संबंध 1969 में शुरू हुआ। बाद में उन्हें “म्यूज़िक डायरेक्टर फ़ॉर लाइफ़” की उपाधि दी गई—जो उनके दशकों लंबे कलात्मक नेतृत्व और गहरी व्यक्तिगत प्रतिबद्धता को दर्शाती है।",
      p2: "अपने कार्य के माध्यम से, मेहता ने इस ऑर्केस्ट्रा को दुनिया के श्रेष्ठतम ऑर्केस्ट्राओं में से एक बनाने में मदद की, जिसका मुख्यालय तेल अवीव में है, और साथ ही वे वैश्विक स्तर पर इज़राइल के सांस्कृतिक दूत के रूप में भी कार्य करते रहे।"
    },
    returning: {
      label: "घर वापसी",
      title: "भारत वापसी",
      text: "वर्षों के दौरान, ज़ुबिन मेहता ने इज़राइल फ़िलहारमोनिक ऑर्केस्ट्रा को भारत वापस लाकर ऐतिहासिक प्रस्तुतियाँ दीं, जिनमें मुंबई (2013) और नई दिल्ली के प्रमुख संगीत कार्यक्रम शामिल हैं। ये यात्राएँ सांस्कृतिक आदान-प्रदान के महत्वपूर्ण क्षण थीं, जिन्होंने मेहता को उनके जन्मस्थान से फिर से जोड़ा और भारतीय दर्शकों को इज़राइली कला से परिचित कराया।"
    },
    discover: {
      label: "खोजें",
      title: "और जानें",
      text: "इज़राइल फ़िलहारमोनिक ऑर्केस्ट्रा के संगीत, विरासत और आगामी प्रस्तुतियों के बारे में जानें:",
      cta: "इज़राइल फ़िलहारमोनिक ऑर्केस्ट्रा देखें"
    },
    footer: {
      thanks: "विशेष धन्यवाद:",
      partners: "हम अपने उन साझेदारों के प्रति हार्दिक आभार व्यक्त करते हैं, जिनकी बदौलत यह परियोजना संभव हो सकी:",
      commissioned: "नई दिल्ली में इज़राइल दूतावास द्वारा आयोगित",
      credits: "फ़ोटो क्रेडिट"
    }
  }
};

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [navVisible, setNavVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');
  const heroRef = useRef(null);

  const t = translations[lang];

  useEffect(() => {
    // Set document lang and font class
    document.documentElement.lang = lang;
    if (lang === 'hi') {
      document.body.classList.add('font-hi');
    } else {
      document.body.classList.remove('font-hi');
    }

    // --- Scroll-triggered animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));

    // --- Active nav link and visibility on scroll ---
    const sections = document.querySelectorAll('section, header');
    
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      if (currentScroll > 300) {
        setNavVisible(true);
      } else {
        setNavVisible(false);
      }

      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;
        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
      if (current) setActiveSection(current);

      if (heroRef.current) {
        const rate = currentScroll * 0.3;
        const content = heroRef.current.querySelector('.hero-content');
        if (content) {
          content.style.transform = `translateY(${rate}px)`;
          content.style.opacity = 1 - (currentScroll / 800);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const particlesContainer = document.getElementById('heroParticles');
    if (particlesContainer && particlesContainer.children.length === 0) {
      const particleCount = 30;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('hero-particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${40 + Math.random() * 60}%`;
        particle.style.animationDelay = `${Math.random() * 8}s`;
        particle.style.animationDuration = `${6 + Math.random() * 6}s`;
        particle.style.width = `${1 + Math.random() * 2}px`;
        particle.style.height = particle.style.width;
        particlesContainer.appendChild(particle);
      }
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang]);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'hi' : 'en');
  };

  return (
    <>
      {/* Top Navigation */}
      <nav 
        className={`main-nav ${navVisible ? 'nav-scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
      >
        <div className="nav-container">
          <div className="nav-brand" onClick={() => scrollToSection('hero')}>
            <span className="brand-text">Mehta & IPO</span>
          </div>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <div className="nav-links">
              {['hero', 'about-mural', 'journey', 'bond', 'returning', 'discover'].map((id) => (
                <a 
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    setIsMenuOpen(false);
                  }} 
                  className={`nav-link ${activeSection === id ? 'active' : ''}`}
                >
                  {t.nav[id === 'about-mural' ? 'mural' : id]}
                </a>
              ))}
            </div>
            
            <div className="nav-actions">
              <button onClick={toggleLang} className="lang-toggle">
                {lang === 'en' ? 'हिन्दी' : 'English'}
              </button>
            </div>
          </div>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="hero-section" ref={heroRef}>
        <div className="hero-overlay"></div>
        <div className="hero-particles" id="heroParticles"></div>
        <div className="hero-content">
          <div className="hero-logo animate-on-scroll">
            <img src="/images/embassy-logo.jpg" alt="Embassy of Israel Logo" />
          </div>
          <h1 className="hero-title animate-on-scroll">
            <span className="title-line title-line-1">{t.hero.title1}</span>
            <span className="title-ampersand">&</span>
            <span className="title-line title-line-2">{t.hero.title2}</span>
          </h1>
          <p className="hero-subtitle animate-on-scroll">{t.hero.subtitle}</p>
          <div className="hero-scroll-indicator animate-on-scroll">
            <span>{t.hero.scroll}</span>
            <div className="scroll-line"></div>
          </div>
        </div>
      </header>

      {/* About the Mural */}
      <section id="about-mural" className="section section-mural">
        <div className="container">
          <div className="section-label animate-on-scroll">{t.mural.label}</div>
          <h2 className="section-title animate-on-scroll">{t.mural.title}</h2>
          <div className="divider animate-on-scroll"></div>
          <p className="section-text section-text-large animate-on-scroll">
            {t.mural.text}
          </p>
        </div>
      </section>

      {/* Zubin Mehta Journey */}
      <section id="journey" className="section section-journey">
        <div className="container">
          <div className="content-grid content-grid-reverse">
            <div className="content-text">
              <div className="section-label animate-on-scroll">{t.journey.label}</div>
              <h2 className="section-title animate-on-scroll">{t.journey.title}</h2>
              <h3 className="section-subtitle animate-on-scroll">{t.journey.subtitle}</h3>
              <div className="divider animate-on-scroll"></div>
              <p className="section-text animate-on-scroll">{t.journey.p1}</p>
              <p className="section-text animate-on-scroll">{t.journey.p2}</p>
            </div>
            <div className="content-image animate-on-scroll">
              <div className="image-frame">
                <img src="/images/zubin-portrait.png" alt="Zubin Mehta portrait" loading="lazy" />
                <div className="image-caption">
                  <span className="caption-text">Credit: Oded Antman</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bond with Israel */}
      <section id="bond" className="section section-bond">
        <div className="container">
          <div className="content-grid">
            <div className="content-image animate-on-scroll">
              <div className="image-frame">
                <img src="/images/orchestra.jpg" alt="Zubin Mehta conducting the Israel Philharmonic Orchestra" loading="lazy" />
                <div className="image-caption">
                  <span className="caption-text">Credit: Shai Skiff</span>
                </div>
              </div>
            </div>
            <div className="content-text">
              <div className="section-label animate-on-scroll">{t.bond.label}</div>
              <h2 className="section-title animate-on-scroll">{t.bond.title}</h2>
              <div className="divider animate-on-scroll"></div>
              <p className="section-text animate-on-scroll">{t.bond.p1}</p>
              <p className="section-text animate-on-scroll">{t.bond.p2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Returning to India */}
      <section id="returning" className="section section-returning">
        <div className="container">
          <div className="section-label animate-on-scroll">{t.returning.label}</div>
          <h2 className="section-title animate-on-scroll">{t.returning.title}</h2>
          <div className="divider animate-on-scroll"></div>
          <p className="section-text section-text-large animate-on-scroll">
            {t.returning.text}
          </p>
          <div className="timeline animate-on-scroll">
            <div className="timeline-item">
              <div className="timeline-year">1936</div>
              <div className="timeline-desc">{lang === 'en' ? 'Born in Mumbai' : 'मुंबई में जन्म'}</div>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="timeline-year">1969</div>
              <div className="timeline-desc">{lang === 'en' ? 'Begins with IPO' : 'IPO के साथ शुरुआत'}</div>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="timeline-year">1981</div>
              <div className="timeline-desc">{lang === 'en' ? 'Music Director for Life' : 'आजीवन संगीत निर्देशक'}</div>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="timeline-year">2013</div>
              <div className="timeline-desc">{lang === 'en' ? 'Historic Mumbai Concert' : 'ऐतिहासिक मुंबई कार्यक्रम'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover More */}
      <section id="discover" className="section section-discover">
        <div className="container">
          <div className="discover-card animate-on-scroll">
            <div className="section-label">{t.discover.label}</div>
            <h2 className="section-title">{t.discover.title}</h2>
            <div className="divider"></div>
            <p className="section-text" style={{ margin: '0 auto 1.5rem', textAlign: 'center' }}>
              {t.discover.text}
            </p>
            <a href="https://www.ipo.co.il/en/" target="_blank" rel="noopener noreferrer" className="cta-button">
              <span>{t.discover.cta}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Acknowledgments */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo animate-on-scroll">
              <img src="/images/embassy-logo.jpg" alt="Embassy of Israel Logo" />
            </div>
            
            <div className="footer-text animate-on-scroll">
              <h3 className="footer-thanks-title">{t.footer.thanks}</h3>
              <p className="footer-partners-text">{t.footer.partners}</p>
              
              <div className="partner-logos">
                <div className="partner-logo-item">
                  <img src="/images/ndmc-logo.png" alt="NDMC Logo" />
                  <span>NDMC</span>
                </div>
                <div className="partner-logo-item">
                  <img src="/images/cpwd-logo.png" alt="CPWD Logo" />
                  <span>CPWD</span>
                </div>
                <div className="partner-logo-item">
                  <img src="/images/duac-logo.png" alt="DUAC Logo" />
                  <span>DUAC</span>
                </div>
                <div className="partner-logo-item">
                  <img src="/images/mea-logo.png" alt="MEA Logo" />
                  <span>MEA</span>
                </div>
              </div>
            </div>

            <div className="footer-credits animate-on-scroll">
              <p className="credits-label">{t.footer.credits}</p>
              <p className="credits-item">Zubin Portrait: <strong>Oded Antman</strong></p>
              <p className="credits-item">Orchestra: <strong>Shai Skiff</strong></p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="commissioned-text">{t.footer.commissioned}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
