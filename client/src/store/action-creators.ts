import * as JobsActionCreators from "./Jobs/action";
import * as UserActivityActionCreators from "./UserActivity/action";

export default {
  ...JobsActionCreators,
  ...UserActivityActionCreators,
};
