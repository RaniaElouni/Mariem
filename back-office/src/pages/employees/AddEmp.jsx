import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import Card from "@mui/joy/Card";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
// import { toast } from "react-toastify";
import axios from "axios";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";

const roles = {
  Stagiaire: "Stagiaire",
  Employe: "Employe",
  Admin: "Admin",
  Recruteur: "Recruteur",
  ResponsableRH: "ResponsableRH",
};
export default function AddEmp() {
  const [user, setUser] = React.useState({
    // DEFAULT VALUES
    name: "",
    lastName: "",
    bio: "",
    email: "",

    role: "",
    password: "",
  });
  const [preview, setPreview] = React.useState("");
  const [image, setImage] = React.useState("");
  console.log(user, "usemp");
  const changeField = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    console.log("user: ", user);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setImage(file);
  };
  const navigate=useNavigate()
  const fileInputRef = React.useRef(null);
  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async () => {
    try {
      const formDta = new FormData();
      formDta.append("file", image);

      const responseImage = await axios.post(
        "http://localhost:4000/upload",
        formDta
      );

      const userWithImg = { ...user, avatar: responseImage.data.path };

      const response = await axios.post(
        `http://localhost:4000/users`,
        userWithImg
      );
      navigate(-1)
      console.log(response.data);
      
    } catch (error) {
      console.log(error);
      // toast.error("Error");
    }
  };

  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Stack
        spacing={4}
        sx={{
          display: "flex",
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card>
          <Stack spacing={3}>
            <Stack
              direction="column"
              spacing={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              {preview && (
                <img
                  src={preview}
                  // srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt="avatar"
                  width={190}
                  style={{ borderRadius: "50%" }}
                />
              )}
              {!preview && (
                <img
                  src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg"
                  loading="lazy"
                  alt="avatar"
                  width={190}
                  style={{ borderRadius: "50%" }}
                />
              )}

              <>
                <IconButton
                  aria-label="upload new picture"
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  onClick={handleIconClick}
                  sx={{
                    bgcolor: "background.body",
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    left: "50%",
                    top: 170,
                    transform: "translateX(-50%)", // Centering the icon horizontally
                    boxShadow: "sm",
                  }}
                >
                  <EditRoundedIcon />
                </IconButton>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </>
            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel>Name</FormLabel>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <Input
                      name="name"
                      size="sm"
                      placeholder="First name"
                      value={user.name}
                      onChange={changeField}
                    />
                  </FormControl>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <Input
                      size="sm"
                      name="lastName"
                      placeholder="Last name"
                      value={user.lastName}
                      onChange={changeField}
                    />
                  </FormControl>
                </Stack>
              </Stack>
              <Stack spacing={2}>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    name="email"
                    startDecorator={<EmailRoundedIcon />}
                    placeholder="email"
                    value={user.email}
                    sx={{ flexGrow: 1 }}
                    onChange={changeField}
                  />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    size="sm"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={user.password}
                    sx={{ flexGrow: 1 }}
                    onChange={changeField}
                  />
                </FormControl>
                <div>
                  <FormControl sx={{ display: { sm: "contents" } }}>
                    <FormLabel>Role</FormLabel>
                    <Select
                      size="sm"
                      value={user.role}
                      onChange={(e, value) => setUser({ ...user, role: value })}
                    >
                      {Object.values(roles).map((role, index) => (
                        <Option key={index} value={role}>
                          {role}
                        </Option>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </Stack>
            </Stack>
          </Stack>
          <Button size="sm" variant="solid" sx={{ marginTop: "10px" }} onClick={handleSubmit}>
            Save
          </Button>
        </Card>
      </Stack>
    </Box>
  );
}
