import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
        background:;
        border-radius: 24px;
        border: 1px solid #64748B;
        box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
        min-width: ${minWidth};
        color: #64748B;
        &:hover {
            background: rgba(255,255,255,80%);
            color: rgba(100,116,139,80%);
            border: 1px solid rgba(100,116,139,80%);
        }
        &:active {
            background: rgba(255,255,255,60%);
            color: rgba(100,116,139,60%);
            border: 1px solid rgba(100,116,139,60%);
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;