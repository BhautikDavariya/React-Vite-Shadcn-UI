import React from 'react'
import { Sidebar, Menu, SubMenu, MenuItem } from 'react-pro-sidebar'

const SideBar = () => {
    return (
        <div className='h-[calc(100vh-66px)]'>
            <Sidebar className='h-[calc(100vh-66px)] bg-transparent'>
                <Menu className='bg-transparent'>
                    <SubMenu label="Charts">
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default SideBar