//* Import Type *//
import { iIcon } from '../../types';

const LeftArrowThin = ({className}:iIcon) => {
    return (
        <svg
            className={className} 
            stroke="currentColor" 
            fill="currentColor" 
            strokeWidth="0" 
            viewBox="0 0 1024 1024" 
            height="1em" 
            width="1em" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M752.145 0c8.685 0 17.572 3.434 24.237 10.099 13.33 13.33 13.33 35.143 0 48.473L320.126 515.03l449.591 449.591c13.33 13.33 13.33 35.144 0 48.474-13.33 13.33-35.142 13.33-48.472 0L247.418 539.268c-13.33-13.33-13.33-35.144 0-48.474L727.91 10.1C734.575 3.435 743.46.002 752.146.002z"
            >
            </path>
        </svg>
    )
}
export default LeftArrowThin;