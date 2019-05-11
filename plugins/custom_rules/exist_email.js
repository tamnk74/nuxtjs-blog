/**
 * File exists_mail.js
 * Check mail is exists in database
 *
 * @author TamNK
 * @date 2019-05-11
 */

import { get } from '@/plugins/api';
import constants from '@/constants';

export default {
  getMessage(field, args) {
    return 'This email is already exist';
  },
  validate(value, args) {
    let [userId] = args;

    // Call api check exists mail
    return get(constants.api.CHECK_EXIST_USER_MAIL, { user_id: userId, email: value })
      .then(res => {
        return res.data.data;
      })
      .catch(err => {
        return false;
      });
  }
}
