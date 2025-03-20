    // Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize custom cursor
    const cursor = document.querySelector(".cursor-dot")
    const cursorOutline = document.querySelector(".cursor-outline")
  
    document.addEventListener("mousemove", (e) => {
      const posX = e.clientX
      const posY = e.clientY
  
      cursor.style.left = `${posX}px`
      cursor.style.top = `${posY}px`
  
      cursorOutline.style.left = `${posX}px`
      cursorOutline.style.top = `${posY}px`
    })
  
    document.addEventListener("mousedown", () => {
      cursorOutline.style.width = "35px"
      cursorOutline.style.height = "35px"
    })
  
    document.addEventListener("mouseup", () => {
      cursorOutline.style.width = "40px"
      cursorOutline.style.height = "40px"
    })
  
    // Links and buttons cursor effect
    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        cursorOutline.style.width = "60px"
        cursorOutline.style.height = "60px"
        cursorOutline.style.borderColor = "var(--color-secondary)"
      })
  
      link.addEventListener("mouseleave", () => {
        cursorOutline.style.width = "40px"
        cursorOutline.style.height = "40px"
        cursorOutline.style.borderColor = "var(--color-primary)"
      })
    })
  
    // Loading screen
    const loadingScreen = document.querySelector(".loading-screen")
  
    window.addEventListener("load", () => {
      setTimeout(() => {
        loadingScreen.classList.add("hidden")
      }, 2000)
    })
  
    // Cookie consent popup
    const cookieConsent = document.getElementById("cookieConsent")
    const acceptCookiesBtn = document.getElementById("acceptCookies")
    const declineCookiesBtn = document.getElementById("declineCookies")
    const closeCookieConsentBtn = document.getElementById("closeCookieConsent")
  
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem("cookieConsent")
  
    if (cookieChoice === null) {
      // Show cookie consent popup after a short delay
      setTimeout(() => {
        cookieConsent.classList.add("show")
      }, 2000)
    }
  
    // Accept cookies
    acceptCookiesBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "accepted")
      cookieConsent.classList.remove("show")
      // Here you would initialize your analytics and tracking scripts
    })
  
    // Decline cookies
    declineCookiesBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "declined")
      cookieConsent.classList.remove("show")
      // Here you would ensure no tracking cookies are set
    })
  
    // Close cookie consent
    closeCookieConsentBtn.addEventListener("click", () => {
      cookieConsent.classList.remove("show")
    })
  
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const mobileMenu = document.querySelector(".mobile-menu")
  
    menuToggle.addEventListener("click", () => {
      document.body.classList.toggle("menu-open")
      mobileMenu.classList.toggle("open")
    })
  
    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll(".mobile-nav-link")
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("menu-open")
        mobileMenu.classList.remove("open")
      })
    })
  
    // Header scroll effect
    const header = document.querySelector(".header")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Initialize Vanilla Tilt
    if (typeof VanillaTilt !== "undefined") {
      VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      })
    } else {
      console.warn("VanillaTilt is not defined. Make sure it's properly imported.")
    }
  
    // Initialize GSAP if available
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
  
      // Hero animations
      gsap.from(".hero-title .line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      })
  
      gsap.from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      })
  
      gsap.from(".hero-buttons", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
      })
  
      // Scroll animations
      if (typeof ScrollTrigger !== "undefined") {
        // Section headers
        gsap.utils.toArray(".section-header").forEach((header) => {
          gsap.from(header, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
              trigger: header,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          })
        })
  
        // Trend cards
        gsap.utils.toArray(".trend-card").forEach((card, i) => {
          gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: ".trends-grid",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          })
        })
  
        // Turkey map
        gsap.from(".turkey-map", {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".turkey-content",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
  
        // AI brain
        gsap.from(".ai-brain", {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".ai-content",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
  
        // Metaverse world
        gsap.from(".metaverse-world", {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".metaverse-content",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
      }
    } else {
      console.warn("GSAP and/or ScrollTrigger is not defined. Make sure they are properly imported.")
    }
  
    // Turkey map interaction
    const mapPoints = document.querySelectorAll(".map-point")
    const mapInfoContents = document.querySelectorAll(".map-info-content")
  
    // Set Istanbul as default active
    document.querySelector(".istanbul-info").classList.add("active")
  
    mapPoints.forEach((point) => {
      point.addEventListener("click", function () {
        const city = this.getAttribute("data-city")
  
        // Remove active class from all info contents
        mapInfoContents.forEach((content) => {
          content.classList.remove("active")
        })
  
        // Add active class to selected city info
        document.querySelector(`.${city.toLowerCase()}-info`).classList.add("active")
      })
    })
  
    // Animate stats
    function animateStats() {
      const stats = document.querySelectorAll(".turkey-stat .stat-value, .metaverse-stat .stat-value")
  
      stats.forEach((stat) => {
        const target = Number.parseFloat(stat.getAttribute("data-count"))
        const duration = 2000 // 2 seconds
        const startTime = Date.now()
        const startValue = 0
  
        function updateStat() {
          const currentTime = Date.now()
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)
  
          let currentValue
          if (target < 10) {
            // For decimal values
            currentValue = (startValue + progress * target).toFixed(1)
          } else {
            // For integer values
            currentValue = Math.floor(startValue + progress * target)
          }
  
          stat.textContent = currentValue
  
          if (progress < 1) {
            requestAnimationFrame(updateStat)
          }
        }
  
        // Create Intersection Observer to start animation when element is in view
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                requestAnimationFrame(updateStat)
                observer.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.5 },
        )
  
        observer.observe(stat)
      })
    }
  
    animateStats()
  
    // Back to top button
    const backToTopBtn = document.querySelector(".back-to-top")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add("visible")
      } else {
        backToTopBtn.classList.remove("visible")
      }
    })
  
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    // Form submission
    const contactForm = document.querySelector(".contact-form")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Simple form validation
        let isValid = true
        const inputs = contactForm.querySelectorAll("input, textarea")
  
        inputs.forEach((input) => {
          if (!input.value.trim()) {
            isValid = false
            input.parentElement.classList.add("error")
          } else {
            input.parentElement.classList.remove("error")
          }
        })
  
        if (isValid) {
          // Simulate form submission
          const submitBtn = contactForm.querySelector('button[type="submit"]')
          submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...'
          submitBtn.disabled = true
  
          setTimeout(() => {
            contactForm.innerHTML = `
              <div class="success-message">
                <div class="success-icon">
                  <i class="fas fa-check-circle"></i>
                </div>
                <h3>Mesajınız Gönderildi!</h3>
                <p>En kısa sürede size dönüş yapacağız.</p>
              </div>
            `
          }, 2000)
        }
      })
    }
  
    // Newsletter form
    const newsletterForm = document.querySelector(".newsletter-form")
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        const input = newsletterForm.querySelector("input")
        if (input.value.trim()) {
          // Simulate subscription
          const button = newsletterForm.querySelector("button")
          button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'
  
          setTimeout(() => {
            newsletterForm.innerHTML = `
              <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <span>Bültene başarıyla abone oldunuz!</span>
              </div>
            `
          }, 1500)
        }
      })
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Simple particles background
    function createParticles() {
      const particlesContainer = document.getElementById("particles-bg")
      if (!particlesContainer) return
  
      const particleCount = 50
  
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div")
        particle.className = "particle"
  
        // Random position
        const posX = Math.random() * 100
        const posY = Math.random() * 100
  
        // Random size
        const size = Math.random() * 5 + 1
  
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.1
  
        // Random animation duration
        const duration = Math.random() * 20 + 10
  
        // Set styles
        particle.style.cssText = `
          position: absolute;
          top: ${posY}%;
          left: ${posX}%;
          width: ${size}px;
          height: ${size}px;
          background-color: var(--color-primary);
          border-radius: 50%;
          opacity: ${opacity};
          animation: float ${duration}s infinite ease-in-out;
          animation-delay: ${Math.random() * 5}s;
        `
  
        particlesContainer.appendChild(particle)
      }
    }
  
    createParticles()
  })
  
  