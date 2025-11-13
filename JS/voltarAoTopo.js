const  voltarAoTopo = document.getElementById("voltarTopo");

const botaoTopo = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
};

voltarAoTopo.addEventListener("click", botaoTopo)