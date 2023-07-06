export const axiosErrorHandler = (error) => {
  if (error.response) {
    const response = error.response
    return response.data.error
      ? `Error on server! He says:\n"${response.data.error}"`
      : `[${response.status}] ${response.data.message}`
  } else if (error.request) {
    return 'No response from server!'
  } else {
    return `Error between API server and your device!\n${error.message}`
  }
}
