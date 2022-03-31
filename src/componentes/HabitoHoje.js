import check_marca from "../assets/checkbox-marca.svg";

export default function HabitoHoje() {
    return (
        <article>
            <section>
                <h2>Ler 1 capítulo de livro</h2>
                <h3>Sequência atual: 3 dias</h3>
                <h3>Seu recorde: 5 dias</h3>
            </section>
            <figure>
                <img src={check_marca} alt="Caixa de Marcar" />
            </figure>
        </article>
    )
}