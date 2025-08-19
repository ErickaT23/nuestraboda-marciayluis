
const guests = [
    { id: "1", name: "Francis & Fernando", passes: 2 },
];

document.addEventListener("DOMContentLoaded", function() {
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const pairs = queryString.split("&");
        for (const pair of pairs) {
            const [key, value] = pair.split("=");
            params[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, ' '));
        }
        return params;
    }

    const queryParams = getQueryParams();
    const guestId = queryParams.id;

    // Buscar el invitado en el array
    const guest = guests.find(g => g.id === guestId);

    if (guest) {
        document.getElementById('guest-name').textContent = `¡${guest.name}, ${
            guest.passes > 1 ? 'están invitados' : 'estás invitado'
        }!`;
        document.getElementById('passes').textContent = `${guest.passes} ${guest.passes === 1 ? 'pase' : 'pases'}`;
    } else {
        document.getElementById('guest-name').textContent = `¡Invitado no encontrado!`;
        document.querySelector('.invitation-info-section').style.display = 'none';
    }
});
