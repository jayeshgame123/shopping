import React from 'react'
// import { Link } from 'react-router-dom'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
    <div style={{ display: 'flex', height: '820px', overflow: 'scroll initial',float: 'left' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Menu
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact="true" to="/admin/" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="userpage" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="user">Customers</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact="true" to="product" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="table">Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="addproduct" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="columns">Add Products</CDBSidebarMenuItem>
            </NavLink>
            
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 5px',
            }}
          >
            Jayesh Game
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
       
    </>
  )
}
