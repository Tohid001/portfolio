import styled from "styled-components";
import { motion } from "framer-motion";

export const COLLAPSED_WIDTH = "80px";
export const EXPANDED_WIDTH = "400px";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 0;
  font-family: sans-serif;
`;

export const SidebarVariants = {
  expanded: () => ({
    width: EXPANDED_WIDTH,
    transition: {
      when: "beforeChildren",
      type: "spring",
      damping: 50,
    },
  }),
  collapsed: () => ({
    width: COLLAPSED_WIDTH,
    transition: {
      when: "afterChildren",
    },
  }),
};

export const Sidebar = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 0;
  border-right: solid 1px #3c4245;
  background-color: #98d788;
  padding: 10px;
`;

export const AvatarVariants = {
  expanded: {
    scale: 1.5,
    x: 13,
    y: 13,
  },
  collapsed: {
    width: "50px",
    scale: 1,
    x: 0,
    y: 0,
  },
};

export const Avatar = styled(motion.img)`
  position: relative;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;

  & > * + * {
    margin-top: 5px;
  }
`;

export const MenuItem = styled.li``;

export const LabelVariants = {
  expanded: {
    opacity: 1,
    display: "flex",
  },
  collapsed: {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  },
};

export const MenuLabel = styled(motion.span)``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  padding: 10px;
  background-color: #88afd7;
`;

export const SignOutLink = styled(motion.a)``;

export const SidebarFooter = styled.div`
  display: flex;
  flex: 0 0 40px;
  min-width: 0;
  align-items: center;
  align-self: stretch;
  position: relative;
`;

export const CollapseButtonVariants = {
  expanded: {
    rotate: 0,
    right: "0%",
    x: "0%",
  },
  collapsed: {
    rotate: -180,
    right: "50%",
    x: "50%",
  },
};

export const CollapseBtn = styled(motion.button)`
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: center;
  width: auto;
  white-space: nowrap;
  position: absolute;
  right: 0;
`;
