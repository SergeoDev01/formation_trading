document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links if any
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const forms = document.querySelectorAll('.optin-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get inputs
            const inputs = form.querySelectorAll('input');
            const name = inputs[0].value;
            const whatsapp = inputs[1].value;
            
            if(name && whatsapp) {
                // Simulate form submission or redirect to WhatsApp
                // Example of redirecting to WhatsApp (replace with actual logic)
                console.log(`Submitting: ${name} - ${whatsapp}`);
                alert(`¡Gracias ${name}! Te hemos registrado exitosamente. Te contactaremos al ${whatsapp}.`);
                form.reset();
            }
        });
    });

    // Simple animation for elements appearing on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.pillar-card, .about-content').forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});