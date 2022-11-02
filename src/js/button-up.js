import refs from './refs';

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener('scroll', () => {
    const showHeight = 275;
    if (scrollContainer().scrollTop > showHeight) {
        refs.anchorBtn.classList.remove('visually-hidden');
    } else {
        refs.anchorBtn.classList.add('visually-hidden');
    }
});

const goTop = () => {
    document.body.scrollIntoView();
};

refs.anchorBtn.addEventListener('click', goTop);