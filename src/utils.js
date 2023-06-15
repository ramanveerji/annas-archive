export const axiosErrorHandler = (err) => {
  if (err.response) {
    const response = err.response
    return response.data.error ?? (
      `[${response.status}] ${response.data.message}`
    )
  } else if (err.request) {
    return 'No response from server!'
  } else {
    return err.message
  }
}
