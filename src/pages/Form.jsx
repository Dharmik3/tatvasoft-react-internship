import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import authService from "../service/auth.service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const styles = () => ({
  card: {
    // maxWidth: 420,
    marginTop: 50,
  },
  container: {
    // display: "Flex",
    // justifyContent: "center",
    width: "100vw",
    minHeight: "100vh",
  },
  actions: {
    display: "felx",
    justifyContent: "center",
  },
  mainForm: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "2rem",
  },
  input: {
    WebkitBoxShadow: "0 0 0 100px #fff inset",
  },
});

const roles = [
  {
    value: 1,
    label: "Buyer",
  },
  {
    value: 2,
    label: "Seller",
  },
];

const form = (props) => {
  const {
    classes,
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.container}>
        <Card className={classes.card}>
          <CardContent className={classes.mainForm}>
            <TextField
              id="firstName"
              label="First Name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.firstName ? errors.firstName : ""}
              error={touched.firstName && Boolean(errors.firstName)}
              margin="dense"
              variant="filled"
              fullWidth
            />
            <TextField
              id="lastName"
              label="Last Name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.lastName ? errors.lastName : ""}
              error={touched.lastName && Boolean(errors.lastName)}
              margin="dense"
              variant="filled"
              fullWidth
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.email ? errors.email : ""}
              error={touched.email && Boolean(errors.email)}
              margin="dense"
              variant="filled"
              fullWidth
            />
            <TextField
              select
              id="roleId"
              label="Role"
              value={values.roleId}
              onChange={handleChange("roleId")}
              helperText={touched.roleId ? errors.roleId : ""}
              error={touched.roleId && Boolean(errors.roleId)}
              margin="dense"
              variant="filled"
              fullWidth
            >
              {roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.password ? errors.password : ""}
              error={touched.password && Boolean(errors.password)}
              margin="dense"
              variant="filled"
              fullWidth
            />
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.confirmPassword ? errors.confirmPassword : ""}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
              margin="dense"
              variant="filled"
              fullWidth
            />
          </CardContent>
          <CardActions className={classes.actions}>
            <Button type="submit" color="primary" disabled={isSubmitting}>
              REGISTER
            </Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
};

const Form = withFormik({
  mapPropsToValues: ({
    firstName,
    lastName,
    email,
    roleId,
    password,
    confirmPassword,
  }) => {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      roleId: roleId || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    roleId: Yup.number().required("Select your role"),
    password: Yup.string()
      .min(6, "Password must contain at least 6 characters")
      .required("Enter your password"),
    confirmPassword: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password")], "Password does not match"),
  }),

  handleSubmit: (data) => {
    delete data.confirmPassword;
    console.log(data);
    authService.create(data).then((res) => {
      console.log(res);
      toast.success("Account created successfully!");
    });
  },
})(form);

export default withStyles(styles)(Form);
