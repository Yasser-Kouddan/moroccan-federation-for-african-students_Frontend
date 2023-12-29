import React, { useState } from 'react'
import styles from "./styles.module.css"

export default function ContactUs() {

    const [formData, setFormData] = useState({
        contact_nom: '',
        contact_email: '',
        contact_sujet: '',
        contact_message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

  return (
    <section id={styles["contact"]}>
    <div className={styles["sectionheader"]}>
        <h1>Contactez nous</h1>
    </div>
    <article>
        <p>Besoin d'aide ou d'informations supplémentaires ? Contactez-nous pour un soutien personnalisé dans votre parcours académique au Maroc.</p>
        <input id={styles["checkcontact"]} type="checkbox"/>

        {/* <form action="" method="post" className={styles["contactform"]}>
            <p className={styles["input_wrapper"]}><input type="text" name="contact_nom" value="" id={styles["contact_nom"]}/><label for="contact_nom">NAME</label></p>
            <p className={styles["input_wrapper"]}><input type="text" name="contact_email" value="" id={styles["contact_email"]}/><label for="contact_email">EMAIL</label></p>
            <p className={styles["input_wrapper"]}><input type="text" name="contact_sujet" value="" id={styles["contact_sujet"]}/><label for="contact_sujet">SUBJECT</label></p>
            <p className={styles["textarea_wrapper"]}><textarea name="contact_message" id={styles["contact_message"]}></textarea></p>
            <p className={styles["submit_wrapper"]}><input type="submit" value="ENVOYER"/></p>
        </form> */}

<form action="" method="post" className={styles["contactform"]}>
          <p className={styles["input_wrapper"]}>
            <input
              type="text"
              name="contact_nom"
              value={formData.contact_nom}
              id={styles["contact_nom"]}
              onChange={handleChange}
            />
            <label htmlFor="contact_nom">NAME</label>
          </p>
          <p className={styles["input_wrapper"]}>
            <input
              type="text"
              name="contact_email"
              value={formData.contact_email}
              id={styles["contact_email"]}
              onChange={handleChange}
            />
            <label htmlFor="contact_email">EMAIL</label>
          </p>
          <p className={styles["input_wrapper"]}>
            <input
              type="text"
              name="contact_sujet"
              value={formData.contact_sujet}
              id={styles["contact_sujet"]}
              onChange={handleChange}
            />
            <label htmlFor="contact_sujet">SUBJECT</label>
          </p>
          <p className={styles["textarea_wrapper"]}>
            <textarea
              name="contact_message"
              value={formData.contact_message}
              id={styles["contact_message"]}
              onChange={handleChange}
            ></textarea>
          </p>
          <p className={styles["submit_wrapper"]}>
            <input type="submit" value="ENVOYER" />
          </p>
        </form>
    </article>
</section>

  )
}