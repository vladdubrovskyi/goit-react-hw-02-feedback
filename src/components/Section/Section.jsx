import { StyledSection } from "components/Section/Section.styled"
import { StyledHeader } from "components/StyledCommon/Header.styled"
export const Section = ({ title, children }) => {
    return <StyledSection>
        <StyledHeader>{title}</StyledHeader>
        {children}
    </StyledSection>
    
}