//* Import Type *//
import { iIcon } from '../../types';

const RightArrow = ({className}:iIcon) => {
    return (
        <svg
            className={className} 
            stroke="currentColor" 
            fill="currentColor" 
            strokeWidth="0" 
            viewBox="0 0 24 24" 
            height="1em" 
            width="1em" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"></path>
            </g>
        </svg>
    )
}
export default RightArrow;

