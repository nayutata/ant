import React, { Component } from "react";
import { Menu, Icon } from "antd";
import "./index.less";
// import logo from "../../resource/assets/logo-ant.svg";
import menuConfig from "../../config/menuConfig";
import { NavLink } from 'react-router-dom'
import axios from '../../axios'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class NavLeft extends Component {
	render() {
		return (
			<div>
				<div className="logo">
					<img src="/assets/logo-ant.svg" alt="" />
					<h1>Imooc MS</h1>
				</div>
				<Menu
					onClick={this.handleClick.bind(this)}
					mode="vertical"
					theme="dark"
				>
					{this.state.menuTreeNode}
				</Menu>
			</div>
		);
	}

	componentWillMount() {
		const menuTreeNode = this.renderMenu(menuConfig);
		this.setState({
			menuTreeNode
		});

		axios.ajax({url: 'https://www.easy-mock.com/mock/5bd2e9a9bf3290062ac24b01/example/api/test'})
	}

	renderMenu(data) {
		return data.map(item => {
			if (item.children) {
				return (
					<SubMenu title={item.title} key={item.key}>
						{this.renderMenu(item.children)}
					</SubMenu>
				);
			}
			return (
				<Menu.Item title={item.title} key={item.key}>
					<NavLink to={item.key}>{item.title}</NavLink>
				</Menu.Item>
			);
		});
	}

	handleClick(e) {
		console.log("click", e);
	}
}

export default NavLeft;
