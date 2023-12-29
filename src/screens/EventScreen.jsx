import React from 'react'
import intro_image from "../assets/intro_image1.png"
import PostCard from '../components/post_card/PostCard'
import Box from '@mui/material/Box';

export default function EventScreen() {
  return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
        <PostCard 
            title="AVIS RELATIF A LA DISTRIBUTION DES CARTES SIM" 
            subtitle="Embarquez pour une odyssée éducative unique. Explorez la riche diversité de cultures, de langues et d'expériences qui rendent notre aventure académique commune inoubliable."
            image={intro_image}
            />
        <PostCard 
            title="AVIS RELATIF A LA DISTRIBUTION DES CARTES SIM" 
            subtitle="Embarquez pour une odyssée éducative unique. Explorez la riche diversité de cultures, de langues et d'expériences qui rendent notre aventure académique commune inoubliable."
            image={intro_image}
            />
        <PostCard 
            title="AVIS RELATIF A LA DISTRIBUTION DES CARTES SIM" 
            subtitle="Embarquez pour une odyssée éducative unique. Explorez la riche diversité de cultures, de langues et d'expériences qui rendent notre aventure académique commune inoubliable."
            image={intro_image}
            />
        <PostCard 
            title="AVIS RELATIF A LA DISTRIBUTION DES CARTES SIM" 
            subtitle="Embarquez pour une odyssée éducative unique. Explorez la riche diversité de cultures, de langues et d'expériences qui rendent notre aventure académique commune inoubliable."
            image={intro_image}
            />
    </Box>
  )
}