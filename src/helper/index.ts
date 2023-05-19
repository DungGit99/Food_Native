import {COUNTRY_FLAG} from '../constants/api';

export const getFlagIcon = (
    code = 'VN',
    style = COUNTRY_FLAG.STYLE.FLAT,
    size = COUNTRY_FLAG.SIZE[64],
) => `${COUNTRY_FLAG.BASE_URL}/${code}/${style}/${size}.png`;
