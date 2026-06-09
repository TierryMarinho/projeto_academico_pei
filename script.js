document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lógica para enviar formulário de contato pelo WhatsApp
document.getElementById('btn-whatsapp').addEventListener('click', function () {
    var mensagem = document.getElementById('mensagem').value;

    var texto = "";
    if (mensagem) {
        texto += mensagem;
    }

    var numeroWhatsApp = "5527992510305";
    var url = "https://api.whatsapp.com/send?phone=" + numeroWhatsApp + "&text=" + encodeURIComponent(texto);

    window.open(url, '_blank');
});
