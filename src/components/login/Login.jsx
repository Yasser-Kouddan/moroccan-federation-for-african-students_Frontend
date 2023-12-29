import styles from "./styles.module.css"
import login_image from '../../assets/login_intro.jpg'
import logo from '../../assets/logo.png'
import { useForm } from "react-hook-form";
import Link from '@mui/material/Link';
import API from "../../api/ApiInstance";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate()

  const { register, handleSubmit, resetField } = useForm({
    mode: "onChange",
    defaultValues: {
      email: '',
      password: ''
    },
  });
  

  const onSubmit = (data) => {
       API.post('/login', data)
        .then((response) => {
          if(response.data.hasOwnProperty('error')){
            alert("Identifiants invalides");
          }else {
            console.log("connected ...",response.data[0]);
            const role = response.data[0].role_id
            role != 1 
              ? alert("Tu n'as pas l'acces à l'espace admin") 
              : navigate("/admin_space");
              
            resetField("email")
            resetField("password")
          }   
        })
        .catch((error)=> {
          console.error("Error:", error);
          alert("Error occurred while fetching data. See console for details.");
        })
    }



  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={login_image} alt="étudiante" />
      </div>
      <div className={styles.login}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <img className={styles.logo} src={logo} alt="étudiante" />
        <input type="text" placeholder="Email" {...register("email")} className={styles['futuristic-input']}/>
        <input type="text" placeholder="Password" {...register("password")} className={styles['futuristic-input']}/>
        <input type="submit" className={styles['button']}/>
        {/* <p>
          Vous possèder pas de compte ? &nbsp;
          <Link href="/sign_up" underline="always">
            Insrivez-vous !
          </Link>
        </p> */}
      </form>
  
      </div>
    </div>
  );
}

export default Login;


