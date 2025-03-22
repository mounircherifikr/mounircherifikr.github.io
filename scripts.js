document.addEventListener('DOMContentLoaded', function() {
    // University Region Filtering
    const regionButtons = document.querySelectorAll('.region-filter button');
    const universityCards = document.querySelectorAll('.university-card');
    
    regionButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            regionButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const selectedRegion = button.getAttribute('data-region');
            
            // Filter universities based on selected region
            universityCards.forEach(card => {
                if (selectedRegion === 'all' || card.getAttribute('data-region') === selectedRegion) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Contact Selection in Messaging
    const contacts = document.querySelectorAll('.contact');
    
    contacts.forEach(contact => {
        contact.addEventListener('click', () => {
            contacts.forEach(c => c.classList.remove('active'));
            contact.classList.add('active');
            
            // In a real application, this would load the conversation with the selected contact
            // For demo purposes, we'll just show a simple notification
            const contactName = contact.querySelector('h4').textContent;
            console.log(`Loading conversation with ${contactName}`);
        });
    });
    
    // Handle message sending
    const messageInput = document.querySelector('.message-input textarea');
    const sendButton = document.querySelector('.send-btn');
    
    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const messageContent = document.querySelector('.message-content');
            const newMessage = document.createElement('div');
            newMessage.className = 'message sent';
            
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const timeString = `${hours}:${minutes}`;
            
            newMessage.innerHTML = `
                <p>${messageText}</p>
                <span class="timestamp">${timeString}</span>
            `;
            
            messageContent.appendChild(newMessage);
            messageContent.scrollTop = messageContent.scrollHeight;
            messageInput.value = '';
        }
    }
    
    sendButton.addEventListener('click', sendMessage);
    
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // Research Field Selection
    const fieldLinks = document.querySelectorAll('.research-navigation a');
    
    fieldLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            fieldLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // In a real application, this would load content related to the selected field
            // For demo purposes, we'll just show a simple notification
            const fieldName = link.textContent;
            console.log(`Loading research content for ${fieldName}`);
        });
    });
    
    // Major Search Functionality
    const majorSearchInput = document.querySelector('.major-search input');
    const majorSearchButton = document.querySelector('.major-search button');
    const majorCards = document.querySelectorAll('.major-card');
    
    function searchMajors() {
        const searchTerm = majorSearchInput.value.toLowerCase();
        
        majorCards.forEach(card => {
            const majorTitle = card.querySelector('h4').textContent.toLowerCase();
            const majorDescription = card.querySelector('p').textContent.toLowerCase();
            
            if (majorTitle.includes(searchTerm) || majorDescription.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    majorSearchButton.addEventListener('click', searchMajors);
    
    majorSearchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            searchMajors();
        }
    });
    
    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (email && isValidEmail(email)) {
            // In a real application, this would subscribe the user to the newsletter
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Animated scroll to sections when clicking navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});