import { useState } from "react"
import firebase from "../firebase";

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

        // contactForms = asi se vera en la url de la base de datos en firebase
        // por ejemplo: https://form-data-27b19-default-rtdb.firebaseio.com/contactForms
        // y para mirar en la api en formato json la url seria;
        // https://form-data-27b19-default-rtdb.firebaseio.com/contactForms.json
        // en el siguiente codigo se añade el formulario a la base de datos de firebase
        // cada envio de formulario se hace un nodo diferente
        const databaseRef = firebase.database().ref('contactForms');
        databaseRef.push(formData);
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