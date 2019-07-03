const filterInput = document.querySelector('#filterInput');
const names = [...document.querySelectorAll('.letter-group__name a')];
const form = document.querySelector('.search-form');

filterInput.focus();

function filterName() {
    const value = this.value.toUpperCase();
    names.forEach(name =>
        name.textContent.toUpperCase().includes(value) ? name.classList.remove('hide') : name.classList.add('hide')
    );
}

filterInput.addEventListener('change', filterName);
filterInput.addEventListener('keyup', filterName);
form.addEventListener('submit', function(e) {
    e.preventDefault();
});
