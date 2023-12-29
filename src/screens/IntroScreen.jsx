import React from 'react'
import IntroCard from '../components/intro_card/IntroCard'

import intro_image1 from "../assets/intro_image1.png"
import intro_image2 from "../assets/intro_image2.png"
import intro_image3 from "../assets/intro_image3.png"

export default function IntroScreen() {
  return (
    <>
        <IntroCard 
            title='Vivre la diversité'
            subtitle="Découvrez la force de l'unité. Joignez-vous à d'autres étudiants africains pour un voyage partagé de connaissances et d'amitié au Maroc."
            image={intro_image1}
        />

        <IntroCard 
            title="Notre Parcours Collectif"
            subtitle="Embarquez pour une odyssée éducative unique. Explorez la riche diversité de cultures, de langues et d'expériences qui rendent notre aventure académique commune inoubliable."
            image={intro_image2}
        />

        <IntroCard 
            title="Renforcer les perspectives d'avenir"
            subtitle="Des salles de classe aux salles de réunion, nous construisons des ponts vers la réussite. Découvrez le réseau de soutien qui propulse les étudiants africains vers un avenir meilleur au Maroc et au-delà."
            image={intro_image3}
        />
    </>
  )
}