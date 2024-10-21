import axios from "axios"
const demoappdevAPI = axios.create({
  baseURL: "https://demoapp21-dev-137321.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return demoappdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_comment_list(payload) {
  return demoappdevAPI.get(`/api/v1/comment/`)
}
function api_v1_comment_create(payload) {
  return demoappdevAPI.post(`/api/v1/comment/`, payload)
}
function api_v1_comment_retrieve(payload) {
  return demoappdevAPI.get(`/api/v1/comment/${payload.id}/`)
}
function api_v1_comment_update(payload) {
  return demoappdevAPI.put(`/api/v1/comment/${payload.id}/`, payload)
}
function api_v1_comment_partial_update(payload) {
  return demoappdevAPI.patch(`/api/v1/comment/${payload.id}/`, payload)
}
function api_v1_comment_destroy(payload) {
  return demoappdevAPI.delete(`/api/v1/comment/${payload.id}/`)
}
function api_v1_event_list(payload) {
  return demoappdevAPI.get(`/api/v1/event/`)
}
function api_v1_event_create(payload) {
  return demoappdevAPI.post(`/api/v1/event/`, payload)
}
function api_v1_event_retrieve(payload) {
  return demoappdevAPI.get(`/api/v1/event/${payload.id}/`)
}
function api_v1_event_update(payload) {
  return demoappdevAPI.put(`/api/v1/event/${payload.id}/`, payload)
}
function api_v1_event_partial_update(payload) {
  return demoappdevAPI.patch(`/api/v1/event/${payload.id}/`, payload)
}
function api_v1_event_destroy(payload) {
  return demoappdevAPI.delete(`/api/v1/event/${payload.id}/`)
}
function api_v1_group_list(payload) {
  return demoappdevAPI.get(`/api/v1/group/`)
}
function api_v1_group_create(payload) {
  return demoappdevAPI.post(`/api/v1/group/`, payload)
}
function api_v1_group_retrieve(payload) {
  return demoappdevAPI.get(`/api/v1/group/${payload.id}/`)
}
function api_v1_group_update(payload) {
  return demoappdevAPI.put(`/api/v1/group/${payload.id}/`, payload)
}
function api_v1_group_partial_update(payload) {
  return demoappdevAPI.patch(`/api/v1/group/${payload.id}/`, payload)
}
function api_v1_group_destroy(payload) {
  return demoappdevAPI.delete(`/api/v1/group/${payload.id}/`)
}
function api_v1_ingredient_list(payload) {
  return demoappdevAPI.get(`/api/v1/ingredient/`)
}
function api_v1_ingredient_create(payload) {
  return demoappdevAPI.post(`/api/v1/ingredient/`, payload)
}
function api_v1_ingredient_retrieve(payload) {
  return demoappdevAPI.get(`/api/v1/ingredient/${payload.id}/`)
}
function api_v1_ingredient_update(payload) {
  return demoappdevAPI.put(`/api/v1/ingredient/${payload.id}/`, payload)
}
function api_v1_ingredient_partial_update(payload) {
  return demoappdevAPI.patch(`/api/v1/ingredient/${payload.id}/`, payload)
}
function api_v1_ingredient_destroy(payload) {
  return demoappdevAPI.delete(`/api/v1/ingredient/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return demoappdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_notification_list(payload) {
  return demoappdevAPI.get(`/api/v1/notification/`)
}
function api_v1_notification_create(payload) {
  return demoappdevAPI.post(`/api/v1/notification/`, payload)
}
function api_v1_notification_retrieve(payload) {
  return demoappdevAPI.get(`/api/v1/notification/${payload.id}/`)
}
function api_v1_notification_update(payload) {
  return demoappdevAPI.put(`/api/v1/notification/${payload.id}/`, payload)
}
function api_v1_notification_partial_update(payload) {
  return demoappdevAPI.patch(`/api/v1/notification/${payload.id}/`, payload)
}
function api_v1_notification_destroy(payload) {
  return demoappdevAPI.delete(`/api/v1/notification/${payload.id}/`)
}
function api_v1_nutritionalinfo_list(payload) {
  return demoappdevAPI.get(`/api/v1/nutritionalinfo/`)
}
function api_v1_nutritionalinfo_create(payload) {
  return demoappdevAPI.post(`/api/v1/nutritionalinfo/`, payload)
}
function api_v1_nutritionalinfo_retrieve(payload) {
  return demoappdevAPI.get(`/api/v1/nutritionalinfo/${payload.id}/`)
}
function api_v1_nutritionalinfo_update(payload) {
  return demoappdevAPI.put(`/api/v1/nutritionalinfo/${payload.id}/`, payload)
}
function api_v1_nutritionalinfo_partial_update(payload) {
  return demoappdevAPI.patch(`/api/v1/nutritionalinfo/${payload.id}/`, payload)
}
function api_v1_nutritionalinfo_destroy(payload) {
  return demoappdevAPI.delete(`/api/v1/nutritionalinfo/${payload.id}/`)
}
function api_v1_profile_list(payload) {
  return demoappdevAPI.get(`/api/v1/profile/`)
}
function api_v1_profile_create(payload) {
  return demoappdevAPI.post(`/api/v1/profile/`, payload)
}
function api_v1_profile_retrieve(payload) {
  return demoappdevAPI.get(`/api/v1/profile/${payload.id}/`)
}
function api_v1_profile_update(payload) {
  return demoappdevAPI.put(`/api/v1/profile/${payload.id}/`, payload)
}
function api_v1_profile_partial_update(payload) {
  return demoappdevAPI.patch(`/api/v1/profile/${payload.id}/`, payload)
}
function api_v1_profile_destroy(payload) {
  return demoappdevAPI.delete(`/api/v1/profile/${payload.id}/`)
}
function api_v1_rating_list(payload) {
  return demoappdevAPI.get(`/api/v1/rating/`)
}
function api_v1_rating_create(payload) {
  return demoappdevAPI.post(`/api/v1/rating/`, payload)
}
function api_v1_rating_retrieve(payload) {
  return demoappdevAPI.get(`/api/v1/rating/${payload.id}/`)
}
function api_v1_rating_update(payload) {
  return demoappdevAPI.put(`/api/v1/rating/${payload.id}/`, payload)
}
function api_v1_rating_partial_update(payload) {
  return demoappdevAPI.patch(`/api/v1/rating/${payload.id}/`, payload)
}
function api_v1_rating_destroy(payload) {
  return demoappdevAPI.delete(`/api/v1/rating/${payload.id}/`)
}
function api_v1_recipe_list(payload) {
  return demoappdevAPI.get(`/api/v1/recipe/`)
}
function api_v1_recipe_create(payload) {
  return demoappdevAPI.post(`/api/v1/recipe/`, payload)
}
function api_v1_recipe_retrieve(payload) {
  return demoappdevAPI.get(`/api/v1/recipe/${payload.id}/`)
}
function api_v1_recipe_update(payload) {
  return demoappdevAPI.put(`/api/v1/recipe/${payload.id}/`, payload)
}
function api_v1_recipe_partial_update(payload) {
  return demoappdevAPI.patch(`/api/v1/recipe/${payload.id}/`, payload)
}
function api_v1_recipe_destroy(payload) {
  return demoappdevAPI.delete(`/api/v1/recipe/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return demoappdevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_tag_list(payload) {
  return demoappdevAPI.get(`/api/v1/tag/`)
}
function api_v1_tag_create(payload) {
  return demoappdevAPI.post(`/api/v1/tag/`, payload)
}
function api_v1_tag_retrieve(payload) {
  return demoappdevAPI.get(`/api/v1/tag/${payload.id}/`)
}
function api_v1_tag_update(payload) {
  return demoappdevAPI.put(`/api/v1/tag/${payload.id}/`, payload)
}
function api_v1_tag_partial_update(payload) {
  return demoappdevAPI.patch(`/api/v1/tag/${payload.id}/`, payload)
}
function api_v1_tag_destroy(payload) {
  return demoappdevAPI.delete(`/api/v1/tag/${payload.id}/`)
}
function api_v1_user_list(payload) {
  return demoappdevAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return demoappdevAPI.post(`/api/v1/user/`, payload)
}
function api_v1_user_retrieve(payload) {
  return demoappdevAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return demoappdevAPI.put(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_partial_update(payload) {
  return demoappdevAPI.patch(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_destroy(payload) {
  return demoappdevAPI.delete(`/api/v1/user/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return demoappdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return demoappdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return demoappdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return demoappdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return demoappdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return demoappdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return demoappdevAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return demoappdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return demoappdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return demoappdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return demoappdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_comment_list,
  api_v1_comment_create,
  api_v1_comment_retrieve,
  api_v1_comment_update,
  api_v1_comment_partial_update,
  api_v1_comment_destroy,
  api_v1_event_list,
  api_v1_event_create,
  api_v1_event_retrieve,
  api_v1_event_update,
  api_v1_event_partial_update,
  api_v1_event_destroy,
  api_v1_group_list,
  api_v1_group_create,
  api_v1_group_retrieve,
  api_v1_group_update,
  api_v1_group_partial_update,
  api_v1_group_destroy,
  api_v1_ingredient_list,
  api_v1_ingredient_create,
  api_v1_ingredient_retrieve,
  api_v1_ingredient_update,
  api_v1_ingredient_partial_update,
  api_v1_ingredient_destroy,
  api_v1_login_create,
  api_v1_notification_list,
  api_v1_notification_create,
  api_v1_notification_retrieve,
  api_v1_notification_update,
  api_v1_notification_partial_update,
  api_v1_notification_destroy,
  api_v1_nutritionalinfo_list,
  api_v1_nutritionalinfo_create,
  api_v1_nutritionalinfo_retrieve,
  api_v1_nutritionalinfo_update,
  api_v1_nutritionalinfo_partial_update,
  api_v1_nutritionalinfo_destroy,
  api_v1_profile_list,
  api_v1_profile_create,
  api_v1_profile_retrieve,
  api_v1_profile_update,
  api_v1_profile_partial_update,
  api_v1_profile_destroy,
  api_v1_rating_list,
  api_v1_rating_create,
  api_v1_rating_retrieve,
  api_v1_rating_update,
  api_v1_rating_partial_update,
  api_v1_rating_destroy,
  api_v1_recipe_list,
  api_v1_recipe_create,
  api_v1_recipe_retrieve,
  api_v1_recipe_update,
  api_v1_recipe_partial_update,
  api_v1_recipe_destroy,
  api_v1_signup_create,
  api_v1_tag_list,
  api_v1_tag_create,
  api_v1_tag_retrieve,
  api_v1_tag_update,
  api_v1_tag_partial_update,
  api_v1_tag_destroy,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_retrieve,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
