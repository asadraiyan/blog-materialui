import './App.css';
import { Container, Grid } from "@mui/material"
import Header from './Components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Featuredpost from './Components/Featuredpost';
import { featuredPosts } from './Components/Data';
import PostCard from './Components/PostCard';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    },
  });
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
