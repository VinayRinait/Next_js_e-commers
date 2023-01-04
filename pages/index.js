import { Inter } from "@next/font/google";

import Layout from "../components/Layout";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import data from "../utils/data";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((el) => (
            <Grid item md={4} key={el.name}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={el.image}
                    title={el.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{el.name}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography>${el.price}</Typography>
                  <Button size="small" color="primary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
