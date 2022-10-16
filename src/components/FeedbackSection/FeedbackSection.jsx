import {FeedbackSectionStyled} from ".FeedbackSection.styled"

export const FeedbackSection = () => {
    return <FeedbackSectionStyled>
          <h1>FeedBackContainer</h1>
          <div>
            <button type="submit"> Good</button>
            <button type="submit"> Neutral</button>
            <button type="submit"> Bad</button>
          </div>
        </FeedbackSectionStyled>
}