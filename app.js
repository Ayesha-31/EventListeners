const offed = document.querySelector('.off')
const onned = document.querySelector('.on')

const offed1 = document.querySelector('.off1')
const onned1 = document.querySelector('.on1')

offed.addEventListener('click', () => {
    if (onned.classList.contains('on')) {
        onned.classList.add('active');
        offed.classList.remove('active');
    }
})

onned.addEventListener('click', () => {
    if (offed.classList.contains('off')) {
        offed.classList.add('active');
        onned.classList.remove('active');
    }
})

offed1.addEventListener('click', () => {
    if (onned1.classList.contains('on1')) {
        onned1.classList.add('active1');
        offed1.classList.remove('active1');
    }
})

onned1.addEventListener('click', () => {
    if (offed1.classList.contains('off1')) {
        offed1.classList.add('active1');
        onned1.classList.remove('active1');
    }
})