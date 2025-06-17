
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
    observer.observe(section);
});


const turnoForm = document.createElement('div');
turnoForm.innerHTML = `
    <div id="turnoModal" class="fixed inset-0 bg-black/50 hidden items-center justify-center z-50">
        <div class="bg-white p-8 rounded-lg max-w-md w-full mx-4">
            <h2 class="text-2xl font-bold text-blue-700 mb-4">Solicitar Turno</h2>
            <form id="turnoForm" class="space-y-4">
                <div>
                    <label class="block text-gray-700 mb-2">Nombre completo</label>
                    <input type="text" class="w-full p-2 border rounded" required>
                </div>
                <div>
                    <label class="block text-gray-700 mb-2">Email</label>
                    <input type="email" class="w-full p-2 border rounded" required>
                </div>
                <div>
                    <label class="block text-gray-700 mb-2">Servicio</label>
                    <select class="w-full p-2 border rounded" required>
                        <option value="">Seleccione un servicio</option>
                        <option value="analisis">Análisis Clínicos</option>
                        <option value="pruebas">Pruebas de laboratorio</option>
                        <option value="diagnostico">Diagnóstico por imágenes</option>
                    </select>
                </div>
                <div>
                    <label class="block text-gray-700 mb-2">Fecha preferida</label>
                    <input type="date" class="w-full p-2 border rounded" required>
                </div>
                <div class="flex justify-end gap-4">
                    <button type="button" class="px-4 py-2 text-gray-600 hover:text-gray-800" onclick="toggleTurnoModal()">Cancelar</button>
                    <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Enviar</button>
                </div>
            </form>
        </div>
    </div>
`;
document.body.appendChild(turnoForm);


function toggleTurnoModal() {
    const modal = document.getElementById('turnoModal');
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
}


document.querySelector('button').addEventListener('click', toggleTurnoModal);

document.getElementById('turnoForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Turno solicitado con éxito. Nos pondremos en contacto contigo pronto.');
    toggleTurnoModal();
});
