import { useParams } from "react-router-dom";
import { MainContainer } from "../styles";

const SubPage = () => {
    const { id } = useParams();

    console.log(id)

    return (
        <MainContainer>
            Subpage {id}
        </MainContainer>
    )
}

export default SubPage;