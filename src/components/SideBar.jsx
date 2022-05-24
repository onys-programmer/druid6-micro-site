import { Link } from "react-router-dom";

import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";

export default function SideBar() {
  return (
    <Stack direction="row" spacing={3}>
      <Paper>
        <MenuList>
          <Link
            to="/docs/contribute"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>컨트리뷰트 가이드</MenuItem>
          </Link>

          <Link
            to="/docs/purpose"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>무엇을 할 수 있나요?</MenuItem>
          </Link>

          <Link
            to="/docs/more"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>더 알아보기</MenuItem>
          </Link>
        </MenuList>
      </Paper>
    </Stack>
  );
}
