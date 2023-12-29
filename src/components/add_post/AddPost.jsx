import API from "../../api/ApiInstance";
import { useMemo, useEffect, useState } from 'react';
import styles from "./styles.module.css"
import login_image from '../../assets/login_intro.jpg'
import logo from '../../assets/logo.png'
import { useForm } from "react-hook-form";


const AddPost = () => {

  const { register, handleSubmit, resetField } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "Entrer la description du post"
    },
  });
  // const onSubmit = (data) => console.log(data);

  const onSubmit = (data) => {
    try {
      API.post('/posts/add', data)
        .then((response) => {
          console.log("we added the post ...",response);
          resetField("title")
          resetField("description")
        })
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred while fetching data. See console for details.");
    }
  }


  return (
    <div className={styles["container"]}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <h2>Remplir le formulaire pour ajouter un post</h2>
          <input type="text" placeholder="Titre" {...register("title")} className={styles['futuristic-input']}/>
          <textarea cols="30" rows="4" {...register("description")} className={styles['futuristic-input']} autofocus>
            Entrer la description du post
          </textarea>
          <input type="submit" className={styles['button']}/>
        </form>
    </div>
  );
}

export default AddPost;


