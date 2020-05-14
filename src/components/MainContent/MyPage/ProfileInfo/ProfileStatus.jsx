import React from "react";
import ProfileStyle from './ProfileInfoStyle.module.sass'

class ProfileStatus extends React.Component{
	state = {
		editMode: false
	}

	activateEditMode() {
		this.setState({
			editMode: true
		})
	}
	deActivateEditMode() {
		this.setState({
			editMode: false
		})
	}

	render() {
		let gostatus = 'Введите статус'
		const styleSpan = {
			cursor: 'pointer',
			userSelect: 'none'
		}
		return(
			<>	{!this.state.editMode &&
					<div style={styleSpan}>
						<span onClick={ this.activateEditMode.bind(this) }> {!this.props.status && <div>Статуса нет</div>}</span>
					</div>
				}
				{this.state.editMode &&
					<div>
						<input type="text" autoFocus={true} onBlur={this.deActivateEditMode.bind(this) } value={this.props.status} placeholder={!this.props.status && gostatus}/>
					</div>
				}
			</>
		)
	}
}

export default ProfileStatus;