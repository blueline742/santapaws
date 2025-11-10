import React, { useState } from 'react'
import AdventCalendar3D from './AdventCalendar3D'

const prizeDetails = {
    1: { icon: '🎁', title: 'Amazon eGift Card', value: '$20', description: 'Start your Christmas journey with a $20 Amazon eGift Card! Perfect for treating yourself or getting started on your holiday shopping.' },
    2: { icon: '🎮', title: 'Gaming Wallet', value: '$25', description: 'Steam, Xbox, or PlayStation Store credit! Choose your platform and get $25 to spend on your favorite games.' },
    3: { icon: '🍕', title: 'Dominos Voucher', value: '$30', description: 'Pizza party time! Enjoy a delicious feast with a $30 Dominos voucher. Winners can choose equivalent value alternative.' },
    4: { icon: '🍔', title: 'Food Delivery Voucher', value: '$35', description: 'DoorDash, Uber Eats, or Deliveroo - your choice! Get $35 worth of your favorite food delivered right to your door.' },
    5: { icon: '🎁', title: 'Amazon eGift Card', value: '$40', description: 'Another chance to win Amazon credit! $40 to spend on anything your heart desires this holiday season.' },
    6: { icon: '☕', title: 'Coffee Shop Gift Card', value: '$45', description: 'Starbucks, Costa, or Dunkin Donuts - fuel your days with $45 worth of your favorite coffee and treats!' },
    7: { icon: '🎮', title: 'Gaming Wallet', value: '$50', description: 'Level up with $50 Steam, Xbox, or PlayStation credit! Perfect for grabbing that game you\'ve been eyeing.' },
    8: { icon: '👟', title: 'Nike / Sports Store Gift Card', value: '$55', description: 'Get sporty with a $55 Nike or sports store gift card! New kicks or gear - your choice!' },
    9: { icon: '🍔', title: 'Food Delivery Voucher', value: '$60', description: 'Uber Eats, DoorDash, or Deliveroo credit worth $60! Treat yourself to multiple meals on us.' },
    10: { icon: '🎯', title: 'GameStop / Best Buy / Target Voucher', value: '$65', description: 'Shopping spree alert! $65 to spend at GameStop, Best Buy, or Target. Games, tech, or whatever you need!' },
    11: { icon: '🎮', title: 'Game Pass / Console Store Voucher', value: '$70', description: 'Game Pass subscription or PlayStation/Xbox store credit worth $70! Endless gaming awaits.' },
    12: { icon: '🛍️', title: 'Store of Your Choice Gift Card', value: '$75', description: 'Your choice, your store! Pick any major retailer and get a $75 gift card to spend however you like.' },
    13: { icon: '🍕', title: 'Dominos Voucher', value: '$80', description: 'Another pizza party! Enjoy $80 worth of Dominos - enough to feed the whole squad!' },
    14: { icon: '📺', title: 'Streaming Subscription', value: '$85', description: 'Netflix, Disney+, or Hulu subscription worth $85! Binge-watch your favorite shows all season long.' },
    15: { icon: '🎁', title: 'Amazon eGift Card', value: '$90', description: 'Big Amazon credit alert! $90 to spend on anything from tech to toys to holiday decorations.' },
    16: { icon: '🍔', title: 'Food Delivery Voucher', value: '$95', description: 'DoorDash, Uber Eats, or Deliveroo worth $95! That\'s a lot of delicious meals coming your way.' },
    17: { icon: '🎮', title: 'Gaming Wallet', value: '$100', description: 'HUGE gaming credit! $100 for Steam, Xbox, or PlayStation Store. Time to build that game library!' },
    18: { icon: '🛍️', title: 'Target / Walmart / Best Buy Gift Card', value: '$110', description: 'Major shopping power! $110 gift card for Target, Walmart, or Best Buy. Go wild!' },
    19: { icon: '👟', title: 'Nike / Sports Store Gift Card', value: '$120', description: 'Premium sports gear incoming! $120 Nike or sports store gift card for the athlete in you.' },
    20: { icon: '🎁', title: 'Amazon eGift Card', value: '$130', description: 'Massive Amazon credit! $130 to spend on anything you can imagine. The possibilities are endless!' },
    21: { icon: '🛍️', title: 'Store of Your Choice Gift Card', value: '$150', description: 'Premium choice alert! $150 gift card to ANY major store you want. Dream big!' },
    22: { icon: '🎁', title: 'Amazon eGift Card', value: '$170', description: 'Incredible $170 Amazon eGift Card! Perfect for major purchases or stocking up on everything you need.' },
    23: { icon: '🎁', title: 'Amazon eGift Card', value: '$200', description: 'Christmas Eve mega prize! $200 Amazon eGift Card - one day before the grand finale!' },
    24: { icon: '🎮', title: 'GRAND PRIZE: Gaming Console!', value: '$550', description: 'THE BIG ONE! Nintendo Switch, PS5, or Xbox Series X - YOUR CHOICE! Worth $550! The ultimate Christmas gift!' },
    25: { icon: '💰', title: '4 SOLANA', value: '4 SOL', description: 'MERRY CHRISTMAS! The ultimate crypto prize - 4 SOLANA tokens! Thank you for being part of the Santa Paws family!' }
}

function App() {
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedPrize, setSelectedPrize] = useState(null)

    const handleGiftOpen = (prize) => {
        const fullPrize = prizeDetails[prize.day]
        setSelectedPrize({ ...prize, ...fullPrize })
        setModalVisible(true)
    }

    const closeModal = () => {
        setModalVisible(false)
        setSelectedPrize(null)
    }

    return (
        <div>
            <AdventCalendar3D onGiftOpen={handleGiftOpen} />

            {/* Modal */}
            {modalVisible && selectedPrize && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.8)',
                        backdropFilter: 'blur(5px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10000,
                        padding: '20px'
                    }}
                    onClick={closeModal}
                >
                    <div
                        style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            borderRadius: '15px',
                            padding: window.innerWidth <= 768 ? '1rem' : '2rem',
                            maxWidth: window.innerWidth <= 768 ? '320px' : '500px',
                            width: '100%',
                            maxHeight: '85vh',
                            overflowY: 'auto',
                            border: '3px solid #FFD700',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                            textAlign: 'center',
                            animation: 'bounce-modal 1s ease-in-out'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{ fontSize: window.innerWidth <= 768 ? '3rem' : '5rem', marginBottom: window.innerWidth <= 768 ? '0.5rem' : '1rem', animation: 'bounce-prize 2s ease-in-out infinite' }}>
                            {selectedPrize.icon}
                        </div>
                        <div style={{ fontSize: window.innerWidth <= 768 ? '0.75rem' : '1rem', fontWeight: 600, color: '#1D3557', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
                            Day {selectedPrize.day}
                        </div>
                        <h2 style={{ color: '#E63946', fontSize: window.innerWidth <= 768 ? '1.3rem' : '2rem', margin: '0.5rem 0', fontFamily: 'Mountains of Christmas, cursive' }}>
                            {selectedPrize.value}
                        </h2>
                        <h3 style={{ fontSize: window.innerWidth <= 768 ? '1rem' : '1.5rem', marginBottom: '0.5rem', color: '#1D3557' }}>
                            {selectedPrize.title}
                        </h3>
                        <p style={{ fontSize: window.innerWidth <= 768 ? '0.85rem' : '1.1rem', lineHeight: 1.6, marginTop: '0.5rem', color: '#1D3557' }}>
                            {selectedPrize.description}
                        </p>
                        <p style={{
                            marginTop: window.innerWidth <= 768 ? '0.75rem' : '1.5rem',
                            fontWeight: 600,
                            background: 'linear-gradient(135deg, #E63946, #2E8B57)',
                            padding: window.innerWidth <= 768 ? '0.7rem' : '1rem',
                            borderRadius: '10px',
                            color: 'white',
                            fontSize: window.innerWidth <= 768 ? '0.75rem' : '1rem'
                        }}>
                            🎁 Hold $SPAWS to be automatically entered!<br />
                            Winners can choose equivalent value alternatives!
                        </p>
                        <p style={{ marginTop: window.innerWidth <= 768 ? '0.75rem' : '1rem' }}>
                            <a
                                href="https://t.me/Santapawssolofficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#E63946', textDecoration: 'underline', fontWeight: 600, fontSize: window.innerWidth <= 768 ? '0.85rem' : '1.1rem' }}
                            >
                                Join Telegram for Daily Winner Announcements!
                            </a>
                        </p>
                        <button
                            onClick={closeModal}
                            style={{
                                marginTop: window.innerWidth <= 768 ? '1rem' : '1.5rem',
                                padding: window.innerWidth <= 768 ? '0.6rem 1.5rem' : '0.8rem 2rem',
                                fontSize: window.innerWidth <= 768 ? '0.9rem' : '1.1rem',
                                fontWeight: 'bold',
                                background: 'linear-gradient(135deg, #E63946, #8B0000)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                boxShadow: '0 8px 25px rgba(230, 57, 70, 0.4)'
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App
