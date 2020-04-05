import * as colors from './colors';

export const covidStatus = {
    NOTCOVID: {
        description: 'Not COVID',
        color: colors.covidGreen
    },
    COVIDREADY: {
        description: 'Ready for COVID',
        color: colors.covidYellow
    },
    COVID: {
        description: 'COVID',
        color: colors.covidRed
    },
}