//creo il componente main
export default function AppMain() {
    //creo una variabile per il testo che indica la dimensione della card
    const cardSize = '600x400';

    //creo una variabile per il titolo della card
    const cardTitle = 'Titolo del post';

    //creo una variabile per la descrizione della card
    const cardDescription = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum magnam autem consectetur pariatur reiciendis a, vero voluptate ad modi earum et nisi quia possimus, numquam adipisci magni delectus quasi ab.';

    //creo una variabile per il testo del bottone
    const buttontext = 'leggi di più';

    //eseguo il return
    return (
        <main>
            <div className="card">
                <div className="card-top">
                    <p>{cardSize}</p>
                </div>

                <div className="card-bottom">
                    <h3>{cardTitle}</h3>
                    <p>{cardDescription}</p>
                    <button className="btn">{buttontext.toUpperCase()}</button>
                </div>
            </div>
        </main>

    )
}