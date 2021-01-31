import styled from "styled-components";

export const HeaderComp = styled.header`
  position: relative;
  max-width: none;
  width: 100%;
  margin: 0;
  height: auto;

  /** Headroom Styling **/

  .headroom {
    top: 0;
    left: 0;
    right: 0;
    zindex: 1;
    will-change: transform;
    transition-delay: 0.01s;
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
  }
  .headroom--scrolled {
    transition: transform 400ms easeInOutCubic;
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0%);
  }
`;

export const HeaderContent = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  padding: 1.2em 0;
  background-color: var(--header);
  h2 {
    margin: 0;
    color: white;
  }
`;
