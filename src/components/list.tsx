import React from 'react';
import "./list.css"
import { Paper, Box, Typography } from '@mui/material';
import { format } from 'date-fns';
import { DemoData } from './main.tsx'
import { Light } from '@mui/icons-material';
  
  const List : React.FC< DemoData > = ({name, mail, createdAt, updatedAt}) => {
    const displayDate = format(updatedAt ? updatedAt : createdAt, 'yyyy-MM-dd HH:mm');

    return(
      <Paper
      elevation={3}
      sx={{
        padding: 3,
        borderRadius: 2,
        marginBottom: 2,
        backgroundColor: '#fff',
      }}
    >
      <Box className="customer-name-field" sx={{ marginBottom: 1 }}>
        <Typography variant="h5" color="text.primary" fontWeight="bold">
          {name}
        </Typography>
      </Box>
      <Typography color="text.secondary">{mail}</Typography>
      <Typography variant="body2" sx={{ marginTop: 1, color: 'gray', textAlign: "light" }}>
        最終更新{displayDate}
      </Typography>
    </Paper>
    )
}
export default List;
