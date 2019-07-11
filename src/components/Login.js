import React, { Component } from "react"
import { connect } from "react-redux"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Link from "@material-ui/core/Link"
import Box from "@material-ui/core/Box"
import MenuItem from "@material-ui/core/MenuItem"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { setAuthedUser } from "../actions/authedUser"

function MadeWithLove() {
  return (
    <span>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Built with love by "}
        <Link color="inherit" href="https://github.com/andreastkdf">
          Andrea Kostakis
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Logo made with "}
        <Link color="inherit" href="https://www.designevo.com/">
          DesignEvo
        </Link>
      </Typography>
    </span>
  )
}

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  formControl: {
    width: "100%"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
})

class SignIn extends Component {
  state = {
    user: ""
  }

  handleChange = e => {
    const value = e.target.value

    this.setState(() => ({
      user: value
    }))
  }

  handleSubmit = e => {
    e.preventDefault()
    const { user } = this.state
    const { dispatch } = this.props

    dispatch(setAuthedUser(user))

    this.setState(() => ({
      user: ""
    }))
  }

  render() {
    const { loading, classes, users } = this.props
    const { user } = this.state
    if (loading !== true && users !== false) {
      return (
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <Avatar
              src="./logo.jpg"
              alt="app logo"
              className={classes.bigAvatar}
            />
            <Typography component="h1" align="center" variant="h3">
              Would You Rather?
            </Typography>
            <Typography component="h2" variant="h5" gutterBottom={true}>
              Time to choose...
            </Typography>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h3" variant="h4">
              Sign in
            </Typography>
            <form
              className={classes.form}
              onSubmit={this.handleSubmit}
              noValidate
            >
              <FormControl className={classes.formControl}>
                <Select value={user} onChange={this.handleChange}>
                  {Object.keys(users).map(id => (
                    <MenuItem key={id} value={id}>
                      {users[id].name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </form>
          </div>
          <Box mt={5}>
            <MadeWithLove />
          </Box>
        </Container>
      )
    } else {
      return <h1>loading...</h1>
    }
  }
}

function mapStateToProps({ users, loadingBar }) {
  return {
    loading: loadingBar.default === 1,
    users:
      Object.entries(users).length === 0 && users.constructor === Object
        ? false
        : users
  }
}

export default connect(mapStateToProps)(withStyles(styles)(SignIn))
