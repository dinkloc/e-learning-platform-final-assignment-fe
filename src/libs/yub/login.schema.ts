import * as yup from 'yup';

import { VALIDATE_MESSAGES } from '../../configs/validateMessage';

export const loginSchema = yup.object().shape({
    email: yup.string().required(VALIDATE_MESSAGES.REQUIRED),
    password: yup.string().required(VALIDATE_MESSAGES.REQUIRED),
});
