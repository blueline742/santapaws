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
    { day: 1, icon: '🎁', title: 'Amazon eGift Card', value: '$20', description: 'Start your Christmas journey with a $20 Amazon eGift Card! Perfect for treating yourself or getting started on your holiday shopping.' },
    { day: 2, icon: '🎮', title: 'Gaming Wallet', value: '$25', description: 'Steam, Xbox, or PlayStation Store credit! Choose your platform and get $25 to spend on your favorite games.' },
    { day: 3, icon: '🍕', title: 'Dominos Voucher', value: '$30', description: 'Pizza party time! Enjoy a delicious feast with a $30 Dominos voucher. Winners can choose equivalent value alternative.' },
    { day: 4, icon: '🍔', title: 'Food Delivery Voucher', value: '$35', description: 'DoorDash, Uber Eats, or Deliveroo - your choice! Get $35 worth of your favorite food delivered right to your door.' },
    { day: 5, icon: '🎁', title: 'Amazon eGift Card', value: '$40', description: 'Another chance to win Amazon credit! $40 to spend on anything your heart desires this holiday season.' },
    { day: 6, icon: '☕', title: 'Coffee Shop Gift Card', value: '$45', description: 'Starbucks, Costa, or Dunkin Donuts - fuel your days with $45 worth of your favorite coffee and treats!' },
    { day: 7, icon: '🎮', title: 'Gaming Wallet', value: '$50', description: 'Level up with $50 Steam, Xbox, or PlayStation credit! Perfect for grabbing that game you\'ve been eyeing.' },
    { day: 8, icon: '👟', title: 'Nike / Sports Store Gift Card', value: '$55', description: 'Get sporty with a $55 Nike or sports store gift card! New kicks or gear - your choice!' },
    { day: 9, icon: '🍔', title: 'Food Delivery Voucher', value: '$60', description: 'Uber Eats, DoorDash, or Deliveroo credit worth $60! Treat yourself to multiple meals on us.' },
    { day: 10, icon: '🎯', title: 'GameStop / Best Buy / Target Voucher', value: '$65', description: 'Shopping spree alert! $65 to spend at GameStop, Best Buy, or Target. Games, tech, or whatever you need!' },
    { day: 11, icon: '🎮', title: 'Game Pass / Console Store Voucher', value: '$70', description: 'Game Pass subscription or PlayStation/Xbox store credit worth $70! Endless gaming awaits.' },
    { day: 12, icon: '🛍️', title: 'Store of Your Choice Gift Card', value: '$75', description: 'Your choice, your store! Pick any major retailer and get a $75 gift card to spend however you like.' },
    { day: 13, icon: '🍕', title: 'Dominos Voucher', value: '$80', description: 'Another pizza party! Enjoy $80 worth of Dominos - enough to feed the whole squad!' },
    { day: 14, icon: '📺', title: 'Streaming Subscription', value: '$85', description: 'Netflix, Disney+, or Hulu subscription worth $85! Binge-watch your favorite shows all season long.' },
    { day: 15, icon: '🎁', title: 'Amazon eGift Card', value: '$90', description: 'Big Amazon credit alert! $90 to spend on anything from tech to toys to holiday decorations.' },
    { day: 16, icon: '🍔', title: 'Food Delivery Voucher', value: '$95', description: 'DoorDash, Uber Eats, or Deliveroo worth $95! That\'s a lot of delicious meals coming your way.' },
    { day: 17, icon: '🎮', title: 'Gaming Wallet', value: '$100', description: 'HUGE gaming credit! $100 for Steam, Xbox, or PlayStation Store. Time to build that game library!' },
    { day: 18, icon: '🛍️', title: 'Target / Walmart / Best Buy Gift Card', value: '$110', description: 'Major shopping power! $110 gift card for Target, Walmart, or Best Buy. Go wild!' },
    { day: 19, icon: '👟', title: 'Nike / Sports Store Gift Card', value: '$120', description: 'Premium sports gear incoming! $120 Nike or sports store gift card for the athlete in you.' },
    { day: 20, icon: '🎁', title: 'Amazon eGift Card', value: '$130', description: 'Massive Amazon credit! $130 to spend on anything you can imagine. The possibilities are endless!' },
    { day: 21, icon: '🛍️', title: 'Store of Your Choice Gift Card', value: '$150', description: 'Premium choice alert! $150 gift card to ANY major store you want. Dream big!' },
    { day: 22, icon: '🎁', title: 'Amazon eGift Card', value: '$170', description: 'Incredible $170 Amazon eGift Card! Perfect for major purchases or stocking up on everything you need.' },
    { day: 23, icon: '🎁', title: 'Amazon eGift Card', value: '$200', description: 'Christmas Eve mega prize! $200 Amazon eGift Card - one day before the grand finale!' },
    { day: 24, icon: '🎮', title: 'GRAND PRIZE: Gaming Console!', value: '$550', description: 'THE BIG ONE! Nintendo Switch, PS5, or Xbox Series X - YOUR CHOICE! Worth $550! The ultimate Christmas gift!' },
    { day: 25, icon: '🎅', title: 'MERRY CHRISTMAS!', value: 'Special', description: 'Thank you for being part of the Santa Paws family! Holders are automatically entered for all prizes. More surprises coming!' }
];

// Generate advent calendar doors with 3D flip effect
function generateAdventCalendar() {
    prizes.forEach(prize => {
        const doorContainer = document.createElement('div');
        doorContainer.classList.add('door-container');

        doorContainer.innerHTML = `
            <div class="door-flipper">
                <div class="door-front">
                    <div class="door-number">${prize.day}</div>
                    <div class="door-decoration">🎄</div>
                    <div class="door-label">Click to Reveal!</div>
                </div>
                <div class="door-back">
                    <div class="prize-icon">${prize.icon}</div>
                    <div class="prize-value">${prize.value}</div>
                    <div class="prize-title">${prize.title}</div>
                </div>
            </div>
        `;

        doorContainer.addEventListener('click', () => {
            doorContainer.classList.toggle('flipped');
            setTimeout(() => {
                if (doorContainer.classList.contains('flipped')) {
                    openDoor(prize);
                }
            }, 300);
        });

        adventGrid.appendChild(doorContainer);
    });
}

function openDoor(prize) {
    modalBody.innerHTML = `
        <div class="modal-icon">${prize.icon}</div>
        <div class="modal-day">Day ${prize.day}</div>
        <h2 style="color: var(--primary-color); font-size: 2rem; margin: 0.5rem 0;">${prize.value}</h2>
        <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">${prize.title}</h3>
        <p style="font-size: 1.1rem; line-height: 1.6; margin-top: 1rem;">${prize.description}</p>
        <p style="margin-top: 1.5rem; font-weight: 600; background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); padding: 1rem; border-radius: 10px; color: white;">
            🎁 Hold $SPAWS to be automatically entered!<br>
            Winners can choose equivalent value alternatives!
        </p>
        <p style="margin-top: 1rem;">
            <a href="https://t.me/Santapawssolofficial" target="_blank" rel="noopener noreferrer" style="color: var(--primary-color); text-decoration: underline; font-weight: 600; font-size: 1.1rem;">Join Telegram for Daily Winner Announcements!</a>
        </p>
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
console.log('%cJoin us: https://t.me/Santapawssolofficial', 'font-size: 16px; color: #fff;');
console.log('%cTip: Try the Konami Code! ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️ B A', 'font-size: 14px; color: #FFD700;');
