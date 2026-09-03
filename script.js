// 1. Rolagem Suave ao Clicar no Menu
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId.startsWith("#")) {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// 2. Redirecionar Botão de Reserva para o WhatsApp do Restaurante
const btnReserva = document.querySelector('.btn-reserva');

btnReserva.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Altere para o número de telefone real do cliente (com DDD)
    const numeroTelefone = "5548988713986"; 
    const mensagem = encodeURIComponent("Olá! Gostaria de fazer uma reserva no restaurante.");
    
    // Abre o WhatsApp com a mensagem pronta
    window.open(`https://wa.me/${numeroTelefone}?text=${mensagem}`, '_blank');
});

// 3. Efeito de Mudar a Cor do Menu ao Rolar a Página
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        navbar.style.transition = '0.3s';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});