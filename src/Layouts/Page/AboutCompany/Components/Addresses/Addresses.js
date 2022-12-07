import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex flex-column p-4 gap-2 mt-4 col-4 border'>
            <div className='title'>Адреса заведений</div>
            <div className='d-inline-flex flex-column gap-3 px-o py-4'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            <div/>
            <div className='d-flex justify-content-between flex-column gap-3 px-o py-4'></div>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </div>
    );
}

export default Addresses;