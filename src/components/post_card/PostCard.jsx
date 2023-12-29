import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PostCard({ title, subtitle, image }) {
  return (
    <Card style={{ width: '800px', margin: '20px auto' }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h4" component="div" sx={{marginBottom: 5}}>
                {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
                {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
