//untuk membuat navbar responsif atau hamburger menu
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}


//untuk menggunakan database spreadsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbyKBsvAeGY-PKOUVH9IhL89WOQ9HlVjJEI79J4z7HbAyPzBUXzVRaGoFoSnfuLZjs4cGw/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        alert('Terimakasih! Form Berhasil Dikirim.'); // Notifikasi sukses
        console.log('Success!', response);
        form.reset(); // Mengosongkan form setelah submit berhasil
    })
    .catch(error => {
        alert('Gagal! Mohon Ulangi.'); // Notifikasi gagal
        console.error('Error!', error.message);
    });
});

function startLoading(button) {
    button.classList.add('loading');
    setTimeout(() => {
        button.classList.remove('loading');
    }, 3500); // Simulasi loading selama 1 detik
}

//function untuk mengaktifkan hyperlink
function redirLinkedin() {
    window.location.href = "https://www.linkedin.com/in/m-eka-miharja-349988320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
};

function redirWhatsApp() {
    window.location.href = "https://wa.me/6281519843014";
};

function redirGithub() {
    window.location.href = "https://github.com/EkaMiharja";
};

function redirDemo1() {
    window.location.href = "https://ekamiharja.github.io/UAS/";
};

function redirRepo1() {
    window.location.href = "https://github.com/EkaMiharja/UAS";
};

function redirDemo2() {
    window.location.href = "https://ekamiharja.github.io/BootcampDicoding/";
};

function redirRepo2() {
    window.location.href = "https://github.com/EkaMiharja/BootcampDicoding";
};

function redirProgramiz() {
    window.location.href = "https://www.programiz.com/cpp-programming/online-compiler/";
};

function redirRepo3() {
    window.location.href = "https://github.com/EkaMiharja/C-plus-plus";
};