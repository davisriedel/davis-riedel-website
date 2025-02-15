import { withOptions } from 'tailwindcss/plugin';

import defaultManifest from './manifest.js';

export default withOptions(
    (options) => {
        return function ({ addUtilities, theme }) {
            const { regularFontFamily, brandsFontFamily, custom } = options;
            let manifest = defaultManifest;

            if (custom) manifest.push(...custom);

            const iconStyle = theme('iconStyle');
            const iconSpacing = theme('iconSpacing');

            const utilities = [
                // Positioning
                {
                    '.icon-before::before, .icon-after::after, .icon-outside::before, .icon-inline':
                        {
                            display: 'inline-block',
                            'text-rendering': 'auto',
                            '-webkit-font-smoothing': 'antialiased'
                        },
                    '.icon-before': {
                        '&::before': {
                            fontFamily: regularFontFamily,
                            verticalAlign: 'middle'
                        },
                        '&::after': {
                            content: '"" !important'
                        }
                    },
                    '.icon-after': {
                        '&::before': {
                            content: '"" !important'
                        },
                        '&::after': {
                            fontFamily: regularFontFamily,
                            verticalAlign: 'middle'
                        }
                    },
                    '.icon-outside': {
                        '&::before': {
                            fontFamily: regularFontFamily,
                            verticalAlign: 'middle',
                            position: 'absolute',
                            transform: 'translateX(-1.5em)'
                        },
                        '&::after': {
                            content: '"" !important'
                        }
                    },
                    '.icon-inline': {
                        fontFamily: regularFontFamily,
                        verticalAlign: 'middle'
                    }
                },
                // Styles
                ...Object.entries(iconStyle).map(([key, value]) => {
                    return {
                        [`.icon-${key}`]: {
                            '&::before,&::after': {
                                fontWeight: `${value}`
                            }
                        }
                    };
                }),
                {
                    '.icon-brands': {
                        '&.icon-inline,&::before,&::after': {
                            fontFamily: brandsFontFamily
                        }
                    }
                },
                // Spacing
                ...Object.entries(iconSpacing).map(([key, value]) => {
                    return {
                        [`.icon-space-${key}`]: {
                            '&.icon-before::before': {
                                marginRight: `${value}`
                            },
                            '&.icon-after::after': {
                                marginLeft: `${value}`
                            }
                        }
                    };
                }),
                // Alignment
                {
                    '.icon-baseline': {
                        '&::before': {
                            verticalAlign: 'baseline !important'
                        },
                        '&::after': {
                            verticalAlign: 'baseline !important'
                        }
                    },
                    '.icon-sub': {
                        '&::before': {
                            verticalAlign: 'sub !important'
                        },
                        '&::after': {
                            verticalAlign: 'sub !important'
                        }
                    },
                    '.icon-super': {
                        '&::before': {
                            verticalAlign: 'super !important'
                        },
                        '&::after': {
                            verticalAlign: 'super !important'
                        }
                    },
                    '.icon-top': {
                        '&::before': {
                            verticalAlign: 'top !important'
                        },
                        '&::after': {
                            verticalAlign: 'top !important'
                        }
                    },
                    '.icon-middle': {
                        '&::before': {
                            verticalAlign: 'middle !important'
                        },
                        '&::after': {
                            verticalAlign: 'middle !important'
                        }
                    },
                    '.icon-bottom': {
                        '&::before': {
                            verticalAlign: 'bottom !important'
                        },
                        '&::after': {
                            verticalAlign: 'bottom !important'
                        }
                    }
                },
                // Icons
                ...manifest.map((icon) => {
                    return {
                        [`.icon-${icon.name}`]: {
                            '&::before': {
                                content: `"\\${icon.code}"`
                            },
                            '&::after': {
                                content: `"\\${icon.code}"`
                            }
                        }
                    };
                })
            ];

            addUtilities(utilities);
        };
    },
    () => ({
        theme: {
            iconStyle: {
                thin: '100',
                light: '300',
                regular: '400',
                solid: '900'
            },
            iconSpacing: (theme) => ({
                xs: theme('spacing.1'),
                sm: theme('spacing.2'),
                md: theme('spacing.3'),
                lg: theme('spacing.4'),
                xl: theme('spacing.5'),
                '2xl': theme('spacing.6'),
                '3xl': theme('spacing.7')
            })
        }
    })
);
