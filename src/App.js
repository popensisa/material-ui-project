import React, { useState } from 'react'
import { AppBar, BottomNavigation, BottomNavigationAction, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Paper, TextField, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { palette, spacing } from '@mui/system';
import { Favorite, Folder, LocationOn, PlayCircleFilled, RestartAlt } from '@mui/icons-material';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: 1
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost:{
    position: "relative",
    color: 'white',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  mainFeaturesPostContent: {
    color: 'white',
    position: 'relative',
    padding: '80px 0 20px 0'
  },
  cardMedia: {
    paddingTop: '56%'
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: '20px',
    marginBottom: '20px'
  },
})



function App() {
  const classes = useStyles()
  const cards = [1,2,3,4,5,6,7,8,9]

  const [value, setValue] = useState('recents')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <AppBar position='fixed'>
        <Container fixed>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>For Islam's portfolio</Typography>
            <Box mr={3}>
              <Button color="inherit" variant='outlined' onClick={handleClickOpen}>Log in</Button>

              <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to see videos</DialogContentText>
                  <TextField autoFocus margin='dense' id='name' label='Email address' type='email' fullWidth/>
                  <TextField autoFocus margin='dense' id='pass' label='Password' type='password' fullWidth/>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color='primary'>Cancel</Button>
                  <Button onClick={handleClose} color='primary'>Log in</Button>
                </DialogActions>
              </Dialog>

            </Box>
            <Button color="secondary" variant='contained'>Sign up</Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper className={classes.mainFeaturesPost} style={{backgroundImage: 'url(https://soffio.com.ru/wp-content/uploads/2021/03/slide-bg.png)'}}>
          <Container fixed>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Web Developer
                  </Typography>
                  <Typography component="h1" variant="h5" color="inherit" paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Web developer
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Button variant="contained" color="primary">
                      Start now
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary">
                      Learn more
                    </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={16} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia 
                    className={classes.cardMedia}
                    image="https://soffio.com.ru/wp-content/uploads/2021/03/slide-bg.png"
                    title="image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography color="primary">
                      Blog post
                    </Typography>
                    <Typography color="primary">
                      Blog post. Web developer. Blog post. Web developer.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <PlayCircleFilled/>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label='Recents'
            value='recents'
            icon={<RestartAlt/>}
          />
          <BottomNavigationAction
            label='Favorites'
            value='favorites'
            icon={<Favorite/>}
          />
          <BottomNavigationAction
            label='Nearby'
            value='nearby'
            icon={<LocationOn/>}
          />
          <BottomNavigationAction
            label='Folder'
            value='folder'
            icon={<Folder/>}
          />
        </BottomNavigation>
        <Typography align='center' color='textSecondary' marginTop={2}>
          Web developer React js Material UI site
        </Typography>
      </footer>
    </>
  );
}

export default App;
