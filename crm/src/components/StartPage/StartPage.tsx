import React from 'react';
import Box from '../Elements/Box/Box';
import Input from '../Elements/Input/Input';
import Typography from '../Elements/Typography/Typography';

function StartPage() {
  return (
    <Box display="flex" justify="center" align="center" width="100vw" height="100vh">
      <Box
        maxWidth="600px"
        width="100%"
        height="500px"
        boradius="5px"
        overflow="hidden"
        boxShadow="0px 2px 4px 2px #cccccc">
        <Typography color="black">Зарегистрироваться</Typography>
        <Box m="10px">
          <Input variant="outlined" placeholder="Email" />
        </Box>
        <Box m="10px">
          <Input variant="filled" placeholder="Email" />
        </Box>
        <Box m="10px">
          <Input variant="standart" placeholder="Email" />
        </Box>
      </Box>
    </Box>
  );
}
export default StartPage;
