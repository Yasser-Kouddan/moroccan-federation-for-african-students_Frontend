import { useMemo, useEffect, useState } from 'react';
import styles from "./styles.module.css"
import login_image from '../../assets/login_intro.jpg'
import API from "../../api/ApiInstance";
import logo from '../../assets/logo.png'
import { useForm } from "react-hook-form";


const UpdateMember = () => {

  const { register, handleSubmit } = useForm();

      const onSubmit = (data) => {
        try {
          API.post('/members/add', data)
            .then((response) => {
              console.log("we added the member ...",response);
            })
        } catch (error) {
          console.error("Error:", error);
          alert("Error occurred while fetching data. See console for details.");
        }
      }

    const [community, setCommunity] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await API.get('/community');
          setCommunity(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error:", error);
          alert("Error occurred while fetching data. See console for details.");
        }
      };

      fetchData();
    }, []);



  return (
    <div className={styles["container"]}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <h2 style={{marginBottom: 10}}>Remplir le formulaire pour ajouter un membre</h2>
          <input type="text" placeholder="Prenom" {...register("name")} className={styles['futuristic-input']}/>
          <input type="text" placeholder="Nom" {...register("surnames")} className={styles['futuristic-input']}/>
          <input type="text" placeholder="Email" {...register("email")} className={styles['futuristic-input']}/>
          <input type="text" placeholder="Mot de passe" {...register("password", {required: true})} className={styles['futuristic-input']}/>
          <select {...register("role_id")} className={styles['futuristic-input']} >
                <option value="1">Admin</option>
                <option value="2">Secrétaire</option>
                <option value="3">Membre</option>
          </select>
          <label>Choisissez un domaine d'études :</label>
          <select {...register("filliere")} className={styles['futuristic-input']}>
            <option value="">Sélectionnez un domaine</option>
            <option value="informatique">Informatique</option>
            <option value="génie">Génie</option>
            <option value="biologie">Biologie</option>
            <option value="chimie">Chimie</option>
            <option value="physique">Physique</option>
          </select>

          <select {...register("community_id")} className={styles['futuristic-input']} >
              {community.map(((item) => (
                <option value={item.community_id}>{item.name}</option>
              )))}
          </select>
          <textarea cols="30" rows="3" {...register("description")} className={styles['futuristic-input']} autofocus>
            Entrer la description dU membre
          </textarea>
          <input type="submit" className={styles['button']}/>
        </form>
    </div>
  );
}
export default UpdateMember;

