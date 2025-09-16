// Sample database for demo purposes
const phoneDatabase = {
    '+15551234567': {
        name: 'John Smith',
        carrier: 'Verizon',
        location: 'New York, NY',
        spamRisk: 'Low',
        reportCount: 2,
        isVerified: true,
        category: 'Personal'
    },
    '+15559876543': {
        name: 'ABC Pizza Restaurant',
        carrier: 'AT&T',
        location: 'Los Angeles, CA',
        spamRisk: 'Low',
        reportCount: 0,
        isVerified: true,
        category: 'Business'
    },
    '+15555551234': {
        name: 'Telemarketer',
        carrier: 'T-Mobile',
        location: 'Unknown',
        spamRisk: 'High',
        reportCount: 1247,
        isVerified: false,
        category: 'Spam'
    },
    '+15551239999': {
        name: 'Scam Alert - IRS Fraud',
        carrier: 'Unknown',
        location: 'Unknown',
        spamRisk: 'Critical',
        reportCount: 3456,
        isVerified: false,
        category: 'Scam'
    }
};

// DOM elements
const phoneInput = document.getElementById('phoneInput');
const searchBtn = document.getElementById('searchBtn');
const resultsSection = document.getElementById('resultsSection');
const resultCard = document.getElementById('resultCard');

// Event listeners
searchBtn.addEventListener('click', performSearch);
phoneInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Format phone number as user types
phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value.length <= 3) {
            value = `+1 ${value}`;
        } else if (value.length <= 6) {
            value = `+1 ${value.slice(0, 3)}-${value.slice(3)}`;
        } else if (value.length <= 10) {
            value = `+1 ${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`;
        } else {
            value = `+1 ${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
    }
    e.target.value = value;
});

function performSearch() {
    const phoneNumber = phoneInput.value.trim();
    
    if (!phoneNumber) {
        alert('Please enter a phone number');
        return;
    }

    // Show loading state
    searchBtn.textContent = 'Searching...';
    searchBtn.disabled = true;

    // Simulate API delay
    setTimeout(() => {
        const result = lookupNumber(phoneNumber);
        displayResult(result, phoneNumber);
        
        // Reset button
        searchBtn.textContent = '🔍';
        searchBtn.disabled = false;
        
        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
}

function lookupNumber(phoneNumber) {
    // Normalize phone number for lookup
    const normalizedNumber = phoneNumber.replace(/\D/g, '');
    const formattedNumber = `+1${normalizedNumber.slice(-10)}`;
    
    return phoneDatabase[formattedNumber] || generateRandomResult(phoneNumber);
}

function generateRandomResult(phoneNumber) {
    const categories = ['Personal', 'Business', 'Unknown'];
    const carriers = ['Verizon', 'AT&T', 'T-Mobile', 'Sprint'];
    const locations = ['New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Unknown'];
    const risks = ['Low', 'Medium', 'High'];
    
    return {
        name: 'Unknown Caller',
        carrier: carriers[Math.floor(Math.random() * carriers.length)],
        location: locations[Math.floor(Math.random() * locations.length)],
        spamRisk: risks[Math.floor(Math.random() * risks.length)],
        reportCount: Math.floor(Math.random() * 100),
        isVerified: Math.random() > 0.7,
        category: categories[Math.floor(Math.random() * categories.length)]
    };
}

function displayResult(result, phoneNumber) {
    const riskColor = result.spamRisk === 'Low' ? 'risk-low' : 'risk-high';
    const riskIcon = result.spamRisk === 'Low' ? '✅' : '⚠️';
    
    resultCard.innerHTML = `
        <div class="result-header">
            <div class="result-icon">📞</div>
            <div class="result-info">
                <h3>${result.name}</h3>
                <p class="result-number">${phoneNumber}</p>
            </div>
            ${result.isVerified ? '<div class="verified-badge">✅ Verified</div>' : ''}
        </div>
        
        <div class="result-details">
            <div class="result-field">
                <label>Carrier</label>
                <value>${result.carrier}</value>
            </div>
            <div class="result-field">
                <label>Location</label>
                <value>${result.location}</value>
            </div>
            <div class="result-field">
                <label>Category</label>
                <value>${result.category}</value>
            </div>
            <div class="result-field">
                <label>Spam Risk</label>
                <value class="risk-indicator ${riskColor}">
                    ${riskIcon} ${result.spamRisk}
                </value>
            </div>
        </div>
        
        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 0.875rem;">
            👥 ${result.reportCount} community reports
        </div>
    `;
    
    resultsSection.style.display = 'block';
}

// Add some interactive animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate feature cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Add animation styles
    const animatedElements = document.querySelectorAll('.feature-card, .stat-card, .community-stat');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add hover effects to buttons and cards
    const interactiveElements = document.querySelectorAll('.feature-card, .stat-card, .community-stat, .spam-item, .activity-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        el.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});