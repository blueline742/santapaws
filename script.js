// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navSocials = document.querySelector('.nav-socials');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navSocials.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navSocials.classList.remove('active');
    });
});

// Countdown Timer
const countdownDate = new Date('November 7, 2025 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '<h2 class="live-text">PRESALE IS LIVE!</h2>';
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Advent Calendar Generation
const adventGrid = document.getElementById('adventGrid');
const modal = document.getElementById('calendarModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

const prizes = [
    { day: 1, icon: '🎁', title: 'Welcome Gift!', description: 'Thank you for being part of the Santa Paws community!' },
    { day: 2, icon: '🎮', title: 'Gaming Console Giveaway', description: 'Enter for a chance to win a gaming console!' },
    { day: 3, icon: '💰', title: '50 SOL Prize Pool', description: 'Lucky winners will share 50 SOL!' },
    { day: 4, icon: '🎄', title: 'NFT Drop', description: 'Exclusive Santa Paws NFT collection!' },
    { day: 5, icon: '🎅', title: 'Community AMA', description: 'Meet the team and ask anything!' },
    { day: 6, icon: '🎊', title: 'Bonus Tokens', description: 'Early supporters get bonus tokens!' },
    { day: 7, icon: '🚀', title: 'Presale Launch!', description: 'The presale officially begins!' },
    { day: 8, icon: '💎', title: 'Diamond Hands Reward', description: 'Special rewards for holders!' },
    { day: 9, icon: '🎸', title: 'Music NFT', description: 'Exclusive Santa Paws theme song NFT!' },
    { day: 10, icon: '🏆', title: 'Trading Competition', description: 'Compete for amazing prizes!' },
    { day: 11, icon: '🎮', title: 'VR Headset Giveaway', description: 'Win a VR headset!' },
    { day: 12, icon: '📱', title: 'iPhone Giveaway', description: 'Latest iPhone up for grabs!' },
    { day: 13, icon: '💻', title: 'Laptop Giveaway', description: 'High-end gaming laptop!' },
    { day: 14, icon: '🎁', title: 'Mystery Box', description: 'Open for a surprise gift!' },
    { day: 15, icon: '🎨', title: 'Art Contest', description: 'Show your creativity, win prizes!' },
    { day: 16, icon: '🎵', title: 'Concert Tickets', description: 'Win tickets to your favorite artist!' },
    { day: 17, icon: '🏠', title: 'Smart Home Device', description: 'Upgrade your home with smart tech!' },
    { day: 18, icon: '⌚', title: 'Smartwatch Giveaway', description: 'Latest smartwatch model!' },
    { day: 19, icon: '🎧', title: 'Premium Headphones', description: 'High-quality audio experience!' },
    { day: 20, icon: '📷', title: 'Camera Giveaway', description: 'Professional camera for creators!' },
    { day: 21, icon: '🎮', title: 'Gaming PC', description: 'Custom built gaming PC!' },
    { day: 22, icon: '✈️', title: 'Travel Voucher', description: 'Plan your dream vacation!' },
    { day: 23, icon: '🎄', title: 'Christmas Eve Special', description: 'Something special awaits!' },
    { day: 24, icon: '🎅', title: 'Grand Prize Draw', description: 'Multiple winners, huge prizes!' },
    { day: 25, icon: '🎁', title: 'MERRY CHRISTMAS!', description: 'The biggest surprise of all!' }
];

// Generate advent calendar doors
function generateAdventCalendar() {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();

    // November = 10, December = 11 in JavaScript months (0-indexed)
    const isNovember = currentMonth === 10;
    const isDecember = currentMonth === 11;

    prizes.forEach(prize => {
        const door = document.createElement('div');
        door.classList.add('advent-door');

        // Determine if door should be unlocked
        let isUnlocked = false;
        if (isNovember && currentDay >= 7) {
            // In November, unlock all doors after Nov 7
            isUnlocked = true;
        } else if (isDecember) {
            // In December, unlock doors up to current day
            isUnlocked = currentDay >= prize.day;
        }

        if (!isUnlocked) {
            door.classList.add('locked');
        }

        door.innerHTML = `
            <div class="door-number">${prize.day}</div>
            <div class="door-icon">${prize.icon}</div>
        `;

        door.addEventListener('click', () => {
            if (isUnlocked) {
                openDoor(prize);
                door.classList.add('opened');
            } else {
                showLockedMessage(prize.day);
            }
        });

        adventGrid.appendChild(door);
    });
}

function openDoor(prize) {
    modalBody.innerHTML = `
        <div class="modal-icon">${prize.icon}</div>
        <h2>Day ${prize.day}</h2>
        <h3>${prize.title}</h3>
        <p style="font-size: 1.1rem; line-height: 1.6; margin-top: 1rem;">${prize.description}</p>
        <p style="margin-top: 1.5rem; font-weight: 600; color: var(--primary-color);">Join our Telegram to participate!</p>
    `;
    modal.style.display = 'block';
}

function showLockedMessage(day) {
    modalBody.innerHTML = `
        <div class="modal-icon">🔒</div>
        <h2>Day ${day} is Locked</h2>
        <p style="font-size: 1.1rem; line-height: 1.6; margin-top: 1rem;">This surprise will be revealed on December ${day}th!</p>
        <p style="margin-top: 1.5rem; font-weight: 600;">Stay tuned and join our community!</p>
    `;
    modal.style.display = 'block';
}

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

generateAdventCalendar();

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 46, 1)';
    } else {
        navbar.style.background = 'rgba(26, 26, 46, 0.95)';
    }
});

// Animate on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Particle Effect on Mouse Move
let particles = [];
const particleCount = 30;

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${Math.random() * 60 + 340}, 100%, 70%)`;
        this.life = 100;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.life / 100;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Create canvas for particles (optional - comment out if too performance intensive)
const canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '9998';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

document.addEventListener('mousemove', (e) => {
    if (particles.length < particleCount) {
        particles.push(new Particle(e.clientX, e.clientY));
    }
});

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw(ctx);

        if (particles[i].life <= 0) {
            particles.splice(i, 1);
        }
    }

    requestAnimationFrame(animateParticles);
}

animateParticles();

// Add sparkle effect to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.position = 'relative';

        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('span');
                sparkle.innerHTML = '✨';
                sparkle.style.position = 'absolute';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkle.style.animation = 'sparkle 1s ease-out forwards';
                sparkle.style.pointerEvents = 'none';
                this.appendChild(sparkle);

                setTimeout(() => sparkle.remove(), 1000);
            }, i * 100);
        }
    });
});

// Add sparkle animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: scale(1.5) rotate(180deg);
        }
    }

    .live-text {
        font-family: 'Mountains of Christmas', cursive;
        font-size: 3rem;
        color: var(--accent-color);
        animation: pulse 1s infinite;
        text-align: center;
    }
`;
document.head.appendChild(style);

// Progress Bar Animation (simulate for demo)
const progressFill = document.querySelector('.progress-fill');
const progressText = document.querySelector('.progress-text');

// You can connect this to real data from your presale contract
function updateProgress(currentSOL, maxSOL) {
    const percentage = (currentSOL / maxSOL) * 100;
    progressFill.style.width = percentage + '%';
    progressText.textContent = `${currentSOL} SOL / ${maxSOL} SOL`;
}

// Example: simulate progress (remove this when you have real data)
let simulatedProgress = 0;
setInterval(() => {
    if (simulatedProgress < 100) {
        simulatedProgress += Math.random() * 2;
        if (simulatedProgress > 100) simulatedProgress = 100;
        updateProgress(simulatedProgress.toFixed(1), 100);
    }
}, 5000);

// Initialize with 0
updateProgress(0, 100);

// Easter Egg: Konami Code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    // Create rainbow background effect
    document.body.style.animation = 'rainbow 3s linear infinite';

    const easterEggStyle = document.createElement('style');
    easterEggStyle.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(easterEggStyle);

    // Show special message
    modalBody.innerHTML = `
        <div class="modal-icon">🎉</div>
        <h2>You Found the Secret!</h2>
        <p style="font-size: 1.1rem; line-height: 1.6; margin-top: 1rem;">
            Congratulations! You've discovered Santa Paws' secret stash!<br>
            Join our Telegram and share the code "KONAMI" for a special role!
        </p>
    `;
    modal.style.display = 'block';

    setTimeout(() => {
        document.body.style.animation = '';
        easterEggStyle.remove();
    }, 10000);
}

// Console message for developers
console.log('%c🎅 SANTA PAWS 🐾', 'font-size: 50px; color: #FFD700; text-shadow: 2px 2px 4px #E63946;');
console.log('%cThe Most Festive Meme Coin on Solana!', 'font-size: 20px; color: #2E8B57;');
console.log('%cJoin us: [Your Telegram Link]', 'font-size: 16px; color: #fff;');
console.log('%cTip: Try the Konami Code! ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️ B A', 'font-size: 14px; color: #FFD700;');
