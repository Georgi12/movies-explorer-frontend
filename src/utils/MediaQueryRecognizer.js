import { useMediaQuery } from 'react-responsive';

const useBreakpoints = () => {

    const tabletResolution = useMediaQuery({ query: '(max-width: 1000px)' });
    const mobileResolution = useMediaQuery({ query: '(max-width: 560px)' });

    return {
        tabletResolution,
        mobileResolution,
    };
};

export default useBreakpoints