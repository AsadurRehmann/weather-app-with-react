import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./infobox.css";

export default function InfoBox({ info }) {
  let imgad =
    "https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let rainimg =
    "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let coldimg =
    "https://images.unsplash.com/photo-1641672222794-536ad524a929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let hotimg =
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let sunnyimg =
    "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  return (
    <>
      <div className="infoBox">
        <h1>Weather Info</h1>
        <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={
                  info.humidity > 60
                    ? rainimg
                    : info.temp > 15
                    ? hotimg
                    : coldimg
                }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {info.city}   
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                  component={"span"}
                >
                  <p>Temperature={info.temp}&deg; C </p>
                  <p>Humidty={info.humidity}&deg; C</p>
                  <p>Temp min={info.tempMin}&deg; C</p>
                  <p>Temp max={info.tempMax}&deg; C</p>
                  <p>
                    The temperature can be described as <i>{info.weather}</i>{" "}
                    and feels like {info.feelsLike}&deg; C
                  </p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </>
  );
}
