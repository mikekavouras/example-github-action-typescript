import * as core from '@actions/core'
import run from '../debug'

describe('debug action debug message', () => {
  it('outputs a debug message', async () => {
    const debugMock = jest.spyOn(core, 'debug')
    await run()
    expect(debugMock).toHaveBeenCalledWith('Hi my name is mike the guy')
  })
})
