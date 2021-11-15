import "./styles.css";
import { Grid } from "@material-ui/core";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

export default function App() {
  const Product1 = (props) => {
    const { Product } = props;

    return (
      <Card>
        <CardMedia image=" " title={Product.name} />
        <CardContent>
          <div>
            <Typography variant={"h5"} gutterBottom>
              {Product.name}
            </Typography>
            <Typography variant={"h5"} gutterBottom>
              {Product.price}
            </Typography>
            <Typography variant={"h5"} color="textSecondary" gutterBottom>
              {Product.description}
            </Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    );
  };

  const Products = [
    {
      id: "1",
      name: "MacBook",
      price: "$1230",
      description: "A 16inch mac book pro"
    },
    {
      id: "2",
      name: "Shoes",
      price: "$234",
      description: "price of the shoes"
    },
    {
      id: "3",
      name: "mobile",
      price: "$234",
      description: "price of the shoes"
    },
    {
      id: "4",
      name: "nike shoes",
      price: "$234",
      description: "price of the shoes"
    }
  ];

  return (
    <div className="App">
      <Grid container justify={"center"} spacing={4}>
        {Products.map((Product) => {
          return (
            <Grid item key={Product.id} xs={12} sm={6} md={4} xl={3}>
              <Product1 Product={Product} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
