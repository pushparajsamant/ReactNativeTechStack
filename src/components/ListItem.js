import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';   //use connect to run all actionCreators
import { CardSection } from './common';
import * as actions from '.././actions';

class ListItem extends Component {
	componentWillUpdate (){
		LayoutAnimation.spring();
	}
	renderDescription() {
		const { library, showDetails } = this.props;
		if (showDetails) {
			return (
				<CardSection>
					<Text style={{ flex: 1 }}>{library.description}</Text>
				</CardSection>
			);
		}
	}
	render() {
		const { id, title } = this.props.library;
		const { titleStyle } = styles;
		return (
			<TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
				<View>
					<CardSection>
						<Text style={titleStyle}>{title}</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 15,
		paddingLeft: 10
	}
};
const mapStateToProps = (state, ownProps) => {
	const showDetails = ownProps.library.id === state.selectedLibraryId;
	return { showDetails };
};

//Mutates dumb action function to a redux action. 
//Also dispatches action to redux store
//Also passes actions as props to the calling object here ListItem
export default connect(mapStateToProps, actions)(ListItem); 
