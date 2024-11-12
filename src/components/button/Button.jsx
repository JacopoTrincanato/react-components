//creo il componente button
export default function Button() {
    //creo una variabile per il testo del bottone
    const buttontext = 'leggi di più';

    //eseguo il return
    return (
        <button className="btn mt-1">{buttontext.toUpperCase()}</button>
    )
}