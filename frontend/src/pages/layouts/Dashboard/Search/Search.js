import SearchIcon from "@mui/icons-material/Search";
import { styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Toolbar } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginTop:'50px',
  width: "100%",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    borderRadius:'20px'
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1), 
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft:'4px',

  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(2, 6, 2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),    
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "70ch",
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Toolbar sx={{ justifyContent: 'center', mt: '5em' }}>
      <Search sx={{backgroundImage: 'var(--Background-gradient)' }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase sx={{fontSize:'1.5rem'}}
          placeholder="Search for Tirth, Temple"
          inputProps={{ "aria-label": "Search" }}
        />
        <SearchIconWrapper style={{ right: 0, cursor: "pointer" }}>
          <ClearIcon  sx={{marginRight:'8px'}}/>
        </SearchIconWrapper>
      </Search>
    </Toolbar>
  );
}
