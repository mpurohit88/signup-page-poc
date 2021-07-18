export const USER_PROFILE_SAVE = "USER_PROFILE_SAVE";
export const USER_PROFILE_GET = "USER_PROFILE_GET";

export const userProfileSave = (profile) => {
  return {
    type: USER_PROFILE_SAVE,
    profile: profile
  }
}

export const userProfileGet = () => {
  return {
    type: USER_PROFILE_GET
  }
}