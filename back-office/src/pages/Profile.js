import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Stack from "@mui/joy/Stack";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Typography from "@mui/joy/Typography";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { MyContext } from "../router/Router";
// import { toast } from "react-toastify";
import axios from "axios";
// import DropZone from '../components/DropZone';
// import FileUpload from '../components/FileUpload';
// import CountrySelector from '../components/CountrySelector'
// import EditorToolbar from './EditorToolbar';

export default function Profile({ update, setUpdate }) {
  const usr = React.useContext(MyContext);
  const [isEditing, setIsEditing] = React.useState(false);
  const [preview, setPreview] = React.useState("");
  const [image, setImage] = React.useState(usr.avatar);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };
  const [user, setUser] = React.useState({
    // DEFAULT VALUES
    name: usr.name,
    lastName: usr.lastName,
    bio: usr.bio,
    email: usr.email,
    avatar: usr.avatar,
    role: usr.role,
  });
  const changeField = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    console.log("user: ", user);
  };

  const handleSubmit = async () => {
    try {
      const formDta = new FormData()
      formDta.append('file', image)

      const responseImage = await axios.post("http://localhost:4000/upload", formDta)

      const userWithImg = { ...user, avatar: responseImage.data.path }

      const response = await axios.patch(
        `http://localhost:4000/auth/${usr.id}`,
        userWithImg
      );
      console.log(response.data, "responseee");
      // toast.success("votre profil a été modifie!");
      localStorage.setItem("token", JSON.stringify(response.data));
      console.log(update,"update after ");
      setUpdate(!update);
      
      handleCancelClick()
    } catch (error) {
      console.log(error);
      // toast.error("Error");
    }
  };
  console.log(update,"update before");
  
  console.log(user,"userrrrrr");
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setImage(file)
  };
  const fileInputRef = React.useRef(null);
  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Stack
        spacing={4}
        sx={{
          display: "flex",
          // maxWidth: '800px',
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Personal info</Typography>
            {isEditing && <Typography level="body-sm">
              Customize how your profile information will apper to the networks.
            </Typography> }
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
          >
         <Stack direction="column" spacing={1}>
              <AspectRatio
                ratio="1"
                maxHeight={200}
                sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}
              >
                <img
                  src={preview ? preview : user.avatar}
                  srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              {isEditing && (
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
                      left: 100,
                      top: 170,
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
              )}
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
                      disabled={!isEditing}
                      onChange={changeField}
                    />
                  </FormControl>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <Input
                      size="sm"
                      name="lastName"
                      placeholder="Last name"
                      value={user.lastName}
                      disabled={!isEditing}
                      onChange={changeField}
                    />
                  </FormControl>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input
                    size="sm"
                    name="role"
                    value={user.role}
                    disabled={!isEditing}
                    onChange={changeField}
                  />
                </FormControl>
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
                    disabled={!isEditing}
                    onChange={changeField}
                  />
                </FormControl>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: "flex", md: "none" }, my: 1 }}
          >
            <Stack direction="row" spacing={2}>
              <Stack direction="column" spacing={1}>
                <AspectRatio
                  ratio="1"
                  maxHeight={108}
                  sx={{ flex: 1, minWidth: 108, borderRadius: "100%" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
                <IconButton
                  aria-label="upload new picture"
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  sx={{
                    bgcolor: "background.body",
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    left: 85,
                    top: 180,
                    boxShadow: "sm",
                  }}
                >
                  <EditRoundedIcon />
                </IconButton>
              </Stack>
              <Stack spacing={1} sx={{ flexGrow: 1 }}>
                <FormLabel>Name</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: "flex-column",
                      md: "flex-row",
                    },
                    gap: 2,
                  }}
                >
                  <Input size="sm" placeholder="First name" />
                  <Input size="sm" placeholder="Last name" />
                </FormControl>
              </Stack>
            </Stack>
            <FormControl>
              <FormLabel>Role</FormLabel>
              <Input size="sm" value="UI Developer" />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Email</FormLabel>
              <Input
                size="sm"
                type="email"
                startDecorator={<EmailRoundedIcon />}
                placeholder="email"
                value="siriwatk@test.com"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <div>{/* <CountrySelector /> */}</div>
            <div>
              <FormControl sx={{ display: { sm: "contents" } }}>
                <FormLabel>Timezone</FormLabel>
                <Select
                  size="sm"
                  startDecorator={<AccessTimeFilledRoundedIcon />}
                  value="1"
                >
                  <Option value="1">
                    Indochina Time (Bangkok){" "}
                    <Typography textColor="text.tertiary" ml={0.5}>
                      — GMT+07:00
                    </Typography>
                  </Option>
                  <Option value="2">
                    Indochina Time (Ho Chi Minh City){" "}
                    <Typography textColor="text.tertiary" ml={0.5}>
                      — GMT+07:00
                    </Typography>
                  </Option>
                </Select>
              </FormControl>
            </div>
          </Stack>
        </Card>
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Bio</Typography>
           {isEditing && <Typography level="body-sm">
              Write a short introduction to be displayed on your profile
            </Typography> } 
          </Box>
          <Divider />
          <Stack spacing={2} sx={{ my: 1 }}>
            {/* <EditorToolbar /> */}
            <Textarea
              size="sm"
              minRows={4}
              name="bio"
              sx={{ mt: 1.5 }}
              value={user.bio}
              disabled={!isEditing}
              onChange={changeField}
            />
          </Stack>
        </Card>
        {isEditing ? (
          <div className="d-flex justify-content-end gap-3 pb-5">
            <Button size="sm" variant="outlined" color="neutral" onClick={handleCancelClick}>
              Cancel
            </Button>
            <Button size="sm" variant="solid" onClick={handleSubmit}>
              Save
            </Button>
          </div>
        ) : (
          <Box sx={{ textAlign: "right", pt: 2 }}>
            <Button size="sm" variant="solid" onClick={handleEditClick}>
              Edit
            </Button>
          </Box>
        )}
      </Stack>
    </Box>
  );
}
