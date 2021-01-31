import styled from "styled-components";

export const ExampleElementsComp = styled.div`
  .section--headers {
    flex-direction: column;
    .flex-row {
      justify-content: space-around;
    }
    .headers {
      width: 40%;
    }

    .text {
      width: 60%;
    }
  }

  .section--paragraph,
  .section--third {
    .wrap {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    .col1 {
      width: 60%;
    }

    .col2 {
      width: 30%;
    }
  }
`;
