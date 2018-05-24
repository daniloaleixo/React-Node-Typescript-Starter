import * as React from "react";
const loading = require('../../../assets/img/loading.gif');
import './loading.component.scss';

/**
 * Loading component
 */

export interface ILoadingProps {
	showLoading: boolean;
}

export class LoadingComponent extends React.Component<ILoadingProps, any> {
	constructor(props: ILoadingProps) {
		super(props);
	}

	render() {
		// Only if loading is true
		if (this.props.showLoading) {
			return (
				<div className="loading flex-align-vertical-center">
				  <img src={loading} className="loading__image"/>
				</div>
			);
		}
		else return null;
	}
}
