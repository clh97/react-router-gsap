import { Container, LinkContainer, SubPageLink } from "./styles";

const items = [
    {
        id: 1,
        title: "Home",
        path: "/",
    },
    {
        id: 2,
        title: "SubPage 2",
        path: "/subpage/2",
    },
    {
        id: 3,
        title: "SubPage 3",
        path: "/subpage/3",
    },
]

const Header = () => {
    return (
        <Container>
            <LinkContainer>
                {
                    items.map(item => (
                        <SubPageLink key={item.id} to={item.path}>{item.title}</SubPageLink>
                    ))
                }
            </LinkContainer>
        </Container>
    )
}

export default Header;