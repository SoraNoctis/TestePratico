import * as ReactDOM from 'react-dom';
import { createDarkTheme, createLightTheme } from '@fluentui/react-components';

import type { BrandVariants, Theme } from '@fluentui/react-components';
import { Example } from './example';

const fluentNotreDame: BrandVariants = {
    10: "#020304",
    20: "#131720",
    30: "#1C2538",
    40: "#24304D",
    50: "#2B3C63",
    60: "#32497A",
    70: "#385593",
    80: "#4C629D",
    90: "#5F6FA5",
    100: "#707DAD",
    110: "#828BB6",
    120: "#9299BF",
    130: "#A3A8C9",
    140: "#B3B7D2",
    150: "#C4C6DC",
    160: "#D4D6E5"
};

const lightTheme: Theme = {
    ...createLightTheme(fluentNotreDame),
};

const darkTheme: Theme = {
    ...createDarkTheme(fluentNotreDame),
};

darkTheme.colorBrandForeground1 = fluentNotreDame[110]; // use brand[110] instead of brand[100]
darkTheme.colorBrandForeground2 = fluentNotreDame[120]; // use brand[120] instead of brand[110]

ReactDOM.render(
    <Example lightTheme={lightTheme} darkTheme={darkTheme} />,
    document.getElementById('root'),
);