import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const DropDownStyles = {
    background: 'white',
    margin: '20px auto',
    padding: '10px 20px',
    borderRadius: '10px',
    width: '52%',
    fontSize: 'large',
    minWidth: '140',
}



const SortDropDown = ({ changeSortMethod }) => {
    const [selectedMethod, setSelectedMethod] = useState('All');

    const SelectHandler = (e) => {
        setSelectedMethod(e.target.value);
        changeSortMethod(e.target.value);
    }
    return (
        <Box sx={DropDownStyles}>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Show:
                </InputLabel>
                <NativeSelect
                    value={selectedMethod}
                    inputProps={{
                        name: 'Status',
                        id: 'uncontrolled-native',
                    }}
                    onChange={e => SelectHandler(e)}
                >
                    <option value={'All'}>All</option>
                    <option value={'Done'}>Done</option>
                    <option value={'In process'}>In process</option>
                    <option value={'Break'}>Break</option>
                    <option value={'Not started'}>Not started</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}

export default SortDropDown;