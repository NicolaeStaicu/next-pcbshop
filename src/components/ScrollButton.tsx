import { IconButton, styled } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useEffect, useState } from "react";

const ScrollToTopButton = styled(IconButton)(({ theme }) => ({
    zIndex: 2,
    position: 'fixed',
    bottom: '5vh',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover, &.Mui-focusVisible": {
        transition: '0.3s',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.action.disabled
    },
    [theme.breakpoints.up('xs')]: {
        right: '5%',
        backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
        right: '5%',
    }
}));

const Scroll = ({
    showBelow
}: { showBelow: number }) => {
    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.scrollY > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div>
            {show &&
                <ScrollToTopButton size="large" onClick={handleClick} aria-label="to top">
                    <ExpandLessIcon />
                </ScrollToTopButton>
            }
        </div>
    )
}
export default Scroll