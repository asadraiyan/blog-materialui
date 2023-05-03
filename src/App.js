import './App.css';
import { Container, Grid } from "@mui/material"
import Header from './Components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Featuredpost from './Components/Featuredpost';
import { featuredPosts, sidebar } from './Components/Data';
import PostCard from './Components/PostCard';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: "1px",

  },

}))
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    },
  });
  const classes = useStyles()
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <Featuredpost />
        <br />
        <Grid container spacing={4}>
          {
            featuredPosts.map((post) => (
              <PostCard post={post} key={post.title} />
            ))
          }

        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main title="From the firehose" />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}


          />

        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
