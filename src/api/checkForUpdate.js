import agent from '../structures/agent'

const checkForUpdate = async (profile, isTestFlight) => {
  'use strict'

  const response = await agent('/check_for_update', {
    query: {
      is_testflight: Number(!!isTestFlight)
    }
  }, profile)
  const data = await response.json()

  return data
}

export default checkForUpdate
