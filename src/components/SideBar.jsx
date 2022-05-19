import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";

export default function SideBar() {
  return (
    <Stack direction="row" spacing={3}>
      <Paper>
        <MenuList>
          <MenuItem>컨트리뷰트 가이드</MenuItem>
          <MenuItem>무엇을 할 수 있나요?</MenuItem>
          <MenuItem>더 알아보기</MenuItem>
        </MenuList>
      </Paper>
    </Stack>
  );
}
