        // Mobile Menu Toggle
        function toggleMenu() {
            document.getElementById('mobileMenu').classList.add('show');
        }

        function closeMenu() {
            document.getElementById('mobileMenu').classList.remove('show');
        }

        // Smooth Scroll to Contact Section
        function scrollToContact() {
            document.getElementById('contact').scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Typewriter Effect
        const texts = ["Développeur Web", "Étudiant en BTS SIO", "Passionné d'Informatique"];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';
        let isDeleting = false;

        function type() {
            const typewriterElement = document.querySelector('.typewriter-text');
            currentText = texts[count];
            
            if (isDeleting) {
                letter = currentText.substring(0, index--);
            } else {
                letter = currentText.substring(0, ++index);
            }
            
            typewriterElement.textContent = letter;
            
            let typeSpeed = 150;
            
            if (isDeleting) {
                typeSpeed /= 2;
            }
            
            if (!isDeleting && index === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && index === 0) {
                isDeleting = false;
                count = (count + 1) % texts.length;
                typeSpeed = 500; 
            }
            
            setTimeout(type, typeSpeed);
        }

        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Votre message a été envoyé avec succès !');
            this.reset();
        });

        
        document.addEventListener('DOMContentLoaded', function() {
            type();
        });

       
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
<<<<<<< HEAD
        });

=======
        });
>>>>>>> 6a76f5ba880fdddd16be2a6d7122235aa8c687c8
