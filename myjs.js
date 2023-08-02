import './styles.css';

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            document.querySelectorAll(".card").add("fade")
        }
    })
})

observer.observe(document.querySelector(".card"));