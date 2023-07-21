import { useState } from "react"
import firebase from "../firebase";
import 'firebase/compat/firestore';

function FormTemplate() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cel: ''
    })

    const onChangeValues = (e) => {
        setFormData(
            {
                ...formData,
                [ e.target.name ]: e.target.value
            }
        )
    }

    const handlerSubmit = (e) => {
        e.preventDefault();

        // Aui se usa el firestore, se aquiere la colleccion y se alade la nueva
        const emailsCollection = firebase.firestore().collection('emails');
        emailsCollection.add(formData)
        .then(() => {
            console.log('Datos enviados', formData)
        })
        .catch((err) => {
            console.log('Algo paso', err)
        })

        e.target.reset();
    }

    return (
        <form onSubmit={handlerSubmit}>
            <div>
                <input
                    placeholder="Nombre"
                    name="name"
                    onChange={onChangeValues}
                    value={formData.name}
                    required
                />
            </div>
            <div>
                <input
                    placeholder="Email"
                    name="email"
                    onChange={onChangeValues}
                    value={formData.email}
                    required
                />
            </div>
            <div>
                <input
                    placeholder="Cel"
                    name="cel"
                    onChange={onChangeValues}
                    value={formData.cel}
                    required
                />
            </div>
            <button>Enviar formulario</button>
        </form>
    )
}

export default FormTemplate;