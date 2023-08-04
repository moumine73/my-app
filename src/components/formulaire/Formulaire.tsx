import React, { useState } from 'react'

const Formulaire = () => {
    const [nom, setNom] = useState<string>("Luke Skywalker")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setNom(e.target.value);
    }

    const soumissionFormulaire = (e: React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(nom)
    }


  return (
    <div>
        
            <form onSubmit={soumissionFormulaire}>
                <label htmlFor="nom">Nom : </label>
                <input type="text" id='nom' name='nom' value={nom} onChange={handleChange}/>

                <input type="submit" value="Envoyer" />
            </form>
    </div>
  )
}

export default Formulaire