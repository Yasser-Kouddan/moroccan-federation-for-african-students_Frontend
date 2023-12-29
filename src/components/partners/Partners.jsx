import * as React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

import MarsaMaroc from "../../assets/partners/marsa_maroc.png"
import IAM from "../../assets/partners/iam.jpg"
import Attijari from "../../assets/partners/attijari.png"

const partners = [
  { name: 'Attijariwafa bank', logo: Attijari },
  { name: 'Maroc Telecom', logo: IAM },
  { name: 'Marsa Maroc', logo: MarsaMaroc },
];

const Partners = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: 7}}>
      {partners.map((partner, index) => (
        <Grid item key={index} xs={4}>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={partner.logo}
              alt={partner.name}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {partner.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Partners;