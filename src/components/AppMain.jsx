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
                <div className="card-top d-flex">
                    <p>{cardSize}</p>
                </div>

                <div className="card-bottom">
                    <h3 className="mt-1">{cardTitle}</h3>
                    <p className="mt-1">{cardDescription}</p>
                    <button className="btn mt-1">{buttontext.toUpperCase()}</button>
                </div>
            </div>
        </main>

    )
}