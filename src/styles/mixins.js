import { css } from 'styled-components';
import theme from './theme';

const { colors } = theme;

const mixins = {

	flexCenter: css`
		display: flex;
		justify-content: center;
		align-items: center;
	`,

	flexBetween: css`
		display: flex;
		justify-content: space-between;
		align-items: center;
	`,

	fadeinEnter: css`
        text-align: left;
        opacity: 0;
        transform: translateY(-60px);
        transition-property: transform, opacity;
        transition-duration: 400ms;
	`,

	fadeinActive: css`
		transform: translateY(0);
		opacity: 1;
	`,


	inlineLink: css`
		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		position: relative;
		transition: ${theme.transition};
		cursor: pointer;
		
		&:hover,
		&:focus,
		&:active {
			color: ${colors.primary};
			outline: 0;
			&:after {
				width: 100%;
			}
		}

		&:after {
			content: '';
			display: block;
			width: 0;
			height: 3px;
			position: relative;
			bottom: 0;
			background-color: ${colors.primary};
			transition: ${theme.transition};
			opacity: 1.0;
		}
	`,

	boxShadow: css`
    	box-shadow: 0 4px 15px 0px ${colors.black};
    	transition: ${theme.transition};
		&:hover,
		&:focus {
			box-shadow: 0 8px 15px 5px ${colors.black};
		}
	`,
};

export default mixins;