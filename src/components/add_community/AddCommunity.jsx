import API from "../../api/ApiInstance";
import { useMemo, useEffect, useState } from 'react';
import styles from "./styles.module.css"
import login_image from '../../assets/login_intro.jpg'
import logo from '../../assets/logo.png'
import { useForm } from "react-hook-form";


const AddCommunity = () => {

  const { register, handleSubmit, resetField } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      descriptions: "Entrer la description d'une communauté",
    },
  });
  //const onSubmit = (data) => console.log(data);

  const onSubmit = (data) => {
    try {
      API.post('/community/add', data)
        .then((response) => {
          console.log("we added a community ...",response);
          resetField("name")
          resetField("descriptions")
        })
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred while fetching data. See console for details.");
    }
  }


  return (
    <div className={styles["container"]}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <h2>Remplir le formulaire pour ajouter une communauté</h2>
          <input type="text" placeholder="Nom de la communauté" {...register("name")} className={styles['futuristic-input']}/>
          <textarea cols="30" rows="3" {...register("descriptions")} className={styles['futuristic-input']} autofocus>
            Entrer la description d'une communauté
          </textarea>
          <h4 for="cars" >Choisit un pays</h4>
          <select {...register("pays")} className={styles['futuristic-input']} >
          <option value="Algérie">Algérie</option>
                <option value="Angola">Angola</option>
                <option value="Bénin">Bénin</option>
                <option value="Botswana">Botswana</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cap-Vert">Cap-Vert</option>
                <option value="Cameroun">Cameroun</option>
                <option value="République centrafricaine">République centrafricaine</option>
                <option value="Tchad">Tchad</option>
                <option value="Comores">Comores</option>
                <option value="Congo">Congo</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Égypte">Égypte</option>
                <option value="Guinée équatoriale">Guinée équatoriale</option>
                <option value="Érythrée">Érythrée</option>
                <option value="Eswatini">Eswatini</option>
                <option value="Éthiopie">Éthiopie</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambie">Gambie</option>
                <option value="Ghana">Ghana</option>
                <option value="Guinée">Guinée</option>
                <option value="Guinée-Bissau">Guinée-Bissau</option>
                <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                <option value="Kenya">Kenya</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Libéria">Libéria</option>
                <option value="Libye">Libye</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Mali">Mali</option>
                <option value="Mauritanie">Mauritanie</option>
                <option value="Maurice">Maurice</option>
                <option value="Maroc">Maroc</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Namibie">Namibie</option>
                <option value="Niger">Niger</option>
                <option value="Nigéria">Nigéria</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Sao Tomé-et-Principe">Sao Tomé-et-Principe</option>
                <option value="Sénégal">Sénégal</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Somalie">Somalie</option>
                <option value="Afrique du Sud">Afrique du Sud</option>
                <option value="Soudan du Sud">Soudan du Sud</option>
                <option value="Soudan">Soudan</option>
                <option value="Tanzanie, République-Unie de">Tanzanie, République-Unie de</option>
                <option value="Togo">Togo</option>
                <option value="Tunisie">Tunisie</option>
                <option value="Ouganda">Ouganda</option>
                <option value="Zambie">Zambie</option>
                <option value="Zimbabwe">Zimbabwe</option>
          </select>

          <input type="submit" className={styles['button']}/>
        </form>
    </div>
  );
}

export default AddCommunity;


